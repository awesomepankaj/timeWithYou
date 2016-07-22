import React from 'react';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import PhotoContainer from './PhotoContainer'
 
export default class MyAwesomeReactComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      photosContent: [
        {
          title: 'Miss America',
          subtitle: 'Baby',
          location: 'Ghoomakad',
          locationContent: 'Lovely time at ghoomkad',
          image: '../public/imgs/pankaj.jpg',
          description: 'You are Looking co cute that was very lovely time with you.'
        },
        {
          title: 'Miss America',
          subtitle: 'Baby',
          location: 'Ghoomakad',
          locationContent: 'Lovely time at ghoomkad',
          image: '../public/imgs/pankaj.jpg',
          description: 'You are Looking co cute that was very lovely time with you.'
        },
        {
          title: 'Miss America',
          subtitle: 'Baby',
          location: 'Ghoomakad',
          locationContent: 'Lovely time at ghoomkad',
          image: '../public/imgs/pankaj.jpg',
          description: 'You are Looking co cute that was very lovely time with you.'
        }
      ]
    }
  }
  
  render() {
    return (
      <div className="container">
        <div className="header">
           <AppBar
            title="Only For U"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        </div>
        {this.state.photosContent.map((photoInfo) => {
          return <PhotoContainer photoInfo={photoInfo}/> 
        })}
      </div>
    )
  }
}
