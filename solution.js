//--------------------------
// Sample data (leave as-is)
//--------------------------
const data = [
  {
    id: "3cc51cfd-6e3c-41eb-9604-362da3a6fb64",
    symbol: "MSFT",
    companyName: "Microsoft",
    price: 310.98,
    quantity: 2000,
    currency: "USD",
  },
  {
    id: "0572be22-d790-460e-bf03-8ee1b3b19dad",
    symbol: "MSFT",
    companyName: "Microsoft",
    price: 310.9,
    quantity: 1500,
    currency: "USD",
  },
  {
    id: "8f356500-de35-4378-b7a3-5c587da54cd5",
    symbol: "AAPL",
    companyName: "Apple",
    price: 174.78,
    quantity: 500,
    currency: "USD",
  },
  {
    id: "5f92c4c3-b6b9-4538-9e80-d587217e8410",
    symbol: "VOD",
    price: 130.02,
    quantity: 3290,
    currency: "GBP",
  },
  {
    id: "00000000-0000-0000-0000-000000000000",
    symbol: "XXX",
    price: 99.99,
    quantity: 100,
    currency: "GBP",
  },
  {
    id: "155ac33b-05c4-42f7-a446-0b7ffacf2504",
    symbol: "VOD",
    price: 128.91,
    quantity: 8500,
    currency: "GBP",
  },
];

//----------------------
// The method to improve.
// Submit a revised version of this function below, making any changes
// you believe improve the code while satisfying the requirements above.
//----------------------
function doProcessTrades(ddata) {
  var totalValue = {},
    tradeObjs = [];
  totalValue.symbols = [];
  for (let i = 0; i < ddata.length; i++) {
    var tradeObj = ddata[i];
    if (tradeObj.id == "00000000-0000-0000-0000-000000000000")
      // skip bad trade
      continue;
    // count = !count ? 1 : count + 1;

    // 1) add up prices
    if (!totalValue["total" + tradeObj.currency])
      totalValue["total" + tradeObj.currency] =
        tradeObj.price * tradeObj.quantity;
    else
      totalValue["total" + tradeObj.currency] =
        totalValue["total" + tradeObj.currency] +
        tradeObj.price * tradeObj.quantity;

    // 2) collect unique symbols
    // if (!totalValue.symbols) a.symbols = [];
    if (totalValue.symbols.indexOf(tradeObj.symbol) < 0)
      totalValue.symbols = totalValue.symbols.concat([tradeObj.symbol]);

    // 3) handle missing names
    if (
      tradeObj.companyName === "" ||
      tradeObj.companyName === null ||
      tradeObj.companyName === undefined
    ) {
      tradeObj.companyName = tradeObj.symbol || "???????";
    }

    // 4) add trade to returned array
    tradeObjs = tradeObjs.concat(tradeObj);
  }

  totalValue.tradeCount = tradeObjs.length;
  totalValue.trades = tradeObjs;

  // 5) remove bad trades - be sure to fix count if neeeded
  //   var removed = 0;
  //   for (let i = 0; i < a.trades.length; i++) {
  //     if (a.trades[i].id == "00000000-0000-0000-0000-000000000000") {
  //       console.error(`Bad trade removed ${a.trades[i]}`);
  //       removed++;
  //       let badTradeSym = a.trades[i].symbol;
  //       a.symbols.splice(a.symbols.indexOf(badTradeSym), 1);
  //       a.trades.splice(i, 1);
  //     }
  //     a.tradeCount = a.tradeCount - removed;
  //   }
  console.log(totalValue);
  return totalValue;
}
// doProcessTrades(data);
