import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CSPostHogProvider } from "./_components/Providers";
import { cookieToInitialState } from "wagmi";
import { config } from "./_components/config";
import { headers } from "next/headers";
import Web3ModalProvider from "./_components/contexts";
import NewPage from "./_components/subsections/NewPage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "strobe",
  description: "bringing offchain innovation to onchain execution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en">
      <body className={inter.className}>
        <CSPostHogProvider>
          <Web3ModalProvider initialState={initialState}>
            <div>
              <NewPage />
            </div>
          </Web3ModalProvider>
        </CSPostHogProvider>
      </body>
    </html>
  );
}
