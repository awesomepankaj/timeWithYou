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
          location: 'Kota',
          locationContent: 'Sexy baby',
          image: './images/IMG-20160713-WA0011.jpg',
          description: "You Don't know but you are looking very beautifull and sexy baby"
        },
        {
          title: 'Miss America',
          subtitle: 'Baby',
          location: 'Ghoomakad',
          locationContent: 'Crazy',
          image: './images/IMG_20160608_140210_HDR.jpg',
          description: 'You are looking very crazy and I like your crazy look baby Love u.'
        },
        {
          title: 'Miss America',
          subtitle: 'Baby',
          location: 'Ghoomakad',
          locationContent: 'Second time',
          image: './images/IMG_20160607_220123_HDR.jpg',
          description: 'Second time when I met you in safe state that day you are not drunk.'
        },
        {
          title: 'Miss America',
          subtitle: 'Baby',
          location: 'Ghoomakad',
          locationContent: 'Want you',
          image: './images/IMG_20160608_140340_HDR.jpg',
          description: 'Cutie and cute lips.'
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
        {this.state.photosContent.map((photoInfo, i) => {
          return <PhotoContainer photoInfo={photoInfo} key={i}/> 
        })}
      </div>
    )
  }
}
