
import Navber from "./Components/Navber/Navber"

import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Banner/Banner";
import Models from "./Components/Models/Models";

const getModels = async() =>{
  const res = await fetch("/models.json")
  return(res.json())
}

const modelPromise = getModels()

function App() {

  
  return (
    
    <>
      <Navber/>
      <Banner/>
      <Models modelPromise ={modelPromise} />
      <Footer/>
     
    </>
  )
}

export default App;
