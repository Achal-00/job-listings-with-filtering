export default function Card(props) {
  return (
    <div>
      <div
        className={`landscape:lg:hidden bg-white p-8 relative flex flex-col gap-4 rounded-md shadow-xl ${
          props.isFeatured && "border-l-4 border-l-desaturated-dark-cyan"
        }`}
      >
        <img
          src={props.image}
          alt=""
          className="w-12 absolute top-0 -translate-y-1/2"
        />
        <div className="grid gap-4">
          <div className="flex gap-6 items-center">
            <p className="text-desaturated-dark-cyan font-bold">
              {props.company}
            </p>
            <div className="flex gap-2">
              {props.isNew && (
                <p className="bg-desaturated-dark-cyan text-white py-1 px-2 rounded-full text-sm">
                  NEW!
                </p>
              )}
              {props.isFeatured && (
                <p className="bg-very-dark-greyish-cyan text-white py-1 px-2 rounded-full text-sm">
                  FEATURED
                </p>
              )}
            </div>
          </div>
          <p className="text-very-dark-greyish-cyan font-bold">
            {props.position}
          </p>
          <div className="flex gap-4 items-center">
            <p className="text-dark-greyish-cyan">{props.posted}</p>
            <div className="w-1 h-1 bg-dark-greyish-cyan rounded-full"></div>
            <p className="text-dark-greyish-cyan">{props.contract}</p>
            <div className="w-1 h-1 bg-dark-greyish-cyan rounded-full"></div>
            <p className="text-dark-greyish-cyan">{props.location}</p>
          </div>
        </div>
        <div className="w-full h-[0.01rem] bg-very-dark-greyish-cyan"></div>
        <div className="flex gap-4 flex-wrap">
          <p
            onClick={() => {
              if (!props.filterItem.includes(props.role))
                props.setFilterItem([...props.filterItem, props.role]);
            }}
            className="text-desaturated-dark-cyan font-bold bg-background-greyish-cyan p-2 rounded-md"
          >
            {props.role}
          </p>
          <p
            onClick={() => {
              if (!props.filterItem.includes(props.level))
                props.setFilterItem([...props.filterItem, props.level]);
            }}
            className="text-desaturated-dark-cyan font-bold bg-background-greyish-cyan p-2 rounded-md"
          >
            {props.level}
          </p>
          {props.tools.map((item, index) => (
            <p
              onClick={() => {
                if (!props.filterItem.includes(item))
                  props.setFilterItem([...props.filterItem, item]);
              }}
              key={index}
              className="text-desaturated-dark-cyan font-bold bg-background-greyish-cyan p-2 rounded-md"
            >
              {item}
            </p>
          ))}
          {props.languages.map((item, index) => (
            <p
              onClick={() => {
                if (!props.filterItem.includes(item))
                  props.setFilterItem([...props.filterItem, item]);
              }}
              key={index}
              className="text-desaturated-dark-cyan font-bold bg-background-greyish-cyan p-2 rounded-md"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <div
        className={`hidden landscape:lg:grid grid-cols-[0.1fr_0.4fr_0.5fr] bg-white p-8 gap-4 rounded-md shadow-xl ${
          props.isFeatured && "border-l-4 border-l-desaturated-dark-cyan"
        }`}
      >
        <img src={props.image} alt="" className="self-center" />
        <div className="grid gap-2">
          <div className="flex gap-6 items-center">
            <p className="text-desaturated-dark-cyan font-bold">
              {props.company}
            </p>
            <div className="flex gap-2">
              {props.isNew && (
                <p className="bg-desaturated-dark-cyan text-white py-1 px-2 rounded-full text-sm">
                  NEW!
                </p>
              )}
              {props.isFeatured && (
                <p className="bg-very-dark-greyish-cyan text-white py-1 px-2 rounded-full text-sm">
                  FEATURED
                </p>
              )}
            </div>
          </div>
          <p className="text-very-dark-greyish-cyan w-max font-bold text-xl landscape:lg:hover:text-desaturated-dark-cyan landscape:lg:hover:cursor-pointer">
            {props.position}
          </p>
          <div className="flex gap-4 items-center">
            <p className="text-dark-greyish-cyan">{props.posted}</p>
            <div className="w-1 h-1 bg-dark-greyish-cyan rounded-full"></div>
            <p className="text-dark-greyish-cyan">{props.contract}</p>
            <div className="w-1 h-1 bg-dark-greyish-cyan rounded-full"></div>
            <p className="text-dark-greyish-cyan">{props.location}</p>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap items-center justify-end">
          <p
            onClick={() => {
              if (!props.filterItem.includes(props.role))
                props.setFilterItem([...props.filterItem, props.role]);
            }}
            className="text-desaturated-dark-cyan font-bold bg-background-greyish-cyan p-2 rounded-md landscape:lg:hover:cursor-pointer landscape:lg:hover:bg-desaturated-dark-cyan landscape:lg:hover:text-white"
          >
            {props.role}
          </p>
          <p
            onClick={() => {
              if (!props.filterItem.includes(props.level))
                props.setFilterItem([...props.filterItem, props.level]);
            }}
            className="text-desaturated-dark-cyan font-bold bg-background-greyish-cyan p-2 rounded-md landscape:lg:hover:cursor-pointer landscape:lg:hover:bg-desaturated-dark-cyan landscape:lg:hover:text-white"
          >
            {props.level}
          </p>
          {props.tools.map((item, index) => (
            <p
              onClick={() => {
                if (!props.filterItem.includes(item))
                  props.setFilterItem([...props.filterItem, item]);
              }}
              key={index}
              className="text-desaturated-dark-cyan font-bold bg-background-greyish-cyan p-2 rounded-md landscape:lg:hover:cursor-pointer landscape:lg:hover:bg-desaturated-dark-cyan landscape:lg:hover:text-white"
            >
              {item}
            </p>
          ))}
          {props.languages.map((item, index) => (
            <p
              onClick={() => {
                if (!props.filterItem.includes(item))
                  props.setFilterItem([...props.filterItem, item]);
              }}
              key={index}
              className="text-desaturated-dark-cyan font-bold bg-background-greyish-cyan p-2 rounded-md landscape:lg:hover:cursor-pointer landscape:lg:hover:bg-desaturated-dark-cyan landscape:lg:hover:text-white"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
