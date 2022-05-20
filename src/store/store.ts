import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from "redux-thunk";
import {cardsReduser} from "./cards-reducer";
import {profileReduser} from "./profile-reducer";

const rootReducer = combineReducers({
    auth: profileReduser,
    cards: cardsReduser
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;

