import React, { useEffect, useState } from "react";
// import { data } from "react-router-dom";
import { useLoaderData } from "react-router-dom";


function Github() {

    const data = useLoaderData()
    // const  [data,setData] = useState([])
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/rahulbelwal90')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);   
    //     })
    // }, [])

    return (
        <>
            <div className="text-center m-4 bg-gray-700 text-white p-4 text-3xl">
                GitHub Followers: {data.followers}
                <img className="rounded-full mx-auto block" src={data.avatar_url} alt="Git Profile Picture" width="200" height="350" />
            </div>
        </>
    )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/rahulbelwal90')
    return response.json()
}