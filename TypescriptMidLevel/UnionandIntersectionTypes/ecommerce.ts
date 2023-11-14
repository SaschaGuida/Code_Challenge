/* 

Scenario: You're developing a complex e-commerce platform that supports a 
wide range of products. Each product can have multiple variations, such as 
different sizes, colors, and materials. You need to create a flexible type 
system that can accurately represent these variations while maintaining type safety.

Problem: Define TypeScript types for products and their variations. Create a 
type for the base product, then use advanced union and intersection types to accurately 
represent variations based on size, color, and material. Each variation should include 
properties specific to that variation type, while the product should have common properties 
like name, price, and description.

const product: Product = {
    name: 'T-Shirt',
    price: 29.99,
    description: 'A comfortable and stylish T-shirt.',
};

const sizeVariation: Product = {
    name: 'T-Shirt',
    price: 34.99,
    description: 'A comfortable and stylish T-shirt.',
    variationType: 'size',
    size: 'L',
};

const colorVariation: Product = {
    name: 'T-Shirt',
    price: 39.99,
    description: 'A comfortable and stylish T-shirt.',
    variationType: 'color',
    color: 'blue',
};

const materialVariation: Product = {
    name: 'T-Shirt',
    price: 44.99,
    description: 'A comfortable and stylish T-shirt.',
    variationType: 'material',
    material: 'cotton',
};

*/

type ProductBase = {
    name: string;
    price: number;
    description: string;
};

type Product = ProductBase;

type SizeVariation = ProductBase & {
    variationType: 'size';
    size: string;
};

type ColorVariation = ProductBase & {
    variationType: 'color';
    color: string;
};

type MaterialVariation = ProductBase & {
    variationType: 'material';
    material: string;
};

type ProductWithVariations = Product | SizeVariation | ColorVariation | MaterialVariation;




// Example usage
const product: Product = {
    name: 'T-Shirt',
    price: 29.99,
    description: 'A comfortable and stylish T-shirt.',
};

const sizeVariation: SizeVariation = {
    name: 'T-Shirt',
    price: 34.99,
    description: 'A comfortable and stylish T-shirt.',
    variationType: 'size',
    size: 'L',
};

const colorVariation: ColorVariation = {
    name: 'T-Shirt',
    price: 39.99,
    description: 'A comfortable and stylish T-shirt.',
    variationType: 'color',
    color: 'blue',
};

const materialVariation: MaterialVariation = {
    name: 'T-Shirt',
    price: 44.99,
    description: 'A comfortable and stylish T-shirt.',
    variationType: 'material',
    material: 'cotton',
};
