import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/outline";

type Props = {
  regions: string[];
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

const SelectList: React.VFC<Props> = ({ regions, selected, setSelected }) => {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative w-60 sm:w-96">
        <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-opacity-75 focus:ring-hotel-green focus:border-hotel-green sm:text-sm">
          <span className="block text-sm text-gray-700 truncate">
            {selected}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ChevronDownIcon
              className="w-5 h-5 text-gray-700"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-sm bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {regions.map((region: String, regionIdx: number) => (
              <Listbox.Option
                key={regionIdx}
                className={({ active }) =>
                  `${
                    active
                      ? "text-hotel-green-darker bg-hotel-green bg-opacity-25"
                      : "text-gray-900"
                  }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                }
                value={region}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`${
                        selected ? "font-medium" : "font-normal"
                      } block truncate`}
                    >
                      {region}
                    </span>
                    {selected ? (
                      <span
                        className={`${
                          active ? "text-hotel-green" : "text-hotel-green"
                        }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                      >
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default SelectList;
