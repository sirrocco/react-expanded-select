import React from 'react';

const propTypes = {
  option: React.PropTypes.string.isRequired,
  selectedOption: React.PropTypes.string,
  onSelect: React.PropTypes.func
};

export default class SizePicker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { option, onSelect, selectedOption } = this.props;

    let classes = [];

    if (selectedOption === option) {
      classes.push('selected');
    }

    return (
        <li
            onClick={() => onSelect(option)}
            className={classes.join(' ')}>
          <div className='size-selector-option'>
            {option}
          </div>
        </li>
    );
  }
}

SizePicker.propTypes = propTypes;
