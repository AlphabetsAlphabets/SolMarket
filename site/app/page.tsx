import Image from "next/image";
import { inter, lusitana } from '@/app/ui/fonts';

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div class="flex w-full max-w-screen-lg items-center rounded-lg bg-gray-500 p-3">
        <div class="flex-grow">
          <button class="rounded-full bg-indigo-800 p-3">Sol Market</button>
           by CoKies
        </div>
        <div class="flex-1">
          <button class="p-3 hover:text-sky-400">Home</button>
        </div>
        <div class="flex-1">
          <button class="p-3 hover:text-sky-400">About</button>
        </div>
        <div class="flex-1">
          <button class="p-3 hover:text-sky-400">Application</button>
        </div>
        <div class="flex-1">
          <button class="p-3 hover:text-sky-400">Collaborator</button>
        </div>
        <div class="flex-1 text-right">
          <button class="rounded-full bg-indigo-800 p-3">Register now</button>
       </div>
      </div>

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
