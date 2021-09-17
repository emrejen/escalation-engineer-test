const faker = require('faker');

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

for (let i = 1; i < 10; ++i) {
  console.info(
    `INSERT INTO ProductOrder VALUES (${getRndInteger(
      100,
      20000
    )}, 1, 1, "${getRndInteger(10, 500)}");`
  );
}
