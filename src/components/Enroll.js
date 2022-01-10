import { React, useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Fbase"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Enroll = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChange = (event) => {
        const {target: {id, value}} = event;
        if (id === "name"){
            setName(value);
        } else if (id === "email"){
            setEmail(value);
        } else if (id === "password"){
            setPassword(value);
        } 
    };

    const onEnrollClick = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("정상적으로 회원가입이 완료되었습니다.")
            window.location.replace("Home");
        } catch(error){
            alert(error.message);
        }
    }
    return(
        <div style={{ paddingTop:"50px" }}>
            <div style={{ textAlign:"center" }}>
                <TextField 
                    id="name"
                    label="Name"
                    variant="standard"
                    onChange={onChange}
                />
            </div>
            <div style={{ textAlign:"center" }}>
                <TextField 
                    id="email"
                    label="Email"
                    variant="standard"
                    onChange={onChange}
                />
            </div>
            <div style={{ textAlign:"center" }}>
                <TextField 
                    id="password"
                    label="Password"
                    variant="standard"
                    type="password"
                    autoComplete="current-password"
                    onChange={onChange}
                />
            </div>
            <div style={{ textAlign:"center", paddingTop:"10px" }}>
                <Button
                    style={{ textTransform: 'none' }}
                    variant="contained"
                    onClick={onEnrollClick}
                >
                    Enroll
                </Button>
            </div>
        </div>    
    )
}
export default Enroll;