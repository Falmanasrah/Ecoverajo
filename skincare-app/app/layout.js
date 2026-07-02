import { Montserrat, Lato } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Ecovera | Natural Swedish Skincare",
  description: "Eco-friendly Swedish skincare including hydrators, toners, and cleansers. Natural ingredients for glowing skin.",
  openGraph: {
    title: "Ecovera | Natural Swedish Skincare",
    description: "Eco-friendly Swedish skincare including hydrators, toners, and cleansers.",
    url: "https://ecovera.online",
    siteName: "Ecovera",
    images: [
      {
        url: "https://ecovera.online/img/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
