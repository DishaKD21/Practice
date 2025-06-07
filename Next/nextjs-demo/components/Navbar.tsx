import Link from "next/link";
import React from "react";
export default function Navbar(){
    return(
        <div>
            <div>
                <Link href="/">Landing</Link>
                <Link href="/home">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/parent/nested">nested</Link>
                <Link href="/">dynamic</Link>
                <Link href="/">dynamic nested</Link>
                <Link href="/">all_Segments_optional</Link>
                <Link href="/">Nested_notfound</Link>
                <Link href="/">Error</Link>
                <Link href="/">Parallel</Link>
                <Link href="/">Parallel_defaults</Link>
                <Link href="/">Intercept_routes</Link>
                <Link href="/">Intercept_root_route</Link>

            </div>
        </div>
    );
}
