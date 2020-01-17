import { MONEY_IN, MONEY_OUT } from '../actions/action-types';

const initialState = {
    balance: 100,
    saved: 0,
    max: 1000,
    retired: 0,
    alert: false, 
    message: ""
}

function rootReducer(state = initialState, action) {
    if (action.type === MONEY_IN) {
        let balance = 0, saved = 0;
        if (state.balance + parseInt(action.payload) > state.max) {
            balance = state.max;
            saved = state.saved + (state.balance + parseInt(action.payload)) - state.max;
        } else {
            balance = state.balance + parseInt(action.payload);
            saved = state.saved;
        }
        return {
            balance: balance,
            saved: saved,
            max: state.max,
            retired: state.retired,
            alert: false, 
            message: state.message
        }
    } else if (action.type === MONEY_OUT) {
        if (state.balance - parseInt(action.payload) >= 0) {
            if (state.retired + parseInt(action.payload) <= state.max) {
                return {
                    balance: state.balance - parseInt(action.payload),
                    saved: state.saved,
                    max: state.max,
                    retired: state.retired + (parseInt(action.payload)),
                    alert: false,
                    message: state.message
                }
            } else {
                return {
                    balance: state.balance,
                    saved: state.saved,
                    max: state.max,
                    retired: state.retired,
                    alert: true,
                    message: "Límite Superado"
                }
            }
        } else {
            return {
                balance: state.balance,
                saved: state.saved,
                max: state.max,
                retired: state.retired,
                alert: true,
                message: "Saldo Insufiente"
            }
        }
    }
    return state;
}

export default rootReducer;