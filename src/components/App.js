import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import history from '../history';
import SpaceHistory from './spacefiles/SpaceHistory';
import SpacePayloads from './spacefiles/SpacePayloads';
import SpacePayloadDetail from './spacefiles/SpacePayloadDetail';
import Header from './Header';

const App = () => {
    return (
        <div className={`ui container`}>
            <Router history={history}>
                <div>
                    <Header/>
                    <Switch>
                        <Route path={`/spacehistory`} component={SpaceHistory}/>
                        <Route path={`/spacepayloads`} component={SpacePayloads}/>
                        <Route path={`/spacePayload/details/:id`} component={SpacePayloadDetail}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
};

export default App;