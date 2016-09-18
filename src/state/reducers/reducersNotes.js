'use strict';
import * as actions from '../actionTypes';

const initialState = [];

const notes = (state = initialState, action) => {

    switch (action.type) {

        case actions.ADD_NOTE:
            return [...state,
                action.note];
            break;

        case actions.REMOVE_NOTE:
            let index = state.findIndex((note) => {
                return note.id === action.id;
            });
            if (index >= 0) {
                return [
                    ...state.slice(0, index),
                    ...state.slice(index + 1)
                ];
            } else {
                return state;
            }
            break;

        case actions.UPDATE_NOTE:
            return state.map((note) => {
                return note.id === action.note.id ?
                {
                    ...note, text: action.note.text,
                    modified: action.note.modified
                } : note
            });
            break;

        default:
            return state;

    }

};

export default notes;
