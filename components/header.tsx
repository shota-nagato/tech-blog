import Link from "next/link";
import Search from "./search";
import { Suspense } from "react";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between px-4 py-6">
        <Link href="/" className="text-2xl font-bold">
          Tech Blog
        </Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Search />
        </Suspense>
      </div>
    </header>
  );
}
