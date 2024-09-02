import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';


export const RandomContent = (props) => {
    const { Data } = props;

    gsap.registerPlugin(ScrollTrigger);

    
    useEffect(() => {
        const targets = ['.tar1', '.tar2', '.tar3', '.tar4', '.tar5', '.tar6', '.tar7', '.tar8', '.tar9', '.tar10']
        targets.forEach((target) => {
           gsap.to(target, {
                opacity: 1,
                duration: 1,
                y: -50,
                scrollTrigger: {
                    trigger: target,
                    start: "top bottom", 
                    end: "top top",
                    toggleActions: "play none none reverse",
                }
            }); 
        })
    });
  return (
    
        <div className="w-[100%]  grow-0 basis-80">
           
           <div className={`opacity-0 tar${Data.id} w-[300px] rounded-xl flex flex-col bg-white flex-wrap justify-around items-center gap-5  relative pt-[15px] pb-[15px] mt-[40px]`}>
               <div className="relative overflow-hidden w-[280px] h-[280px] ">
                   <img src={Data.img} alt={Data.plc} className={`  w-[100%] h-[100%] object-cover absolute rounded-xl`} />
               </div>
               
               <div className={` w-[300px] flex  flex-col  justify-center items-center text-xl text-black`}>
                   <div className='w-[90%] flex flex-col gap-2 '>
                       <p className={`flex gap-3 text-2xl font-semibold items-center`}>{Data.loc}{Data.plc}</p>
                       <p className="md:text-lg text-sm flex gap-3 items-center">{Data.gen}{Data.name}</p>
                   </div>
               </div>
            </div>
        </div>
            
  )
}
