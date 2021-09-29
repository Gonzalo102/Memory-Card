
import React, { useEffect, useState } from "react";

function App() {

  
  const [items, setItems]=useState([
    {id:1, name: "cat", clicked: false },
    {id:2, name: "dog", clicked: false },
    {id:3, name: "hamster", clicked: false },
    {id:4, name: "lizard", clicked: false }
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
    <div>
      {items.map((item, index) => (
        <div onClick={()=>{handleShuffle(); handleClicked(item.id)}} key={item.id}>
          <img></img>
          <h2> {item.name} </h2>
        </div>
      ))}
      <h1>Current Score - {count}</h1>
      <h1>Best Score - {bestScore}</h1>
    </div>
  );
}

export default App;
