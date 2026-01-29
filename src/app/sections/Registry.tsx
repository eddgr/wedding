import Image from "next/image";

import registryLeft from "@/assets/images/registry-left.png";
import registryRight from "@/assets/images/registry-right.png";

export default function RegistryPage() {
  const qr = [
    {
      img: registryLeft,
      text: "Go all out on a",
      emoji: "🛳️",
      caption: "Disney Cruise",
      url: "https://venmo.com/u/eddgr",
    },
    {
      img: registryRight,
      text: "Or relax at a",
      emoji: "🐾",
      caption: "Japan Onsen & Doggy Inn Stay",
      url: "https://venmo.com/u/Vivian-Kong",
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
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
        {qr.map((qrCode, index) => (
          <div key={index}>
            <p>{qrCode.text}</p>
            <p className="font-bold">
              {qrCode.emoji} {qrCode.caption}
            </p>
            <p className="font-bold mb-8">
              (<a href={qrCode.url}>{qrCode.url}</a>)
            </p>
            <Image src={qrCode.img} alt={qrCode.caption} />
          </div>
        ))}
      </div>
    </div>
  );
}
