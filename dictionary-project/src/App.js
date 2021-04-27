import { useEffect } from 'react';
import Search from './components/Search';
import D from "./images/d.png";
import I from "./images/i.png";
import C from "./images/c.png";
import T from "./images/t.png";
import i from "./images/i2.png";
import O from "./images/o.png";
import N from "./images/n.png";
import A from "./images/a.png";
import R from "./images/r.png";
import Y from "./images/y.png";

function App() {
  const loadEffect = () => {
    let title = document.getElementById('header-letters')
    title.style.marginTop = "20px";
  }

  useEffect(() => {
      loadEffect();
    }, []);

  return (
    <div className="wrapper">
      <header className="header" id="header-letters">
        <img src={D} alt=""/>
        <img src={I} alt=""/>
        <img src={C} alt=""/>
        <img src={T} alt=""/>
        <img src={i} alt=""/>
        <img src={O} alt=""/>
        <img src={N} alt=""/>
        <img src={A} alt=""/>
        <img src={R} alt=""/>
        <img src={Y} alt=""/>
      </header>
      <main>
        <Search />
      </main>
      <footer>
        <h1>React Dictionary App</h1>
        <p>Designed and coded by <a href="https://github.com/robynabe">Robyn Abe</a></p>
      </footer>
    </div>
  );
}

export default App;
