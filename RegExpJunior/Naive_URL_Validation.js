/* 

Create a regular expression to validate URLs. The URLs should start with http:// or https:// and can contain letters, numbers, periods, hyphens, and slashes. Use the following snippet as a test case:

http://condense.tech # => OK
ftp://condense.tech # => NO
http:condense.tech # => NO
http//condense.tech # => NO
http:/condense.tech # => NO
http://asdadajksdad.1231239-asdasd # => OK
http://asdasd   asdasdad # => NO
http://cond,com # => NO

*/

const urlRegex = /^https?:\/\/[a-zA-Z0-9.\-\/]+$/;

console.log(urlRegex.test("http://condense.tech")); // OK
console.log(urlRegex.test("ftp://condense.tech")); // NO
console.log(urlRegex.test("http:condense.tech")); // NO
console.log(urlRegex.test("http//condense.tech")); // NO
console.log(urlRegex.test("http:/condense.tech")); // NO
console.log(urlRegex.test("http://asdadajksdad.1231239-asdasd")); // OK
console.log(urlRegex.test("http://asdasd   asdasdad")); // NO
console.log(urlRegex.test("http://cond,com")); // NO