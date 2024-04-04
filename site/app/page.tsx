import Image from "next/image";
import { inter, lusitana } from '@/app/ui/fonts';

import NavBar from "@/app/ui/nav-bar.tsx"

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >

      <NavBar />

      <div class="grid grid-cols-1 place-content-center">
        <div class="place-content-center">
          <strong>NOW AVAILABLE</strong>
        </div>
        <div class="place-content-center">
          <Image
            src="/dota2.png"
            width={891}
            height={314}
            objectFit="cover"
            alt="dota2 pic"
          />
        </div>
      </div>

      <div class="grid grid-cols-1">
        <div class="place-content-center pb-5">
          <strong>FEATURED</strong>
        </div>
        <div class="grid grid-cols-5">
          <div class="flex px-8">
            <Image
              src="/a-game.png"
              width={118}
              height={114}
              objectFit="cover"
            />
          </div>
          <div class="flex px-8">
            <Image
              src="/axie-infinity.png"
              width={118}
              height={114}
              objectFit="cover"
            />
          </div>
          <div class="flex px-8">
            <Image
              src="/running-dead.png"
              width={118}
              height={114}
              objectFit="cover"
            />
          </div>
          <div class="flex px-8">
            <Image
              src="/rockstar.png"
              width={118}
              height={114}
              objectFit="cover"
            />
          </div>
          <div class="flex px-8">
            <Image
              src="/a-game.png"
              width={118}
              height={114}
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      
      </div>
    </main>
  );
}
