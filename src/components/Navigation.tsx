import { navItems } from '../utils/constants'
import NavItem from './NavItem'

const Navigation = () => {
    return (
        <nav className="fixed-top">
            <ul className="nav mt-1 ms-5">
                {navItems.map(item => <NavItem key={item.route} item={item} />)}
            </ul>
        </nav>
    )
}

export default Navigation