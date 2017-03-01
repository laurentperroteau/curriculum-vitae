import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

class BarContainer extends Component {

  render() {   
    return (
      <div 
          className="app__bar__top">  
          { this.props.tree }
      </div>    
    );
  }
}

BarContainer.propTypes = {
  tree: PropTypes.string.isRequired
};

function mapStateToProps(state, props) {
  return {
    tree: state.tree
  };
}

export default connect(mapStateToProps)(BarContainer);
