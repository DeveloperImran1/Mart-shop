
// react icons
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";


const Footer = () => {
    return (
        <footer>
            <section className="bg-secondary mt-[80px] boxShadow rounded-xl w-full container pt-[76px] ">
                <div className="flex justify-between gap-[30px] flex-wrap w-full">

                    <div className="">
                        <div className="text-[27px] font-bold flex flex-col items-start justify-start playfair-display ">
                            <h2>Mart</h2>
                            <h2 className="text-primary mt-[-10px]">Shop</h2>
                        </div>

                        <div className="space-y-[12px] mt-[20px] ">
                            <p> <span className="text-[#57564A] ">Address:</span> 451 Wall Street, UK, London</p>
                            <p> <span className="text-[#57564A] ">E-mail:</span> example@info.com</p>
                            <p> <span className="text-[#57564A] ">Phone:</span> (064) 332-1233</p>
                        </div>

                        <div className="flex gap-[2px] flex-col text-text relative">
                            <label className="font-medium mt-[48px] ">subscribe to our newsletter</label>
                            <div className="relative">
                                <input type="email"
                                    className="py-2 px-4 w-full pr-[90px] rounded-full border border-gray-600 outline-none"
                                    placeholder="Your E-Mail Address" />

                                <span className="absolute right-2 top-3">
                                    <svg width="18.000000" height="16.007812" viewBox="0 0 18 16.0078" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <desc>
                                            Created with Pixso.
                                        </desc>
                                        <defs />
                                        <path id="Icon" d="M10.33 1L17 8L10.33 15M17 8L1 8" stroke="#33332E" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linecap="round" />
                                    </svg>

                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <h3 className="text-[1.2rem] font-semibold text-text mb-2">Our Store</h3>
                        <div className="flex text-black flex-col gap-[10px]">
                            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">New York</p>
                            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Las Vegas</p>
                            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Edinburgh</p>
                            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Chicago</p>
                            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">London SF</p>
                        </div>
                    </div>


                    <div className="">
                        <h3 className="text-[1.2rem] font-semibold text-text mb-2">Useful Links</h3>
                        <div className="flex text-black flex-col gap-[10px]">
                            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Privacy Policy</p>
                            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Returns</p>
                            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Terms & Conditions</p>
                            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Contact Us</p>
                            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Latest News</p>
                            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">London SF</p>
                        </div>
                    </div>


                    <div className="">
                        <h3 className="text-[1.2rem] font-semibold text-text mb-2">Footer Menu</h3>
                        <div className="flex text-black flex-col gap-[10px]">
                            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">New Collection</p>
                            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Instragram profile</p>
                            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Woman Dress</p>
                            <p className="text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200">Child Dress</p>
                        </div>
                    </div>



                    <div className="space-y-3">
                        <h3 className="text-[1.2rem] font-semibold text-text mb-2">Footer Menu</h3>
                        <div className="flex text-black items-center justify-center gap-[10px]">
                            <img className="rounded-lg h-[95px] w-[95px] " src="https://i.postimg.cc/C1GjR7Kc/078bd41078ddbb52489d9f4a3b99a0c7.png" alt="baby image" />
                            <span className="max-w-[150px] ">
                                <p className="text-text font-medium cursor-pointer transition-all duration-200">Cozy Knit Cardigan Sweater</p>
                                <p className="text-text text-[#47463E] cursor-pointer transition-all duration-200 mt-2">Aug 25 2024</p>
                            </span>
                        </div>
                        <div className="flex text-black items-center justify-center gap-[10px]">
                            <img className="rounded-lg h-[95px] w-[95px] " src="https://i.postimg.cc/wMZzmXMG/3ae22661e2f55f3babc9004780b7aa87.png" alt="baby image" />
                            <span className="max-w-[150px] ">
                                <p className="text-text font-medium cursor-pointer transition-all duration-200">Cozy Knit Cardigan Sweater</p>
                                <p className="text-text text-[#47463E] cursor-pointer transition-all duration-200 mt-2">Aug 25 2024</p>
                            </span>
                        </div>
                        <div className="flex text-black items-center justify-center gap-[10px]">
                            <img className="rounded-lg h-[95px] w-[95px] " src="https://i.postimg.cc/QNyhw3mJ/9dd81cce6d0b3a604cc76cccc60ee8ad.png" alt="baby image" />
                            <span className="max-w-[150px] ">
                                <p className="text-text font-medium cursor-pointer transition-all duration-200">Cozy Knit Cardigan Sweater</p>
                                <p className="text-text text-[#47463E] cursor-pointer transition-all duration-200 mt-2">Aug 25 2024</p>
                            </span>
                        </div>

                    </div>


                </div>


                <div
                    className="border-t border-gray-200 pt-[20px] mt-[40px] pb-[40px] flex items-center justify-between w-full flex-wrap gap-[20px]">

                    <p className="text-[0.9rem] text-gray-600">&copy; 2024Mart Shop Theme. All Rights Reserved. </p>

                    <div className="flex items-center gap-[10px] text-text">
                        <p className="text-[20px] font-medium">We Accepted:</p>
                        <img className="w-[67px] h-[36px] rounded" src="https://i.postimg.cc/Kv8QkXhw/717621d75dc2451c3e69be013afd7954.png" alt="payment method" />
                        <img className="w-[67px] h-[36px] rounded" src="https://i.postimg.cc/nVk0hFgq/9fbcaae3a66c7068d69f55c8f160724e.png" alt="payment method" />
                        <img className="w-[67px] h-[36px] rounded" src="https://i.postimg.cc/HkJ2zQxt/e4aec1a94dd383e39652eb98be91406f.png" alt="payment method" />
                        <img className="w-[67px] h-[36px] rounded" src="https://i.postimg.cc/VLZgX7Y6/fbbae74683115860400171f205006081.png" alt="payment method" />
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;

