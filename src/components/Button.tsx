import {Link, LinkProps} from 'react-router-dom'

interface AppLinkProps extends LinkProps {
    to: string;
}

const Button: React.FC<AppLinkProps> = ({ to, children, ...rest }) => {
    return (
        <Link to={to} className={`button flex flex-row items-center justify-center`} {...rest}>
            {children}
        </Link>
    );
};

export default Button;
