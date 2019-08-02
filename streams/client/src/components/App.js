import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamList from './streams/streamList';
import StreamCreate from './streams/streamCreate';
import StreamEdit from './streams/streamEdit';
import StreamDelete from './streams/streamDelete';
import StreamShow from './streams/streamShow';
import Header from './header';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={StreamList} />
                <Route path="/streams/new" exact component={StreamCreate} />
                <Route path="/streams/edit" exact component={StreamEdit} />
                <Route path="/streams/delete" exact component={StreamDelete} />
                <Route path="/streams/show" exact component={StreamShow} />
            </BrowserRouter>
        </div>
    );
}

export default App;