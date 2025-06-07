import Link from "next/link";
import React from "react";
function products_nested(){
    return(
        <div>
            products
            <Link href="/products_nested/1">1</Link>
            <Link href="/products_nested/2">2</Link>
        </div>
    );
};
export default products_nested;