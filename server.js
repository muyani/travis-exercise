
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    const word = process.env.WORD
    console.log(word);
    await sleep(5000);
  }
}

main();
