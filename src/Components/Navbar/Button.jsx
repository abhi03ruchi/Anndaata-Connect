import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function DropdownButton() {
  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button className="inline-flex items-center justify-center gap-x-1.5 rounded-full bg-orange-500 px-4 py-2 text-sm md:text-base font-semibold text-white hover:bg-orange-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-300">
          Register
          <ChevronDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
        >
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/ngo-register"
                  className={`${
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                  } block px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-150`}
                >
                  NGO
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/donor-register"
                  className={`${
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                  } block px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-150`}
                >
                  Donors
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
