import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

function Login() {

    const navigate =
        useNavigate();

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const login = async () => {

        try {

            const response =
                await axios.post(

                    "http://localhost:8080/api/auth/login",

                    {
                        email,
                        password
                    }
                );

            localStorage.setItem(
                "token",
                response.data
            );

            alert("Login Success");

            navigate("/");

        } catch (error) {

            alert("Login Failed");
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
                    Login
                </h1>

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

                    onClick={login}

                    className="w-full bg-orange-500 hover:bg-orange-600 p-3 rounded-lg text-lg font-bold"
                >
                    Login
                </button>

            </div>

        </div>
    );
}

export default Login;