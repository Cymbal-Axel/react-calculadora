import Display from "./Display.js";
import PanelDeBotones from "./PanelDeBotones.js";
import {Component} from "react";

class App extends Component {

  state = {
    total: null,
    siguiente: null,
    operador: null

  }

  render(){
    return (
      <div className="App">
        <Display value={this.state.siguiente || this.state.total || "0"}/>
        <PanelDeBotones />
      </div>
    );
  }
}

export default App;
