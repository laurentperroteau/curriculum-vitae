import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import './Tree.css';

import * as peopleActions from '../../actions/people-actions';

import PeopleList from './PeopleList';
import PersonInput from './PersonInput';

class TreeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'title'
      // people: []
    };
  }

  render() {
    return (
      <div id="jsTree" className="tree">
        <ul>
            <li 
                className="
                    tree__item
                    tree__item--root">
                <span 
                    className="
                        btn-tree
                        btn-tree--folder">
                    { this.state.title }
                </span>
                <ul>                
                    <li>level 1</li>
                </ul>
            </li>
        </ul>
      </div> 
    );
  }
}

TreeContainer.propTypes = {
  // title: PropTypes.string.isRequired
  // people: PropTypes.array.isRequired,
};

function mapStateToProps(state, props) {
  return {
    people: state.people
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(peopleActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeContainer);
