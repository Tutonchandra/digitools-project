import { use } from 'react'


const Models = ({ modelPromise }) => {
    const models = use(modelPromise)
    console.log(models)


    return (
        <div className='py-20 '>

            <div className='text-center space-y-5'>
                <h2 className=' text-2xl md:text-4xl lg:text-7xl  font-semibold'>Premium Digital Tools</h2>
                <p>Choose from our curated collection of premium digital products designed
                    to boost your productivity and creativity.</p>
            </div>
            <div className=' bg-red-300 flex justify-center align-middle item-center container mx-auto pt-10 pb-4 space-x-10 gap-2  '>
                <button className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] mt-2 px-4 py-2 rounded-md font-semibold text-md flex items-center gap-3   text-white">
                    Products
                </button>
                <button className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] mt-2 px-4 py-2 rounded-md font-semibold text-md flex items-center gap-3   text-white">
                    Cart
                </button>
            </div>

            <div className=' container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {models.map(model =>
                    <div className=''>
                        <div className='shadow-lg rounded-xl border overflow-hidden border-zinc-100'>
                            <div className='bg-zinc-200 h-50 flex justify-center items-center '>
                                <img src={model.image} className='w-40 h-40 object-contain ' alt="" />
                            </div>
                            <div className='p-4 space-y-3 '>
                                <h3 className='text-2xl font-bold'>{model.title}</h3>
                                <p className='line-clamp-2 text-md font-semibold'>{model.description}</p>
                                <div><p className=' text-2xl font-bold'>${model.price}/month</p></div>

                                <button className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] justify-center w-full mt-2 px-4 py-2 rounded-md font-semibold text-md flex items-center gap-3   text-white">
                                    Subscribe Now
                                </button>
                            </div>


                        </div>

                    </div>
                )}
            </div>

        </div>
    )
}

export default Models;