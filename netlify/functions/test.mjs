export default async (req, context) => {
  const { nrOfCats } = context.params;

  return new Response(`You asked for ${nrOfCats}!`);
};

export const config = {
  path: "/cat-api/:nrOfCats",
};
