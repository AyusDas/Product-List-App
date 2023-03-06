import React from "react";
import Card from "./card";
export default function CardBody({products, addItem, removeItem}) {
    return <div className="grid lg:grid-cols-4 lg:gap-2 md:grid-cols-2 md:gap-2 justify-center">
                {products.map((product) => (
                <Card key={product.id} product={product} addItem={addItem}/>))}
           </div>
}
