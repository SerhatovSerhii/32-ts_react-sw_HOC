// Task 1. Implement a HOC withErrorPage that leaves the wrong hero in the address bar, but displays the page (component) with an error.
// Задача 1. Реализовать HOC withErrorPage, который оставляет неверного героя в адресной строке, но отображает страницу (компонент) с ошибкой.

import { useEffect } from "react";
import ErrorPage from "../components/ErrorPage"
import { useNavigate, useParams } from "react-router-dom";
import { characters, defaultHero } from "../utils/constants";


// Функция, которая принимает компонент и  возвращает новый компонент с дополнительными props


export const withErrorPage = (Component: React.FC<any>, route: string) => (props: any) => {
    const navigate = useNavigate();
    const { heroId = defaultHero } = useParams();
  
    useEffect(() => {
      if (!characters[heroId]) {
        navigate(`/${route}`);
      }
    }, [heroId, navigate]);
  
    if (!characters[heroId]) {
      return ErrorPage();
    }
  
    return <Component ErrorPage={ErrorPage} {...props} />;
  };