import Link from "next/link";
import React from "react";
export default function Navbar(){
    return(
        <div className="bg-blue-900 flex rounted-b-3xl justify-between p-4">
            <div className="flex gap-4 text-sm">
                <Link href="/">Landing</Link>
                <Link href="/home">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/parent/nested">nested</Link>
                <Link href="/products">dynamic</Link>
                <Link href="/products_nested">dynamic-nested</Link>
                <Link href="/">all_Segments_optional</Link>
                <Link href="/">Nested_notfound</Link>
                <Link href="/queryParams">queryParams</Link>
                <Link href="/">Parallel</Link>
                <Link href="/">Parallel_defaults</Link>
                <Link href="/">Intercept_routes</Link>
                <Link href="/">Intercept_root_route</Link>

            </div>
        </div>
    );
}
