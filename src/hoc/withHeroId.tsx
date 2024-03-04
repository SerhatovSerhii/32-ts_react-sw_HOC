import React, { useContext, useEffect } from "react"
import { characters, defaultHero } from "../utils/constants";
import { useNavigate, useParams } from "react-router-dom";
import { SWContext } from "../utils/context";

// Функция withHeroId определена с двумя параметрами:
// Component: Компонент, который мы хотим обернуть дополнительной функциональностью, route: Строка маршрута.
export const withHeroId = (Component: React.FC<any>, route: string) => (props: any) => {
  // useNavigate: Хук из React Router для навигации.
  const navigate = useNavigate();
  // useParams: Хук из React Router для доступа к параметрам из URL.
  let { heroId = defaultHero } = useParams();
  // useContext: Хук из React для доступа к контексту.
  const { changeHero } = useContext(SWContext);
  heroId = characters[heroId] ? heroId : defaultHero;
  // Хук useEffect:
  // Он запускается при монтировании компонента или при изменении heroId.
  // Он обновляет URL текущим heroId и вызывает функцию changeHero с heroId.
  useEffect(() => {
    navigate(`/${route}/${heroId}`);
    changeHero(heroId);
  }, [heroId]);
  // Возвращает исходный Component с дополнительными props (heroId), распространяя другие props.
  return <Component heroId={heroId} {...props} />;
};

