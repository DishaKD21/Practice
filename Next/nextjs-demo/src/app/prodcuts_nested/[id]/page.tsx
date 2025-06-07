import Link from "next/link";
import React from "react";

function Product({ params }: { params: { id: string } }){
const {id} = params;
return(
    <div>
        <div>
            <Link href={`/products_nested/${id}/comments`} className="text-blue-500">
            comments
            </Link>
        </div>
    </div>
);
};
export default Product;
