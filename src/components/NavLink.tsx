import Links from "./Links.tsx";

interface NavLinkProps {
    activeLink: string;
    children: string;
}

const NavLink: React.FC<NavLinkProps> = ({activeLink, children}) => {

    return (
        <li className={`menuLink l1 ${children === activeLink ? "active" : ""}`}>
            <Links target={'_self'} classes={''} to={`/${children === 'home' ? '' : children}`} border={false}>
                {children}
            </Links>
        </li>
    );
};

export default NavLink;
