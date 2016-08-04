import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Add from 'material-ui/svg-icons/content/add'
import IconButton from 'material-ui/IconButton';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import PhotoContainer from './PhotoContainer'
import AddNewPhoto from './AddNew'
 
export default class MyAwesomeReactComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      photosContent: [],
      openDialog: false,
      showAddWindow: false
    }
  }

  componentDidMount = () => {
    fetch('/getPhotos')
      .then((res) => {
        return res.json()
      })
      .then((response) => {

        this.setState({
          photosContent: response.photosContent
        })
      })
  }

  handleClose = () => {
    this.setState({
      openDialog: false
    })
  }

  toggleAddWindow = () => {

    this.setState({
      showAddWindow: !this.state.showAddWindow
    })
  } 
  
  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    let {openDialog, showAddWindow} = this.state 

    return (
      <div className="container">
        <div className="header">
           <AppBar
            title="Only For U"
            iconElementRight={<IconButton onTouchTap={this.toggleAddWindow}><Add /></IconButton>}
          />
        </div>
        {!showAddWindow && this.state.photosContent.map((photoInfo, i) => {
          return <PhotoContainer photoInfo={photoInfo} key={i}/> 
        })}
        {showAddWindow && <AddNewPhoto toggleAddWindow={this.toggleAddWindow}/>}
      </div>
    )
  }
}
