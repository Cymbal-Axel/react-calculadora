import Display from "./Display.js";
import PanelDeBotones from "./PanelDeBotones.js";
import {Component} from "react";
import operaciones from "../logic/operaciones.js"
import "./App.css";

class App extends Component {

  state = {
    total: null,
    siguiente: null,
    operador: null

  }

  handleClick = nombreDeBoton => this.setState(operaciones(this.state, nombreDeBoton))

  render(){
    return (
      <div className="component-app">
        <Display value={this.state.siguiente || this.state.total || "0"}/>
        <PanelDeBotones clickHandle={this.handleClick}/>
      </div>
    );
  }
}

export default App;
