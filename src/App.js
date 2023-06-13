import './App.css';
import CounterApp from './Component/Counter/CounterApp';
import ToDoList from './Component/ToDotask/ToDoList';
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import HomeComponent from './Component/Home';
import MyForm from './Component/Login/MyForm'
import { useEffect, useState } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyForm />,
  },
  {
    path: "/main",
    element: <HomeComponent />,
  },
  {
    path: "/counter",
    element: <CounterApp />,
  },
  {
    path: "/todo",
    element: <ToDoList />,
  },
    ],
  
);
const NotFound = () =>{
  const navigate = useNavigate();

  // Redirect to login page for 404 errors
  useEffect(() => {
    navigate('/');
  }, [])
  return (
    <></>
  )
}

const withoutauthrouter = createBrowserRouter([
  {
    path: "/",
    element: <MyForm />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
],  
);

function App() {
  const [localStorageVar, setLocalStorage] = useState("");

  useEffect(() => {
    setLocalStorage(localStorage.getItem('loggedIn'))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {localStorageVar ? 
        <RouterProvider
          router={router}
        /> : <RouterProvider
        router={withoutauthrouter}
      />
        }
      </header>
    </div>
  );
}

export default App;
