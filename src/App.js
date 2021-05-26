import React, { Component } from "react"; 

import Stopwatch from "./stopwatch";  
import Countdown from "./countdown";    

class App extends Component {   

  state={ 
    curTime : new Date().toLocaleString(),      
  }  
        
  render(){ 
    return( 
      <div className="App">
      <div className="App-title">Timers Demo</div>
      
      <div className="Current-Time">
        <p>{this.state.curTime}</p>
      </div>

      <div className="Timers">
        <Stopwatch />
        <Countdown />  
      </div>
    </div>
  );
  }
}

export default App;      
