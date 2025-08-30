import { Cormorant_Garamond, Lato } from "next/font/google";

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
