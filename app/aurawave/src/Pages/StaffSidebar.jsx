import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import '../Css/StaffSidebar.css';
import person from '../Images/person.svg';

export const StaffSidebar = () => {

    const location = useLocation();
    const pathname = location.pathname;
    console.log(pathname);

    return (

        <div className="topbar-sticky">
            <div>
                <Link to="/profile" style={{ textDecoration: 'none' }}>
                    <div className="topbar-profile">
                        <img src={person} alt="Person" />
                    </div>
                </Link>
            </div>
            <div className='sidebar-grow'></div>
            <div>
                <ul className='topbar-buttons'>
                    {((pathname.startsWith('/doctor') && (
                        <li style={{ backgroundColor: '#F8F8F8', borderRadius: '0.5rem' }}>
                            <Link to="/doctor">Doctor</Link>
                        </li>
                    )
                    )) || ((
                        <li>
                            <Link to="/doctor">Doctor</Link>
                        </li>
                    ))}

                    {((pathname.startsWith('/patient') && (
                        <li style={{ backgroundColor: '#F8F8F8', borderRadius: '0.5rem' }}>
                            <Link to="/patient">Patient</Link>
                        </li>
                    )
                    )) || ((
                        <li>
                            <Link to="/patient">Patient</Link>
                        </li>
                    ))}

                    {((pathname.startsWith('/library') && (
                        <li style={{ backgroundColor: '#F8F8F8', borderRadius: '0.5rem' }}>
                            <Link to="/library">Library</Link>
                        </li>
                    )
                    )) || ((
                        <li>
                            <Link to="/library">Library</Link>
                        </li>
                    ))}

                    {((pathname.startsWith('/history') && (
                        <li style={{ backgroundColor: '#F8F8F8', borderRadius: '0.5rem' }}>
                            <Link to="/history">History</Link>
                        </li>
                    )
                    )) || ((
                        <li>
                            <Link to="/history">History</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
};

export default StaffSidebar;