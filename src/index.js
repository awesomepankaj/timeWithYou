import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Home from './Home';
 
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      password: ''
    }
  }

  handleChange = (e, value) => {

    this.setState({
      password: value 
    })
  }

  render() {

    let {password} = this.state

    return (
      <MuiThemeProvider>
        <div>
          
          {password === 'chotajunior' ? <Home /> : 

            <TextField 
              style={{marginLeft: '5%', width: '90%', marginTop: '100px'}}
              hintText="Password Baby.."
              onChange={this.handleChange}
              value={password}
            />
          }
        </div>
      </MuiThemeProvider>
    )
  }
}
 
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
