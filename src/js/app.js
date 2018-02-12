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
            receivedMessage:"",
            name: "",
            messageToSend:"",
            account: {}
        };
        this.sendMessage = this.sendMessage.bind(this);
        this.onMessage = this.onMessage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        console.log('constructor this:%O',this);
    }

    componentDidMount(){
        LCC.addMessageHandler(this.onMessage);
    }
    onMessage(msg){
        let name = msg.name;
        console.log('received message name:%O',msg);
        this.setState({receivedMessage:msg.value});
    }
    sendMessage(event){
        console.log('message is being sent:%O',this.state.messageToSend);
        LCC.sendMessage({name:"General",value:this.state.messageToSend});
    }
    handleChange(e){
        this.setState({messageToSend : e.target.value});
    }

    render(){
        return(
            <div className="App">
                <h2> Welcome to LCC</h2>
                <div className="slds-card">
                <header className="slds-card__header slds-grid">
                    <div className="slds-media slds-media--center slds-has-flexi-truncate">
                        <div className="slds-media__figure">
                        </div>
                        <div className="slds-media__body">
                            <input type="text" defaultValue="LCC" value={this.state.messageToSend} onChange={this.handleChange} className="slds-input"  />
                            <h3 className="slds-text-heading--small slds-truncate"> Message that we received is {this.state.receivedMessage}</h3>
                        </div>
                    </div>
                    <div className="slds-no-flex">
                        <div className="slds-button-group">
                            <button className="slds-button slds-button--neutral slds-button--small" onClick={this.sendMessage}>Send</button>
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


