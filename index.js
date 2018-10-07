import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Store from './Store/configStore';

import ContainerComponent from './container/container';

ReactDOM.render(
    <Provider store={Store}>
        <ContainerComponent />
    </Provider>, document.getElementById('root'));
