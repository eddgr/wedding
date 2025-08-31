// A reusable component for displaying a venue section
const VenueSection = ({
  title,
  name,
  address,
  description,
  mapQuery,
  reverse = false,
}: {
  title: string;
  name: string;
  address: string[];
  description: string;
  mapQuery: string;
  reverse?: boolean;
}) => {
  // TODO: Make sure to add your Google Maps API key to your environment variables
  // The variable should be named NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapSrc = `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(
    mapQuery,
  )}&key=${apiKey}`;

  const textColumn = (
    <div className="flex flex-col justify-center text-center md:text-left">
      <h2>{title}</h2>
      <p className="mt-10 font-bold">{name}</p>
      {address.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
      <p className="mt-4">{description}</p>
    </div>
  );

  const mapColumn = (
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

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className={reverse ? "md:order-last" : ""}>{textColumn}</div>
        <div>{mapColumn}</div>
      </div>
    </div>
  );
};

export default function VenuePage() {
  return (
    <section className="py-12">
      <VenueSection
        title="Wedding Ceremony"
        name="Gizella Kopsick Palm Arboretum"
        address={["605 11th Ave N", "St. Petersburg, FL 33701"]}
        description="We are doing an outdoor ceremony and it will begin at 11:00 AM. There will be plenty of parking."
        mapQuery="Gizella Kopsick Arboretum, St. Petersburg, FL"
      />

      <hr className="my-8 border-gray-200" />

      {/* TODO: Replace with your actual reception venue details */}
      <VenueSection
        title="Reception"
        name="TBD"
        address={["TBD", "TBD"]}
        description="Join us for lunch and drinks following the ceremony."
        mapQuery="TBD"
        reverse={true}
      />
    </section>
  );
}
