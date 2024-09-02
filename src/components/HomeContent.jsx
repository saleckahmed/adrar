import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';

export const HomeContent = (props) => {
    const { data } = props;

    gsap.registerPlugin(ScrollTrigger);

    
    useEffect(() => {
        const targets = ['.targ1', '.targ2', '.targ3', '.targ4', '.targ5', '.targ6', '.targ7', '.targ8', '.targ9']
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

    <>
        <div className="w-[100%] bg-amber-600 flex justify-center">
           
            <div className={` opacity-0 targ${data.id} w-[80%] rounded-xl flex  bg-white flex-wrap justify-around items-center gap-5  relative pt-[15px] pb-[15px] ${data.id == "1" ? "mt-[80px]" : "mt-[40px]" }`}>
                <div className="relative overflow-hidden lg:w-[300px] sm:w-[500px] w-[95%] h-[300px]">
                    <img src={data.img} alt={data.title} className={`  w-[100%] h-[100%] object-cover absolute rounded-xl`} />
                </div>
                
                <div className={` md:w-[500px] w-[80%] flex md:flex-row flex-col  justify-center items-center text-xl text-black`}>
                    <p className='flex flex-col gap-4'>
                        <span className={` text-2xl font-semibold underline`}>{data.title}</span>
                        <span className="md:text-xl text-lg">{data.Info}</span>
                    </p>
                </div>
                <a  href={data.btn} type="button" className="txt  text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300  rounded-lg text-sm font-semibold px-5 py-2.5 text-center inline-flex items-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">
                    More info
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                
            </div>
            
        </div>

    </>
    );
};
