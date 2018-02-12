import React, {Component} from "react";
import ReactDOM from "react-dom";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";
import "../styles/custom.css";
import LCC from "lightning-container";

class App extends Component{
    //Constructor
    constructor(props){
        super(props);
        console.log('props');
        this.state = {
            name: "",
            account: {}
        };  
    }
    render(){
        return(
            <div className="App">
                <h2> Welcome to LCC</h2>
                <div className="slds-card">
                <header className="slds-card__header slds-grid">
                    <div className="slds-media slds-media--center slds-has-flexi-truncate">
                        <div className="slds-media__figure">
                            Test
                        </div>
                        <div className="slds-media__body">
                            <h3 className="slds-text-heading--small slds-truncate">Test App</h3>
                        </div>
                    </div>
                    <div className="slds-no-flex">
                        <div className="slds-button-group">
                            <button className="slds-button slds-button--neutral slds-button--small">New</button>
                            <button className="slds-button slds-button--neutral slds-button--small">
                                Show More
                            </button>
                        </div>
                    </div>
                  </header>
                </div>
            </div>
        );
    }
}//End of the component

ReactDOM.render(<App/>,document.getElementById("app"));
//export default App;


