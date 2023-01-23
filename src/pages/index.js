import { Header } from '@/components/Header';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb Clone - Diego Loyola</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <Header />

      {/* Banner */}
    </div>
  );
}
