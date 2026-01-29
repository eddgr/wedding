import Image from "next/image";

import registryLeft from "@/assets/images/registry-left.png";
import registryRight from "@/assets/images/registry-right.png";

export default function RegistryPage() {
  const qr = [
    {
      img: registryLeft,
      caption: "Disney Cruise!",
    },
    {
      img: registryRight,
      caption: "Japan Onsen & Doggy Inn Stay",
    },
  ];

  return (
    <div id="registry" className="py-12">
      <div className="text-center">
        <h2>Wedding Registry</h2>
        <p className="mt-10">
          We’re saving for our honeymoon! If you’d like to gift something, we
          would gratefully accept cash or a contribution to one of the following
          via Venmo:
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {qr.map((qrCode, index) => (
          <div key={index}>
            <Image src={qrCode.img} alt={qrCode.caption} />
          </div>
        ))}
      </div>
    </div>
  );
}
