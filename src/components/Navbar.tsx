import { Link } from 'react-router-dom';

export const Navbar = () => 
{
    return (
        <>
        <ul>
            <li>
                <Link to="/"> Home </Link>
            </li>
            <li>
                <Link to="/products"> Products </Link>
            </li>
        </ul>
        </>
    )
}