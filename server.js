
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const favouriteFood = process.env.FAVOURITE_FOOD;
  while(true) {
    console.log(`Microservices rock but I like ${favouriteFood}!`);
    await sleep(5000);
  }
}

main();
