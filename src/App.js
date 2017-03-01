import React, { Component } from 'react';

import './App.css';

import PeopleContainer from './components/PeopleContainer';
import BarContainer from './components/Bar/BarContainer';
import TreeContainer from './components/Tree/TreeContainer';

class App extends Component {
  constructor(props) {
    super(props);

    console.log( this );

    this.state = {
      fileName: 'nom du fichier'
    };
  }

  render() {

    return (
      <div className="app">
        <div className="app__bar">   
            <BarContainer />
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
            <TreeContainer />
            <div className="app__main__content">   
                <div className="editor-ctn">
                  <PeopleContainer />
                    {/*<div id="jsTab" className="tab"></div>
                    <div id="jsEditor" className="editor"></div>
                    <TreeContainer />*/}
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
