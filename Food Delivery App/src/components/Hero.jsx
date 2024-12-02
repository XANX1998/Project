import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const Hero = () => {
  const imgData = [
    {
      url: "https://images8.alphacoders.com/406/thumb-440-406053.webp",
    },
    {
      url: "https://images3.alphacoders.com/130/thumbbig-1305194.webp",
    },
    {
      url: "https://images6.alphacoders.com/327/thumb-440-327004.webp",},
      {url:"https://images5.alphacoders.com/433/thumb-440-433534.webp",},

   {url:"https://images8.alphacoders.com/405/thumb-440-405724.webp",} ,
  ];

  const [slider, setSlider] = useState(0);

  const handlePlus = () => {
    setSlider(slider === imgData.length - 1 ? 0 : slider + 1);
  };

  const handleMinus = () => {
    setSlider(slider === 0 ? imgData.length - 1 : slider - 1);
  };
  useEffect(
    ()=>{
        const sliderClear=setInterval(()=>{
            handlePlus();
        },2000)
        return()=>clearInterval(sliderClear)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slider])

  return ( 
    <>
    <div className="mt-[100px]">
      <div className="w-[90%] mx-auto h-[80vh] my-5 relative"> 
        
       { 
       imgData.map((item, i)=>
        ( <div key={i} className={`${slider===i? "block":"hidden"}`}><img src={item.url} alt="" className="w-[100vw] h-[80vh] rounded-2xl object-cover"/></div> 

        )
    ) 
       }
      <div className="w-full h-[80vh] mx-auto bg-black opacity-50 absolute top-0 left-0 rounded-2xl"></div>
      <p className="absolute top-[50%] text-center w-full text-white font-semibold text-[30px] ">Delighting Your Tastebuds, One Dish at a Time...!!!</p>

        
        <div className="text-white flex justify-between w-full px-5 absolute top-[50%]">
          <FaChevronLeft
            size={100}
            onClick={handleMinus}
            className="cursor-pointer"
          />
          <FaChevronRight
            size={100}
            onClick={handlePlus}
            className="cursor-pointer"
          />
            </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
