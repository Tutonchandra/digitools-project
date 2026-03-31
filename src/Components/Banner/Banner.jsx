import BannerImage from "../../assets/banner.png";
// import HeadImage from "../../assets/ractangle-2.png";
import headcircle from "../../assets/headcircle.png"
import playIcon from "../../assets/Play.png"
const Banner = () => {
    return (
        <div className="relative  min-h-170 flex items-center overflow-hidden">
            <div className=" mx-auto container grid justify-between lg:grid-cols-2 gap-5 items-center relative z-10 ">
                {/* Left Content */}
                <div className="space-y-4 grid ">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent bg-amber-500">
                        <img src={headcircle} alt="" /> New: AI-Powered Tools Available
                    </div>

                    <h1 className="text-4xl lg:text-7xl font-bold leading-tight tracking-tighter text-[#101727]">
                        Supercharge Your
                        <br />
                        <span className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">
                            Digital Workflow
                        </span>
                    </h1>

                    <p className="text-lg text-zinc-700 max-w-lg">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                        Explore Products
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] transition-all px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-3 group text-white">
                            Explore Product
                            <span className="group-hover:translate-x-1 transition">→</span>
                        </button>
                        <button className="bg-linear-to-r from-[#4f39f6]  to-[#9514fa] transition-all bg-clip-text text-transparent border-3 border-purple-500 px-8 py-4 rounded-3xl font-extrablod text-lg flex items-center gap-3">
                        <span className="group-hover:translate-x-1 transition lg:font-extrabold"><img src={playIcon} className="lg:font-extrabold" alt="" /></span>
                            Watch Video
                        </button>

                    </div>

                    
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative">
                        <img
                            className="relative h-130 w-auto object-contain contain-content drop-shadow-2xl rounded-3xl animate-pulse"
                            src={BannerImage}
                            alt="Models Banner"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;