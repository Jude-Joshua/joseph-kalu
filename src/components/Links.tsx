import {Link, LinkProps} from 'react-router-dom'

interface AppLinkProps extends LinkProps {
    to: string;
    classes: string;
    border: boolean;
}

const Links: React.FC<AppLinkProps> = ({ to, classes, border, children, ...rest }) => {
    return (
        <Link to={to} className={`link flex flex-row items-center justify-center ${classes} ${border ? 'border-bottom' : ''}`} {...rest}>
            {children}
        </Link>
    );
};

export default Links;
