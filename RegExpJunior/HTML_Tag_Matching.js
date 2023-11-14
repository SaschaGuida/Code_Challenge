/* 

Create a regular expression to match and extract the content within HTML anchor tags (<a></a>). 
For example, given the input <a href="https://example.com">Visit Example</a>, the regular expression 
should extract Visit Example as the output.

*/

const input = '<a href="https://example.com">Visit Example</a>';
const regex = /<a[^>]*>(.*?)<\/a>/i;
const match = input.match(regex);

if (match) {
    const extractedContent = match[1];
    console.log(extractedContent);
} else {
    console.log('No match found');
}