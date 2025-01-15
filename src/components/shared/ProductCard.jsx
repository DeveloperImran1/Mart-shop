

// react icons
import { useState } from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";

const ProductCard = ({bgColor, image}) => {

    const [isFavorite, setIsFavorite] = useState(false);
    return (
        <div className="relative">
            <div style={{backgroundColor: bgColor}} className={`relative border  border-gray-300 rounded-[28px] p-5 mb-[140px] `}>

                {/* favorite icon */}
                <p className="border-[1px] absolute top-3 bg-white font-medium right-3 inline rounded-[16px]  py-1 px-3">Get 30% Off</p>
                <div className="bg-[#c3a3a8] rounded-full absolute top-[54px] right-3  cursor-pointer transition-all duration-300 p-2">

                    <LuShoppingBag className="text-[1rem] text-white" />
                </div>
                <div className="bg-[#c3a3a8] rounded-full absolute top-[94px] right-3  cursor-pointer transition-all duration-300 p-2">

                    <FaRegHeart onClick={() => setIsFavorite(!isFavorite)}
                        className={`${isFavorite ? "opacity-100 scale-[1] z-10 text-red-500" : "text-white"} text-[1rem] `} />
                </div>

                {/* product image */}
                <img alt="product/image" src={image}
                    className="w-[280px] h-[210px] mt-2" />

                {/* quick view button  */}
                <div className="absolute bottom-[-15px] left-[60px]  z-50 border-2 border-white border-b-0 rounded-[26px] ">
                    <button className="bg-black py-2 px-7 text-white rounded-[26px] ">Quick View</button>
                </div>

            </div>

            {/* product details */}
            <div className=" rounded-[20px] py-4 px-6 bg-white border-2 absolute bottom-1">
                <h3 className="text-[20px] font-semibold mt-1.5">Classic Denim Skinny Jeans</h3>

                <div className="flex items-center w-full justify-between mt-4">

                    <div className="flex gap-1 items-center">
                        <FaStar
                            className={`cursor-pointer text-yellow-400`}
                            size={16}
                        />
                        <p>4.8</p>
                        <p className="font-medium">(24)</p>
                    </div>

                    <div className="flex items-center gap-[10px]">
                        <p className="text-[1rem] font-semibold mt-1 text-black">$70.21</p>
                        <del className="text-[1rem] font-normal mt-1 text-gray-500 ">$80.50</del>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
