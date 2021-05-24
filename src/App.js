import {Component} from 'react'
import {Switch,Route} from 'react-router-dom'
import './App.css';


import Home from './pages/home/Home'

class App extends Component {

  render(){
    return (
      <Switch>
        <Route path='/' component={Home}  />
      </Switch>
    )
  }
}


export default App