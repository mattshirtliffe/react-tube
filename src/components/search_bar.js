import React, {Component} from 'react';

// const SearchBar = () => {
//   return <input />;
// };

// {Component} syntactic sugar
// alt to doing this
// const Component = React.Component;
// function components are dumb
// class components have intelegents
// start as functional then convert if they are intelegent
// <input onChange={event => console.log(event.target.value)} />
// state most complex thing in react


export default class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = {term: ''};
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
        <div className="search-bar">
        <input value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
        </div>
    );
  }

  // handleInputChange(event) {
  //   console.log(event.target.value);
  // }

}
