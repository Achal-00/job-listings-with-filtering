import data from "./data.json";
import Card from "./Card";
import { useEffect, useState } from "react";

export default function ListSection() {
  const [filterItem, setFilterItem] = useState([]);

  return (
    <section className="px-[5%] relative">
      {filterItem.length > 0 && (
        <div className="bg-white relative top-0 -translate-y-1/2 grid grid-cols-[0.8fr_0.2fr] p-4 landscape:lg:px-8 rounded-md">
          <div className="flex gap-4 flex-wrap">
            {filterItem.map((item, index) => (
              <div className="bg-background-greyish-cyan flex gap-2 rounded-sm">
                <p className="text-desaturated-dark-cyan font-bold pl-3 py-1 self-center">
                  {item}
                </p>
                <div
                  onClick={() => {
                    const arr = filterItem;
                    arr.splice(arr.indexOf(item), 1);
                    setFilterItem([...arr]);
                  }}
                  className="bg-desaturated-dark-cyan w-8 grid content-center justify-items-center rounded-r-sm landscape:lg:hover:bg-very-dark-greyish-cyan landscape:lg:hover:cursor-pointer"
                >
                  <img src="icon-remove.svg" alt="" />
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setFilterItem([])}
            className="self-center text-dark-greyish-cyan justify-self-end landscape:lg:hover:text-desaturated-dark-cyan landscape:lg:hover:underline landscape:lg:hover:cursor-pointer"
          >
            Clear
          </button>
        </div>
      )}
      <div className={`grid gap-12 pb-8 ${filterItem.length === 0 && "pt-8"}`}>
        {filterItem.length === 0
          ? data.map((item) => (
              <Card
                key={item.id}
                image={item.logo}
                company={item.company}
                isNew={item.new}
                isFeatured={item.featured}
                position={item.position}
                posted={item.postedAt}
                contract={item.contract}
                location={item.location}
                role={item.role}
                level={item.level}
                tools={item.tools}
                languages={item.languages}
                filterItem={filterItem}
                setFilterItem={setFilterItem}
              />
            ))
          : data.map((item) => {
              if (
                filterItem.every((value) => Object.values(item).includes(value))
              ) {
                return (
                  <Card
                    key={item.id}
                    image={item.logo}
                    company={item.company}
                    isNew={item.new}
                    isFeatured={item.featured}
                    position={item.position}
                    posted={item.postedAt}
                    contract={item.contract}
                    location={item.location}
                    role={item.role}
                    level={item.level}
                    tools={item.tools}
                    languages={item.languages}
                    filterItem={filterItem}
                    setFilterItem={setFilterItem}
                  />
                );
              }
            })}
      </div>
    </section>
  );
}
