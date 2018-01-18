const combineReducers  = require('./combineReducers');

const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        }
    };

    dispatch({});

    return { getState, dispatch, subscribe };
}

const reducer = (state = {
    message: '',
}, action) => {
    switch (action.type) {
        case 'UPDATE_GROUP_NAME_REQUEST':
            return {
            message: '',
            };
        case 'UPDATE_GROUP_NAME_SUCCESS':
            return {
            ...state,
            message: action.message,
            };
        case 'UPDATE_GROUP_NAME_FAILED':
            return {
            ...state,
            message: action.message,
            };
        default:
            return state;
    }
}

const reducers = combineReducers({ reducer });

const action = (message) => {
    return {
        type: 'UPDATE_GROUP_NAME_SUCCESS',
        message: 'success',
    }
}

const store = createStore(reducers);

const { getState, dispatch, subscribe } = store;

const unlistener = store.subscribe(() => console.log(store.getState()));

store.dispatch(action()); // 触发 reducer

unlistener();

store.dispatch(action());
