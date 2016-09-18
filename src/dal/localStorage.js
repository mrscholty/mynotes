'use strict';

export const saveNotes = (state) => {

    try {
        localStorage.setItem('notes', JSON.stringify(state));
    } catch (e) {
    }
}

export const loadNotes = () => {
    try {
        let state = localStorage.getItem('notes');

        if (state === null) {
            return undefined;
        }
        let notes = JSON.parse(state);
        // convert dateTime to real DateTime instances
        notes = notes.map(item=> {
            return {
                ...item,
                created: new Date(item.created),
                modified: new Date(item.modified)
            }
        });

        return notes;

    } catch (e) {
        return undefined;
    }
}
