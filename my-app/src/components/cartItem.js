import React from "react";

export default function CardItem({product, removeItem}) {
    return <div className="py-10">
                <div className="bg-[#f8fafc] overflow-hidden max-w-sm border-2 border-gray-200 border-opacity-60 rounded">
                    <img className="lg:h-72 md:h-48 w-full" src={product.image} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xs mb-2">
                            <i class="mr-2 fa-solid fa-indian-rupee-sign"></i>
                            {product.price}<br/>
                            {product.title}
                        </div>
                        <button type="button" className="bg-[#4f46e5] text-white rounded-full px-3 py-1 uppercase text-xs" onClick={()=>removeItem(product)} >Remove</button>
                    </div>
                </div>
           </div>
}
