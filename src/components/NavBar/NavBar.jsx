import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import {
    UserRound,
    FolderKanban,
    BriefcaseBusiness,
    GraduationCap,
    Award,
    CodeXml,
    Mail
} from 'lucide-react';
export function NavBar(){
    return <>
    <nav className={style.nav}>
        <ul className={style.ul}>
            <li><Link to="/" title='About'>
                <UserRound/>
                <span> ABOUT</span>
            </Link></li>
            <li><Link to="/projects" title='Projects'>
                <FolderKanban/>
                <span> PROJECTS</span></Link></li>
            <li><Link to="/experience" title='Experience'>
                <BriefcaseBusiness/>
                <span> EXPERIENCE</span></Link></li>
            <li><Link to="/education" title='Education'>
                <GraduationCap/>
                <span> EDUCATION</span></Link></li>
            <li><Link to="/certificates" title='Education'>
                <Award/>
                <span> CERTIFICATIONS</span></Link></li>
            <li><Link to="/skills" title='Skills'>
                <CodeXml/>
                <span> SKILLS</span></Link></li>
            <li><Link to="/contact" title="Contact">
                <Mail/>
                <span> CONTACT</span></Link></li>
        </ul>
    </nav>
    </>
}