let re;
re = /hello/;
re = /hello/i;
// console.log(re);
// console.log(re.source);

const result = re.exec('brad Helloooo world');
console.log(result);

// const result = re.test('Hello');
// console.log(result);


const str = 'brad Hellooooo there';
const result1 = str.match(re);
console.log(result1);