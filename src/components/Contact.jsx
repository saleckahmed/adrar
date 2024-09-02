import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";
export const Contact = () => {

  useEffect(() => {

    const footer = ['.foote1', '.foote2', '.foote3', '.foote4']
    footer.forEach(foote => {
      gsap.to(foote, {
        opacity: 1,
        duration: 1,
        y: -50,
        scrollTrigger: {
          trigger: foote, 
          start: "top bottom",
          end: "top top",
          toggleActions: "play none none reserve",
        }
      })
    });
  })

  useGSAP(() => {
   
       gsap.to(".footer", {
            opacity: 1,
            duration: 1,
            y: -50,
            scrollTrigger: {
                trigger: ".footer",
                start: "top bottom", 
                end: "top top",
                toggleActions: "play none none reverse",
            }
        }); 
    })
;
  return (

    <div id="contact">
        <div className="footer opacity-0 mt-[50px] w-[100%]  h-[150px] flex flex-wrap  items-center bg-white font-bold ">
            <div className="foote1 opacity-0  mt-[50px] lg:w-[20%] md:w-[50%] w-[100%] h-[200px] flex flex-col justify-center items-center">
              <h1 className="uppercase text-6xl">adrar</h1>
              <p className="tracking-[4px] uppercase">Mohamed Saleck</p>
            </div>
            <div className="foote2 opacity-0 mt-[50px] lg:w-[20%] md:w-[50%] w-[100%] h-[200px] flex flex-col justify-center items-center text-xl">
                <h1>Section</h1>
                <a className="text-amber-800 hover:text-amber-600" href="#home">Home</a>
                <a className="text-amber-800 hover:text-amber-600" href="#places">Places</a>
                <a className="text-amber-800 hover:text-amber-600" href="#random">Random</a>
            </div>
            <div className="foote3 opacity-0 mt-[50px] lg:w-[20%] md:w-[50%] w-[100%] h-[200px] flex flex-col justify-center items-center text-xl">
                <h1>Social Media</h1>
                <a className="text-blue-800 hover:text-blue-600" href="https://www.facebook.com/medsalek.ahmed.10?mibextid=LQQJ4d">FaceBook</a>
                <a className="text-green-700 hover:text-green-500" href="http://Wa.me/31312017">WhatsApp</a>
                <a className="text-red-700 hover:text-red-500" href="http://mohamedsalek043@gmail.com">Email</a>
            </div>
            <form className="foote4 opacity-0 mt-[50px] lg:w-[40%] md:w-[50%] w-[100%] h-[200px] flex flex-col justify-center items-center gap-3 text-xl">
                <input className="border-b-[1px] border-b-black text-lg rounded-lg h-[40px] font-semibold p-2" type="text" name="name" placeholder="Your name" />
                <input className="border-b-[1px] border-b-black text-lg rounded-lg h-[40px] font-semibold p-2" type="text" name="text" placeholder="your message"/>
                <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">Send</button>

            </form>
        </div>

    </div>
  )
}
