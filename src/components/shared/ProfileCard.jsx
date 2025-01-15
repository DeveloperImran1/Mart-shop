
const ProfileCard = ({ image }) => {
    return (
        <div>
            <img alt="product/image" src={image}
                className="w-[280px] h-[311px] mt-2 border  border-gray-300 rounded-[28px] " />
            <div className="flex items-center w-full justify-between mt-4">
                <div className="flex gap-1 items-center">
                    <p className="text-red-500">Up to 50% Off</p>
                </div>

                <div className="flex items-center gap-[10px]">
                    <p className="text-[1rem] font-semibold mt-1 text-black">$70.21</p>
                    <del className="text-[1rem] font-normal mt-1 text-gray-500 ">$80.50</del>
                </div>
            </div>

            <div className="flex items-center w-full justify-between mt-4">
                <div className="flex gap-1 items-center">
                    <p className="font-semibold">Check Pure Cotton  Shirt Cardigan</p>
                </div>

                <div className="flex items-center gap-[10px]">
                    <p className="bg-black p-2 rounded-full cursor-pointer "></p>
                    <p className="bg-red-500 p-2 rounded-full cursor-pointer "></p>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;