import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function Signup() {

    const navigate =
        useNavigate();

    const [username, setUsername] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const signup = async () => {

        try {

            await axios.post(

                "http://localhost:8080/api/auth/signup",

                {
                    username,
                    email,
                    password
                }
            );

            alert("Signup Success");

            navigate("/login");

        } catch (error) {

            alert("Signup Failed");
        }
    };

    return (

        <div
            className="min-h-screen flex justify-center items-center bg-gradient-to-br from-black via-gray-900 to-orange-900"
        >

            <div
                className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-[400px]"
            >

                <h1
                    className="text-4xl font-bold text-center mb-8 text-orange-400"
                >
                    Signup
                </h1>

                <input

                    type="text"

                    placeholder="Username"

                    className="w-full p-3 mb-5 rounded-lg bg-gray-800 text-white outline-none"

                    onChange={(e) =>
                        setUsername(e.target.value)
                    }
                />

                <input

                    type="email"

                    placeholder="Email"

                    className="w-full p-3 mb-5 rounded-lg bg-gray-800 text-white outline-none"

                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />

                <input

                    type="password"

                    placeholder="Password"

                    className="w-full p-3 mb-5 rounded-lg bg-gray-800 text-white outline-none"

                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />

                <button

                    onClick={signup}

                    className="w-full bg-orange-500 hover:bg-orange-600 p-3 rounded-lg text-lg font-bold"
                >
                    Signup
                </button>

            </div>

        </div>
    );
}

export default Signup;