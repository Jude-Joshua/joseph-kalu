import {Link, LinkProps} from 'react-router-dom'

interface AppLinkProps extends LinkProps {
    to: string;
    classes: string;
    border: boolean;
    target: string;
}

const Links: React.FC<AppLinkProps> = ({ to, classes, border, children, target, ...rest }) => {
    return (
        <Link to={to} className={`link flex flex-row items-center justify-center ${classes} ${border ? 'border-bottom' : ''}`} target={target} {...rest}>
            {children}
        </Link>
    );
};

export default Links;
