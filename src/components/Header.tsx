"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Build
            </Link>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden p-2 text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
            <nav
              className={`${
                isOpen ? "flex" : "hidden"
              } sm:flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 absolute sm:relative top-16 sm:top-auto left-0 sm:left-auto w-full sm:w-auto bg-white sm:bg-transparent shadow-md sm:shadow-none p-4 sm:p-0 z-20`}
            >
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === "/"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                Գլխավոր
              </Link>
              <Link
                href="/view"
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === "/view"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                Դիտել փաստաթուղթը
              </Link>
              <Link
                href="/editor"
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === "/editor"
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                Փաստաթղթի խմբագրիչ
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
