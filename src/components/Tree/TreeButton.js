import React, {PropTypes, Component} from 'react';

class TreeButton extends Component {
  constructor(props) {
    super(props);

    this.onFileClick = this.onFileClick.bind(this);
  }

  onFileClick() {
    this.props.showFile('coucou file');
  }

  render() {
    return (
      <button onClick={this.onFileClick}>
        level 1
      </button>
    );
  }
}

TreeButton.propTypes = {
  showFile: PropTypes.func.isRequired
};

export default TreeButton;
