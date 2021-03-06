import Router from "./Router"
import { auth } from "../Fbase"
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState, useEffect } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
        console.log(user.uid);
      } else {
        setLoggedIn(false);
      }
    })
  }, []);
  const onClickLogout = () => {
    signOut(auth).then(() => {
      window.location.replace("Home");
    }).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <div>
      <Button variant="text">
        <Link to="/home" style={{ textDecoration: 'none', textTransform: 'none', color:"black" }}>
          Home
        </Link>
      </Button>
      <Button variant="text">
        <Link to="/board" style={{ textDecoration: 'none', textTransform: 'none', color:"black" }}>
          Board
        </Link>
      </Button>
      {isLoggedIn ? (
        <span>
          <Button onClick={onClickLogout} variant="text" style={{ float: 'right', textTransform: 'none', color:"black" }}>
            Logout
          </Button>
          <Button style={{ float:"right" }}>
            <Link to="/mypage" style={{ textDecoration: 'none', textTransform: 'none', color:"black" }}>
              My Page
            </Link>
          </Button>
        </span>
      ) : (
          <Button variant="text" style={{ float: 'right' }}>
            <Link to="/auth" style={{ textDecoration: 'none', textTransform: 'none', color:"black" }}>
              Login
            </Link>
          </Button>
        )}
      <div>
        <Router />
      </div>
    </div>
  );
};

export default App;