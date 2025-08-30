import Image from 'next/image';

export default function AccommodationsPage() {
  return (
    <div className="py-12">
      <div className="mb-12">
        <Image
          src="https://placehold.co/1200x400/EEE/31343C.png"
          alt="Placeholder image for accommodations"
          width={1200}
          height={400}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Accommodations
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Here are some recommendations for places to stay.
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="border rounded-lg p-6 md:w-2/3 lg:w-1/2 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Hotel Name
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600">
            A short description of the hotel and why you recommend it.
          </p>
          <a
            href="#"
            className="mt-6 inline-block rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}
