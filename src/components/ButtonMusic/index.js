import React, { Component } from 'react';
import PropTypes from 'prop-types';

import soundFile    from './8-punk-8-bit-music.mp3';

class ButtonMusic extends Component {
    state = {
        isPlaying: false
    }

    render() {
        const classList = this.state.isPlaying ? 'music-icon is-playing' : 'music-icon';

        return (
            <div className="music-icon-wrapper">
                <audio loop hidden ref={audio => this.audioEl = audio} >
                    <source src={soundFile} type="audio/mpeg"/>
                </audio>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" onClick = {this.clickHandler}
                         viewBox="0 0 191.519 191.519"
                         className= {classList}
                         enableBackground= "new 0 0 191.519 191.519"
                         xmlSpace="preserve">
                        <g>
                            <path d="M115.347,70.679c-2.929-2.929-7.678-2.93-10.606-0.001c-2.929,2.929-2.929,7.678,0,10.606   c7.98,7.981,7.98,20.968,0,28.949c-2.929,2.929-2.929,7.678,0,10.606c1.464,1.464,3.384,2.196,5.303,2.196s3.839-0.732,5.303-2.197   C129.176,107.01,129.176,84.508,115.347,70.679z"></path>
                            <path d="M137.33,48.696c-2.929-2.928-7.678-2.928-10.606,0c-2.929,2.93-2.929,7.678,0,10.607   c20.102,20.102,20.102,52.811,0,72.912c-2.929,2.93-2.929,7.678,0,10.607c1.464,1.464,3.384,2.196,5.303,2.196   s3.839-0.732,5.303-2.196C163.28,116.872,163.28,74.647,137.33,48.696z"></path>
                            <path d="M161.862,24.163c-2.928-2.927-7.677-2.929-10.606,0c-2.929,2.93-2.929,7.678,0,10.607   c16.291,16.291,25.263,37.951,25.263,60.989c0,23.039-8.972,44.699-25.263,60.989c-2.929,2.93-2.929,7.678,0,10.607   c1.464,1.464,3.384,2.196,5.303,2.196s3.839-0.732,5.303-2.196c19.124-19.124,29.656-44.551,29.656-71.597   C191.519,68.714,180.986,43.288,161.862,24.163z"></path>
                            <path d="M84.962,19.612c-2.664-1.225-5.796-0.784-8.018,1.127L29.287,61.693H7.5c-4.142,0-7.5,3.357-7.5,7.5   v53.134c0,4.143,3.358,7.5,7.5,7.5h21.787l47.657,40.954c1.388,1.192,3.129,1.812,4.89,1.812c1.06,0,2.127-0.225,3.128-0.685   c2.664-1.223,4.371-3.885,4.371-6.815V26.427C89.333,23.497,87.625,20.834,84.962,19.612z M15,76.693h9.567v38.134H15V76.693z    M74.333,148.758l-34.766-29.876V72.637l34.766-29.876V148.758z"></path>
                        </g>
                    </svg>
                </div>
            </div>
        );
    }

    clickHandler = () => {
        if(!this.state.isPlaying){
            this.audioEl.play();
        }else {
            this.audioEl.pause();
        }
        this.setState({
           isPlaying: !this.state.isPlaying
        });


    }
}

ButtonMusic.propTypes = {};
ButtonMusic.defaultProps = {};

export default ButtonMusic;
