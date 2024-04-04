import { Inter } from 'next/font/google'
import { useWalletTokenBalance } from '@lndgalante/solutils';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import dynamic from 'next/dynamic'
import Button from '@/components/Button'

import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

function Home() {

  const { publicKey } = useWallet();
  const { connection } = useConnection();
 
  // solutils hooks
  const { getWalletTokenBalance, result, status, error } = useWalletTokenBalance(publicKey, connection);
 
  // handlers
  function handleWalletBalanceRequest() {
    getWalletTokenBalance('SOL');
  }

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

      <hr></hr>
      <WalletMultiButton />

      <div className="relative flex flex-col justify-between place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <h1 className='font-bold'>This is a boilerplate for the APUBCC Sparkathon 2023</h1>
          {/* if publicKey found, display button */}
          {publicKey ? <div className='place-items-center grid mt-10'>
          <Button onClick={handleWalletBalanceRequest}>Request Wallet Balance</Button>
          {status === 'iddle' ? <p>Haven&apos;t requested any SOL balance yet</p> : null}
          {status === 'loading' ? <p>Requesting your SOL balance tokens</p> : null}
          {status === 'success' ? <p>We successfully got your balance: {result} SOL</p> : null}
          {status === 'error' ? <p>{error}</p> : null}
        </div> : null}
        
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      
      </div>
    </main>
  )
}

export default dynamic (() => Promise.resolve(Home), {ssr: false} )
