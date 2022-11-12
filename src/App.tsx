import React from 'react';
import './App.css';
import {Header} from './header/Header';
import {Main} from './main/Main';
import {Skills} from './skills/Skills';
import {Works} from './works/Works';
import {BlueComponent} from './remoteWork/BlueComponent';
import {Contacts} from './contacts/Contacts';
import {Footer} from './footer/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Works/>
            <BlueComponent text={'Looking for full time or part time options'} buttonText={'Hire me now'}/>
            <Skills/>
            <BlueComponent text={'Considering options for remote work'} buttonText={'Hire me now'}/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
