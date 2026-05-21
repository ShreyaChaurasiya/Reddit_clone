import {
    Routes,
    Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Login from "./pages/Login";

import Signup from "./pages/Signup";

import Home from "./pages/Home";

import CreatePost from "./pages/CreatePost";

import CreateCommunity from "./pages/CreateCommunity";

function App() {

    return (

        <div>

            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/signup"
                    element={<Signup />}
                />

                <Route
                    path="/create-post"
                    element={<CreatePost />}
                />

                <Route
                    path="/create-community"
                    element={<CreateCommunity />}
                />

            </Routes>

        </div>
    );
}

export default App;