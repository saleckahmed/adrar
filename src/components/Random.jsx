import { RandomContent } from "../components/RandomContent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons'
import  ranImg1  from "../assets/ranImg1.jpg"
import  ranImg2  from "../assets/ranImg2.jpg"
import  ranImg3  from "../assets/ranImg3.jpg"
import  ranImg4  from "../assets/ranImg4.jpg"
import  ranImg5  from "../assets/ranImg5.jpg"
import  ranImg6  from "../assets/ranImg6.jpg"
const randomInfo = [
    {
        id: 1,
        img: ranImg1,
        loc: <FontAwesomeIcon icon={faLocationDot} />,
        gen: <FontAwesomeIcon icon={faUser} />,
        plc: "Oued Seguellil",
        name: "Abdelkader Ahmed",
    },
    {
        id: 2,
        img: ranImg2,
        loc: <FontAwesomeIcon icon={faLocationDot} />,
        gen: <FontAwesomeIcon icon={faUser} />,
        plc: "Teyaret",
        name: "Aichetou Amar",
    },
    {
        id: 3,
        img: ranImg3,
        loc: <FontAwesomeIcon icon={faLocationDot} />,
        gen: <FontAwesomeIcon icon={faUser} />,
        plc: "Zeglem",
        name: "Ahmed Banmou",
    },
    {
        id: 4,
        img: ranImg4,
        loc: <FontAwesomeIcon icon={faLocationDot} />,
        gen: <FontAwesomeIcon icon={faUser} />,
        plc: "Teyaret",
        name: "Aichetou Amar",
    },{
        id: 5,
        img: ranImg5,
        loc: <FontAwesomeIcon icon={faLocationDot} />,
        gen: <FontAwesomeIcon icon={faUser} />,
        plc: "Dam of 'hel ememe",
        name: "Esma Sidati",
    },{
        id: 6,
        img: ranImg6,
        loc: <FontAwesomeIcon icon={faLocationDot} />,
        gen: <FontAwesomeIcon icon={faUser} />,
        plc: "Oued Seguellil",
        name: "Mohamed Saleck",
    },{
        id: 7,
        img: ranImg1,
        loc: <FontAwesomeIcon icon={faLocationDot} />,
        gen: <FontAwesomeIcon icon={faUser} />,
        plc: "other place",
        name: "AbdelKader Ahmed",
    },{
        id: 8,
        img: ranImg1,
        loc: <FontAwesomeIcon icon={faLocationDot} />,
        gen: <FontAwesomeIcon icon={faUser} />,
        plc: "other place",
        name: "AbdelKader Ahmed",
    },{
        id: 9,
        img: ranImg1,
        loc: <FontAwesomeIcon icon={faLocationDot} />,
        gen: <FontAwesomeIcon icon={faUser} />,
        plc: "other place",
        name: "AbdelKader Ahmed",
    },{
        id: 10,
        img: ranImg1,
        loc: <FontAwesomeIcon icon={faLocationDot} />,
        gen: <FontAwesomeIcon icon={faUser} />,
        plc: "other place",
        name: "AbdelKader Ahmed",
    },
]
export const Random = () => {
  return (
    <div id='random'>
        <div className="w-[100%]  h-[60px] flex justify-start items-center bg-amber-600  text-white md:text-3xl text-2xl pb-[60px] pt-[40px] font-bold md:pl-[130px] pl-[40px]">
            <h1 className="">Random pictures </h1>
        </div>
        <div className='flex  flex-wrap justify-center gap-[5px] items-center bg-amber-600'>
            {randomInfo.map((Data) => {
                return(
                    <div key={Data.id}>
                        <RandomContent Data={Data}/>
                    </div>
                )
            })}
            
        </div>
    </div>
  )
}
