import Image from 'next/image';

export default function ThingsToDoPage() {
  return (
    <div className="py-12">
      <div className="mb-12">
        <Image
          src="https://placehold.co/1200x400/EEE/31343C.png"
          alt="Placeholder image for things to do"
          width={1200}
          height={400}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Things to Do in the City
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Here are some of our favorite spots and recommendations.
        </p>
      </div>

      <div className="mt-10">
        {/*
          TODO: Replace "YOUR_GOOGLE_MAPS_LIST_EMBED_URL_HERE" with the embed URL of your Google Maps list.
          You can get this by going to your Google Maps list, clicking the "Share" button,
          and then selecting the "Embed a map" tab. Copy the src attribute from the iframe code.
        */}
        <iframe
          src="YOUR_GOOGLE_MAPS_LIST_EMBED_URL_HERE"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
