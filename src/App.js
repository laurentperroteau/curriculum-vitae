import React, { Component } from 'react';
import './App.css';
import PeopleContainer from './components/PeopleContainer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileName: 'nom du fichier'
    };
  }

  render() {

    return (
      <div className="app">
        <div className="app__bar">   
            <div 
                className="app__bar__top">  
                { this.state.fileName }
            </div>
            <div>   
                <ul className="list list--inline">
                    <li>File</li>
                    <li>Edit</li>
                    <li>Selection</li>
                    <li>Find</li>
                    <li>View</li>
                    <li>Goto</li>
                    <li>Tools</li>
                    <li>Project</li>
                    <li>Preferences</li>
                    <li>Help</li>
                </ul>
            </div>
        </div>
        <div className="app__main">   
            <div id="jsTree" className="tree"></div>
            <div className="app__main__content">   
                <div className="editor-ctn">
                    <div id="jsTab" className="tab"></div>
                    {/*<div id="jsEditor" className="editor"></div>
                    <PeopleContainer />*/}
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
