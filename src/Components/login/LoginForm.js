import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import database from "../../firebase"

export default function Login() {
    const [values, setValues] = useState({email:'',password:''});

    const handleLogin = () => {
        console.log(values);
        database.auth().signInWithEmailAndPassword(values.email, values.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err);
        })
    }

    const handleChange = (e) => {
        setValues({...values,   
                 [e.target.name] : e.target.value     
        });
    }
    return (
        <>
            <form id="login-form">
            <div className="form-control">
            <TextField name="email" id="bootstrap-input" label="Email" variant="outlined" inputProps={values.email} onChange={handleChange} />
            </div>
            <div className="form-control">
             <TextField name="password" type="password" label="Password" variant="outlined" inputProps={values.password} onChange={handleChange}/>
            </div>
            <div className="form-control">
                <Button variant="contained" color="primary" onClick={handleLogin} >
                    Login
                </Button>
            </div>
          </form>
        </>
    )
}
