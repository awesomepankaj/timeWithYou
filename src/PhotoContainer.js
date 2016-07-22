import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class PhotoContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  };

  onPhotoClick = () => {
    console.log('Photo click')
  };
  
  render() {

    let {photoInfo} = this.props

    return (
      <Card className="contentCard">
        <CardHeader
          title={photoInfo.title}
          subtitle={photoInfo.subtitle}
          avatar="http://lorempixel.com/100/100/nature/"
        />
        <CardMedia
          overlay={<CardTitle title={photoInfo.location} subtitle={photoInfo.locationContent} />}
          onTouchTap={this.onPhotoClick}
        >
          <img src="http://lorempixel.com/600/337/nature/"/>
        </CardMedia>
        <CardText>
          {photoInfo.description}
        </CardText>
        <CardActions>
          <FlatButton label="Lovely" />
          <FlatButton label="Amazing" />
        </CardActions>
      </Card>      
    )
  }
  
}

