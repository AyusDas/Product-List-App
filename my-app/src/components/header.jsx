import React from "react";
import Search from "./search";
import { useState } from "react";
import CardItem from "./cartItem";

export default function Header({ products, value, onChangeData, addedItems, removeItem }) {
    const [open, setOpen] = useState(false);
    return <header>
                <nav className="container flex items-start py-4 mt-4 sm:mt-12">
                    <div className="py-1 text-[#1f2937] text-2xl uppercase font-bold tracking-wide mx-5">
                        <i className="fa-brands fa-wpexplorer mr-5"></i>
                        Products
                    </div>
                    <ul className="hidden sm:flex flex-1 justify-end items-center uppercase gap-12 text-xs font-semibold">
                        <Search value={value} onChangeData={onChangeData} />
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer" onClick={() => setOpen(!open)} >My Cart</li>
                        <li className="cursor-pointer">Wishlist</li>
                        <button type="button" className="bg-[#e11d48] text-white rounded-md px-7 py-3 uppercase">Login</button>     
                    </ul>
                    <div className="flex sm:hidden flex-1 justify-end">
                        <i className="mr-2 text-2xl fa-solid fa-bars"></i>
                    </div>
                </nav>
                <div className="flex">
                    <div className={`bg-[#403f3f] ${open ? "w-screen h-screen" : "w-0 h-0"} duration-300 relative`}>                                                                                    
                        <div className="grid lg:grid-cols-4 lg:gap-2 md:grid-cols-2 md:gap-2 justify-center">
                            {addedItems.map((product) => (
                            <CardItem key={product.id} product={product} removeItem={removeItem}/>))}
                        </div>
                    </div>
                </div>
           </header>
}
