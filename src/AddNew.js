import React from 'react'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


export default class AddNewPhoto extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      file: '',
      imagePreviewUrl: '',
    }
  }

  handleChange = (e) => {

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
    }).catch(() => {
      console.log('something happens bad')
    })
  }

  handleSubmit = () => {

  }
  
  render() {
    return (
      <div>
        <input 
          type="file"
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
