import Img1 from '../assets/img1.jpg';
import Img2 from '../assets/img2.jpg';
import Img3 from '../assets/img3.jpg';
import Img4 from '../assets/img4.jpg';
import Img5 from '../assets/img5.jpg';
import Img6 from '../assets/img6.jpg';
import Img7 from '../assets/img7.jpeg';
import Img8 from '../assets/img8.jpg';
import Img9 from '../assets/img9.jpg';
import '../app.css';
import { HomeContent } from './HomeContent';

const placesInfo = [
    {
    id: 1,
    img: Img1,
    title: "Adrar Plateau",
    btn: "https://en.wikipedia.org/wiki/Adrar_Plateau",
    Info: "The Adrar  is a highland natural and historical region of the Sahara Desert in northern Mauritania. The Adrar Region, an administrative division of Mauritania, is named after the traditional region. It is sometimes called Adrar Tamar to distinguish it from other areas called Adrar in the Sahara.",
    },
    {
    id: 2,
    img: Img2,
    title: "Ben Amera",
    btn: "https://en.wikipedia.org/wiki/Ben_Amera",
    Info: "Ben Amera is Afric largest monolith, rising 633m (2027ft) above the desert floor. It's the world's second largest monolith only behind Uluru, in Australia. Ben Amera is located in Mauritania, near the border with Western Sahara. It lies 4km north of the train track where the famous Iron Ore Train travels between Nouâdibhou and Choûm.",
  },
  {
  
    id: 3,
    img: Img3,
    title: "Chinguetti Mosque",
    btn: "https://en.wikipedia.org/wiki/Chinguetti_Mosque",
    Info: "is a mosque in Chinguetti, Adrar Region, Mauritania. It was an ancient center of worship created by the founders of the oasis city of Chinguetti in the Adrar region of Mauritania in the thirteenth or fourteenth century. The minaret of this ancient structure is supposed to be the second oldest in continuous use anywhere in the Muslim world.",
  },
  {
    id: 4,
    img: Img4,
    title: "Ouadane",
    btn: "https://en.wikipedia.org/wiki/Ouadane",
    Info: "is a small town in the desert region of central Mauritania, situated on the southern edge of the Adrar Plateau, 93 km northeast of Chinguetti. The town was a staging post in the trans-Saharan trade and for caravans transporting slabs of salt from the mines at Idjil.",
  },
  {
    id: 5,
    img: Img5,
    title: "Richat Structure",
    btn: "https://en.wikipedia.org/wiki/Richat_Structure",
    Info: "The Richat Structure, or Guelb er Richât is a prominent circular geological feature in the Adrar Plateau of the Sahara. It is located near Ouadane in the Adrar Region of Mauritania. In Hassaniya Arabic, rīšāt means feathers and it is also known locally in Arabic as tagense, referring to the circular opening of the leather pouch that is used to draw water from local wells.", 
  },
  {
    id: 6,
    img: Img6,
    title: "Oued Seguellil",
    btn: "https://en.wikipedia.org/wiki/Oued_Seguellil",
    Info: "Oued Seguellil (or Oued Séguélil or Oued Seguelil or Oued Seguellîl)  s a wadi in Mauritania. It begins in the Adrar Plateau and runs south-west passing through the town of Atar and getting lost in the surrounding sands.", 
  },
  {
    id: 7,
    img: Img7,
    title: "Tifoujar Pass",
    btn: "https://en.wikipedia.org/wiki/Tifoujar_Pass",
    Info: "Tifoujar Pass is a mountain pass in Mauritania. It is located in the Adrar Plateau, 400 km northeast of the capital Nouakchott. The pass, completely sandy, dominates an eponymous gorge which ends in the Oued el Abiod or White Valley on the eastern side and originates the erg Amatlich on its western slopes.", 
  },
  {
    id: 8,
    img: Img8,
    title: "Azougui",
    btn: "https://en.wikipedia.org/wiki/Azougui",
    Info: "Azougui was a town in north-western Mauritania, lying on the Adrar Plateau, north-west of Atar. In the eleventh century it was the first capital of the Almoravid dynasty,[1] who conquered a territory stretching from the Ghana Empire to Morocco and the Iberian Peninsula.",
    },
    {
    id: 9,
    img: Img9,
    title: "Terjit",
    btn: "https://en.wikipedia.org/wiki/Terjit",
    Info: "Terjit  is an oasis (in the proper sense: a desert spring or other water source), 45km by road south of Atar and popular with tourists in Mauritania. It nestles in a gorge on the western edge of the Adrar plateau with the palm grove stretching a few hundred meters alongside a stream which emerges from a spring. Terjit is part of the commune of Maaden in the Aoujeft Department",
  },

];

export const Home = () => {


    return (
        <div id='places'>
          <div className="w-[100%]  h-[60px] flex justify-start items-center bg-amber-600  text-white md:text-3xl text-2xl pb-[20px] pt-[40px] font-bold md:pl-[130px] pl-[40px]">
            <h1 className="">Places for you </h1>
          </div>
        {placesInfo.map((data) => {
            return(
                <div key={data.id} >
                    <HomeContent data={data}/>
                </div>
            )
        })}
        


       
        </div>
    );
}
