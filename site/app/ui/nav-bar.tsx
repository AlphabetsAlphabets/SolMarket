import Link from 'next/link';
import NavLinks from '@/app/ui/nav-link.tsx'

export default function NavBar() {
  return (
    <div class="flex w-full max-w-screen-lg items-center rounded-lg bg-gray-500 p-3">
      <NavLinks />
    </div>
  );
}
