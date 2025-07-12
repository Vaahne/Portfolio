import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
export function NavBar(){
    return <>
    <nav className={style.nav}>
        <ul className={style.ul}>
            <li><Link to="/" title='About'>ABOUT</Link></li>
            <li><Link to="/projects" title='Projects'>PROJECTS</Link></li>
            <li><Link to="/experience" title='Experience'>EXPERIENCE</Link></li>
            <li><Link to="/education" title='Education'>EDUCATION</Link></li>
            <li><Link to="/certificates" title='Education'>CERTIFICATIONS</Link></li>
            <li><Link to="/skills" title='Skills'>SKILLS</Link></li>
            <li><Link to="/contact" title="Contact">CONTACT</Link></li>
        </ul>
    </nav>
    </>
}