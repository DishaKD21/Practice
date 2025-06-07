import Link from "next/link";
import React from "react";
function Products(){
    return(
        <div>
            <Link href="/products/1">1</Link>
            <Link href="/products/2">2</Link>
        </div>
    );
};
export default Products;