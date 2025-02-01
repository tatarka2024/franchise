"use client";
import React, { useState } from "react";
import { openPlaces } from "./openPlaces";
import { upcomingPlaces } from "./upcomingPlaces";
import Container from "@/utils/Container";
import PlacesCard from "./PlacesCard/PlacesCard";
import { openPlacesOptions, upcomingPlacesOptions } from "./options";

export default function ComingSoon() {
  const [selectedTypeOpen, setSelectedTypeOpen] = useState("bistro");

  const [selectedTypeUpcoming, setSelectedTypeUpcoming] = useState("foodcourt");

  const filteredOpenPlaces = openPlaces.filter(
    (place) => place.type === selectedTypeOpen
  );

  const filteredUpcomingPlaces = upcomingPlaces.filter(
    (place) => place.type === selectedTypeUpcoming
  );

  return (
    <Container>
      <ul
        id="coming-soon"
        className="pb-[120px] lg:pb-[180px] grid grid-cols-1  md:grid-cols-2 gap-24 sm:gap-5"
      >
        <PlacesCard
          title={`Відкриті<br/> заклади`}
          options={openPlacesOptions}
          variant="open"
          selectedOption={selectedTypeOpen}
          setSelectedOption={setSelectedTypeOpen}
          filteredPlaces={filteredOpenPlaces}
        />
        <PlacesCard
          variant="upcoming"
          title="Скоро відчиняємось!"
          options={upcomingPlacesOptions}
          selectedOption={selectedTypeUpcoming}
          setSelectedOption={setSelectedTypeUpcoming}
          filteredPlaces={filteredUpcomingPlaces}
        />
      </ul>
    </Container>
  );
}
