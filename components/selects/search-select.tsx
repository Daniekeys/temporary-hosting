import { useState } from "react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Combobox } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";

interface SelectedProps {
  options: any;
  selected: any;
  setSelected: any;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function SearchSelect({
  options,
  setSelected,
  selected,
}: SelectedProps) {
  const [query, setQuery] = useState("");

  const filteredSearch =
    query === ""
      ? options
      : options.filter((item: any) => {
          return item?.name
            ?.toLowerCase()
            ?.includes(query.toLowerCase());
        });

  return (
    <Combobox as="div" value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full  border border-gray-300 bg-mainBlue bg-opacity-5 rounded-[50px]  pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 font-sans sm:text-sm capitalize h-[50px]"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(item: any) =>
            `${item?.name || ""} `
          }
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <IoIosArrowDown
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredSearch?.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 font-sans focus:outline-none sm:text-sm">
            {filteredSearch.map((item: any,index:number) => (
              <Combobox.Option
                key={index}
                value={item}
                className={({ active }) =>
                  classNames(
                    "relative cursor-default select-none py-2 pl-3 pr-9",
                    active ? " bg-mainBlue text-white" : "text-gray-900"
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className="flex items-center  font-sans">
                   
                      <span
                        className={classNames(
                          "ml-3 truncate capitalize cursor-pointer",
                          selected && " font-sans"
                        )}
                      >
                        {item?.name}
                      </span>
                    </div>

                   
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
