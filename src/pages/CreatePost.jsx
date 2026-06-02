import { useState, useEffect } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import { FaImage, FaVideo, FaRocket, FaTimes, FaCloudUploadAlt } from "react-icons/fa";

const CLOUDINARY_UPLOAD_PRESET = "memesphere_preset";
const CLOUDINARY_CLOUD_NAME = "deqdpks2w";

function CreatePost() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [mediaUrl, setMediaUrl] = useState("");
    const [mediaType, setMediaType] = useState("");
    const [preview, setPreview] = useState("");
    const [communityId, setCommunityId] = useState("");
    const [communities, setCommunities] = useState([]);
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);

    useEffect(() => {
        if (!localStorage.getItem("token")) navigate("/login");
        getCommunities();
    }, []);

    const getCommunities = async () => {
        try {
            const res = await API.get("/api/community");
            setCommunities(res.data);
        } catch (e) { console.log(e); }
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // File size check - image 10MB, video 100MB
        const isVideo = file.type.startsWith("video");
        const maxSize = isVideo ? 100 * 1024 * 1024 : 10 * 1024 * 1024;

        if (file.size > maxSize) {
            alert(isVideo ? "Video 100MB se chhoti honi chahiye" : "Image 10MB se chhoti honi chahiye");
            return;
        }

        // Local preview
        setPreview(URL.createObjectURL(file));
        setMediaType(isVideo ? "video" : "image");
        setUploading(true);
        setUploadProgress(0);

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
        formData.append("resource_type", isVideo ? "video" : "image");

        try {
            // XMLHttpRequest use karo progress track karne ke liye
            const xhr = new XMLHttpRequest();

            xhr.upload.onprogress = (event) => {
                if (event.lengthComputable) {
                    const percent = Math.round((event.loaded / event.total) * 100);
                    setUploadProgress(percent);
                }
            };

            const uploadUrl = isVideo
                ? `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/video/upload`
                : `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

            xhr.open("POST", uploadUrl);

            xhr.onload = () => {
                const data = JSON.parse(xhr.responseText);
                if (data.secure_url) {
                    setMediaUrl(data.secure_url);
                    setUploadProgress(100);
                } else {
                    alert("Upload failed ❌");
                }
                setUploading(false);
            };

            xhr.onerror = () => {
                alert("Upload error ❌");
                setUploading(false);
            };

            xhr.send(formData);

        } catch (error) {
            alert("Upload failed: " + error.message);
            setUploading(false);
        }
    };

    const removeMedia = () => {
        setPreview("");
        setMediaUrl("");
        setMediaType("");
        setUploadProgress(0);
    };

    const createPost = async () => {
        if (!title || !content || !communityId) {
            alert("Title, content aur community zaroori hain");
            return;
        }
        if (uploading) {
            alert("Media upload hone do pehle...");
            return;
        }
        setLoading(true);
        try {
            await API.post("/api/posts", {
                title,
                content,
                mediaUrl,
                mediaType,
                communityId
            });
            alert("Post Create Ho Gayi 🚀");
            navigate("/");
        } catch (error) {
            alert("Post create karne me error aaya");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white p-6">
            <div className="max-w-2xl mx-auto">

                <h1 className="text-5xl font-extrabold text-orange-400 mb-2">
                    Create Post 🚀
                </h1>
                <p className="text-gray-400 mb-8">
                    Photo ya Video ke saath post karo 📸🎬
                </p>

                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-gray-700 shadow-2xl">

                    <input
                        type="text"
                        placeholder="Post Title *"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-4 rounded-2xl bg-black/40 border border-gray-700 mb-5 text-white outline-none focus:border-orange-500 transition"
                    />

                    <textarea
                        placeholder="Kuch likho... 😂"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows="4"
                        className="w-full p-4 rounded-2xl bg-black/40 border border-gray-700 mb-5 text-white outline-none focus:border-orange-500 transition"
                    />

                    {/* MEDIA UPLOAD AREA */}
                    <div className="mb-5">
                        <p className="text-gray-400 text-sm mb-3">
                            📎 Photo ya Video attach karo (optional)
                        </p>

                        {!preview ? (
                            <label className="flex flex-col items-center justify-center gap-4 bg-black/30 border-2 border-dashed border-gray-600 hover:border-orange-500 p-10 rounded-2xl cursor-pointer transition group">
                                <FaCloudUploadAlt className="text-5xl text-gray-500 group-hover:text-orange-400 transition" />
                                <div className="text-center">
                                    <p className="text-gray-300 text-lg font-semibold">
                                        Click karke upload karo
                                    </p>
                                    <p className="text-gray-500 text-sm mt-1">
                                        📸 Images (JPG, PNG, GIF) — max 10MB
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        🎬 Videos (MP4, MOV, AVI) — max 100MB
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <span className="bg-orange-500/20 border border-orange-500 px-4 py-2 rounded-xl flex items-center gap-2 text-orange-300">
                                        <FaImage /> Photo
                                    </span>
                                    <span className="bg-blue-500/20 border border-blue-500 px-4 py-2 rounded-xl flex items-center gap-2 text-blue-300">
                                        <FaVideo /> Video
                                    </span>
                                </div>
                                <input
                                    type="file"
                                    accept="image/*,video/*"
                                    onChange={handleFileUpload}
                                    className="hidden"
                                />
                            </label>
                        ) : (
                            <div className="relative rounded-2xl overflow-hidden">

                                {/* IMAGE PREVIEW */}
                                {mediaType === "image" && (
                                    <img
                                        src={preview}
                                        className="w-full max-h-[400px] object-cover rounded-2xl"
                                        alt="preview"
                                    />
                                )}

                                {/* VIDEO PREVIEW */}
                                {mediaType === "video" && (
                                    <video
                                        src={preview}
                                        controls
                                        className="w-full max-h-[400px] rounded-2xl bg-black"
                                    />
                                )}

                                {/* UPLOAD PROGRESS OVERLAY */}
                                {uploading && (
                                    <div className="absolute inset-0 bg-black/70 rounded-2xl flex flex-col items-center justify-center gap-4">
                                        <div className="text-white text-xl animate-pulse">
                                            {mediaType === "video" ? "🎬" : "📸"} Uploading to Cloudinary...
                                        </div>
                                        {/* PROGRESS BAR */}
                                        <div className="w-[80%] bg-gray-700 rounded-full h-4">
                                            <div
                                                className="bg-gradient-to-r from-orange-500 to-pink-500 h-4 rounded-full transition-all duration-300"
                                                style={{ width: `${uploadProgress}%` }}
                                            />
                                        </div>
                                        <p className="text-orange-400 text-2xl font-bold">
                                            {uploadProgress}%
                                        </p>
                                    </div>
                                )}

                                {/* SUCCESS BADGE */}
                                {!uploading && mediaUrl && (
                                    <div className="absolute bottom-3 left-3 bg-green-500 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                                        ✅ {mediaType === "video" ? "Video" : "Photo"} Ready!
                                    </div>
                                )}

                                {/* REMOVE BUTTON */}
                                <button
                                    onClick={removeMedia}
                                    className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 p-2 rounded-full transition"
                                >
                                    <FaTimes />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* COMMUNITY SELECT */}
                    <select
                        value={communityId}
                        onChange={(e) => setCommunityId(e.target.value)}
                        className="w-full p-4 rounded-2xl bg-black/40 border border-gray-700 mb-6 text-white outline-none focus:border-orange-500 transition"
                    >
                        <option value="">Select Community *</option>
                        {communities.map((c) => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                    </select>

                    <button
                        onClick={createPost}
                        disabled={loading || uploading}
                        className="w-full bg-gradient-to-r from-orange-500 to-pink-500 py-4 rounded-2xl text-xl font-bold hover:scale-105 transition flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <FaRocket />
                        {loading ? "Posting..." : uploading ? `Uploading ${uploadProgress}%...` : "Launch Post 🚀"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;