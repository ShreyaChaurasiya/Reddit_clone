import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaComment, FaUser, FaFire } from "react-icons/fa";

function Home() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [commentText, setCommentText] = useState({});
    const [postComments, setPostComments] = useState({});
    const [openComments, setOpenComments] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login");
            return;
        }
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await API.get("/api/posts");
            setPosts(response.data.reverse()); // Latest pehle
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const likePost = async (id) => {
        try {
            await API.put(`/api/posts/like/${id}`);
            fetchPosts();
        } catch (error) {
            console.log(error);
        }
    };

    const toggleComments = async (postId) => {
        const isOpen = openComments[postId];
        setOpenComments(prev => ({ ...prev, [postId]: !isOpen }));

        if (!isOpen && !postComments[postId]) {
            try {
                const response = await API.get(`/api/comments/${postId}`);
                setPostComments(prev => ({ ...prev, [postId]: response.data }));
            } catch (error) {
                console.log(error);
            }
        }
    };

    const addComment = async (postId) => {
        const text = commentText[postId];
        if (!text || !text.trim()) {
            alert("Comment likho pehle!");
            return;
        }
        try {
            await API.post("/api/comments", { text, postId });
            setCommentText(prev => ({ ...prev, [postId]: "" }));
            // Comments refresh karo
            const response = await API.get(`/api/comments/${postId}`);
            setPostComments(prev => ({ ...prev, [postId]: response.data }));
        } catch (error) {
            alert("Comment add karne me error");
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-orange-400 text-4xl animate-pulse">Loading MemeSphere... 🚀</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white">

            {/* HERO */}
            <section className="px-8 py-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none" />
                <div className="absolute top-40 left-10 w-[300px] h-[300px] bg-pink-500/10 blur-[150px] rounded-full pointer-events-none" />

                <div className="relative z-10 max-w-4xl">
                    <h1 className="text-7xl font-black leading-tight">
                        Welcome To
                        <span className="block bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                            MemeSphere 😂
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 mt-6 leading-relaxed">
                        Discover viral memes, trending jokes, crazy internet culture 🚀🔥
                    </p>
                    <div className="flex gap-4 mt-8">
                        <button
                            onClick={() => navigate("/create-post")}
                            className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 rounded-2xl text-xl font-bold hover:scale-105 transition"
                        >
                            Create Post 🚀
                        </button>
                        <button
                            onClick={() => navigate("/create-community")}
                            className="border border-orange-500 px-8 py-4 rounded-2xl text-xl hover:bg-orange-500 transition"
                        >
                            New Community 🌍
                        </button>
                    </div>
                </div>
            </section>

            {/* LIVE FEED */}
            <section className="px-8 pb-20">
                <div className="flex items-center gap-3 mb-8">
                    <FaFire className="text-orange-400 text-3xl" />
                    <h2 className="text-4xl font-black text-orange-400">Live Meme Feed</h2>
                </div>

                {posts.length === 0 && (
                    <div className="text-center py-20 text-gray-500 text-2xl">
                        Koi post nahi abhi... Pehli post tum karo! 🚀
                    </div>
                )}

                <div className="grid gap-6 max-w-3xl mx-auto">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white/5 border border-gray-800 rounded-3xl p-6 backdrop-blur-xl hover:border-orange-500/50 transition"
                        >
                            {/* POST HEADER */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-2 rounded-full">
                                    <FaUser className="text-white" />
                                </div>
                                <div>
                                    <span className="text-orange-300 font-semibold">
                                        u/{post.authorUsername || "anonymous"}
                                    </span>
                                    <span className="text-gray-500 text-sm ml-3">
                                        in r/{post.community?.name || "general"}
                                    </span>
                                </div>
                            </div>

                            {/* POST CONTENT */}
                            <h2 className="text-2xl font-bold text-white mb-3">{post.title}</h2>
                            <p className="text-gray-300 text-lg leading-relaxed">{post.content}</p>

                            {/* IMAGE */}
                            {post.imageUrl && (
                                <img
                                    src={post.imageUrl}
                                    className="w-full rounded-2xl mt-4 max-h-[500px] object-cover"
                                    alt="post"
                                />
                            )}

                            {/* ACTIONS */}
                            <div className="flex gap-4 mt-5">
                                <button
                                    onClick={() => likePost(post.id)}
                                    className="flex items-center gap-2 bg-pink-500/20 border border-pink-500 px-5 py-2 rounded-xl hover:bg-pink-500/40 transition"
                                >
                                    <FaHeart className="text-pink-400" />
                                    <span>{post.likes}</span>
                                </button>

                                <button
                                    onClick={() => toggleComments(post.id)}
                                    className="flex items-center gap-2 bg-blue-500/20 border border-blue-500 px-5 py-2 rounded-xl hover:bg-blue-500/40 transition"
                                >
                                    <FaComment className="text-blue-400" />
                                    <span>Comments</span>
                                </button>
                            </div>

                            {/* COMMENTS SECTION */}
                            {openComments[post.id] && (
                                <div className="mt-5 border-t border-gray-700 pt-5">

                                    {/* COMMENT INPUT */}
                                    <div className="flex gap-3 mb-5">
                                        <input
                                            type="text"
                                            placeholder="Comment likho... 💬"
                                            value={commentText[post.id] || ""}
                                            onChange={(e) =>
                                                setCommentText(prev => ({
                                                    ...prev,
                                                    [post.id]: e.target.value
                                                }))
                                            }
                                            onKeyDown={(e) => e.key === "Enter" && addComment(post.id)}
                                            className="flex-1 bg-black/40 border border-gray-700 px-4 py-3 rounded-xl text-white outline-none focus:border-blue-500 transition"
                                        />
                                        <button
                                            onClick={() => addComment(post.id)}
                                            className="bg-blue-500 px-5 py-3 rounded-xl font-semibold hover:bg-blue-600 transition"
                                        >
                                            Post
                                        </button>
                                    </div>

                                    {/* COMMENTS LIST */}
                                    {postComments[post.id]?.length === 0 && (
                                        <p className="text-gray-500 text-center py-3">
                                            Pehla comment karo! 💬
                                        </p>
                                    )}

                                    {postComments[post.id]?.map((comment) => (
                                        <div key={comment.id} className="flex gap-3 mb-4">
                                            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-full h-fit">
                                                <FaUser className="text-white text-xs" />
                                            </div>
                                            <div className="bg-white/5 rounded-2xl px-4 py-3 flex-1">
                                                <span className="text-blue-300 text-sm font-semibold">
                                                    u/{comment.user?.username || "user"}
                                                </span>
                                                <p className="text-gray-200 mt-1">{comment.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;