import './App.css';
import CanvasDraw from 'react-canvas-draw'
import Toast from 'react-bootstrap/Toast'
import {useState} from "react";
import check from './check.png'

const App = () => {

    let savableCanvas = null;

    let canvas = "";

    const style = {
        button: {
            width: 100,
            height: 50,
            margin: 20
        }
    }

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("SAVED!\nCheck your downloads");

    const jumpTo = () => {
        setShowToast(true);
        setTimeout(() => {
            window.location.href = 'http://localhost:5000/';
        }, 5000);
    }

    return (
        <div className="App">
            <div
                aria-live="polite"
                aria-atomic="true"
                style={{
                    position: 'fixed',
                    minHeight: '100px',
                    width: "35%",
                    right: 10,
                    bottom: 80,
                    zIndex: 50
                }}
            >
                <Toast style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius: 10,
                    borderWidth: 5,
                    borderColor: '#000000'
                }} onClose={() => setShowToast(false)} show={showToast} delay={10000} autohide>
                    <Toast.Header closeButton={false}>
                        <img style={{height: "100px", width: "100px", marginLeft: 0}} src={check}  alt="..."/>
                    </Toast.Header>
                    <Toast.Body>
                        {toastMessage}
                    </Toast.Body>
                </Toast>
            </div>
            <CanvasDraw ref={(canvas) => {
                savableCanvas = canvas;
            }} canvasWidth={window.innerWidth} canvasHeight={window.innerHeight - 90} brushRadius={3} lazyRadius={0} saveData={canvas}/>
            <button style={style.button} onClick={() => savableCanvas.undo()}>UNDO</button>
            <button style={style.button} onClick={() => savableCanvas.clear()}>CLEAR</button>
            <button style={style.button} onClick={jumpTo}>SAVE</button>
        </div>
    );
};

export default App;
