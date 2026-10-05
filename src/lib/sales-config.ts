/** Set these to the real payment URLs when the two Greenn offers are ready. */
export const SALES_CONFIG = {
  productName: "TiraDefeito Expert",
  appUrl: "https://tiradefeito.comandoseletricosexpert.com.br/",
  plans: [
    { months: 6, price: 37, checkoutUrl: "", recommended: false },
    { months: 12, price: 67, checkoutUrl: "", recommended: true },
  ],
} as const;
