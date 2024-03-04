import { useNavigate } from 'react-router-dom';
import style from '../css_modules/bottomRound.module.css';
import { characters, navItems } from '../utils/constants';

interface Props {
    pos: number,
    friend: string
}

const Friend = ({ friend, pos }: Props) => {
    const navigate = useNavigate();

    let styles = "col-4 p-1"
    if (pos === 7) {
        styles = `${styles} ${style.bottomLeft}`;
    }
    if (pos === 9) {
        styles = `${styles} ${style.bottomRight}`;
    }
    return (
        <img onClick={() => navigate(`/${navItems[0].route}/${friend}`)} className={styles} src={characters[friend].img} alt='Friend' />
    )
}

export default Friend