import { Route, Routes } from 'react-router-dom'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Home from './Home'
import StarWars from './StarWars'
import ErrorPage from './ErrorPage'
import { navItems } from '../utils/constants'

const Main = () => {
    return (
        <Routes>
            {[`/`, `/${navItems[0].route}`, `/${navItems[0].route}/:heroId`].map(path => <Route key={path} path={path} element={<Home />} />)}
            {[`/${navItems[1].route}`, `/${navItems[1].route}/:heroId`].map(path => <Route key={path} path={path} element={<AboutMe />} /> )}           
            <Route path={`/${navItems[2].route}/:heroId`} element={<StarWars />} />
            <Route path={`/${navItems[3].route}/:heroId`} element={<Contact />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    )

}

export default Main