async function lambda(req, context) {
  const { nrOfCats } = context.params;

  // eslint-disable-next-line no-undef
  const apiKey = Netlify.env.get("MY_API_KEY");

  return new Response(`You asked for ${nrOfCats}! the api key is ${apiKey}`);
}

export default lambda;

export const config = {
  path: "/cat-api/:nrOfCats",
};
