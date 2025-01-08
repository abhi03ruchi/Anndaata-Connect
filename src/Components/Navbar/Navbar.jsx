import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "./Button";

import Logo from "../assets/logo.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-1 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img src={Logo} alt="Company Logo" className="h-16" />
          </a>
        </div>
        <div className="flex lg:hidden z-50">
        {!mobileMenuOpen && (
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        )}
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-lg leading-6 text-[#28183b] font-sans">
            Home
          </a>
          <a href="#about" className="text-lg leading-6 text-[#28183b] font-sans">
            About
          </a>
          <a
            href="/services"
            className="text-lg leading-6 text-[#28183b] font-sans"
          >
            Services
          </a>
          <a href="/team" className="text-lg leading-6 text-[#28183b] font-sans">
            Team
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button />
        </div>
      </nav>
      <Dialog
        as="div"
        className="relative z-10 lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-25"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        <Dialog.Panel className="fixed inset-y-0 right-0 z-20 w-full bg-white p-1 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/">
              <span className="sr-only">Your Company</span>
              <img src={Logo} alt="Company Logo" className="w-[211px] h-[64px]"/>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </a>
                <a
                  href="/services"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Services
                </a>
                <a
                  href="/team"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Team
                </a>
              </div>
              <div className="py-6">
                <a
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
