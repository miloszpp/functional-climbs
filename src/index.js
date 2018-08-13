import { view } from './views';
import { initialState, reducer } from './reducers';

const rootNode = document.getElementById('root');

function app(state) {
    const updatedView = view(dispatch, state);
    const currentView = rootNode.childNodes[0];

    rootNode.replaceChild(updatedView, currentView);

    function dispatch(action) {
        const nextState = reducer(state, action);
        app(nextState);
    }
}

app(initialState);