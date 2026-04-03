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
