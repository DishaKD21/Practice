import React from "react";
function Nested({params}:{params:{id:string}}){
    const {id}= params;
    return(
        <div className="">
            Product: {id}
        </div>
    );
};
export default Nested;