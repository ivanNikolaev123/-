import React from "react";
import { useState } from "react";
import './PizzaCard.css';
function PizzaCard(props) {
const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(prev => prev + 1);
  }
  function decrement() {
    setCounter(prev => prev - 1);
  }
  function itog(){
 alert("Вы заказали пиццу в количестве " +counter+ " штук")
  }


  return (
    <div className="PizzaBlock">
      <img className="PictureBlock" src={props.img}/>
      <div className="NamePizza">{props.title1}</div>
      <div className="InfoBlock">{props.title2}</div>
      <div className="CinBlock">Цена: {props.cin} Рублей</div>
      <div className="ButtonsBlock">
      <button className="ButtonElement" onClick={decrement} >-</button>
      <div className="count">{counter}</div>
      <button className="ButtonElement" onClick={increment}>+</button>
      <button className="ButtonElement" onClick={itog}><img className="BueElement" src={props.img2}/></button>
      </div>

    </div>
  );
}

export default PizzaCard;