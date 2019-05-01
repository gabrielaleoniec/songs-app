import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'Hounds of Love',
            duration: '5:23'
        }, {
            title: 'Big Time',
            duration: '3:46'
        }, {
            title: 'Human Behaviour',
            duration: '5:03'
        }, {
            title: 'Polsko',
            duration: '4:56'
        }
    ]
};

const selectedSongsReducer = (selectedSong = null, action) => {
    if (action.type === 'SELECT_SONG') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({songs: songsReducer, selectedSong: selectedSongsReducer})
