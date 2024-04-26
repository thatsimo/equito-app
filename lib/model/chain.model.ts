export const chains = [
  { id: "1", name: "Bitcoin" },
  { id: "2", name: "Ethereum" },
];

export type Chain = (typeof chains)[number];
