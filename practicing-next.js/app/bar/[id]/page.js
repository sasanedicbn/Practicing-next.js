const DrinkPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  return <div>Drink Page</div>;
};

export default DrinkPage;
