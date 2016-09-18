'use strict';
import {createStore} from 'redux';
import reducers from './reducers/reducersIndex';
import * as dal from '../dal/localStorage';

function loadState() {
   return {
       notes: dal.loadNotes(),
       settings: {
           searchTerm: '',
           canAddNote: true
       }
   }
}

let store = createStore(
    reducers,
    loadState()
);

store.subscribe(() => {
    dal.saveNotes(store.getState().notes);
});

export default store;
