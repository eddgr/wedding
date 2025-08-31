export default function AccommodationsPage() {
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <h2>Accommodations</h2>
          <p className="mt-10">
            We recommend staying around the Downtown and Grand Central District
            area in St. Pete.
          </p>
        </div>

        <div>
          <div className="flex justify-center">
            <div className="border rounded-lg p-6 text-center">
              <div className="text-2xl font-bold">Tru by Hilton</div>
              <p className="mt-4 text-left">
                Conveniently located in St. Petersburg's Grand Central and Edge
                Districts, the hotel offers easy access to renowned museums, the
                local craft beer scene, and is a short drive away from the
                wedding ceremony.
              </p>
              <a
                href="https://www.hilton.com/en/hotels/piedtru-tru-st-petersburg-downtown-central-ave/"
                target="_blank"
                className="mt-4 inline-block rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                Book Now
              </a>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p>
              ...and here are some of our{" "}
              <a
                href="https://maps.app.goo.gl/g7CvhUFtqHuEwZ7w9?g_st=i"
                target="_blank"
                className="recommendations"
              >
                favorite spots to check out
              </a>{" "}
              while you're visiting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
