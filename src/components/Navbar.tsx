import Link from 'next/link';
import Image from 'next/image';
import { About } from './About';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 mb-10 w-full">
      <Link href="/" className="text-lg font-semibold">
        <Image src="/logo.svg" alt="Logo" width={200} height={200} />
      </Link>
      <div className="flex items-center space-x-4">
        <About />
      </div>
    </nav>
  );
}
