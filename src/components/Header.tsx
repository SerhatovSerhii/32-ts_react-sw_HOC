import { useContext } from 'react'
import Navigation from './Navigation'
import { SWContext } from '../utils/context'
import { characters } from '../utils/constants'

const Header = () => {
    const {hero} = useContext(SWContext)
    console.log(hero);
    
    return (
        <header>
            <Navigation />
            <h1 className="text-center py-4">{characters[hero].name}</h1>
        </header>
    )
}

export default Header