import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { login } from '../../Services/LoginApiService';

function MyForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault()
        // if user logged in successfully redirect to page otherwise throw the error
        console.log("inside login handleLogin function")
        const data = { Email: username, Password: password }
        login(data)
        .then(response => {
            console.log("successfull")
            localStorage.setItem("loggedIn", true);
            // localStorage.setItem("User Token", respData.Token);
            
            navigate('/main');
        })
        .catch(error => {
            // Handle login failure
            console.log("error while login", error)
            alert('Login failed!');
        })
        // if (username === "Avani" && password === "Dalal") {
        //     console.log("successfull")
        //     localStorage.setItem("loggedIn", true);
        // //   setIsAuthenticated(true);
        //     navigate('/main');
        // } else {
        //   // Handle login failure
        //   alert('Login failed!');
        // }
      };

    return (
        <div style={{backgroundColor: 'white', padding: '10px', width: '275px'}}>
            <form onSubmit={handleLogin}>
                <h2 style={{color: 'black'}}>Login Page</h2>
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{padding: '5px', width: '200px'}}
                    />
                </div>
                <div style={{paddingTop: '10px'}}>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{padding: '5px', width: '200px'}}
                    />
                </div>
                <button type="submit" style={{padding: '10px 20px', marginTop: '15px', borderRadius: '20px', backgroundColor: 'black', borderColor: 'black', border: '0', color: 'white', marginBottom: '30px' }}>Login</button>
            </form>
        </div>
    );
}

export default MyForm;
