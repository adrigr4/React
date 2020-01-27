import { MONEY_IN, MONEY_OUT } from '../actions/action-types';
import { update } from 'immutable';

const initialState = {
    in: [],
    out: [],
    messages: [],
    operationmax: 1000,
    balance: 5000,
    saved: 0,
    retired: 0,
    pending: 0,
    resetTime: 0.5,
    alert: false,
    error: ""
}

function rootReducer(state = initialState, action) {
    let newState = { ...state };
    let quantity = parseInt(action.payload);

    state = checkRegularizePending(state);
    state = checkRegularizeRetired(state);

    if (action.type === MONEY_IN) {
        if (quantity !== 0) {
            if (state.saved + quantity >= state.operationmax) {
                newState = {
                    ...state, error: "", alert: false,
                    saved:    state.saved + (state.operationmax - state.saved),
                    pending:  state.pending + quantity - state.operationmax + state.saved,
                    balance:  state.balance + state.operationmax - state.saved,
                    in:       state.in.concat({ money: (quantity - state.operationmax + state.saved), time: new Date().getTime() }),
                    messages: state.messages.concat({ money: quantity, time: getDate(), action: "Ingreso" })
                }
            } else {
                newState = {
                    ...state, error: "", alert: false,
                    saved:    state.saved + quantity,
                    balance:  state.balance + quantity,
                    messages: state.messages.concat({ money: quantity, time: getDate(), action: "Ingreso" })
                }
            }
        }else{
            newState = {...state}
        }

    } else if (action.type === MONEY_OUT) {
        if (state.balance - quantity >= 0) {
            if (state.retired + quantity <= state.operationmax) {
                if (quantity <= 0) {
                    newState = {
                        ...state
                    }
                } else {
                    newState = {
                        ...state, alert: false, error: "",
                        balance:  state.balance - quantity,
                        retired:  state.retired + (quantity),
                        out:      state.out.concat({ money: quantity, time: new Date().getTime() }),
                        messages: state.messages.concat({ money: quantity * -1, time: getDate(), action: "Retiro" })
                    }
                }
            } else {
                newState = { ...state, alert: true, error: "Límite superado" }
            }
        } else {
            newState = { ...state, alert: true, error: "Saldo insuficiente" }
        }
    }
    return newState;
}

function checkRegularizePending(state) {
    let newSaved;
    let newState = { ...state };

    newState.in.map((move) => newState = regularizePending(newState, move));
    return newState;
}

function checkRegularizeRetired(state) {
    let newState = { ...state };

    newState.out.map((move) => newState = regularizeRetired(newState, move));

    return newState;
}

function regularizePending(newState, move) {
    let newSaved;
    if (move !== undefined) {
        if (shouldMoneyRegularize(newState, move)) {
            newSaved = 0;

            if (newState.saved - move.money >= newState.operationmax) {
                newSaved = newState.operationmax;
            } else if (newState.saved - move.money <= 0) {
                newSaved = 0;
            } else {
                newSaved = newState.saved - move.money;
            }

            newState = {
                ...newState,
                in:      newState.in.filter((pg) => move.time !== pg.time),
                pending: newState.pending - move.money,
                balance: newState.balance + move.money,
                saved:   newSaved
            }

            if(move.money > 0){
                newState = {
                    ...newState,
                    messages: newState.messages.concat({ money: move.money, time: getDate(), action: "Saldo actualizado" })
                }
            }
            
            console.log("Dinero a saldo: " + move.money);
        }
    }
    return newState;
}

function regularizeRetired(newState, move) {
    if (move !== undefined) {
        if (shouldMoneyRegularize(newState, move)) {
            newState = {
                ...newState,
                out:      newState.out.filter((pg) => move.time !== pg.time),
                retired:  newState.retired - (move.money),
                messages: newState.messages.concat({ money: move.money, time: getDate(), action: "Limite retirada actualizado" })
            }
            console.log("Retirada actualizada: " + move.money);
        }
    }
    return newState;
}

function getDate() {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    return (date + '/' + month + '/' + year + ' ' + hours + ':' + min.toFixed(0));
}

function shouldMoneyRegularize(state, item) {
    return ((new Date().getTime() - item.time) / 1000 / 60) > state.resetTime;
}

export default rootReducer;