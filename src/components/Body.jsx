import { FILTERS } from "../constants";
import { EXTENSION_LIST as EXTENSIONS_DATA } from "../constants";
import { REMOVE } from "../constants";
import { useState, useMemo } from 'react';



const Body = () => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [extensions, setExtensions] = useState([...EXTENSIONS_DATA]); // store in state

  const filteredExtensions = useMemo(() => {
    return extensions.filter(item =>
      currentFilter === "all"
        ? true: currentFilter === "active"
        ? item.isActive: !item.isActive
    );
  }, [currentFilter, extensions]);

  const toggleActive = (index) => {
    setExtensions(prevExtensions => {
      const updated = [...prevExtensions];
      updated[index] = { ...updated[index], isActive: !updated[index].isActive };
      return updated;
    });
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between mt-10 mb-6 gap-4">
        <h1 className="text-3xl text-white font-semibold">Extensions Lists</h1>
        <div className="flex space-x-2">
          {FILTERS.map(filter => (
            <button
              key={filter.value}
              className={`px-6 py-1 rounded-full text-sm ${
                currentFilter === filter.value ? "bg-red-500 text-white" : "bg-[#1F2937]"
              }`}
              onClick={() => setCurrentFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredExtensions.map((extension, filteredIndex) => {
          // Find original index in the main array so toggle works
          const realIndex = extensions.findIndex(e => e.title === extension.title);
          return (
            <div key={realIndex} className="bg-[#1F2937] rounded-xl p-4 flex flex-col justify-between shadow">
              <div className="flex items-start space-x-3 mb-8">
                <img src={extension.image} alt="extension" />
                <div>
                  <h2 className="font-semibold">{extension.title}</h2>
                  <p className="text-sm text-gray-300">{extension.description}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <button className="text-sm bg-[#374151] p-3 rounded-xl" onClick={() => removeExtension(realIndex)}>Remove</button>
                <label className="relative w-20 h-10 rounded-full cursor-pointer inline-block">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={extension.isActive}
                    onChange={() => toggleActive(realIndex)}
                  />
                  <span className="absolute left-0 top-0 w-full h-full bg-[#374151] rounded-full transition-colors duration-500 peer-checked:bg-red-500"></span>
                  <span className="absolute w-2/5 h-4/5 bg-gray-100 rounded-full left-1 top-1 transition-all duration-500 peer-checked:left-11"></span>
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
