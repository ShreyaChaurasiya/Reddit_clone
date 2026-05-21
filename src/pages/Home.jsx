import { useState } from "react";

import {
    useNavigate
} from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    const [section, setSection] =
        useState("explore");

    return (

        <div
            className="
                min-h-screen
                bg-black
                text-white
                overflow-hidden
            "
        >

            {/* HERO SECTION */}

            <section
                className="
                    px-14
                    py-20
                    relative
                "
            >

                <div
                    className="
                        absolute
                        top-0
                        right-0
                        w-[600px]
                        h-[600px]
                        bg-orange-500/20
                        blur-[150px]
                        rounded-full
                    "
                />

                <div
                    className="
                        absolute
                        top-40
                        left-20
                        w-[400px]
                        h-[400px]
                        bg-pink-500/20
                        blur-[150px]
                        rounded-full
                    "
                />

                <div
                    className="
                        grid
                        md:grid-cols-2
                        gap-20
                        items-center
                        relative
                        z-10
                    "
                >

                    <div>

                        <h1
                            className="
                                text-8xl
                                font-black
                                leading-tight
                            "
                        >
                            Welcome To
                            <span
                                className="
                                    block
                                    bg-gradient-to-r
                                    from-orange-400
                                    to-pink-500
                                    bg-clip-text
                                    text-transparent
                                "
                            >
                                MemeSphere 😂
                            </span>
                        </h1>

                        <p
                            className="
                                text-2xl
                                text-gray-400
                                mt-10
                                leading-relaxed
                            "
                        >
                            Discover viral memes,
                            trending jokes,
                            crazy internet culture,
                            and hilarious communities
                            all in one place 🚀🔥
                        </p>

                        <div
                            className="
                                flex
                                gap-6
                                mt-12
                            "
                        >

                            <button

                                onClick={() =>
                                    setSection("explore")
                                }

                                className="
                                    bg-gradient-to-r
                                    from-orange-500
                                    to-red-500
                                    px-10
                                    py-5
                                    rounded-3xl
                                    text-2xl
                                    font-bold
                                    hover:scale-105
                                    transition
                                "
                            >
                                Explore Now 🚀
                            </button>

                            <button

                                onClick={() =>
                                    setSection("memes")
                                }

                                className="
                                    border
                                    border-orange-500
                                    px-10
                                    py-5
                                    rounded-3xl
                                    text-2xl
                                    hover:bg-orange-500
                                    transition
                                "
                            >
                                Trending Memes 😂
                            </button>

                        </div>

                    </div>

                    <div
                        className="
                            relative
                            flex
                            justify-center
                        "
                    >

                        <img
                            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                            className="
                                w-[500px]
                                animate-bounce
                                drop-shadow-[0_0_80px_rgba(255,100,0,0.8)]
                            "
                        />

                    </div>

                </div>

            </section>

            {/* BUTTONS */}

            <div
                className="
                    px-14
                    flex
                    flex-wrap
                    gap-8
                    mt-10
                "
            >

                <button
                    onClick={() =>
                        setSection("trending")
                    }
                    className="
                        px-10
                        py-5
                        rounded-full
                        border
                        border-orange-500
                        bg-orange-500/10
                        text-2xl
                        hover:scale-105
                        transition
                    "
                >
                    🔥 Trending
                </button>

                <button
                    onClick={() =>
                        setSection("viral")
                    }
                    className="
                        px-10
                        py-5
                        rounded-full
                        border
                        border-pink-500
                        bg-pink-500/10
                        text-2xl
                        hover:scale-105
                        transition
                    "
                >
                    🚀 Viral Posts
                </button>

                <button
                    onClick={() =>
                        setSection("funny")
                    }
                    className="
                        px-10
                        py-5
                        rounded-full
                        border
                        border-yellow-500
                        bg-yellow-500/10
                        text-2xl
                        hover:scale-105
                        transition
                    "
                >
                    😂 Funny Memes
                </button>

                <button
                    onClick={() =>
                        setSection("media")
                    }
                    className="
                        px-10
                        py-5
                        rounded-full
                        border
                        border-blue-500
                        bg-blue-500/10
                        text-2xl
                        hover:scale-105
                        transition
                    "
                >
                    🎬 Media Ready
                </button>

                <button
                    onClick={() =>
                        setSection("community")
                    }
                    className="
                        px-10
                        py-5
                        rounded-full
                        border
                        border-green-500
                        bg-green-500/10
                        text-2xl
                        hover:scale-105
                        transition
                    "
                >
                    🌍 Community Power
                </button>

                <button
                    onClick={() =>
                        setSection("global")
                    }
                    className="
                        px-10
                        py-5
                        rounded-full
                        border
                        border-cyan-500
                        bg-cyan-500/10
                        text-2xl
                        hover:scale-105
                        transition
                    "
                >
                    🌎 Global Reach
                </button>

                <button
                    onClick={() =>
                        setSection("culture")
                    }
                    className="
                        px-10
                        py-5
                        rounded-full
                        border
                        border-purple-500
                        bg-purple-500/10
                        text-2xl
                        hover:scale-105
                        transition
                    "
                >
                    😎 Meme Culture
                </button>

            </div>

            {/* DYNAMIC CONTENT */}

            <div className="px-14 py-20">

                {
                    section === "explore" && (

                        <div
                            className="
                                grid
                                md:grid-cols-2
                                gap-20
                                items-center
                            "
                        >

                            <div>

                                <h1
                                    className="
                                        text-7xl
                                        font-black
                                        leading-tight
                                    "
                                >
                                    Explore The
                                    <span
                                        className="
                                            block
                                            text-orange-400
                                        "
                                    >
                                        Future Of Memes 🚀
                                    </span>
                                </h1>

                                <p
                                    className="
                                        text-2xl
                                        text-gray-400
                                        mt-10
                                        leading-relaxed
                                    "
                                >
                                    MemeSphere combines
                                    memes, trends,
                                    communities, and viral
                                    internet culture in one
                                    futuristic platform.
                                </p>

                            </div>

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
                                className="
                                    w-full
                                    max-w-[500px]
                                    mx-auto
                                    animate-pulse
                                "
                            />

                        </div>
                    )
                }

                {
                    section === "memes" && (

                        <div
                            className="
                                grid
                                md:grid-cols-3
                                gap-10
                            "
                        >

                            <div
                                className="
                                    bg-white/5
                                    p-5
                                    rounded-3xl
                                    hover:scale-105
                                    transition
                                "
                            >

                                <img
                                    src="https://i.imgflip.com/30b1gx.jpg"
                                    className="
                                        rounded-2xl
                                        h-[350px]
                                        w-full
                                        object-cover
                                    "
                                />

                                <h2
                                    className="
                                        text-3xl
                                        mt-5
                                    "
                                >
                                    Programmer Meme 😂
                                </h2>

                            </div>

                            <div
                                className="
                                    bg-white/5
                                    p-5
                                    rounded-3xl
                                    hover:scale-105
                                    transition
                                "
                            >

                                <img
                                    src="https://i.imgflip.com/1bij.jpg"
                                    className="
                                        rounded-2xl
                                        h-[350px]
                                        w-full
                                        object-cover
                                    "
                                />

                                <h2
                                    className="
                                        text-3xl
                                        mt-5
                                    "
                                >
                                    Viral Internet Meme 🚀
                                </h2>

                            </div>

                            <div
                                className="
                                    bg-white/5
                                    p-5
                                    rounded-3xl
                                    hover:scale-105
                                    transition
                                "
                            >

                                <img
                                    src="https://i.imgflip.com/26am.jpg"
                                    className="
                                        rounded-2xl
                                        h-[350px]
                                        w-full
                                        object-cover
                                    "
                                />

                                <h2
                                    className="
                                        text-3xl
                                        mt-5
                                    "
                                >
                                    Funny Cat Meme 😂
                                </h2>

                            </div>

                        </div>
                    )
                }

                {
                    section === "trending" && (

                        <div className="grid md:grid-cols-3 gap-10">

                            <div className="bg-orange-500/10 p-10 rounded-3xl text-3xl">
                                🔥 AI Memes Trending
                            </div>

                            <div className="bg-pink-500/10 p-10 rounded-3xl text-3xl">
                                🚀 Coding Memes Viral
                            </div>

                            <div className="bg-yellow-500/10 p-10 rounded-3xl text-3xl">
                                😂 College Memes Exploding
                            </div>

                        </div>
                    )
                }

                {
                    section === "viral" && (

                        <div
                            className="
                                grid
                                md:grid-cols-2
                                gap-20
                                items-center
                            "
                        >

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/742/742751.png"
                                className="
                                    w-full
                                    max-w-[500px]
                                    mx-auto
                                "
                            />

                            <div>

                                <h1 className="text-6xl font-black text-pink-400">
                                    Viral Internet Trends 🚀
                                </h1>

                                <p className="text-2xl text-gray-400 mt-10">
                                    Explore latest viral
                                    internet topics,
                                    memes, and social trends.
                                </p>

                            </div>

                        </div>
                    )
                }

                {
                    section === "funny" && (

                        <div
                            className="
                                grid
                                md:grid-cols-3
                                gap-10
                            "
                        >

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
                                className="rounded-3xl"
                            />

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
                                className="rounded-3xl"
                            />

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
                                className="rounded-3xl"
                            />

                        </div>
                    )
                }

                {
                    section === "media" && (

                        <div
                            className="
                                grid
                                md:grid-cols-2
                                gap-10
                            "
                        >

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3658/3658773.png"
                                className="rounded-3xl"
                            />

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
                                className="rounded-3xl"
                            />

                        </div>
                    )
                }

                {
                    section === "community" && (

                        <div className="grid md:grid-cols-3 gap-10">

                            <div className="bg-green-500/10 p-10 rounded-3xl text-3xl">
                                🌍 Coding Community
                            </div>

                            <div className="bg-green-500/10 p-10 rounded-3xl text-3xl">
                                😂 Meme Community
                            </div>

                            <div className="bg-green-500/10 p-10 rounded-3xl text-3xl">
                                🎮 Gaming Community
                            </div>

                        </div>
                    )
                }

                {
                    section === "global" && (

                        <div
                            className="
                                grid
                                md:grid-cols-2
                                gap-20
                                items-center
                            "
                        >

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/4149/4149673.png"
                                className="
                                    w-full
                                    max-w-[500px]
                                    mx-auto
                                "
                            />

                            <div>

                                <h1 className="text-6xl font-black text-cyan-400">
                                    Global Reach 🌎
                                </h1>

                                <p className="text-2xl text-gray-400 mt-10">
                                    Connect with meme lovers
                                    worldwide and share
                                    trends globally.
                                </p>

                            </div>

                        </div>
                    )
                }

                {
                    section === "culture" && (

                        <div
                            className="
                                grid
                                md:grid-cols-2
                                gap-20
                                items-center
                            "
                        >

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/4140/4140047.png"
                                className="
                                    w-full
                                    max-w-[500px]
                                    mx-auto
                                "
                            />

                            <div>

                                <h1 className="text-6xl font-black text-purple-400">
                                    Meme Culture 😎
                                </h1>

                                <p className="text-2xl text-gray-400 mt-10">
                                    Understand internet humor,
                                    meme evolution, and digital
                                    social culture.
                                </p>

                            </div>

                        </div>
                    )
                }

            </div>

        </div>
    );
}

export default Home;