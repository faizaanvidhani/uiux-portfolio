import '../../css/components/Header.css';
import {useNavigate} from 'react-router';


export default function Header() {
    const navigate = useNavigate();
    return (
        <div className="header">
            <div onClick={() => navigate('/')} className="header-name">
                <h1 className="header-logo">FV</h1>
            </div>
            <div className="header-navbar">
                <p onClick={() => navigate('/about')}className="header-navbar-item">About</p>
            </div>
        </div>
    )
}
