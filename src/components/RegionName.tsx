import React from "react";

type Props = {
  regionName: string;
};
const RegionName: React.VFC<Props> = ({ regionName }) => {
  return (
    <div className="sticky flex items-center justify-between py-2 bg-slate-100 top-16 md:top-20 space-x-9">
      <div className="text-sm text-slate-800 lg:text-base lg:font-bold">
        {regionName}
      </div>
      <div className="flex-1 h-px bg-hotel-green"></div>
    </div>
  );
};

export default RegionName;
