import './App.css';
import ToDo from './components/React';
import f3 from "./images/f3.png";
import f4 from "./images/f4.png";
import f5 from "./images/f5.png";
function App() {
  return (
    <div>
      <h1 class="title">Что вам необходимо?</h1>
      <div class="main_blocks">
          <ToDo title="Первый" img={f3} text='Текст для первого блока'/>
          <ToDo title="Второй" img={f4} text='Текст для второго блока'/>
          <ToDo title="Третий" img={f5} text='Текст для третьего блока'/>
      </div>
    </div>
  );
}

export default App;
