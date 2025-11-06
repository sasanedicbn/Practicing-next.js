import Image from "next/image";
import Link from "next/link";

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
      <Link href="/bar" className="text-blue-500 underline mb-4 inline-block">
        Back to Bar
      </Link>
      <h1 className="text-4xl font-bold mb-4">
        {getSingleDrink.drinks[0].strDrink}
      </h1>
      {/* <img
        src={getSingleDrink.drinks[0].strDrinkThumb}
        alt={getSingleDrink.drinks[0].strDrink}
        className="w-64 h-64 object-cover rounded-md"
      /> */}
      <Image
        src={getSingleDrink.drinks[0].strDrinkThumb}
        alt={getSingleDrink.drinks[0].strDrink}
        width={140}
        height={140}
      />
      <p className="mt-4">{getSingleDrink.drinks[0].strInstructions}</p>
    </div>
  );
};

export default DrinkPage;
