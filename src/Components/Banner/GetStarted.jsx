import user from '../../assets/user.png'
import rocket from '../../assets/rocket.png'
import product from '../../assets/package.png'


const GetStarted = () => {
    return (
        <div>
            <div className='text-center space-y-5 mt-20 mb-2'>
                <h2 className=' text-3xl md:text-2xl lg:text-5xl  font-semibold'>Get Started in 3 Steps</h2>
                <p className='text-lg mx-auto text-zinc-600  md:w-80 lg:w-4/12'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='container mx-auto justify-center items-center h-100 grid grid-cols-3 gap-10 mb-20 mt-15 bg-green-300'>
                <div className='grid col-span-1 m-10 space-y-2 p-10 bg-zinc-100 rounded-2xl text-center justify-center'>
                    <div className='relative text-center '>
                        <span className='absolute bg-purple-500 text-white content-center p-2 w-10 h-10 text-xl rounded-full text-center '>1</span>
                    </div>
                    <div className=' mx-auto'>
                        <img className='w-30 h-30 rounded-full object-center p-5 bg-purple-100 text-transparent ' src={user} alt="" />
                    </div>
                    <h1 className=' text-2xl font-semibold '>Create Account</h1>
                    <p className=' text-lg text-zinc-400 '>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='grid col-span-1 m-10 space-y-3 p-10 bg-zinc-100 rounded-2xl text-center justify-center'>
                    <div className='relative text-center '>
                        <span className='absolute bg-purple-500 text-white content-center p-2 w-10 h-10 text-xl rounded-full text-center '>2</span>
                    </div>
                    <div className=' mx-auto'>
                        <img className='w-30 h-30 rounded-full object-center p-5 bg-purple-100 text-transparent ' src={product} alt="" />
                    </div>
                    <h1 className=' text-2xl font-semibold '>Create Account</h1>
                    <p className=' text-lg text-zinc-400 '>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='grid col-span-1 m-10 space-y-3 p-10 bg-zinc-100 rounded-2xl text-center justify-center'>
                    <div className='relative text-center '>
                        <span className='absolute bg-purple-500 text-white  p-2 w-10 h-10 text-xl rounded-full text-center '>3</span>
                    </div>
                    <div className=' mx-auto'>
                        <img className='w-30 h-30 rounded-full  object-contain p-10 bg-purple-100 ' src={rocket} alt="" />
                    </div>
                    <h1 className=' text-2xl font-semibold '>Create Account</h1>
                    <p className=' text-lg text-zinc-400 '>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div>2</div>
                <div>3</div>
            </div>
        </div>
    )
}

export default GetStarted