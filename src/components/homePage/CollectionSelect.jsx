import { FaArrowRightLong } from "react-icons/fa6";
import { IoStarOutline } from "react-icons/io5";

const CollectionSelect = () => {
    return (
        <section className="container overflow-hidden">
            <div className="grid grid-cols-2 gap-5  mt-[167px] ">
                <div className="">
                    <img className="rounded-[24px] h-full w-full" src="https://i.postimg.cc/44MFVcrv/7b48d9aaffd4fe525467331635102855.png" alt="women" />
                </div>
                <div className="">
                    <div className="flex gap-7">
                        <h1 className="font-semibold text-[48px] leading-[58px] ">Set your Collection with our amazing selection!</h1>
                        <span className="rounded-full h-[40px]  w-[90px] -rotate-45 flex items-center justify-center bg-black">
                            <FaArrowRightLong size={22} className="text-white"></FaArrowRightLong>

                        </span>
                    </div>
                    <p className="text-gray-900 mb-[105px] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>

                    <div className="flex gap-4 ">
                        <img
                            className="rounded-[24px] w-full max-w-[220px] md:max-w-[270px] h-auto object-cover"
                            src="https://i.postimg.cc/rpKfDFQZ/9be1b5ccc8bc29c5cf9ce5f5c40894ff.png"
                            alt=""
                        />
                        <img
                            className="rounded-[24px] w-full max-w-[220px] md:max-w-[270px] h-auto object-cover"
                            src="https://i.postimg.cc/rpKfDFQZ/9be1b5ccc8bc29c5cf9ce5f5c40894ff.png"
                            alt=""
                        />

                    </div>
                </div>
            </div>

            {/* stars slider section  */}
            <section className=" -rotate-6 my-[100px]">
                <hr />
                <div className="flex items-center justify-center gap-9 ">
                    <div className="flex items-center justify-center gap-1 text-gray-600">
                        <IoStarOutline size={40}></IoStarOutline>
                        <p className="text-[38px] ">T-Shirt</p>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-gray-600">
                        <IoStarOutline size={40}></IoStarOutline>
                        <p className="text-[38px] ">Jeans</p>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-gray-600">
                        <IoStarOutline size={40}></IoStarOutline>
                        <p className="text-[38px] ">Shirt</p>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-gray-600">
                        <IoStarOutline size={40}></IoStarOutline>
                        <p className="text-[38px] ">Blazer</p>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-gray-600">
                        <IoStarOutline size={40}></IoStarOutline>
                        <p className="text-[38px] ">Sports</p>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-gray-600">
                        <IoStarOutline size={40}></IoStarOutline>
                        <p className="text-[38px] ">Hudy</p>
                    </div>
                </div>

                <hr />
            </section>
        </section>
    );
};

export default CollectionSelect;