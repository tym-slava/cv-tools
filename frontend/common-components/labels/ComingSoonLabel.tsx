import React from "react";

const ComingSoonLabel: React.FC = () => {
  return (
    <div
      role="img"
      aria-label="Coming soon label"
      className="w-fit inline-flex -skew-x-12 overflow-hidden rounded-full border-2 border-black bg-white font-semibold uppercase text-black text-[9px]"
    >
      <span className="bg-black px-2 py-1 text-white ">Coming</span>
      {/* <span className="relative flex items-stretch">
        <span
          aria-hidden="true"
          className="h-full w-3 bg-black"
        />
      </span> */}
      <span className="px-4 py-1 text-black">Soon</span>
    </div>
  );
};

export default ComingSoonLabel;
