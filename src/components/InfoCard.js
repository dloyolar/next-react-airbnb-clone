import Image from 'next/image';

export const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div>
      <div className="relative h-24 w-40 md:h-52 md:w-80  flex-shrink">
        <Image
          src={img}
          fill
          style={{ objectFit: 'cover' }}
          alt={`${title} image`}
        />
      </div>
    </div>
  );
};
