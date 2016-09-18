'use strict';
import { combineReducers } from 'redux';
import notes from './reducersNotes';
import settings from './reducersSettings';

export default combineReducers({
    notes,
    settings
});
