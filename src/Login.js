import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css'

function Login() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        if(!name) {
            return alert('Please enter a full name!');
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                //displayName and photoURL are mapped to firebase DO NOT CHANGE
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilePic,
                    })
                );
            });
        })
        .catch(error => alert(error));
    };

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoUrl,
            }))
        })
        .catch(error => alert(error))
    }

    return (
        <div className="login">
            <img 
                src="https://aerodynamicadvisory.com/wp-content/uploads/2020/06/Linkedin-Logo.png"
                alt=""
            />
            <form>
                <input 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    type="text" 
                    placeholder="Full name (Required if registering)" 
                />
                <input 
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                    type="text" 
                    placeholder="Profile Picture (Optional)" 
                />
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" 
                    placeholder="Email" 
                />
                <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" 
                    placeholder="Password" 
                />
                <button type="submit" onClick={loginToApp}>
                    Sign In
                </button>
            </form>
            <p>
                Not a member?{" "}
                <span className="login__register" onClick={register} >Register now!</span>
            </p>
        </div>
    )
}

export default Login
