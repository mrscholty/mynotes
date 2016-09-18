import React, { Component } from 'react';
import { Layout, Content } from 'react-mdl';
import HeaderBarContainer from '../containers/HeaderBarContainer';
import NoteContainer from '../containers/NoteContainer';

class App extends Component {

    render() {

        return (
            <div>
                <Layout fixedHeader>
                    <HeaderBarContainer/>
                    <Content>
                        <NoteContainer/>
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default App;

