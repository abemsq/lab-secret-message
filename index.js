let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length);

let removeLastString = secretMessage.pop()

console.log(secretMessage.length);

secretMessage[7] = `right`;
console.log(secretMessage);

secretMessage.shift();
console.log(secretMessage);

secretMessage.unshift(`Programming`);
console.log(secretMessage);

secretMessage.splice(6, 11);
console.log(secretMessage.join());