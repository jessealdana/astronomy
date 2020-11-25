import React from "react";
import ReactPlayer from "react-player";

class ReactPlayer extends Component {
    render () {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            width='100%'
            height='100%'
          />
        </div>
      )
    }
  }
  export default ReactPlayer