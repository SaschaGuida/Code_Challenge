/* 

Problem: You have a function extractCategoryName that can either return a string or null depending on the input type. Write the type guards isProduct and  isString. Here’s a starting point for your code:

    interface Category {
    name: string;
    }

    interface Product {
    category: Category;
    }

    function processData(input: Category | string | null): string | null {
    if (isCategory(input)) {
        return input.name;
    } else if (isString(input)) {
        return input;
    }
    return null;
    }

*/

interface Category {
    name: string;
}

interface Product {
    category: Category;
}

function isProduct(input: Category | string | null): input is Product {
    return (input as Product)?.category !== undefined;
}

function isString(input: Category | string | null): input is string {

    return typeof input === 'string';

}

function processData(input: Category | string | null): string | null {
    if (isProduct(input)) {

        return input.category.name;

    } else if (isString(input)) {

        return input;

    }
    return null;
}  