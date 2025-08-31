import Image from "next/image";

import veggy from "@/assets/images/veggy-square.gif";

export default function Home() {
  return (
    <div className="pb-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/*<div className="flex flex-col md:flex-row md:items-center md:gap-12">*/}
          {/* Image Column */}
          <div className="w-full">
            <Image
              src={veggy}
              alt="Placeholder image for the wedding"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* Content Column */}
          <div className="w-full text-center md:text-left">
            <h1>We're getting married & you're invited!</h1>
            <p className="mt-10">
              Join us <strong>February 6, 2026</strong> at{" "}
              <strong>11:00 AM</strong>. A small ceremony will be held at{" "}
              <strong>Gizella Kopsick Palm Arboretum</strong> in St. Petersburg,
              FL.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
