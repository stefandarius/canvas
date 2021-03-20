import logo from './logo.svg';
import './App.css';
import CanvasDraw from 'react-canvas-draw'

function App() {

    let savableCanvas = null;

    let canvas = "";

    const style = {
        button: {
            width: 100,
            height: 50,
            margin: 20
        }
    }

    return (
        <div className="App">
            <CanvasDraw ref={(canvas) => {
                savableCanvas = canvas;
            }} canvasWidth={1000} canvasHeight={700} brushRadius={3} lazyRadius={0} saveData={canvas}/>
            <button style={style.button} onClick={() => savableCanvas.undo()}>UNDO</button>
            <button style={style.button} onClick={() => savableCanvas.clear()}>CLEAR</button>
            <button style={style.button} onClick={() => console.log(savableCanvas.getSaveData())}>SAVE</button>
        </div>
    );
};

export default App;
