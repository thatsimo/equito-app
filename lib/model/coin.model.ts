// https://s2.coinmarketcap.com/static/img/coins/64x64/{id}.png
export const coins = [
  {
    id: "1",
    name: "Bitcoin",
    symbol: "BTC",
  },
  {
    id: "1027",
    name: "Ethereum",
    symbol: "ETH",
  },
];

export type Coin = (typeof coins)[number];
