import Link from "next/link";
import React from "react";
function Comments(){
    return(
        <div>
            Comments
            <Link href="/products_nested/1/comments/1">comment 1</Link>
            <Link href="/products_nested/2/comments/2">comment 2</Link>
        </div>
    );
}
export default Comments;