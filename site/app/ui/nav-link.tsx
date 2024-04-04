'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    href: '/about',
  },
  { name: 'Application', href: '/application' },
  { name: 'Collaborator', href: '/collaborator' },
];

export default function Navlinks() {
  const pathname = usePathname();
  var logo = (
      <div class="flex-grow">
        <a href="/" class="rounded-full bg-indigo-800 p-3">Sol Market</a>
         by CoKies
      </div>
  );

  var register = (
      <div class="flex-1 text-right">
        <a href="/register" class="rounded-full bg-indigo-800 p-3">Register now</a>
     </div>
  );

  var links_html = links.map((link) => {
    var css = clsx("p-3 hover:text-sky-400");

    return (
      <div class="flex-1">
        <Link
          key={link.name}
          href={link.href}
          className={css}
        >
          <p className="hidden md:block">{link.name}</p>
        </Link>
      </div>
    );
  });

  return (
    <>
      {logo}
      {links_html}
      {register}
    </>
  );
}
