import {
    useState
} from "react";

import API from "../services/api";

import {
    FaUsers,
    FaGlobe,
    FaLaughSquint
} from "react-icons/fa";

function CreateCommunity() {

    const [name, setName] =
        useState("");

    const [description, setDescription] =
        useState("");

    const [section, setSection] =
        useState("power");

    const createCommunity = async () => {

        try {

            await API.post(

                "/api/community",

                {
                    name,
                    description
                }
            );

            alert(
                "Community Created 🎉"
            );

            setName("");
            setDescription("");

        } catch (error) {

            alert(
                "Failed To Create Community"
            );
        }
    };

    return (

        <div
            className="
                min-h-screen
                bg-gradient-to-br
                from-slate-950
                via-black
                to-slate-900
                text-white
                p-10
            "
        >

            <div
                className="
                    grid
                    lg:grid-cols-2
                    gap-10
                    items-center
                "
            >

                {/* LEFT */}

                <div>

                    <h1
                        className="
                            text-6xl
                            font-extrabold
                            text-orange-400
                        "
                    >
                        Build Your Squad 🌍
                    </h1>

                    <p
                        className="
                            mt-5
                            text-xl
                            text-gray-300
                        "
                    >
                        Create funny communities,
                        coding gangs,
                        meme armies,
                        and fan clubs 😎
                    </p>

                    {/* BUTTONS */}

                    <div
                        className="
                            flex
                            flex-wrap
                            gap-5
                            mt-10
                        "
                    >

                        <button

                            onClick={() =>
                                setSection("power")
                            }

                            className="
                                bg-orange-500/20
                                border
                                border-orange-500
                                px-5
                                py-3
                                rounded-2xl
                                flex
                                items-center
                                gap-3
                                hover:scale-105
                                transition
                            "
                        >
                            <FaUsers />
                            Community Power
                        </button>

                        <button

                            onClick={() =>
                                setSection("global")
                            }

                            className="
                                bg-blue-500/20
                                border
                                border-blue-500
                                px-5
                                py-3
                                rounded-2xl
                                flex
                                items-center
                                gap-3
                                hover:scale-105
                                transition
                            "
                        >
                            <FaGlobe />
                            Global Reach
                        </button>

                        <button

                            onClick={() =>
                                setSection("meme")
                            }

                            className="
                                bg-pink-500/20
                                border
                                border-pink-500
                                px-5
                                py-3
                                rounded-2xl
                                flex
                                items-center
                                gap-3
                                hover:scale-105
                                transition
                            "
                        >
                            <FaLaughSquint />
                            Meme Culture
                        </button>

                    </div>

                    {/* DYNAMIC CONTENT */}

                    <div className="mt-10">

                        {

                            section === "power" && (

                                <div>

                                    <h2
                                        className="
                                            text-4xl
                                            font-bold
                                            text-orange-400
                                        "
                                    >
                                        👥 Community Power
                                    </h2>

                                    <p
                                        className="
                                            text-gray-300
                                            mt-5
                                            text-xl
                                            leading-relaxed
                                        "
                                    >
                                        Build strong meme communities,
                                        connect with funny creators,
                                        and create your own internet army 🚀
                                    </p>

                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                        className="
                                            w-[350px]
                                            mt-10
                                            animate-pulse
                                        "
                                    />

                                </div>
                            )
                        }

                        {

                            section === "global" && (

                                <div>

                                    <h2
                                        className="
                                            text-4xl
                                            font-bold
                                            text-blue-400
                                        "
                                    >
                                        🌎 Global Reach
                                    </h2>

                                    <p
                                        className="
                                            text-gray-300
                                            mt-5
                                            text-xl
                                            leading-relaxed
                                        "
                                    >
                                        Your memes can reach people
                                        across the world and become
                                        globally viral 🌍🔥
                                    </p>

                                    <div
                                        className="
                                            grid
                                            grid-cols-2
                                            gap-5
                                            mt-8
                                        "
                                    >

                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/8146/8146363.png"
                                            className="rounded-3xl"
                                        />

                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
                                            className="rounded-3xl"
                                        />

                                    </div>

                                </div>
                            )
                        }

                        {

                            section === "meme" && (

                                <div>

                                    <h2
                                        className="
                                            text-4xl
                                            font-bold
                                            text-pink-400
                                        "
                                    >
                                        😂 Meme Culture
                                    </h2>

                                    <p
                                        className="
                                            text-gray-300
                                            mt-5
                                            text-xl
                                            leading-relaxed
                                        "
                                    >
                                        Share relatable memes,
                                        college jokes,
                                        coding pain,
                                        and funniest internet moments 😂
                                    </p>

                                    <div
                                        className="
                                            grid
                                            grid-cols-2
                                            gap-5
                                            mt-8
                                        "
                                    >

                                        <img
                                            src="https://i.imgflip.com/30b1gx.jpg"
                                            className="rounded-3xl"
                                        />

                                        <img
                                            src="https://i.imgflip.com/1bij.jpg"
                                            className="rounded-3xl"
                                        />

                                    </div>

                                </div>
                            )
                        }

                    </div>

                </div>

                {/* RIGHT */}

                <div
                    className="
                        bg-white/10
                        backdrop-blur-xl
                        p-10
                        rounded-3xl
                        border
                        border-gray-700
                        shadow-2xl
                    "
                >

                    <h2
                        className="
                            text-4xl
                            font-bold
                            text-orange-400
                            mb-8
                        "
                    >
                        Community Creator 🎉
                    </h2>

                    <input

                        type="text"

                        placeholder="Community Name"

                        value={name}

                        onChange={(e) =>
                            setName(e.target.value)
                        }

                        className="
                            w-full
                            p-4
                            rounded-2xl
                            bg-black/40
                            border
                            border-gray-700
                            mb-5
                            text-white
                        "
                    />

                    <textarea

                        placeholder="Describe Your Community 😎"

                        value={description}

                        onChange={(e) =>
                            setDescription(
                                e.target.value
                            )
                        }

                        rows="6"

                        className="
                            w-full
                            p-4
                            rounded-2xl
                            bg-black/40
                            border
                            border-gray-700
                            mb-5
                            text-white
                        "
                    />

                    <button

                        onClick={createCommunity}

                        className="
                            w-full
                            bg-gradient-to-r
                            from-orange-500
                            to-pink-500
                            py-4
                            rounded-2xl
                            text-xl
                            font-bold
                            hover:scale-105
                            transition
                        "
                    >
                        Create Community 🚀
                    </button>

                </div>

            </div>

        </div>
    );
}

export default CreateCommunity;