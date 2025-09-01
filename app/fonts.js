import  localFont from 'next/font/local';

export const satoshi = localFont({
 src: [
    {
      path: "./Satoshi-Variable.woff2",
      weight: "300",
      style: "normal",
    },
     {
      path: "./Satoshi-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "./Satoshi-Bold.woff2",
      weight: "700",
      style: "bold",
    },
     {
      path: "./Satoshi-Bold.woff2",
      weight: "900",
      style: "extra-bold",
    },

  ],
  variable: '--font-satoshi',
  display: 'swap', 
});