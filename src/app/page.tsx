import Image from "next/image";

import hexagon from "@/public/images/Polygon 62.svg";

export default function Home() {
  return (
    <div>
      <div>
        <div>
          <Image src={hexagon} alt="My Next.js App" />
        </div>
      </div>
    </div>
  );
}
