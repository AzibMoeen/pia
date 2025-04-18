import React from "react";
import DestinationCard from "./DestinationCard";
import { destinations } from "../data";

const BestOffers = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-4xl md:text-4xl text-green-700 mb-8">BEST OFFERS</h2>

        <div className="grid grid-cols-1 gap-6 md:hidden">
          <DestinationCard {...destinations[0]} size="normal" />
          <DestinationCard {...destinations[1]} size="normal" />
          <DestinationCard {...destinations[2]} size="large" />
          <DestinationCard {...destinations[3]} size="normal" />
          <DestinationCard {...destinations[4]} size="normal" />
        </div>

        <div className="hidden md:grid md:grid-cols-12 gap-6">
          <div className="md:col-span-3 flex flex-col gap-6">
            <DestinationCard {...destinations[0]} size="normal" />
            <DestinationCard {...destinations[1]} size="normal" />
          </div>

          <div className="md:col-span-3">
            <DestinationCard {...destinations[2]} size="large" />
          </div>

          <div className="md:col-span-6 flex flex-col gap-6">
            <DestinationCard {...destinations[3]} size="normal" />
            <DestinationCard {...destinations[4]} size="normal" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestOffers;
