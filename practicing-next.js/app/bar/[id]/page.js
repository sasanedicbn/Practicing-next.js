const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const getDrink = async (id) => {
  const response = await fetch(url + id);
  if (!response.ok) {
    throw new Error("Failed to fetch drink data");
  }
  return await response.json();
};

const DrinkPage = async ({ params }) => {
  const { id } = await params;
  const getSingleDrink = await getDrink(id);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">
        {getSingleDrink.drinks[0].strDrink}
      </h1>
      <img
        src={getSingleDrink.drinks[0].strDrinkThumb}
        alt={getSingleDrink.drinks[0].strDrink}
      />
      <p className="mt-4">{getSingleDrink.drinks[0].strInstructions}</p>
    </div>
  );
};

export default DrinkPage;
