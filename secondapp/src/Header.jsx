// import React, { Children } from "react";
import './Header.css'

export default function Header(props){
    return(
        <div className="header">
            <h1>Header Inside header.jxs with passing parameter is : {props.num}</h1>
            {props.children}
        </div>
    )
}