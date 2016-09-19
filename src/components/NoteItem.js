import React, {Component, PropTypes} from 'react';
import {Button} from 'react-mdl';
import Moment from 'moment';

class NoteItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editMode: this.props.editMode,
            noteText: this.props.note.text
        }
    }

    handleNoteTextChange(e) {
        this.setState({noteText: e.target.value});
    }

    switchMode() {
        this.setState({editMode: !this.state.editMode}, () => {
            if (this.state.editMode) {
                this.props.setCanAddNote(false);
            }
        });
    }

    cancelEdit() {
        this.setState({noteText: this.props.note.text});
        this.switchMode();
        this.props.setCanAddNote(true);
    }

    removeNote() {
        this.props.removeNote();
        this.props.setCanAddNote(true);
    }

    updateNote() {
        if (this.state.noteText.length === 0) {
            return;
        }

        this.props.updateNote({
            id: this.props.note.id,
            text: this.state.noteText,
            modified: new Date()
        });
        this.switchMode();

        this.props.setCanAddNote(true);
    }

    render() {

        let output = null;

        if (this.state.editMode) {

            output =
                <div className="note">
                    <textarea rows="4" value={this.state.noteText} autoFocus
                              onChange={(e) => this.handleNoteTextChange(e) }/>
                    <div style={{marginTop: '10px'}}>
                        <Button raised colored ripple
                                onClick={() => this.updateNote()}>OK</Button>
                        &nbsp;&nbsp;
                        <Button raised colored ripple
                                onClick={() => this.cancelEdit()}>Cancel</Button>
                        &nbsp;&nbsp;
                        <Button raised colored ripple accent
                                onClick={()=> this.removeNote()}>Remove</Button>
                        &nbsp;&nbsp;
                        <br/><br/>
                        <div className="noteInfo">created: { Moment(this.props.note.created).fromNow() }</div>
                        <div className="noteInfo">modified: { Moment(this.props.note.modified).fromNow() }</div>

                    </div>
                </div>

        } else {

            output =
                <div onClick={() => this.switchMode()} className="note">
                    <span>{
                        this.props.note.text ?
                            this.props.note.text.split('\n').map((l, i) => <div key={i}>{l ||
                            <span>&nbsp;</span>}</div>) :
                            <div>&nbsp;</div>
                    }</span>
                </div>
        }

        return (
            <div>{output}</div>
        )
    }

}

NoteItem.propTypes = {
    note: PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        created: PropTypes.instanceOf(Date),
        modified: PropTypes.instanceOf(Date)
    }),
    editMode: PropTypes.bool.isRequired,
    updateNote: PropTypes.func,
    removeNote: PropTypes.func,
    setCanAddNote: PropTypes.func
};

export default NoteItem;
