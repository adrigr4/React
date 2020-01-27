import { MONEY_IN, MONEY_OUT } from './action-types';

export function moneyIn(payload) {
    return { type: MONEY_IN, payload };
}
export function moneyOut(number) {
    return { type: MONEY_OUT, payload: number };
}