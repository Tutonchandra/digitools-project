import { User, Box, Rocket } from "lucide-react";

const GetsectionCart = () => {
    return (
        <div className="bg-gray-50 py-20">
            <div className=" container  mx-auto px-4 text-center">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Get Started In 3 Steps
                </h2>

                <p className="text-gray-500 mt-3">
                    Start using premium digital tools in minutes, not hours.
                </p>
                <div className="grid md:grid-cols-3 gap-10 mt-12">

                    <div className="card  bg-base-100 shadow-md rounded-2xl p-20 relative">

                        <div className="absolute top-4 right-4 bg-purple-600 text-white text-sm w-8 h-8 flex items-center justify-center rounded-full">
                            01
                        </div>
                        <div className="flex justify-center">
                            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                                <User className="text-purple-600" size={32} />
                            </div>
                        </div>
                        <h3 className=" text-xl lg:text-2xl font-semibold mt-6">
                            Create Account
                        </h3>
                        <p className="text-gray-500 mt-2 text-md">
                            Sign up for free in seconds. No credit card required to get started.
                        </p>
                    </div>


                    <div className="card bg-base-100 shadow-md rounded-2xl p-20 relative">

                        <div className="absolute top-4 right-4 bg-purple-600 text-white text-sm w-8 h-8 flex items-center justify-center rounded-full">
                            02
                        </div>

                        <div className="flex justify-center">
                            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                                <Box className="text-purple-600" size={32} />
                            </div>
                        </div>

                        <h3 className="text-xl lg:text-2xl font-semibold mt-6">
                            Choose Products
                        </h3>

                        <p className="text-gray-500 mt-2 text-md">
                            Browse our catalog and select the tools that fit your needs.
                        </p>
                    </div>


                    <div className="card bg-base-100 shadow-md rounded-2xl p-20 relative">

                        <div className="absolute top-4 right-4 bg-purple-600 text-white text-sm w-8 h-8 flex items-center justify-center rounded-full">
                            03
                        </div>

                        <div className="flex justify-center">
                            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                                <Rocket className="text-purple-600" size={32} />
                            </div>
                        </div>

                        <h3 className="text-xl lg:text-2xl font-semibold mt-6">
                            Start Creating
                        </h3>

                        <p className="text-gray-500 mt-2 text-md">
                            Download and start using your premium tools immediately.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GetsectionCart