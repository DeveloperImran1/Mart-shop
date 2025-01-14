import { useCallback, useEffect, useState } from "react";
import ShopButton from "../buttons/ShopButton";

const HomePageBanner = () => {

    const [currentSlider, setCurrentSlider] = useState(0);
    // The slider images array
    const sliderImages = ['https://i.postimg.cc/C1GjR7Kc/078bd41078ddbb52489d9f4a3b99a0c7.png', 'https://i.postimg.cc/C1GjR7Kc/078bd41078ddbb52489d9f4a3b99a0c7.png', 'https://i.postimg.cc/C1GjR7Kc/078bd41078ddbb52489d9f4a3b99a0c7.png', 'https://i.postimg.cc/C1GjR7Kc/078bd41078ddbb52489d9f4a3b99a0c7.png', 'https://i.postimg.cc/C1GjR7Kc/078bd41078ddbb52489d9f4a3b99a0c7.png'];
    const prevSlider = () => {
        setCurrentSlider((currentSlider) => (currentSlider === 0 ? sliderImages.length - 1 : currentSlider - 1));
    };
    const nextSlider = useCallback(() => {
        setCurrentSlider((currentSlider) => (currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1));
    }, [sliderImages.length]);

    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [nextSlider, currentSlider]);



    return (
        <section className="bg-secondary mt-[20px] container flex flex-col lg:flex-row justify-between items-center">
            <div className="w-[45%] ">

                <p className="text-primary font-semibold text-[18px] ">Welcome to Baby Bliss!</p>
                <p className="text-[46px] font-semibold leading-[64px] my-[20px] ">Your One-Stop Shop for All Things Baby!</p>
                <p className=" font-semibold text-[18px] mb-[28px]">Starting From <span className="text-red-500  ">$83.99</span></p>

                <ShopButton></ShopButton>

                <div className="mt-[40px] flex justify-start items-center gap-3">
                    <svg width="94.023438" height="94.023438" viewBox="0 0 94.0234 94.0234" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <desc>
                            Created with Pixso.
                        </desc>
                        <defs />
                        <path id="Vector" d="M94.02 47.01L62.42 51.15L87.72 70.53L58.29 58.29L70.53 87.72L51.15 62.42L47.01 94.02L42.87 62.42L23.49 87.72L35.73 58.29L6.3 70.53L31.6 51.15L0 47.01L31.6 42.87L6.3 23.49L35.73 35.73L23.49 6.3L42.87 31.6L47.01 0L51.15 31.6L70.53 6.3L58.29 35.73L87.72 23.49L62.42 42.87L94.02 47.01Z" fill="#47463E" fill-opacity="1.000000" fill-rule="evenodd" />
                    </svg>
                    <div>
                        <p className="text-[18px] text-[#57564A] ">Summer Collection</p>
                        <p className="text-[20px] font-semibold max-w-[200px] ">Trendy and Classic for the New Season</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="relative mx-auto w-fit">
                    {/* arrow left */}
                    {/* <button onClick={prevSlider} className="absolute -left-6 top-1/2 flex h-6 w-6 items-center justify-center md:h-8 md:w-8"><svg viewBox="0 0 1024 1024" className="icon h-4 w-4 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg></button> */}

                    {/* arrow right<button onClick={nextSlider} className="absolute -right-6 top-1/2 flex h-6 w-6 items-center justify-center md:h-8 md:w-8"><svg viewBox="0 0 1024 1024" className="icon h-4 w-4 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg></button> */}

                    <div className="w-[470px] h-[400px] my-[100px] overflow-hidden ">
                        {/* slider container */}
                        <div className="flex  h-full transform-gpu duration-500 ease-linear" style={{ transform: `translateX(-${currentSlider * 100}%)` }}>
                            {/* sliders */}
                            {sliderImages.map((slide, inx) => (
                                <img key={inx} src={slide} className="mx-[2.5%] h-full min-w-[95%] rounded-2xl border-8 border-transparent object-cover" alt={`Slider - ${inx + 1}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePageBanner;


