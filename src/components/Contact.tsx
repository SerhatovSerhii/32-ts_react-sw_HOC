import { useState, useEffect} from 'react'
import style from "../css_modules/contact.module.css"
import { base_url, navItems, period_month } from "../utils/constants"
import { withHeroId } from '../hoc/withHeroId';


const Contact = () => {
  const [planets, setPlanets] = useState(['wait...']);
 

  async function fillPlanets(url: string) {
    const response = await fetch(url);
    const json: {name: string} [] = await response.json();
    const planets = json.map(item => item.name);
    setPlanets(planets);
    localStorage.setItem('planets', JSON.stringify({
      payload: planets,
      time: Date.now()
    }));
  }

  useEffect(() => {
    const planets = JSON.parse(localStorage.getItem('planets') ?? 'null');
    if (planets && ((Date.now() - planets.time) < period_month)) {
      setPlanets(planets.payload);
    } else {
      fillPlanets(`${base_url}/v1/planets`);
    }
  }, [])


  return (
    <div>
      <form className={style.container} onSubmit={(e) => {
        e.preventDefault();
      }}>
        <label>First Name
          <input type="text" name="firstname" placeholder="Your first name..." />
        </label>
        <label>Last Name
          <input type="text" name="lastname" placeholder="Your last name..." />
        </label>
        <label>Planet
          <select name="planet">{
            planets.map(item => <option value={item} key={item}>{item}</option>)
          }
          </select>
        </label>
        <label>Subject
          <textarea name="subject" placeholder="Write something..." />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )

}

export default withHeroId(Contact, navItems[3].route)