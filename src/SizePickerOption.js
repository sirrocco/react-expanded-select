import React from 'react';

const propTypes = {
  size: React.PropTypes.string.isRequired,
  selectedSize: React.PropTypes.string,
  onSelect: React.PropTypes.func
};

export default class SizePicker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { size, onSelect, selectedSize } = this.props;

    let classes = [];

    if (selectedSize === size) {
      classes.push('selected');
    }

    return (
        <li
            onClick={() => onSelect(size)}
            className={classes.join(' ')}>
          <div className='size-selector-option'>
            {size}
          </div>
        </li>
    );
  }
}

SizePicker.propTypes = propTypes;
