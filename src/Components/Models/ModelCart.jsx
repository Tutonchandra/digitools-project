import { useState } from "react";
import { toast } from "react-toastify";


const ModelCart = ({ model, carts, setCarts }) => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const handleSubsription = () => {
        setIsSubscribed(true)

        const isFound = carts.find(item => item.id === model.id)
        if (isFound) {
            toast.error("Item already in Cart")
            return
        }

        setCarts([...carts, model])
        toast("Item added to Cart")
    }


    return (
        <div className='shadow-lg rounded-xl border overflow-hidden border-zinc-100'>
            <div className='bg-zinc-200 h-50 flex justify-center items-center '>
                <img src={model.image} className='w-40 h-40 object-contain ' alt="" />
            </div>
            <div className='p-4 space-y-3 '>
                <h3 className='text-2xl font-bold'>{model.title}</h3>
                <p className='line-clamp-2 text-md font-semibold'>{model.description}</p>
                <div><p className=' text-2xl font-bold'>${model.price}/month</p></div>

                <button onClick={handleSubsription} className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] justify-center w-full mt-2 px-4 py-2 rounded-md font-semibold text-md flex items-center gap-3   text-white">
                    {isSubscribed ? "Subscribed" : "Subscribe Now"}
                </button>
            </div>


        </div>
    );
};

export default ModelCart;