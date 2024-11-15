import Links from "./Links.tsx";

interface NavLinkProps {
    activeLink: string;
    children: string;
}

const NavLink: React.FC<NavLinkProps> = ({activeLink, children}) => {

    return (
        <li className={`menuLink l1 ${children === activeLink ? "active" : ""}`}>
            {
                children === 'resume' ? (
                    <a target={'_blank'} href={'https://drive.google.com/file/d/1OclIPvx3r3kJrAMCKCgrCnPADyTB2fHu/view?usp=sharing'}>
                        {children}
                    </a>
                ) : (
                    <Links target={'_self'} classes={''} to={`/${children === 'home' ? '' : children}`} border={false}>
                        {children}
                    </Links>
                )
            }

        </li>
    );
};

export default NavLink;
