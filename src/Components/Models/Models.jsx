import { use, } from 'react'
import ModelCart from './ModelCart';


const Models = ({ modelPromise, carts, setCarts }) => {
    const models = use(modelPromise)

    return (
        <div className='py-20 '>

            
            

            <div className=' container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {models.map(model =>
                    <ModelCart key={model.id} model={model} carts = {carts} setCarts ={setCarts}/>
                )}
            </div>

        </div>
    )
}

export default Models;
{/* <div className='  flex justify-center align-middle item-center container mx-auto pt-10 pb-10 space-x-10 gap-2  '>
                <button className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] mt-2 px-4 py-2 rounded-md font-semibold text-md flex items-center gap-3   text-white">
                    Products
                </button>
                <button className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] mt-2 px-4 py-2 rounded-md font-semibold text-md flex items-center gap-3   text-white">
                    Cart
                </button>
            </div> */}