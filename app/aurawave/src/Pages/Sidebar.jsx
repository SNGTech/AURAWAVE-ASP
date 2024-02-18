import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { auth } from "../firebase";

import '../Css/Sidebar.css';
import person from '../Images/person.svg';

export const Sidebar = () => {

    const user = auth.currentUser;

    const email = user.email;
    const namePart = email.split('@')[0];

    const location = useLocation();
    const pathname = location.pathname;
    console.log(pathname);

    return (
        <div>
            <div className="sidebar-sticky">

                <div>
                    <Link to='/dashboard' style={{ textDecoration: 'none' }}><h2 className='sidebar-logo'>AURAWAVE</h2></Link>

                    <nav>
                        <ul>
                            {((pathname.startsWith('/dashboard') && (
                                <li style={{ backgroundColor: '#F8F8F8', borderRadius: '0.5rem' }}>
                                    <Link to="/dashboard">Home</Link>
                                </li>
                            )
                            )) || ((
                                <li>
                                    <Link to="/dashboard">Home</Link>
                                </li>
                            ))}

                            {((pathname.startsWith('/music')) && (
                                <li style={{ backgroundColor: '#F8F8F8', borderRadius: '0.5rem' }}>
                                    <Link to="/music">Music</Link>
                                </li>
                            )) || ((
                                <li>
                                    <Link to="/music">Music</Link>
                                </li>
                            ))}

                            {((pathname.startsWith('/therapy')) && (
                                <li style={{ backgroundColor: '#F8F8F8', borderRadius: '0.5rem' }}>
                                    <Link to="/therapy">Therapy</Link>
                                </li>
                            )) || ((
                                <li>
                                    <Link to="/therapy">Therapy</Link>
                                </li>
                            ))}

                            {((pathname.startsWith('/diagnosis')) && (
                                <li style={{ backgroundColor: '#F8F8F8', borderRadius: '0.5rem' }}>
                                    <Link to="/diagnosis">Diagnosis</Link>
                                </li>
                            )) || ((
                                <li>
                                    <Link to="/diagnosis">Diagnosis</Link>
                                </li>
                            ))}

                            {((pathname.startsWith('/settings')) && (
                                <li style={{ backgroundColor: '#F8F8F8', borderRadius: '0.5rem' }}>
                                    <Link to="/settings">Settings</Link>
                                </li>
                            )) || ((
                                <li>
                                    <Link to="/settings">Settings</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className='sidebar-grow'></div>
                <div>
                    <Link to="/profile" style={{ textDecoration: 'none' }}>
                        <div className="sidebar-profile">
                            <img src={person} alt="Person" />
                            <span>{namePart}</span>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;
