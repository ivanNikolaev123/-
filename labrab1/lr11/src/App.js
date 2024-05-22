import './App.css';
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.png"
import PizzaCard from "./components/PizzaCard.js";
function App() {
  return (
    <div >
      <PizzaCard img={img1} title1="Пепперони" title2="Я хочу пиццы" cin="550" img2={img2}/>
    </div>
  );
}

export default App;