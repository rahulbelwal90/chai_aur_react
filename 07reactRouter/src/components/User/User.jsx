import React from "react";
import { useParams } from "react-router-dom";


function User() {
    const { userid } = useParams()
    return (
        <>
            <div className="text-center bg-gray-700 text-yellow-500 text-2xl">User:{userid} </div>
        </>
    )
}

export default User;