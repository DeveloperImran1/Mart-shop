import SectionTitle from "../shared/SectionTitle";
import { IoIosArrowForward } from "react-icons/io";

const BlockBusterDeals = () => {
    return (
        <section className="container my-[120px] ">
            <div className="flex justify-between items-center mb-[60px] ">
                <SectionTitle title="Blockbuster deals"></SectionTitle>
                <p className="flex gap-2 items-center font-semibold">
                    <span>See All</span>
                    <IoIosArrowForward></IoIosArrowForward>
                </p>
            </div>

            {/* image section  */}
            <div className="flex  gap-5 ">
                <div className="h-[360px] relative border-2 rounded-3xl bg-[#e7b88b] w-full max-w-[400px]">
                    {/* Image Positioned in Bottom Left */}
                    <img
                        className="h-full w-auto absolute left-[-35px] overflow-hidden bottom-0 object-cover"
                        src="https://i.postimg.cc/bJG5VGwk/8be026a247eb82ae1400617ab4a7ef6d.png"
                        alt="Winter Collection"
                    />

                    {/* Text Content */}
                    <div className="absolute right-0 bottom-[20%] flex flex-col items-center justify-center gap-2 px-4">
                        <p className="text-[18px] font-medium bg-white rounded-[4px] p-2 text-[#47463E]">
                            Sale Up to 50% Off
                        </p>
                        <p className="text-[28px] font-semibold leading-[36px] text-center">
                            Winter Collection
                        </p>
                        <p className="text-[35px] md:text-[80px] font-semibold leading-[62px] text-center my-3">
                            2024
                        </p>
                        <div className="border-2 border-black rounded-[22px]">
                            <button className="py-3 px-9 text-black">Collect Now</button>
                        </div>
                    </div>
                </div>

                <div className="h-[360px] relative border-2 rounded-3xl bg-[#aa88d7] w-full max-w-[400px]">
                    {/* Image Positioned in Bottom Left */}
                    <img
                        className="h-full w-auto absolute left-[-35px] overflow-hidden bottom-0 object-cover"
                        src="https://i.postimg.cc/sx7NytS2/cf8d56c017d4f6e5eb647f3f23b81242.png"
                        alt="Winter Collection"
                    />

                    {/* Text Content */}
                    <div className="absolute right-0 bottom-[20%] flex flex-col items-center justify-center gap-2 px-4">
                        <p className="text-[18px] font-medium bg-white rounded-[4px] p-2 text-[#47463E]">
                            Sale Up to 50% Off
                        </p>
                        <p className="text-[32px] my-3 font-semibold leading-[36px] text-center">
                        Luxury Shirt
                        </p>
                        {/* <p className="text-[35px] md:text-[80px] font-semibold leading-[62px] text-center my-3">
                            2024
                        </p> */}
                        <div className="border-2 border-black rounded-[22px]">
                            <button className="py-3 px-9 text-black">Collect Now</button>
                        </div>
                    </div>
                </div>
                <div className="h-[360px] relative border-2 rounded-3xl bg-[#ecacb7] w-full max-w-[400px]">
                    {/* Image Positioned in Bottom Left */}
                    <img
                        className="h-full w-auto absolute left-[-35px] overflow-hidden bottom-0 object-cover"
                        src="https://i.postimg.cc/KzdH6Z1V/7f18a06b297642cb12bfef0329cf5783.png"
                        alt="Winter Collection"
                    />

                    {/* Text Content */}
                    <div className="absolute right-0 bottom-[20%] flex flex-col items-center justify-center gap-2 px-4">
                        <p className="text-[18px] font-medium bg-white rounded-[4px] p-2 text-[#47463E]">
                            Sale Up to 50% Off
                        </p>
                        <p className="text-[28px] font-semibold leading-[36px] text-center">
                        Summer
                        </p>
                        <p className="text-[35px] md:text-[80px] font-semibold leading-[62px] text-center my-3">
                            2024
                        </p>
                        <div className="border-2 border-black rounded-[22px]">
                            <button className="py-3 px-9 text-black">Collect Now</button>
                        </div>
                    </div>
                </div>
        
            </div>

        </section>
    );
};

export default BlockBusterDeals;