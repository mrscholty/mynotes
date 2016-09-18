import React, {Component, PropTypes} from 'react';
import {FABButton, Icon} from 'react-mdl';
import {v4} from 'uuid';
import NoteItem from './NoteItem';

class NoteList extends Component {

    static sortByCreated(a, b) {
        if (a.created < b.created) return 1;
        if (a.created > b.created) return -1;
        return 0;
    }

    handleAddNote() {
        this.props.onSetSearchTerm('');
        let newID = v4();
        let dateStamp = new Date();

        this.props.onAddNote({
            id: newID,
            text: '',
            created: dateStamp,
            modified: dateStamp
        });

        this.props.onSetSelectedNoteID(newID);
        this.props.onSetCanAddNote(false);

    }

    render() {

        const {notes, searchTerm, canAddNote, selectedNoteID} = this.props;

        let noteList = notes
            .filter((note) => {
                return note.text.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
            })
            .sort(NoteList.sortByCreated)
            .map((note) => {

                return (
                    <NoteItem key={note.id}
                              note={note}
                              editMode={ selectedNoteID === note.id }
                              setCanAddNote={(e) => this.props.onSetCanAddNote(e) }
                              updateNote={(e) => this.props.onUpdateNote(e) }
                              removeNote={(e) => this.props.onRemoveNote(note.id) }
                    />
                );
            });


        return (
            <div>
                <div style={{margin: '10px', marginTop: '20px'}}>
                    {this.props.notes.length > 0 ?
                        <div>
                            {noteList}
                        </div>
                        : <span style={{margin: '70px'}}>no notes</span> }
                </div>
                <div className="fab">
                    <FABButton
                        style={{
                            display: (!canAddNote) ? 'none' : 'block'
                        }}
                        colored ripple onClick={()=> this.handleAddNote()}>
                        <Icon name="add"/>
                    </FABButton>
                </div>
            </div>
        )


    }

}

NoteList.propTypes = {
    notes: PropTypes.array.isRequired,
    searchTerm: PropTypes.string,
    canAddNote: PropTypes.bool,
    selectedNoteID: PropTypes.string,
    onAddNote: PropTypes.func.isRequired,
    onRemoveNote: PropTypes.func.isRequired,
    onUpdateNote: PropTypes.func.isRequired,
    onSetCanAddNote: PropTypes.func.isRequired
};

export default NoteList;



