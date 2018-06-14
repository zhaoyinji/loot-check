import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as constants from '../actions/constants';

describe('balanceReduce', () => {
  describe('when initializing', () => {
    const balance = 10;
    it('sets a balance', () => {
      expect(balanceReducer(undefined,
        { type: constants.SET_BALANCE,
          balance
        })).toEqual(balance);
    });

    describe('then re-initializing', () => {
      it('reads the balance from cookies', () => {
        expect(balanceReducer2(undefined, {})).toEqual(balance);
      })
    });
  });

  it('deposit into the balance', () => {
    const deposit = 10;
    const intialState = 5;
    expect(balanceReducer(intialState,
      { type: constants.DEPOSIT,
        deposit
      })).toEqual(deposit + intialState);
  });

  it('withdraw from the balance', () => {
    const withdraw = 10;
    const intialState = 20;
    expect(balanceReducer(intialState,
      { type: constants.WITHDRAW,
        withdraw
      })).toEqual(intialState - withdraw);
  });
});