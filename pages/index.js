import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import LockForm from "@components/LockForm";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cloud Lock</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2>EE1301 Lock Demo</h2>
        <LockForm />
      </main>
      <Footer />
    </div>
  );
}
