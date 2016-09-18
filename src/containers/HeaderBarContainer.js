import { connect } from 'react-redux';
import { setSearchTerm, setSelectedNoteID } from '../state/actions';
import HeaderBar from '../components/HeaderBar';

const mapStateToProps = (state) => {
    return {
        notes: state.notes,
        searchTerm: state.settings.searchTerm,
        selectedNoteID: state.settings.selectedNoteID
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSetSearchTerm: (term) => {
            dispatch(setSearchTerm(term))
        },
        onSetSelectedNoteID: (selectedNoteID) => {
            dispatch(setSelectedNoteID(selectedNoteID))
        }
    }
};

const HeaderBarContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderBar);
export default HeaderBarContainer;
