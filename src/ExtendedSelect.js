import React from 'react';
import Option from './SelectOption';

const propTypes = {
  options: React.PropTypes.array.isRequired,
  onOptionSelected: React.PropTypes.func,
  selectedOption: React.PropTypes.string
};

const defaultProps = {};

export default class SizePicker extends React.Component {
  constructor(props) {
    super(props);
  }

  optionSelected(option) {
    const {onOptionSelected} = this.props;
    onOptionSelected(option);
  }

  render() {
    const {options, selectedOption} = this.props;

    var componentOptions = options.map((option)=> {
      return <Option option={option} key={option} selectedOption={selectedOption} onSelect={(opt) => this.optionSelected(opt)}></Option>
    });

    return <ul>{componentOptions}</ul>
  }
}

SizePicker.propTypes = propTypes;
SizePicker.defaultProps = defaultProps;
