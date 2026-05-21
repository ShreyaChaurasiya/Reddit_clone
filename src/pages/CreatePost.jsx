import {
    useState,
    useEffect
} from "react";

import API from "../services/api";

import {
    FaImage,
    FaRocket,
    FaLaughBeam
} from "react-icons/fa";

function CreatePost() {

    const [title, setTitle] =
        useState("");

    const [content, setContent] =
        useState("");

    const [communityId, setCommunityId] =
        useState("");

    const [communities, setCommunities] =
        useState([]);

    const [section, setSection] =
        useState("viral");

    useEffect(() => {

        getCommunities();

    }, []);

    const getCommunities = async () => {

        try {

            const response =
                await API.get("/api/community");

            setCommunities(
                response.data
            );

        } catch (error) {

            console.log(error);
        }
    };

    const createPost = async () => {

        try {

            await API.post(

                "/api/posts",

                {
                    title,
                    content,
                    communityId
                }
            );

            alert(
                "Post Created 🚀"
            );

            setTitle("");
            setContent("");
            setCommunityId("");

        } catch (error) {

            alert(
                "Failed To Create Post"
            );
        }
    };

    return (

        <div
            className="
                min-h-screen
                bg-gradient-to-br
                from-black
                via-slate-900
                to-black
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
                        Create Viral Post 🚀
                    </h1>

                    <p
                        className="
                            mt-5
                            text-xl
                            text-gray-300
                        "
                    >
                        Drop memes, jokes,
                        coding pain, college drama
                        and become internet famous 😂
                    </p>

                    {/* BUTTONS */}

                    <div
                        className="
                            flex
                            gap-5
                            mt-10
                            flex-wrap
                        "
                    >

                        <button

                            onClick={() =>
                                setSection("viral")
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
                            <FaRocket />
                            Viral Content
                        </button>

                        <button

                            onClick={() =>
                                setSection("funny")
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
                            <FaLaughBeam />
                            Funny Memes
                        </button>

                        <button

                            onClick={() =>
                                setSection("media")
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
                            <FaImage />
                            Media Ready
                        </button>

                    </div>

                    {/* DYNAMIC CONTENT */}

                    <div className="mt-10">

                        {

                            section === "viral" && (

                                <div>

                                    <h2
                                        className="
                                            text-4xl
                                            font-bold
                                            text-orange-400
                                        "
                                    >
                                        🚀 Viral Internet Posts
                                    </h2>

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

                        {

                            section === "funny" && (

                                <div>

                                    <h2
                                        className="
                                            text-4xl
                                            font-bold
                                            text-pink-400
                                        "
                                    >
                                        😂 Funniest Memes
                                    </h2>

                                    <div
                                        className="
                                            grid
                                            grid-cols-2
                                            gap-5
                                            mt-8
                                        "
                                    >

                                        <img
                                            src="https://i.imgflip.com/26am.jpg"
                                            className="rounded-3xl"
                                        />

                                        <img
                                            src="https://i.imgflip.com/4t0m5.jpg"
                                            className="rounded-3xl"
                                        />

                                    </div>

                                </div>
                            )
                        }

                        {

                            section === "media" && (

                                <div>

                                    <h2
                                        className="
                                            text-4xl
                                            font-bold
                                            text-blue-400
                                        "
                                    >
                                        🎬 Media Creator Zone
                                    </h2>

                                    <p
                                        className="
                                            text-gray-300
                                            mt-5
                                            text-xl
                                        "
                                    >
                                        Upload images,
                                        create meme templates,
                                        edit viral content,
                                        and design funny posts 🚀
                                    </p>

                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                                        className="
                                            w-[300px]
                                            mt-8
                                            animate-bounce
                                        "
                                    />

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
                        Post Studio 🎨
                    </h2>

                    <input

                        type="text"

                        placeholder="Post Title"

                        value={title}

                        onChange={(e) =>
                            setTitle(e.target.value)
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

                        placeholder="Write Something Funny 😂"

                        value={content}

                        onChange={(e) =>
                            setContent(e.target.value)
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

                    <select

                        value={communityId}

                        onChange={(e) =>
                            setCommunityId(
                                e.target.value
                            )
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
                    >

                        <option value="">
                            Select Community
                        </option>

                        {

                            communities.map(

                                (community) => (

                                    <option

                                        key={community.id}

                                        value={community.id}
                                    >

                                        {community.name}

                                    </option>
                                )
                            )
                        }

                    </select>

                    <button

                        onClick={createPost}

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
                        Launch Post 🚀
                    </button>

                </div>

            </div>

        </div>
    );
}

export default CreatePost;