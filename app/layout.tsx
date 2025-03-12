import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CSPostHogProvider } from "./_components/Providers";
import { cookieToInitialState } from "wagmi";
import { config } from "./_components/config";
import { headers } from "next/headers";
import Web3ModalProvider from "./_components/contexts";
import { ZkRegexProvider } from "@zk-email/zk-regex-sdk";
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
          <ZkRegexProvider
            clientId={
              "424623312719-73vn8vb4tmh8nht96q7vdbn3mc9pd63a.apps.googleusercontent.com"
            }
            zkRegexRegistryUrl="https://registry-dev.zkregex.com"
          >
            <Web3ModalProvider initialState={initialState}>
              <div>
                <NewPage />
              </div>
            </Web3ModalProvider>
          </ZkRegexProvider>
        </CSPostHogProvider>
      </body>
    </html>
  );
}
