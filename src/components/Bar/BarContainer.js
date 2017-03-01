import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

class BarContainer extends Component {

  constructor(props) {
    super(props);
    
    console.log(props);
  }

  render() {   
    return (
      <div 
          className="app__bar__top">  
          { this.props.activeFile }
      </div>    
    );
  }
}

BarContainer.propTypes = {
  activeFile: PropTypes.string.isRequired
};

function mapStateToProps(state, props) {
  return {
    activeFile: state.activeFile
  };
}

export default connect(mapStateToProps)(BarContainer);
