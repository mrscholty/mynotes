import * as types from './actionTypes';

export const addNote = (note) => {
  return {
    type: types.ADD_NOTE,
    note
  }
}

export const updateNote = (note) => {
  return {
    type: types.UPDATE_NOTE,
    note
  }
}

export const removeNote = (id) => {
  return {
    type: types.REMOVE_NOTE,
    id
  }
}

export const setSearchTerm = (searchTerm) => {
  return {
    type: types.SET_SEARCH_TERM,
    searchTerm
  }
}

export const setCanAddNote = (canAddNote) => {
  return {
    type: types.SET_CAN_ADD_NOTE,
    canAddNote
  }
}

export const setSelectedNoteID = (selectedNoteID) => {
    return {
        type: types.SET_SELECTED_NOTE_ID,
        selectedNoteID
    }
}
