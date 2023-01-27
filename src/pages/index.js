import { Banner } from '@/components/Banner';
import { Header } from '@/components/Header';
import { SmallCard } from '@/components/SmallCard';
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
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
