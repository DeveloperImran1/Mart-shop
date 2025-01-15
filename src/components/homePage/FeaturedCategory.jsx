
const FeaturedCategory = () => {
    return (
            <div className="flex mx-auto mt-[54px] w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] ">
                <div className="pl-4 sm:pl-8 lg:pl-12 py-[138px] pr-[100px] bg-[#070706] text-white flex flex-col items-start justify-center">
                    <h2 className="text-[36px] font-semibold">Featured Categories</h2>
                    <p className="mt-4 mb-[48px] ">Discover the most trending products in Pixio.</p>

                    <div className="flex items-center gap-6">
                        {/* left arrow  */}
                        <span>
                            <svg width="18.380951" height="16.008301" viewBox="0 0 18.381 16.0083" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Icon" d="M8.04 15L1.38 8L8.04 1M1.38 8L17.38 8" stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linecap="round" />
                            </svg>
                        </span>

                        {/* right arrow  */}
                        <span>
                            <svg width="18.380951" height="16.008301" viewBox="0 0 18.381 16.0083" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Icon" d="M10.33 1L17 8L10.33 15M17 8L1 8" stroke="#FFFFFF" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linecap="round" />
                            </svg>

                        </span>
                    </div>
                </div>

                {/* products part  */}
                <div className="bg-[#FFF7E3] pr-4 sm:pr-8 lg:pr-12 flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center ">
                        <img className="h-[234px] w-[234px] " src="https://i.postimg.cc/t4ckPG1r/55da4f313ebbe5ca65d2839518853127.png" alt="T-shirt" />
                        <p className="py-[10px] px-[36px] max-w-[130px] rounded-[20px] border-black font-semibold border-[1px] text-center">T-Shirt</p>
                    </div>
                    <div className="flex flex-col items-center justify-center ">
                        <img className="h-[234px] w-[234px] " src="https://i.postimg.cc/mDYy0cmq/61f0b93514640de017b0c0843d5961fc.png" alt="Jeans" />
                        <p className="py-[10px] px-[36px] max-w-[130px] rounded-[20px] border-black font-semibold border-[1px] text-center">Jeans</p>
                    </div>
                    <div className="flex flex-col items-center justify-center ">
                        <img className="h-[234px] w-[234px] " src="https://i.postimg.cc/tJ9NyXfg/712176f5ee9be96779aa88e78393e14d.png" alt="Jeans" />
                        <p className="py-[10px] px-[36px] max-w-[130px] rounded-[20px] border-black font-semibold border-[1px] text-center">Jeans</p>
                    </div>
                    <div className="flex flex-col items-center justify-center ">
                        <img className="h-[234px] w-[234px] " src="https://i.postimg.cc/g06DHt8G/cf17c1544b237332ad50f7d0833e5c63.png" alt="full Slave" />
                        <p className="py-[10px] px-[36px] max-w-[150px] rounded-[20px] border-black font-semibold border-[1px] text-center">Full Slave</p>
                    </div>
             
                 
                    <div className="flex flex-col items-center justify-center ">
                        <img className="h-[234px] w-[234px] " src="https://i.postimg.cc/fLnv27fm/947479518c28b350e6e401d786fd8adc.png" alt="Sweater" />
                        <p className="py-[10px] px-[36px] max-w-[130px] rounded-[20px] border-black font-semibold border-[1px] text-center">Sweater</p>
                    </div>
            

                </div>
            </div>
    );
};

export default FeaturedCategory;