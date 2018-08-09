import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputVal: ''};

    this.selectName = this.selectName.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value});
  }

  matches() {
    const names = this.props.names;
    const matches = [];
    let input = this.state.inputVal;

    if (input.length === 0) {
      return names;
    }

    names.forEach( name => {
      input = this.state.inputVal;
      const substring = name.slice(0, input.length);
      if (substring.toLowerCase() === input.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }

  selectName(event) {
    const name = event.currentTarget.innerText;
    this.setState({inputVal: name});
  }

  render() {
    const results = this.matches().map((result, i) => {
      return (
        <li key={i} onClick={this.selectName}>{result}</li>
      );
    });
    return(
      <div>
        <h1>Autocomplete</h1>
        <div className='auto'>
          <input
            onChange={this.handleInput}
            value={this.state.inputVal}
            placeholder='Search...'/>
          <ul>
            <ReactCSSTransitionGroup
              transitionName='auto'
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
              {results}
            </ReactCSSTransitionGroup>
          </ul>
        </div>
      </div>
    );
  }
}
