import React from "react";

function Comment({params}:{params:{id : string; commentId:string}}){
    const{id,commentId} = params;
    return(
        <div>
        Product: {id} & Comment : {commentId}
        </div>
    );
};
export default Comment;