import React from 'react'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import BackArrow from 'material-ui/svg-icons/navigation/arrow-back'


export default class AddNewPhoto extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      file: '',
      title: '',
      subtitle: '',
      imageUrl: '',
      location: '',
      locationDescription: '',
      description: '',
      uploading: false,
      imagePreviewUrl: ''
    }
  }

  handleImageChange = (e) => {

    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onload = (event) => {

      let content = event.target.result
      if (content) {

        this.startUploading(content)
      }
    }

    reader.onerror = () => {
      
      console.log('file could not read')
    }

    if (file) {
    
      reader.readAsDataURL(file)
    }
  }

  startUploading = (imagePreviewUrl) => {

    this.setState({
      uploading: true,
      imagePreviewUrl: imagePreviewUrl
    })

    fetch('/addNewPhoto', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({imagePreviewUrl: imagePreviewUrl})
    }).then((res) => {
      return res.json()
    }).then((response) => {

      console.log(response)
      this.setState({
        imageUrl: response.url.secure_url,
        uploading: false
      })
    }).catch(() => {
      console.log('something happens bad')
    })
  }

  onAddPhoto = () => {
    let photoInfo = {
      title: this.state.title,
      subtitle: this.state.subtitle,
      imageUrl: this.state.imageUrl,
      location: this.state.location,
      locationDescription: this.state.locationDescription,
      description: this.state.description
    }
    
    fetch('/addNew', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({newPhotoInfo: photoInfo})
    }).then((res) => {

      return res.json()
    }).then((response) => {

      console.log(response)
    })
  }

  handleChange = (field, e, value) => {
    console.log(field, value)
    this.setState({
      [field]: value
    }) 
  }
  
  render() {

    let {title, subtitle, location, locationDescription, description, uploading, imagePreviewUrl} = this.state

    let inputStyle = {width: '100%', marginTop: 10}

    return (
      <div className="addNewPhotoCont">
        <FlatButton
          label="Go back"
          secondary={true}
          onTouchTap={this.props.toggleAddWindow}
          icon={<BackArrow />}
        />
        <div className="fieldsCont">
          <div style={{display: 'flex'}}>
            <input 
              type="file"
              onChange={this.handleImageChange}
            />
            {imagePreviewUrl && <img src={imagePreviewUrl} style={{width: '60px', height: '60px'}}/>}
            {uploading && <p>wait..</p>}
          </div>
          <TextField
            style={inputStyle}
            floatingLabelText='Title'
            onChange={this.handleChange.bind(null, 'title')}
            value={title}
          />
          <TextField
            style={inputStyle}
            onChange={this.handleChange.bind(null, 'subtitle')}
            floatingLabelText='Subtitle'
            value={subtitle}
          />
          <TextField
            style={inputStyle}
            onChange={this.handleChange.bind(null, 'location')}
            floatingLabelText='Location'
            value={location}
          />
          <TextField
            style={inputStyle}
            onChange={this.handleChange.bind(null, 'locationDescription')}
            floatingLabelText='About Location'
            value={locationDescription}
          />
          <TextField
            style={inputStyle}
            onChange={this.handleChange.bind(null, 'description')}
            floatingLabelText='About Photo'
            value={description}
          />
          <div style={{marginTop: 20, display: 'flex'}}>
            <RaisedButton 
              label="Submit"
              style={{marginRight: 60}}
              secondary={true}
              onTouchTap={this.onAddPhoto}
            />
            <RaisedButton 
              label="Cancel"
              secondary={true}
              onTouchTap={this.props.toggleAddWindow}
            />
          </div>
        </div>

      </div>
    )
  }
}
