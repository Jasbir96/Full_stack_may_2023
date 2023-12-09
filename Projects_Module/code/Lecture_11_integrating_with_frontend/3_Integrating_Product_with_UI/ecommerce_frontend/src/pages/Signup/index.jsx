import './signup.css';
import React, { useState } from 'react';
import axios from 'axios';
import urlConfig from '../../../urlConfig';
import { Link, useNavigate } from "react-router-dom";

function Index() {
    /*************state variables*************/
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    const navigate = useNavigate();
    const handleSubmit = async () => {

        /***
         * 1. you have take all the state var-> that represent your user
         * 2. Make a post request to your API
         * 3. if signup -> 
         *              success -> reroute it to login & clear all the state variables
         *              failure -> show the error for few second    
         * ***/

        try {
            setLoading(true);
            let userDetails = {
                name, password, confirmPassword, email
            }
            const resp = await axios.post(urlConfig.SIGNUP_URL, userDetails);
            const ans = resp.data;
            console.log(ans);
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setLoading(false);
            navigate("/login")
        }

        catch (err) {
            console.log(err.message);
            console.log(err);
            setLoading(false);
            setErrMsg('Error while doing signup');
            setTimeout(() => {
                setErrMsg("");
            }, 2000)

        }

    }

    if (loading) return <h1>Loading...</h1>
    return (
        <div className="signupscreen">
            <div className="container">
                <div className="innerContainer">
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '20px',
                        }}
                    >
                        <div >
                            <i class="fas fa-arrow-circle-left fa-5x"></i>
                        </div>
                        <p>Signup</p>
                    </div>

                    <label for="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name.."
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <label for="email">Email</label>
                    <input
                        type="email"

                        name="email"
                        placeholder="Your email.."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label for="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Your Password.."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <label for="password">Confirm Password</label>
                    <input
                        type="password"
                        id="password"
                        name="confirmPassword"
                        placeholder="Your ConfirmPassword.."
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                    <Link to="/signin" className="link">
                        <span>Already have an account ?</span>
                    </Link>

                    <br />
                    <input type="submit" value="Sign up" onClick={handleSubmit} />
                    <div className={errMsg ? "errContainer" : ""}>{errMsg}</div>
                </div>


            </div>
        </div>
    )
}

export default Index;

