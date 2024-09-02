import gsap  from "gsap"
import { useGSAP } from "@gsap/react"

export const Navbar = () => {
    useGSAP(() => {
        gsap.to(".head",{
            opacity: 1,
            duration: 1,
            y: -40
        })
    })
    
  return (
    <div>
        <header className="head opacity-0 z-[99] font-sans flex flex-col md:flex-row justify-between text-white w-[100%] h-[60px] items-center md:pl-[100px] md:pr-[100px] pr-[20px] pl-[20px]  absolute top-[40px]">
            <h1 className="text-3xl font-bold ">ADRAR</h1>
            <nav className="flex md:justify-between justify-around md:w-[300px] w-[100%] font-semibold  ">
                <a href='#places' className="py-2">Places</a>
                <a href='#random' className="py-2">Random</a>
                <a href='#contact' className="py-2">Contact</a>
            </nav>
        </header>
    </div>
  )
}
