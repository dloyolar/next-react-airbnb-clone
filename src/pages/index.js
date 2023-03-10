import { Banner } from '@/components/Banner';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { LargeCard } from '@/components/LargeCard';
import { MediumCard } from '@/components/MediumCard';
import { SmallCard } from '@/components/SmallCard';
import Head from 'next/head';

export default function Home({ data, cardsData }) {
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

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
          title="The Greatest Outdoors"
          img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
        />
      </main>

      <Footer />
    </div>
  );
}

export const getStaticProps = async (ctx) => {
  const data = await fetch('https://www.jsonkeeper.com/b/4G1G').then((res) =>
    res.json()
  );

  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then(
    (res) => res.json()
  );

  return {
    props: { data, cardsData },
  };
};
