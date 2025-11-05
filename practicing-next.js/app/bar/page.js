import DrinkList from "@/components/DrinkList";
import React from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z";

const Bar = async () => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  console.log(data);

  return <DrinkList drinks={data.drinks} />;
};

export default Bar;
