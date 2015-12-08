jest.dontMock('../src/index');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const {SelectOption} = require('../src/index');

describe('Select Option', () => {

  it('renders a li element', () => {

    let renderedOption = TestUtils.renderIntoDocument(
        <SelectOption option='S'>
        </SelectOption>
    );

    let extendedSelect = ReactDOM.findDOMNode(renderedOption);
    expect(extendedSelect.tagName).toEqual('LI');
  });

  it('has no CSS class if not selected', () => {

    let renderedOption = TestUtils.renderIntoDocument(
        <SelectOption option="S">
        </SelectOption>
    );

    let option = ReactDOM.findDOMNode(renderedOption);
    expect(option.classList.length).toEqual(0)
  });

  it('can be clicked', () => {

    let optionWasSelected = false;
    let valueSelected = null;

    let renderedOption = TestUtils.renderIntoDocument(
        <SelectOption option="S" onSelect={(opt) => {optionWasSelected = true; valueSelected = opt;}}>
        </SelectOption>
    );

    var domNode = ReactDOM.findDOMNode(renderedOption);

    TestUtils.Simulate.click(domNode);

    expect(optionWasSelected).toEqual(true);
    expect(valueSelected).toEqual('S');

  });


  it('ads the `selected` class when this option is selected', () => {

    let renderedOption = TestUtils.renderIntoDocument(
        <SelectOption option="S" selectedOption="S">
        </SelectOption>
    );

    let option = ReactDOM.findDOMNode(renderedOption);
    expect(option.classList.item(0)).toEqual('selected')
  });


});
