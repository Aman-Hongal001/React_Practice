import React from "react";
import Header from "../component/header";
import {blogs} from "../Data/blogs"
import { Link } from "react-router-dom";

export default function Blog() {
    
    let allBlogs = blogs.map((v,i)=>{
        return(
            <div className="blog_item" key={i}>
                <h3>{v.title}</h3>
                <p>
                    {v.body}
                </p>
                <button><Link to={`/blog/${v.id}`}>Read more</Link></button>
            </div>
        )
    })

  return(
    <div>
        <Header/>
        <h1>Blog page</h1>
        <div className="container">
            {allBlogs}
        </div>
    </div>
  );
}
