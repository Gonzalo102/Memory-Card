
import React, { useEffect, useState } from "react";
import "./style/style.css";
import blueAmong from "./images/blue.jpeg";
import brownAmong from "./images/brown.jpeg";
import greenAmong from "./images/green.jpeg";
import greyAmong from "./images/grey.png";
import lightblueAmong from "./images/lightblue.png";
import limeAmong from "./images/Lime.png";
import orangeAmong from "./images/orange.png";
import pinkAmong from "./images/pink.png";
import whiteAmong from "./images/white.png";
import whiteSingerAmong from "./images/whitesinger.png";
import yellowAmong from "./images/yellow.png";
import redAmong from "./images/red.png";



function App() {

  
  const [items, setItems]=useState([
    {id:1, name: "Blue", clicked: false, image: blueAmong },
    {id:2, name: "Brown", clicked: false, image: brownAmong  },
    {id:3, name: "Green", clicked: false, image: greenAmong },
    {id:4, name: "Grey", clicked: false, image: greyAmong },
    {id:5, name: "Light Blue", clicked: false, image: lightblueAmong },
    {id:6, name: "Lime", clicked: false, image: limeAmong },
    {id:7, name: "Orange", clicked: false, image: orangeAmong },
    {id:8, name: "Pink", clicked: false, image: pinkAmong },
    {id:9, name: "White", clicked: false, image: whiteAmong },
    {id:10, name: "White Singer", clicked: false, image: whiteSingerAmong },
    {id:11, name: "Yellow", clicked: false, image: yellowAmong },
    {id:12, name: "Red", clicked: false, image: redAmong },
  ])
  
  const [count, setCount]=useState(0)
  const [bestScore, setBestScore]=useState(0)
   


   const shuffle = (arra1)=> {
    var ctr = arra1.length,
      temp,
      index;
    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
    }
    return arra1;
  }

  const handleShuffle = () => {
    const changes = shuffle([...items]);
    setItems(changes);
    console.log("Shuffle", items);
  }

  const incrementCount = () =>{
     setCount((prevState) =>  prevState + 1)
  }

  const endGame = () =>{
    console.log('the game is over')
  }

  const resetGame = () => {
    let newItems = [...items]
    newItems.map((item) => {
      item.clicked = false
    })
    setItems(newItems)
    setCount(0)
  }

  const handleClicked = (id) => {
    console.log(id);
    let newItems = [...items]
    newItems.map((item) => {
      const index = newItems.findIndex(i => i.id === id);
      if (item.id === id && item.clicked){     
        resetGame() 
        endGame()
         
      } else if(item.id === id) {
        newItems[index].clicked = true
        incrementCount()
        if (bestScore === 12){
          console.log('CONGRATULATE WINNER')
        }
        if (count >= bestScore){
          setBestScore((prevState) => prevState + 1)
        }
        setItems(newItems)
      }
    })
  }



  useEffect(() => {
    const mountArray = shuffle(items);
    setItems(mountArray);
    console.log('count:', count)
  }, [count]);



  return (
    <div className="game-container">
      <div className="scoreboard">
        <h3>Current Score - {count}</h3>
        <h3 id="score-divider">||</h3>
        <h3>Best Score - {bestScore}</h3>
      </div>
      <div className="among-container">
        {items.map((item, index) => (
          <div className="among-wrapper" onClick={()=>{handleShuffle(); handleClicked(item.id)}} key={item.id}>
            <img className="among" src={item.image} alt="logo"/>
            <h3> {item.name} </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
