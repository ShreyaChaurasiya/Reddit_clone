import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa";

function CreateCommunity() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const createCommunity = async () => {
        if (!name || !description) {
            alert("Name aur description dono bharo");
            return;
        }
        setLoading(true);
        try {
            await API.post("/api/community", { name, description });
            alert("Community Ban Gayi 🎉");
            navigate("/");
        } catch (error) {
            alert("Community create karne me error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white p-10">
            <div className="max-w-2xl mx-auto">

                <h1 className="text-5xl font-extrabold text-orange-400 mb-2">Build Your Squad 🌍</h1>
                <p className="text-gray-400 mb-8">Apni community banao aur logo ko jodo 😎</p>

                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-gray-700 shadow-2xl">

                    <div className="flex justify-center mb-6">
                        <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-5 rounded-full">
                            <FaUsers className="text-white text-4xl" />
                        </div>
                    </div>

                    <input
                        type="text"
                        placeholder="Community Name (e.g. r/MemeLovers)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-4 rounded-2xl bg-black/40 border border-gray-700 mb-5 text-white outline-none focus:border-orange-500 transition"
                    />

                    <textarea
                        placeholder="Describe your community... 😎"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="6"
                        className="w-full p-4 rounded-2xl bg-black/40 border border-gray-700 mb-5 text-white outline-none focus:border-orange-500 transition"
                    />

                    <button
                        onClick={createCommunity}
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-orange-500 to-pink-500 py-4 rounded-2xl text-xl font-bold hover:scale-105 transition disabled:opacity-50"
                    >
                        {loading ? "Creating..." : "Create Community 🚀"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateCommunity;