import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { getDatabase, ref, set } from "firebase/database";
import { collection, addDoc } from "firebase/firestore";
import { v4 } from 'uuid';
import { doc, setDoc } from 'firebase/firestore';

import { db } from '../firebaseConfig';

const Signup = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');

    const postRef = collection(db, "posts"); // Firestore collection reference

    const onSubmit = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                uploadStats(user.uid); // Pass the user's UID to the function

                navigate("/login")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });
    }

    const uploadStats = async () => {
      if (user) {
        const dataRef = doc(db, "data", user); // Reference to the document with the username as the ID
        await setDoc(dataRef, {
          username: user,
          email: email,
          password: password,
          // Add other properties here if needed
        })
        .then(() => {
          console.log("Data uploaded successfully!");
        })
        .catch((error) => {
          console.error("Error uploading data:", error);
        });
      }
    }
    
    
    return (
        <main >
            <section>
                <div>
                    <div>
                        <h1> FocusApp </h1>
                        <form>
                            <div>
                                <label htmlFor="username">
                                    User name
                                </label>
                                <input
                                    type="text"
                                    label="User name"
                                    value={user}
                                    onChange={(e) => setUser(e.target.value)}
                                    required
                                    placeholder="User name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    label="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Email address"
                                />
                            </div>

                            <div>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    label="Create password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="Password"
                                />
                            </div>

                            <button
                                type="submit"
                                onClick={onSubmit}
                            >
                                Sign up
                            </button>
                        </form>

                        <p>
                            Already have an account?{' '}
                            <NavLink to="/login" >
                                Sign in
                            </NavLink>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Signup;
