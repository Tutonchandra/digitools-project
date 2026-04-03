import { LucideCheck } from "lucide-react";
import { use, useState } from "react";
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
        <div>
            <div className=' container mx-auto p-10 bg-white shadow-lg rounded-xl border overflow-hidden border-zinc-100'>
                <div className=' flex  p-4 h-20 justify-between items-center '>
                    <img src={model.image} className='w-20 h-20 bg-zinc-100 inline p-4 rounded-full object-contain ' alt="" />

                    <p className={`btn capitalize border-none  text-lg h-10   space-y-2 rounded-full ${model.tagType === "new"
                        ? 'bg-green-100 font-semibold text-green-400'
                        : model.tagType === "popular"
                            ? 'bg-purple-100 font-semibold text-purple-400'
                            : model.tagType === "best"
                                ? 'bg-yellow-100 font-semibold text-yellow-400'
                                : 'bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white'
                        }`}>
                        {model.tag}
                    </p>
                </div>
                <div className='p-4 space-y-4 '>
                    <h3 className='text-2xl font-semibold capitalize '>{model.title}</h3>
                    <p className='line-clamp-2 text-xl text-zinc-500 font-light mt-4'>{model.description}</p>
                    <div><p className=' text-4xl font-bold'>${model.price}<span className="text-sm font-light">/{model.period}</span></p></div>

                    <div>
                        <ul className="space-y-2">

                            {
                                model.features.map((f, i) => (
                                    <li key={i} className="flex gap-2 items-center text-zinc-500 text-xl">
                                        <LucideCheck color="#05f555" size={18} />
                                        {f}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <button onClick={handleSubsription} className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] justify-center w-full mt-2 px-4 py-2 rounded-md font-semibold text-md flex items-center gap-3   text-white">
                        {isSubscribed ? "Added to Cart" : "Buy Now"}
                    </button>
                </div>


            </div>
        </div>
    );
};

export default ModelCart;