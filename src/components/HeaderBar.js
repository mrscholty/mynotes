import React, {Component} from 'react';
import {Header, HeaderRow, Icon, Textfield} from 'react-mdl';

class HeaderBar extends Component {

    render() {
        const {notes, searchTerm, onSetSearchTerm , onSetSelectedNoteID} = this.props;

        return (
            <Header>
                <Icon name="note" className="mdl-layout-icon logoIcon"/>
                <HeaderRow title={`My Notes (${ notes.length })`}>
                    <Textfield value={searchTerm}
                               onChange={(e) => {
                                   onSetSelectedNoteID('');
                                   onSetSearchTerm(e.target.value)
                                }
                               }
                               label="Search" expandable expandableIcon="search"/>
                </HeaderRow>
            </Header>
        );
    }
}

export default HeaderBar;
