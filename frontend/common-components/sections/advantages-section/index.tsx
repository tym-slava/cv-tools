import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@heroui/react";

import { advantagesList } from "./advantages-list";

function AdvantagesSection() {
  return (
    <section className="flex flex-col gap-[44px]">
      <div className="items-wrapper flex flex-col items-center lg:flex-row gap-[44px]">
        {advantagesList.slice(0, 3).map((advantage, index) => (
          <Card
            key={`advantage-${index}`}
            className="max-w-[400px] bg-white/60 dark:bg-white/5
              border border-gray-200/80 dark:border-white/10
              backdrop-blur-sm
              shadow-sm hover:shadow-md
              transition-all duration-300 hover:-translate-y-1"
          >
            <CardHeader className="flex gap-3">
              {advantage.icon}
              <h3 className="text-lg font-semibold">{advantage.title}</h3>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>{advantage.description}</p>
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="items-wrapper flex flex-col items-center lg:flex-row gap-[44px]">
        {advantagesList.slice(-3).map((advantage, index) => (
          <Card
            key={`advantage-${index}`}
            className="w-full max-w-[400px] bg-white/60 dark:bg-white/5
              border border-gray-200/80 dark:border-white/10
              backdrop-blur-sm
              shadow-sm hover:shadow-md
              transition-all duration-300 hover:-translate-y-1"
          >
            <CardHeader className="flex gap-3">
              {advantage.icon}
              <h3 className="text-lg font-semibold">{advantage.title}</h3>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>{advantage.description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default AdvantagesSection;
