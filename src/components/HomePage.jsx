import '../App.css'
import bgimg from '../assets/bgimg.jpg'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export const HomePage = () => {
    useGSAP(() => {
        gsap.to(".txt",{
            opacity: 1,
            duration: 1,
            y: -40,
            
        })
    })
  return (
    <div id='home' className="w-[100%] h-[100vh] flex justify-start items-center bg-amber-300/10 bg-center bg-cover ">
        <div className="md:w-[60%] w-[80%] md:ml-[90px] ml-[20px]">
            <h1 className="txt opacity-0  md:text-7xl text-4xl font-bold text-white mt-[100px] md:mb-[40px] mb-[20px]">Adrar is a large rocky <br /> region in Mauritania.</h1>
            <p className="txt font-sans text-white text-xl md:mb-[40px] mb-[60px]">named for the Adrar Plateau. The capital is Atar. Other major towns include Choum, Chinguetti and ...</p>
            <a href='#places' type="button" className="txt text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300  rounded-lg text-sm font-semibold px-5 py-2.5 text-center inline-flex items-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">
                Places for you
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
        <img className="w-[100%] h-[100vh] absolute top-0 z-[-1] object-cover" src={bgimg} />
    </div>
  )
}
