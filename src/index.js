import { view } from './views';
import { initialState, reducer } from './reducers';

import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';

let rootNode = document.getElementById('root');

function app(state, previousView = null) {
    const updatedView = view(dispatch, state);

    if (previousView === null) {
      const updatedViewDom = createElement(updatedView);
      rootNode.appendChild(updatedViewDom);
    } else {
      const patches = diff(previousView, updatedView);
      patch(rootNode.children[0], patches);
    }

    function dispatch(action) {
        const nextState = reducer(state, action);
        app(nextState, updatedView);
    }
}

app(initialState);