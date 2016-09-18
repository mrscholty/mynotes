import * as actions from '../actionTypes';

const initialState = {
    searchTerm: '',
    canAddNote: true,
    selectedNoteID: ''
};

const settings = (state = initialState, action) => {

    switch (action.type) {

        case actions.SET_SEARCH_TERM:
            return Object.assign({}, state, {
                searchTerm: action.searchTerm
            });
            break;

        case actions.SET_CAN_ADD_NOTE:
            return Object.assign({}, state, {
                canAddNote: action.canAddNote
            });
            break;

        case actions.SET_SELECTED_NOTE_ID:
            return Object.assign({}, state, {
                selectedNoteID: action.selectedNoteID
            });
            break;

        default:
            return state;
    }

};

export default settings;


