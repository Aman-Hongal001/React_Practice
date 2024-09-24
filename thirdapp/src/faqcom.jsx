import React from "react";
import './App.css';
import { faqQuestions } from "./data/faq";
import { useState } from "react";

export default function FaqComp(){
    
    let [currentID,setcurrentID]=useState(faqQuestions[0].id);

    let items = faqQuestions.map((itemsData,i)=>{
        let dataDetails={
            currentID,
            setcurrentID,
            itemsData,
        }
        return(
            <FaqItemsHere dataDetails={dataDetails} key={i}/>
        )
    })


    return(
        <div>
            <h1>FAQs from component props drilling</h1>
            <div className="faqDiv">
                {items}
            </div>
        </div>
    )
}

function FaqItemsHere({dataDetails}){
    return(
        <div className="faqitems">
            <h2 onClick={()=>dataDetails.setcurrentID(dataDetails.itemsData.id)}>{dataDetails.itemsData.question}</h2>
            <p className={dataDetails.currentID===dataDetails.itemsData.id ? 'faqAnsShow':''}>{dataDetails.itemsData.answere}</p>
        </div>
    );
}