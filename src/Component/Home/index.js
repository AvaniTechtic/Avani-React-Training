import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function HomeComponent() {
    const navigate = useNavigate();

    const logoutFromTheDevice = () => {
        localStorage.removeItem("loggedIn")
        navigate('/');
    }

    return (
    <>
        <button onClick={logoutFromTheDevice}>Logout</button>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/counter">
                <button style={{ margin: '0 5px' }}>Counter</button>
            </Link>
            <Link to="/todo">
                <button style={{ margin: '0 5px' }}>To Do List</button>
            </Link>
        </div>
    </>
  );
}

export default HomeComponent;
