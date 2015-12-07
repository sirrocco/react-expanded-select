import React from 'react';
import Option from './SizePickerOption';

const propTypes = {
  sizes: React.PropTypes.array.isRequired,
  onSizeSelected: React.PropTypes.func,
  selectedSize: React.PropTypes.string
};

const defaultProps = {};

export default class SizePicker extends React.Component {
  constructor(props) {
    super(props);
  }

  sizeSelected(size) {
    const {onSizeSelected} = this.props;
    onSizeSelected(size);
    console.log(size);
  }

  render() {
    const {sizes, selectedSize} = this.props;

    var options = sizes.map((size)=> {
      return <Option size={size} key={size} selectedSize={selectedSize} onSelect={(size) => this.sizeSelected(size)}></Option>
    });

    return <ul>{options}</ul>
  }
}

SizePicker.propTypes = propTypes;
SizePicker.defaultProps = defaultProps;
