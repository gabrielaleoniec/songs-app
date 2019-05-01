import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions'

class SongList extends React.Component {
    renderSongsList = () => {
        return this
            .props
            .songs
            .map((song) => {
                return (
                    <div className="item" key={song.title}>
                        <div className="right floated content">
                            <button className="ui button primary" onClick={() => this.props.selectSong(song)}>Select</button>
                        </div>
                        <div className="left floated content">
                            {song.title}
                        </div>
                    </div>
                )
            });
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h2>SongsList</h2>
                <div className="ui divided list">{this.renderSongsList()}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('State', state);
    return {songs: state.songs};
}

export default connect(mapStateToProps, {selectSong})(SongList);