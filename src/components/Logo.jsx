import {

    FaRedditAlien

} from "react-icons/fa";

function Logo() {

    return (

        <div
            className="flex items-center gap-3"
        >

            <div
                className="bg-gradient-to-r from-orange-500 to-pink-500 p-3 rounded-full shadow-lg animate-pulse"
            >

                <FaRedditAlien
                    className="text-white text-3xl"
                />

            </div>

            <div>

                <h1
                    className="text-3xl font-extrabold text-orange-400"
                >
                    MemeSphere
                </h1>

                <p
                    className="text-xs text-gray-400"
                >
                    Laugh • Post • Chill 🚀
                </p>

            </div>

        </div>
    );
}

export default Logo;