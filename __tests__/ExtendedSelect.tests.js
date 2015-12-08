jest.dontMock('../src/index');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const {ExtendedSelect} = require('../src/index');

describe('Extended Select', () => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  it('renders all select options', () => {

    let renderedSelect = TestUtils.renderIntoDocument(
        <ExtendedSelect options={sizes}
        />
    );

    let extendedSelect = ReactDOM.findDOMNode(renderedSelect);
    let lis = extendedSelect.querySelectorAll('li');
    expect(lis.length).toEqual(5);
  });

  it('renders all select options once', () => {

    let renderedSelect = TestUtils.renderIntoDocument(
        <ExtendedSelect options={sizes}
        />
    );

    let extendedSelect = ReactDOM.findDOMNode(renderedSelect);
    let lis = extendedSelect.querySelectorAll('li');

    for (let i = 0; i < lis.length; i++) {
      let li = lis[i];
      expect(li.textContent).toEqual(sizes[i]);
    }
  });

  it('renders with no options selected', () => {


    let renderedSelect = TestUtils.renderIntoDocument(
        <ExtendedSelect options={sizes}
        />
    );

    let extendedSelect = ReactDOM.findDOMNode(renderedSelect);
    let lis = extendedSelect.querySelectorAll('li.selected');

    expect(lis.length).toEqual(0);
  });

  it('renders with a preselected option', () => {

    let selectedSize = 'L';

    let renderedSelect = TestUtils.renderIntoDocument(
        <ExtendedSelect options={sizes} selectedOption={selectedSize}
        />
    );

    let extendedSelect = ReactDOM.findDOMNode(renderedSelect);
    let lis = extendedSelect.querySelectorAll('li.selected');

    expect(lis.length).toEqual(1);
  });

  it('can click to select an option', () => {

    let selectedSize = null;

    let selectComponent = TestUtils.renderIntoDocument(
        <ExtendedSelect options={sizes}
                        selectedOption={selectedSize}
                        onOptionSelected={(selected) => selectedSize = selected}
        />
    );

    let domSelect = ReactDOM.findDOMNode(selectComponent);
    let lis = domSelect.querySelectorAll('li.selected');
    expect(lis.length).toEqual(0);

    let secondOption = TestUtils.scryRenderedDOMComponentsWithTag(selectComponent, 'li')[1];
    TestUtils.Simulate.click(secondOption);

    expect(selectedSize).toEqual('S');
  });
});
