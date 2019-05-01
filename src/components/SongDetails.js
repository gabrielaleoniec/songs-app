import React from 'react';
import {connect} from 'react-redux';

const SongDetails = ({song}) => {
    console.log(song);
    if (!song || !song.title) {
        return <div>Please select a song</div>
    }
    return (<div>
        <h3>Details of the song:</h3>
        {song.title}
        </div>);
}

const mapStateToProps = (state) => {
    return {song: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetails);