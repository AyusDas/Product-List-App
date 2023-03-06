import React from "react";

export default function Search({ value, onChangeData }) {
    return <div>
                <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                <input type="text" value={value} onChange={onChangeData} className="ml-2 py-1 px-1 border border-[#1a1c1d] border-opacity-60 rounded-full focus:outline-none"/>
           </div>
}
