process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });
  
  const args = process.argv.slice(2);
  console.log(args)
  