import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import Layout from "@/components/Layout";
import RegisterModal from "@/components/modals/RegisterModal";
import LoginModal from "@/components/modals/LoginModal";
import EditModal from "@/components/modals/EditModal";
import PostModal from "@/components/modals/PostModal";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>λ</title>
      </Head>
      <Toaster />
      <EditModal />
      <RegisterModal />
      <LoginModal />
      <PostModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
