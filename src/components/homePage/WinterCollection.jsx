
const WinterCollection = () => {
    return (
        <div className="flex container mt-[100px] ">
            <div className="h-[660px] relative flex items-center justify-center border-2">
                <img className="object-fill h-full" src="https://i.postimg.cc/yN0wPCJT/698b12c41c52d05dcb0e7a702de4060a.png" alt="" />
                <div className="absolute right-[4%] top-[24%] bg-white flex flex-col items-center justify-center rounded-full p-[40px] gap-2 ">
                    <p className="text-[18px] font-medium">Sale Up to 50% Off</p>
                    <p className="text-[28px] font-semibold leading-6 ">Stock Clearance</p>
                    <p className="text-[80px] font-semibold">2024</p>
                    <div className="border-[2px] rounded-lg">
                        <button className=" py-3 px-9 text-black rounded-[26px] ">Shop Now</button>
                    </div>

                </div>
            </div>
            <div className="h-[660px] relative flex items-center justify-center border-2">
                <img className="object-fill h-full" src="https://i.postimg.cc/fTrnWKnY/f752dbe1f9bd7c981e1123b64ca71a4f.png" alt="" />
                <div className="absolute left-[4%] top-[34%]  flex flex-col items-start justify-start gap-2 ">
                    <p className="text-[18px] font-medium">Sale Up to 50% Off</p>
                    <p className="text-[56px] font-semibold leading-[62px] ">New Winter Collection 2024</p>
                    <div className="border-[2px] rounded-lg">
                        <button className=" py-3 px-9 bg-black text-white rounded-lg ">Shop Now</button>
                    </div>

                </div>
            </div>
         
        </div>
    );
};

export default WinterCollection;