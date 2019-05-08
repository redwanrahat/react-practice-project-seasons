import React, {Component} from 'react';
import './App.css';
import SeasonDisplay from './SeasonDisplay';
import Spinner from "./Spinner";

class App extends Component {
  state = {
    lat: null,
    errorMessage: ''
  }
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}),
      err => this.setState({errorMessage: err.message})
    )
  }
  render(){
    if(this.state.errorMessage && !this.state.lat){
      return(
        <div>
          Error: {this.state.errorMessage}
        </div>
      )
    }
    if(!this.state.errorMessage && this.state.lat){
      console.log(this.state.lat)
      return(
        <div>
          <SeasonDisplay lat={this.state.lat}/>
        </div>
      )
    }
    return(
      <Spinner />
    )
  }
}

export default App;
