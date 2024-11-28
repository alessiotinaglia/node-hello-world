console.log("Ciao");
console.log("Hello World");

const parola = process.argv[2];

if (parola) {
    console.log(`Hello ${parola}`);
  } else {
    console.log("Hello World");
  }