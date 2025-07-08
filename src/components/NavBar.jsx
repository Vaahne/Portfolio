import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
export function NavBar(){
    return <>
    <nav className={style.nav}>
        <ul className={style.ul}>
            <li><Link to="/" title='About'>ABOUT</Link></li>
            <li><Link to="/projects" title='Projects'>PROJECTS</Link></li>
            <li><Link to="/contact" title="contact">CONTACT</Link></li>
        </ul>
    </nav>
    </>
}