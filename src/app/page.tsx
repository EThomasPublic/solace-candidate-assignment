"use client";

import { useEffect, useState } from "react";
import { Advocate } from "./types";
import AdvocateTable from "./components/AdvocateTable";
import { useAdvocateSearch } from "./hooks/advocateSearch";
import AdvocateSearch from "./components/SearchBar";

export default function Home() {
  
  const [filteredAdvocates, setFilteredAdvocates] = useState<Array<Advocate>>([]);
  const { advocates } = useAdvocateSearch();

  useEffect(() => {
    setFilteredAdvocates(advocates);
  },[advocates]);

  
  const onSearchResults = (results: Array<Advocate>) => {
    setFilteredAdvocates(results);
  };

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      {<AdvocateSearch onSearchResults={onSearchResults}/>}
      <AdvocateTable advocates={filteredAdvocates}/>
    </main>
  );
}
