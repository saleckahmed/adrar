import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { HomePage } from "./components/HomePage";
import { Navbar } from "./components/Navbar";
import { Random } from "./components/Random";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";



function App() {

  return (
    <> 
    <a href="home"><FontAwesomeIcon className="size-[40px] text-amber-600 fixed bottom-[40px] right-[40px] z-[99999] bg-white rounded-[50%]" icon={ faCircleChevronUp}/></a>
      <Navbar/>
      <HomePage/>
      <Home/>
      <Random/>
      <Contact/>
      
    </>
  )
}

export default App
