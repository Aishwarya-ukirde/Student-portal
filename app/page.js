// page.js
import Image from "next/image";
import Header from "./Components/Header";
import Main from "./Components/Main";

export default function Home() {
  return (
    <div className="relative min-h-screen w-screen">
      <div className="absolute inset-0">
        <Image
          src="/BG Vector.png"
          alt="Background Vector"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority={true}
          className="h-full w-full sm:h-[70vh] sm:w-full md:h-[80vh] lg:h-full md:w-full"
        />
      </div>

      <div className="relative z-10 h-full flex flex-col md:">
        <Header />
        <Main />
      </div>
    </div>
  );
}
