const Section = ({
  title,
  name,
  address,
  description,
  mapQuery,
  reverse = false,
}: {
  title: string;
  name: string;
  address?: string[];
  description?: string;
  mapQuery?: string;
  reverse?: boolean;
}) => {
  const textColumn = (
    <div className="flex flex-col justify-center text-center md:text-left">
      <h2>{title}</h2>
      <p className="mt-10 font-bold">{name}</p>
      {address?.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
      <p className="mt-4">{description}</p>
    </div>
  );

  let mapColumn;
  if (mapQuery) {
    const mapSrc = `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(
      mapQuery,
    )}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;

    mapColumn = (
      <div>
        <iframe
          width="100%"
          height="450"
          className="rounded-lg shadow-md"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={mapSrc}
        ></iframe>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className={reverse ? "md:order-last" : ""}>{textColumn}</div>
        <div>{mapColumn}</div>
      </div>
    </div>
  );
};

export default Section;
