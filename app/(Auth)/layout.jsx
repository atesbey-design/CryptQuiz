"use client";
import { usePathname } from "next/navigation";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import PopUp from "@/components/DashboardQuizsPopUp/PopUp";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useSelector } from "react-redux";
import LayoutHeader from "@/components/LayoutHeader/LayoutHeader";

// ******* Wallet Kitt****

import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import {
  injectedWallet,
  rainbowWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, zora } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, zora],
  [publicProvider()]
);
// const  projectId = "P"
const connectors = connectorsForWallets([
  {
    groupName: "Populer",
    wallets: [injectedWallet({ chains })],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});
// ***** Wallet Kit *****

export default function RootLayout({ children }) {
  const pathName = usePathname();
  // const drawer = useSelector((state) => state.popUp.popUp)

  return (
    <Provider store={store}>
      <html lang="en">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Lexend+Mega:wght@400;500;600;700;800&family=Public+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <body
          className="relative bg-neu-yellow"
          style={{
            backgroundSize: "64px 64px",
            backgroundImage:
              "linear-gradient(to right, #505050 1px, transparent 1px),linear-gradient(to bottom, #505050 1px, transparent 1px)",
          }}
        >
          <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}>
              <div
                className="bg-neu-yellow h-full lg:h-[100vh] w-[100vw] flex flex-col items-center justify-center pb-4 lg:pb-0"
                style={{
                  backgroundSize: "64px 64px",
                  backgroundImage:
                    "linear-gradient(to right, #505050 1px, transparent 1px),linear-gradient(to bottom, #505050 1px, transparent 1px)",
                }}
              >
                <LayoutHeader />
                {(pathName !== "/profile") &
                (pathName !== "/home")  ? (
                  <div className="w-[90vw] lg:w-[80vw] h-[95vh] lg:h-[80vh] bg-neu-white rounded-20 lg:rounded-40 overflow-hidden border border-black border-r-4 border-b-4 lg:border-r-8 lg:border-b-8">
                    {children}
                  </div>
                ) : (
                  <div>{children}</div>
                )}
                <PopUp />
              </div>
            </RainbowKitProvider>
          </WagmiConfig>
        </body>
      </html>
    </Provider>
  );
}
