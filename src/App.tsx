import React, {Component} from 'react';
import './App.scss';
import ButtonComponent from "./components/button/button.component";

class App extends Component {
    public render(): JSX.Element {
        return (
            <div className="App">
                <div style={{margin: "10px"}}>
                    <ButtonComponent style="primary">
                        Learn More! MORE STUFF
                    </ButtonComponent>
                </div>

                <div style={{margin: "10px"}}>
                    <ButtonComponent style="light">
                        Nelly
                    </ButtonComponent>
                </div>

                <div style={{margin: "10px"}}>
                    <ButtonComponent style={"transparent"}>
                        Beans
                    </ButtonComponent>
                </div>
            </div>
        );
    }
}

export default App;
