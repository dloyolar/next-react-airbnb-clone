import { Banner } from '@/components/Banner';
import { Header } from '@/components/Header';
import Head from 'next/head';

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Airbnb Clone - Diego Loyola</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <Header />

      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
        </section>

        {/* Data from service - API */}
        {data?.map((item, i) => (
          <h1 key={i}>{item.location}</h1>
        ))}
      </main>
    </div>
  );
}

export const getStaticProps = async (ctx) => {
  const res = await fetch('https://www.jsonkeeper.com/b/4G1G');
  const data = await res.json();
  return {
    props: { data },
  };
};
