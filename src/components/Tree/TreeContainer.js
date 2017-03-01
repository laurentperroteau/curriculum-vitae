import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import './Tree.css';

import * as treeActions from '../../actions/tree-actions';

import TreeButton from './TreeButton';
// import PersonInput from './PersonInput';

class TreeContainer extends Component {
  constructor(props) {
    super(props);

    console.log( props );
  }

  render() {   
    return (
      <div className="tree">
        <ul>
          <li 
            className="
              tree__item
              tree__item--root">
            <span 
              className="
                btn-tree
                btn-tree--folder">
              { this.props.tree }
            </span>
            <ul>                
              <li>
                <TreeButton showFile={this.props.actions.showFile} />
              </li>
            </ul>
          </li>
        </ul>
      </div> 
    );
  }
}

TreeContainer.propTypes = {
  tree: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

// @notes: subscribe component to Redux store updates
function mapStateToProps(state, props) {
  return {
    tree: state.tree
  };
}

// @notes: list of "action creator" (factory that creates an action)
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(treeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeContainer);
