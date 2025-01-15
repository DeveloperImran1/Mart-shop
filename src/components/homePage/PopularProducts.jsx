import { useState } from "react";
import ProductCard from "../shared/ProductCard";
import SectionTitle from "../shared/SectionTitle";

const PopularProducts = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <section className="container">
            <div className="flex justify-between items-center ">
                <SectionTitle title="Most Popular Product"></SectionTitle>
                <ul className="flex items-center border-[1px] rounded-full p-1 relative border-gray-600">
                <div
                    className={`${(activeTab === 1 && "translate-x-[0px]") ||
                        (activeTab === 2 && "translate-x-[60px]") ||
                        (activeTab === 3 && "translate-x-[120px]") ||
                        (activeTab === 4 && "!w-[100px] translate-x-[180px]") ||
                        (activeTab === 5 && "!w-[100px] translate-x-[240px]") ||
                        (activeTab === 6 && "!w-[100px] translate-x-[300px]") || 
                        (activeTab === 7 && "!w-[100px] translate-x-[360px]") 
                        } !bg-black absolute !text-[#fff] h-[85%] w-[65px] transition duration-700 rounded-full border-transparent cursor-pointer`}
                ></div>
                <li
                    className={`${activeTab === 1 && " !text-[#fff]"
                        } px-3 py-2  text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
                    onClick={() => setActiveTab(1)}
                >
                    All
                </li>
                <li
                    className={`${activeTab === 2 && " !text-[#fff]"
                        } px-3 py-2  text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
                    onClick={() => setActiveTab(2)}
                >
                    T-Shirt
                </li>
                <li
                    className={`${activeTab === 3 && " !text-[#fff]"
                        } px-3 py-2  text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
                    onClick={() => setActiveTab(3)}
                >
                    Blazer
                </li>
                <li
                    className={`${activeTab === 4 && " !text-[#fff]"
                        } px-3 py-2  text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
                    onClick={() => setActiveTab(4)}
                >
                    Jeans
                </li>
                <li
                    className={`${activeTab === 5 && " !text-[#fff]"
                        } px-3 py-2  text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
                    onClick={() => setActiveTab(5)}
                >
                    Sports
                </li>
                <li
                    className={`${activeTab === 6 && " !text-[#fff]"
                        } px-3 py-2  text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
                    onClick={() => setActiveTab(6)}
                >
                    Shirts
                </li>
            </ul>
            </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ProductCard bgColor="#fbb5be" image="https://i.postimg.cc/XvMdKfW5/1cab1550f32615d09b99f529974d287d.png"></ProductCard>

          <ProductCard bgColor="#d1987c" image="https://i.postimg.cc/CKjDcRMQ/3733730b1782af4286e39b38cf52bf8a.png"></ProductCard>

          <ProductCard bgColor="#d3ced3" image="https://i.postimg.cc/ZnqdYj8G/625397df8518c5d2ac50d594e3d920ea.png"></ProductCard>

          <ProductCard bgColor="#e9a050" image="https://i.postimg.cc/9MC9KcrF/5310be07d91b6ed6996f1204236d6243.png"></ProductCard>

          <ProductCard bgColor="#867ab8" image="https://i.postimg.cc/pTCjt3FQ/ad203be125e861b767847c2840c9825e.png"></ProductCard>

          <ProductCard bgColor="#eea95c" image="https://i.postimg.cc/WbhkQWbr/18e25793be667b69c48f902a1d04b46b.png"></ProductCard>

          <ProductCard bgColor="#ca9f87" image="https://i.postimg.cc/d3SThdnL/64f710148fd92c40ce2ec32ae7432fd5.png"></ProductCard>

          <ProductCard bgColor="#eb8f92" image="https://i.postimg.cc/7PBzt8Dw/95dcfd450041d4e60a7925dfdd49d255.png"></ProductCard>
          </div>
        </section>
    );
};

export default PopularProducts;