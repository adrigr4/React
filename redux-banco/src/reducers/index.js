import { MONEY_IN, MONEY_OUT } from '../actions/action-types';

const initialState = {
    in: [],
    out: [],
    messages: [],
    operationmax: 1000,
    balance: 5000,
    saved: 0,
    retired: 0,
    pending: 0,
    resetTime: 0.1,
    alert: false,
    error: ""
}

function rootReducer(state = initialState, action) {
    let newState = { ...state };
    let quantity = parseInt(action.payload);

    state.in.map((item) => {
        if (item !== undefined){            
            if (regularize(state, item)) {
                let newSaved;
                if(state.saved - item.money >= state.operationmax){
                    newSaved = state.operationmax;
                }else if (state.saved - item.money <= 0) {
                    newSaved = 0;
                }else{
                    newSaved = state.saved - item.money;
                }
                state = {
                    ...state,
                    in: state.in.filter((pg) => item.time !== pg.time),
                    pending: state.pending - item.money,
                    balance: state.balance + item.money,
                    saved: newSaved,
                    messages: state.messages.concat({ money: item.money, time: getDate() , action: "Saldo actualizado"})
                }
                console.log("Dinero a saldo: " + item.money);
            }
        }
        return state.in;
    });

    state.out.map((item) => {
        if (item !== undefined){
            if (regularize(state, item)) {
                state = {
                    ...state,
                    out: state.in.filter((pg) => item.time !== pg.time),
                    retired: state.retired - (item.money),
                    messages: state.messages.concat({ money: item.money, time: getDate() , action: "Limite retirada actualizado"})
                }
                console.log("Dinero a saldo: " + item.money);
            }
        }
        return state.out;
    });

    if (action.type === MONEY_IN) {
        if (state.saved + quantity >= state.operationmax) {
            newState = {
                ...state,
                error: "",
                alert: false,
                saved: state.saved + (state.operationmax - state.saved),
                pending: state.pending + quantity - state.operationmax + state.saved,
                balance: state.balance + state.operationmax - state.saved,
                in: state.in.concat({ money: (quantity - state.operationmax + state.saved), time: new Date().getTime() }),
                messages: state.messages.concat({ money: quantity, time: getDate(), action: "Ingreso"})
            }
        } else{
            newState = {
                ...state,
                error: "",
                alert: false,
                saved: state.saved + quantity,
                balance: state.balance + quantity,
                messages: state.messages.concat({ money: quantity, time: getDate(), action: "Ingreso"})
            }
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
                        ...state,
                        balance: state.balance - quantity,
                        retired: state.retired + (quantity),
                        alert: false,
                        error: "",
                        out: state.out.concat({ money: quantity, time: new Date().getTime() }),
                        messages: state.messages.concat({ money: quantity * -1, time: getDate(), action: "Retiro" })
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

function regularize(state, item) {
    return ((new Date().getTime() - item.time) / 1000 / 60) > state.resetTime;
}

export default rootReducer;