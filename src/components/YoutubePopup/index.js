import React, { Component } from 'react'
import ModalVideo from 'react-modal-video'
import Fullscreen from "react-full-screen"

class Youtube extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
      isFullScreen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({ isOpen: true, isFullScreen: true })
  }

  render() {
    const { isFullScreen } = this.state
    return (
      <Fullscreen
        enabled={isFullScreen}
        onChange={isFullScreen => this.setState({ isFullScreen })}
      >
        <div className="mt-5 youtube-section">
          <ModalVideo 
            channel='youtube' 
            isOpen={this.state.isOpen} 
            videoId='scAfY0Sa5as' 
            onClose={() => this.setState({ isOpen: false, isFullScreen: false })} 
          />
          <button className="play-btn" onClick={this.openModal} href="/"></button>
        </div>
      </Fullscreen>
    )
  }
}

export default Youtube