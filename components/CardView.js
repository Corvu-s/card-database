import { Context } from "../context/Store";
import { useContext, useEffect, useState } from "react";
import Link from "next/link"
export default function CardView() {
  const [state, dispatch] = useContext(Context); //important for global state
  const [cards, setCards] = useState([]); //set a refrence to the origional set of cards here, use this to
  const [filterCards, setFilterCards] = useState();
  async function getCards() {
    const res = await fetch(
      `https://api.magicthegathering.io/v1/cards?set=${state.set}`
    );
    const data = await res.json();
    //console.log(data.cards);
    setCards(data.cards);
  }
  useEffect(() => {
    getCards();
  }, [state.set]);

  useEffect(() => {
    ////*very important, makes sure cards is not one step behind! just use another useEffect with the state (cards) that you want to keep updated
    //console.log(cards);
    const dump = [];
    if (cards != undefined) {
      if (state.cardType == "" || state.cardType == "All") {
        setFilterCards(cards);
      } else {
        cards.map((card, index) => {
          card.types.map((type, index) => {
            if (type == state.cardType) {
              dump.push(card);
              //console.log(card);
            }
          });
        });
        setFilterCards(dump);
      }
    }
    //console.log("filter cards" + filterCards);
  }, [cards,state.cardType]);
  function defaultImage(){
    return(
      <img src="defaultCard.jpg" alt="default image"/>
    )
  }
  return (
    <div className="flex flex-wrap justify-center space-x-4">
 

      {filterCards == undefined ? (
        <p>Loading Cards</p>
      ) : (
        filterCards.map((item, index) => (
          <div
            key={index}
            className="max-w-md px-8 py-4 my-20 bg-white rounded-lg shadow-lg"
          >
            <div className="text-center ">
            <Link href="/HighlightCard">
              <a
                onClick={() => {
                  dispatch({type:"SET_SELECTED_CARD", data:{item}})
                }}
              >

                <img
                  className="max-w-md "
                  src={item.imageUrl}
                  alt="defaultCard"
                  onError={(e)=>{e.target.onerror = null; e.target.src="defaultCard.jpg"}}

                />
              </a></Link>
            </div>

            <div className="px-6 pt-4 pb-2">
              {item.colors != undefined ? (
                item.colors.map((color, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {color}
                  </span>
                ))
              ) : (
                <p>no colour</p>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
