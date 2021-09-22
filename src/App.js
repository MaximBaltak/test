import './App.scss';
import Window from "./components/window/Window";

function App({openOrClose,value,valueList}) {
    console.log(openOrClose)
  return (
    <>
        {value===true ? <Window openClose={openOrClose} value={valueList}/>: <button onClick={openOrClose} className="button">Налоговый вычет</button>}

    </>
  );
}

export default App;
