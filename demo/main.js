const React = require('react');
const ReactDOM = require('react-dom');
const {ExtendedSelect} = require('../dist/index.js');

class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      selectedSize: null,
    };
  }

  sizeSelected(size) {
    this.setState({selectedSize: size});
  }

  render() {
    return (
        <div>
          <div id='sizePicker'>
            <ExtendedSelect
                options={this.state.sizes}
                onOptionSelected={(size) => this.sizeSelected(size)}
                selectedOption={this.state.selectedSize || 'M'}
            />
          </div>
        </div>
    );
  }
}

ReactDOM.render(
    <Demo />,
    document.getElementById('demo')
);
