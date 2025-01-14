import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import Logo from "./Logo";

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';


const Navbar = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (dropDownMenuRef.current && !dropDownMenuRef.current.contains(e.target)) {
                setDropDownState(false);
            }
        };
        document.addEventListener('mousedown', closeDropDown);
        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);


    return (
        <nav className="">
            {/* navigation top section  */}
            <section className="container flex justify-between bg-primary">
                <div className="my-1">
                    <Logo></Logo>
                </div>
                <div className="relative flex justify-center items-center">
                    <div className="flex items-center gap-2 rounded-l-full py-2 bg-white px-6">
                        <p>All</p>
                        <IoIosArrowDown></IoIosArrowDown>
                    </div>
                    <input className="rounded-r-full w-[calc(100vw-70vw)] py-2 bg-white px-4 focus:outline-none border-l-2" placeholder="I’M Shopping For......" type="text" />

                    <div className="bg-primary p-2 rounded-full absolute top-[20px] right-[6px] ">
                        <IoSearch></IoSearch>
                    </div>
                </div>
                <div className=" flex justify-center items-center gap-6">
                    <div className="relative cursor-pointer ">
                        <svg width="22" height="22" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.45833 2.75807C6.45833 3.55198 5.81474 4.19557 5.02083 4.19557C4.22692 4.19557 3.58333 3.55198 3.58333 2.75807M2.11679 7.78932H7.92487C8.43811 7.78932 8.85417 7.381 8.85417 6.8773L8.25884 1.56014C8.25884 1.05645 7.84278 0.648125 7.32954 0.648125H2.59596C2.08273 0.648125 1.66667 1.05645 1.66667 1.56014L1.1875 6.8773C1.1875 7.381 1.60356 7.78932 2.11679 7.78932Z" stroke="#070706" stroke-width="0.71875" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className="bg-white text-[12px] px-[4px] rounded-full absolute bottom-[-8px] right-[-8px]">2</span>
                    </div>
                    <div className="relative  cursor-pointer">
                        <svg width="22" height="22" viewBox="0 0 35.0966 30.4123" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Icon" d="M9.49 1.6C11.61 1.6 13.65 2.44 15.15 3.94L17.49 6.28L19.84 3.94C20.58 3.17 21.46 2.56 22.43 2.14C23.41 1.73 24.46 1.5 25.52 1.5C26.58 1.49 27.64 1.69 28.62 2.09C29.6 2.49 30.5 3.09 31.25 3.84C32 4.59 32.59 5.48 33 6.47C33.4 7.45 33.6 8.5 33.59 9.56C33.58 10.63 33.36 11.68 32.94 12.65C32.52 13.63 31.91 14.51 31.15 15.25L17.49 28.91L3.84 15.25C2.34 13.75 1.5 11.71 1.5 9.59C1.5 7.47 2.34 5.44 3.84 3.94C5.34 2.44 7.37 1.6 9.49 1.6Z" stroke="#070706" stroke-opacity="1.000000" stroke-width="3.000000" stroke-linejoin="round" />
                        </svg>

                        <span className="bg-white text-[12px] px-[4px] rounded-full absolute bottom-[-8px] right-[-8px]">2</span>
                    </div>
                    <div className="flex justify-center items-center gap-1  cursor-pointer">
                        <svg width="22" height="22" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs />
                            <path id="Icon" d="M3.13 33.5C2.23 33.5 1.5 32.68 1.5 31.68C1.5 25.39 6.75 20.29 17.5 20.29C28.24 20.29 33.5 25.39 33.5 31.68C33.5 32.68 32.76 33.5 31.86 33.5L3.13 33.5ZM17.5 13.5C14.18 13.5 11.5 10.81 11.5 7.5C11.5 4.18 14.18 1.5 17.5 1.5C20.81 1.5 23.5 4.18 23.5 7.5C23.5 10.81 20.81 13.5 17.5 13.5Z" stroke="#070706" stroke-opacity="1.000000" stroke-width="3.000000" />
                        </svg>

                        <div className="flex flex-col ">
                            <span className="mb-[-7px]">Login</span>
                            <span className="">Register</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* navigation button section  */}
            <section className="container flex  items-center justify-between mt-[20px] ">
                <div className="relative " ref={dropDownMenuRef}>
                    <button onClick={() => setDropDownState(!dropDownState)} className="relative flex items-center gap-1 py-2 rounded-[30px] bg-[#F7F7F6] px-[10px] text-[20px] font-medium">
                        <span>Shop By Department</span>
                        <svg className={`${dropDownState ? '' : 'rotate-180'}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                    </button>
                    {dropDownState && (
                        <ul className="absolute top-10 z-10 space-y-2 rounded-lg bg-gray-700 p-2 text-gray-100">
                            <li className="px-3 hover:underline">
                                <Link href="#">Food</Link>
                            </li>
                            <li className="px-3 hover:underline">
                                <Link href="#">Transport</Link>
                            </li>
                            <li className="px-3 hover:underline">
                                <Link href="#">Management</Link>
                            </li>
                        </ul>
                    )}
                </div>
                <ul className="flex items-center justify-between gap-4 text-slate-900 dark:text-gray-100 lg:gap-6">
                    <li className="font-medium">
                        <Link href="#">Home</Link>
                    </li>
                    <li className="font-medium">
                        <Link href="#">Shop</Link>
                    </li>
                    <li className="font-medium">
                        <Link href="#">Page</Link>
                    </li>
                    <li className="font-medium">
                        <Link href="#">Product</Link>
                    </li>
                    <li className="font-medium">
                        <Link href="#">Blog</Link>
                    </li>
                    <li className="font-medium">
                        <Link href="#">Service</Link>
                    </li>

                </ul>

                <div className=" flex items-center justify-center text-[#3B3B34] gap-2">
                    <svg width="30.798340" height="30.800659" viewBox="0 0 30.7983 30.8007" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <desc>
                            Created with Pixso.
                        </desc>
                        <defs />
                        <path id="Icon" d="M25.13 28.71C24.43 29.45 23.62 29.8 22.55 29.8C22.44 29.8 22.33 29.8 22.23 29.79C20.19 29.66 18.29 28.86 16.87 28.18C12.98 26.31 9.57 23.64 6.73 20.26C4.39 17.44 2.82 14.84 1.79 12.04C1.15 10.33 0.91 9 1.02 7.75C1.08 6.95 1.39 6.28 1.96 5.71L4.31 3.37C4.64 3.06 5 2.89 5.35 2.89C5.78 2.89 6.13 3.15 6.35 3.37C6.36 3.37 6.37 3.38 6.37 3.39C6.79 3.78 7.19 4.18 7.61 4.62C7.82 4.83 8.04 5.05 8.26 5.28L10.14 7.15C10.87 7.88 10.87 8.55 10.14 9.28C9.94 9.48 9.75 9.67 9.55 9.87C8.97 10.46 9.42 10 8.83 10.54C8.81 10.55 8.8 10.56 8.79 10.57C8.2 11.16 8.31 11.74 8.44 12.13C8.44 12.15 8.45 12.17 8.46 12.19C8.94 13.37 9.63 14.48 10.67 15.8L10.68 15.81C12.58 18.14 14.58 19.96 16.78 21.35C17.06 21.53 17.35 21.67 17.63 21.81C17.87 21.93 18.11 22.05 18.31 22.17C18.33 22.19 18.36 22.21 18.39 22.22C18.62 22.34 18.84 22.39 19.07 22.39C19.64 22.39 20 22.04 20.11 21.92L21.46 20.58C21.69 20.34 22.06 20.06 22.5 20.06C22.92 20.06 23.27 20.33 23.49 20.56C23.49 20.57 23.49 20.57 23.5 20.58L27.29 24.35C27.99 25.05 27.29 26.5 27.29 26.5C27.29 26.5 25.55 28.21 25.13 28.71ZM16.7 6.88C18.5 7.19 20.13 8.04 21.44 9.34C22.74 10.64 23.59 12.27 23.9 14.07M16.97 1C20.18 1.54 23.09 3.05 25.42 5.36C27.74 7.68 29.25 10.59 29.79 13.79" stroke="#3B3B34" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round" />
                    </svg>
                    <p>Hot Line: </p>
                    <p className="font-semibold">+008836232213</p>
                </div>
            </section>
        </nav>
    );
};

export default Navbar;

