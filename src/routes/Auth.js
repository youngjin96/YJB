import { auth } from "../Fbase"
import { useState } from "react"
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, setPersistence, browserSessionPersistence } from "firebase/auth";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChange = (event) => {
        const { target: { id, value } } = event;
        if (id === "email") {
            setEmail(value);
        } else if (id === "password") {
            setPassword(value);
        }
    };
    const onSignInClick = () => {
        setPersistence(auth, browserSessionPersistence).then(() => {
            return signInWithEmailAndPassword(auth, email, password).then(() => {
                window.location.replace("Home");
            });
        }).catch((error) => {
            alert(error.message);
        });
    };
    const onGoogleClick = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    };

    return (
        <div style={{ paddingTop: "50px" }}>
            <div style={{ textAlign: "center" }}>
                <TextField
                    id="email"
                    label="Email"
                    variant="standard"
                    onChange={onChange}
                />
            </div>
            <div style={{ textAlign: "center" }}>
                <TextField
                    id="password"
                    label="Password"
                    variant="standard"
                    type="password"
                    autoComplete="current-password"
                    onChange={onChange}
                />
            </div>
            <div style={{ textAlign: "center", paddingTop: "25px" }}>
                <Button
                    style={{ textTransform: 'none' }}
                    variant="contained"
                    onClick={onGoogleClick}
                >
                    Continue with Google
                </Button>
            </div>
            <Stack direction="row" spacing={2} style={{ paddingTop: "10px", justifyContent: "center" }}>
                <Button
                    style={{ textTransform: 'none' }}
                    variant="contained"
                    href="enroll"
                >
                    Sign Up
                </Button>
                <Button
                    style={{ textTransform: 'none' }}
                    variant="contained"
                    onClick={onSignInClick}
                >
                    Sign In
                </Button>
            </Stack>
        </div>
    )
}

export default Auth;