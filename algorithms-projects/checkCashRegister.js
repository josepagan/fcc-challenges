// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts
// purchase price as the first argument (price), payment as the second argument
// (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a
//  status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is
//  less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the
//  value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change
//  due in coins and bills, sorted in highest to lowest order, as
//   the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (DOLLAR)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]

function checkCashRegister(price, cash, cid) {

  const cashInt = (value) =>
    Number.isInteger(value)
      ? value * 100
      : parseInt(value.toFixed(2).replace(/[.]/, ""));

  const value = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };
  const noFunds = { status: "INSUFFICIENT_FUNDS", change: [] };

  const change = cashInt(cash) - cashInt(price);
  if (change < 0) return noFunds;

  const cidArr = cid.sort((a, b) => value[b[0]] - value[a[0]]);

  //process
  const reduced = cidArr.reduce(
    (acc, curr) => {

      const noteName = curr[0];
      const noteValue = cashInt(value[noteName]);
      const fundsAvailable = cashInt(curr[1]);
      let notesAvailable = fundsAvailable / noteValue;

      let { changeLeft } = acc;
      let notesToGive = 0;
      while (changeLeft >= noteValue && notesAvailable > 0) {
        notesAvailable--;
        notesToGive++;
        changeLeft -= noteValue;
      }
      if (notesToGive) {
        acc.changeArr.push([noteName, (notesToGive * noteValue) / 100]);
        acc.changeLeft = changeLeft;
      }
      if (notesAvailable) acc.emptyHouse = false;

      return acc;
    },
    { changeLeft: change, changeArr: [], emptyHouse: true }
  );
  reduced.changeArr.sort((a, b) => value[a[0]] - value[b[0]]);
  return reduced.changeLeft > 0
    ? noFunds
    : reduced.emptyHouse
    ? { status: "CLOSED", change: reduced.changeArr }
    : { status: "OPEN", change: reduced.changeArr };
}
console.log(
  checkCashRegister(0, 0.06, [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    // ["DIME", 3.1],
    // ["QUARTER", 4.25],
    // ["ONE", 90],
    // ["FIVE", 55],
    // ["TEN", 20],
    // ["TWENTY", 60],
    // ["ONE HUNDRED", 100],
  ])
);
