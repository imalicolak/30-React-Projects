import React from "react";
import Title from "../components/Title";

export default function RandomizeColor() {
  function handleClick(event) {
        console.log("Click");
        console.log(event.target);

        event.target.style.backgroundColor=getRandomColor();

        // To change title as button is clicked
        const title = document.querySelector("h1");

        title.style.color = getRandomColor();

    }

    const handleSetClick = (e) => {
      console.log(e.target);
      console.log(getRandomColor());
  
      let body = document.querySelector("body");
      body.style.background = getRandomColor();
  
      e.target.style.backgroundColor=getRandomColor();
      
      const title = document.querySelector("h1");
      title.style.color = getRandomColor();
      
    }

  function getRandomColor (){
    // HEX COLORS
    let letters = "0123456789ABCDEF";
    let color = "#";

    for (let i=0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)];

    }
    return color;

  }
  return (
    <div className="container" m-auto text-center>
      <Title text={"Randomize Color"} classes={"mb-4"} />

      <button
        className="btn btn-danger"
        onClick={
            (event) => handleClick(event)
        }
        > 
        Click Me!
        </button>
        <button className="btn btn-success" onClick={(handleSetClick)}> Click Me!! </button>
        <button className="btn btn-primary" onClick={(handleSetClick)}> Click Me!!! </button>
        <button className="btn btn-warning" onClick={(handleSetClick)}> Click Me!!!! </button>
    </div>
  );
}
