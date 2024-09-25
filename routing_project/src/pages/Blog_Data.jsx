import React from "react";
import Header from "../component/header";
import { useLocation } from "react-router-dom";
import { blogs } from "../Data/blogs";

export default function Blog_Data() {
    let uselocation = useLocation();
    let currentId = uselocation.pathname.split('/')[2];
    let data = blogs.filter((v)=>v.id==currentId)[0];
    console.log(data)
  return( 
        <div>
            <Header/>
            <h1>{data.title}</h1>
        </div>
    );
}
