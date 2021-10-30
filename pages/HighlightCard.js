import { Context } from "../context/Store";
import { useContext, useEffect, useState } from "react";
import Link from "next/link"
import Navbar from '../components/Navbar'
export default function HighlightCard(){

    const [state, dispatch] = useContext(Context); //important for global state
    const card = state.selectedCard.item//use this as a ref to the card
    console.log(card)

    return(
        <div>
            <Navbar/>
            <div><Link href="/"><a className="bg-transparent border border-black text-black  hover:bg-black hover:text-white text-center  px-4 rounded">Go Back</a></Link></div>
            <h2 className="text-5xl">{card.name}</h2>
            <p>Artist:{card.artist}</p>
            <img src={card.imageUrl} alt="Card Not Found"/>
            <h3>{card.originalText}</h3>
            <div className="flex flex-wrap justify-center space-x-4">
 

 {card.legalities == undefined ? (
   <p>Loading legalities</p>
 ) : (
   card.legalities.map((item, index) => (
     <div
       key={index}
       className="max-w-md px-8 py-4 my-20 bg-white rounded-lg shadow-lg"
     >
       <div className="text-center ">
        <h2>{item.format}:</h2>
        {item.legality =="Legal" ?(<p className="text-green-900 font-bold text-xl">{item.legality}</p>):(<p className="text-red-900 font-bold text-xl">{item.legality}</p>)}
        
       </div>


     </div>
   ))
 )}
</div>

        </div>
    )
}
