import { connect } from 'react-redux';
import { addNote, removeNote, updateNote, setCanAddNote, setSearchTerm, setSelectedNoteID } from '../state/actions';
import NoteList from '../components/NoteList';

const mapStateToProps = (state) => {
    return {
        notes: state.notes,
        searchTerm: state.settings.searchTerm,
        canAddNote: state.settings.canAddNote,
        selectedNoteID: state.settings.selectedNoteID
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddNote: (note) => {
            dispatch(addNote(note))
        },
        onRemoveNote: (id) => {
            dispatch(removeNote(id))
        },
        onUpdateNote: (note) => {
            dispatch(updateNote(note))
        },

        onSetCanAddNote: (canAdd) => {
            dispatch(setCanAddNote(canAdd))
        },

        onSetSearchTerm: (term) => {
            dispatch(setSearchTerm(term))
        },

        onSetSelectedNoteID: (selectedNoteID) => {
            dispatch(setSelectedNoteID(selectedNoteID))
        }
    }
};


const AppContainer = connect(mapStateToProps, mapDispatchToProps)(NoteList);

export default AppContainer;