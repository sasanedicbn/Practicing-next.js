import Link from "next/link";

const DrinkList = ({ drinks }) => {
  return (
    <ul>
      {drinks?.map((drink) => (
        <li
          key={drink.idDrink}
          className="mb-4 p-4 border rounded-lg shadow-lg"
        >
          <h2 className="text-xl font-bold mb-2">{drink.strDrink}</h2>
          <img
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            className="w-32 h-32 object-cover rounded-md"
          />
          <Link
            href={`/bar/${drink.idDrink}`}
            className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            See more
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DrinkList;
