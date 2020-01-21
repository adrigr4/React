import { MONEY_IN, MONEY_OUT } from '../actions/action-types';

const initialState = {
    in: [{}],
    out: [{}],
    balance: 5000,
    saved: 0,
    max: 1000,
    retired: 0,
    pending: 0,
    alert: false,
    error: "",
    messages: [{}]
}

function getDate() {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds();
    return (date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec);
}

function checkLimits(ingresos, max){
    return ingresos.reduce((a, b) => {(a.date > getDate() && b.date > getDate() ? return (a.money + b.money ) : null )});
}

function rootReducer(state = initialState, action) {
    let newState = {...state};
    console.log(checkLimits(state.in, state.max));
    let quantity = parseInt(action.payload);
    if (action.type === MONEY_IN) {
        if (state.saved + quantity >= state.max) {
            newState = {
                ...state,
                error: "",
                alert: false,
                saved: state.saved + ((state.max - state.saved)),
                pending: state.pending + (quantity - state.max + state.saved),
                balance: state.balance + state.max - state.saved,
                in: state.in.concat({ money: quantity, time: getDate() }),
                messages: state.messages.concat({ money: quantity, time: getDate() })
            }
        } else {
            newState = {
                ...state,
                error: "",
                alert: false,
                saved: state.saved + quantity,
                balance: state.balance + quantity,
                in: state.in.concat({ money: quantity, time: getDate() }),
                messages: state.messages.concat({ money: quantity, time: getDate() })
            }
        }

    } else if (action.type === MONEY_OUT) {
        if (state.balance - quantity >= 0) {
            if (state.retired + quantity <= state.max) {
                if (quantity <= 0) {
                    newState = {
                        ...state
                    }
                } else {
                    newState = {
                        ...state,
                        balance: state.balance - quantity,
                        retired: state.retired + (quantity),
                        alert: false,
                        error: "",
                        out: state.out.concat({ money: quantity, time: getDate() }),
                        messages: state.messages.concat({ money: quantity * -1, time: getDate() })
                    }
                }
            } else {
                newState = {
                    ...state,
                    alert: true,
                    error: "Límite superado"
                }
            }
        } else {
            newState = {
                ...state,
                alert: true,
                error: "Saldo insuficiente"
            }
        }
    }
    console.log(newState);
    return newState;
}

export default rootReducer;