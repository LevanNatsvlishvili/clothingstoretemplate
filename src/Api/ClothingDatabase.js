
function Data(
  id,
  name,
  color,
  category,
  subCategory,
  price,
  img,
) {

  function createData(id, name, color, category, subCategory, price, img,) {
    return {
      id, name, color, category, subCategory, price, img,
    };
  }

  return createData(
    id,
    name,
    color,
    category,
    subCategory,
    price,
    img,
  )
}

export const products = [
  Data(1, "Men's Adidas Sports pants", "grey", "Men", "pants", 53.99, ["Men's Adidas Sports pants1.jpg", "Men's Adidas Sports pants1.jpg"]),
  Data(2, "sport-top", "grey", "men", "tops&tees", 53.50, ['sport-top1.jpg']),
  Data(3, "women-winter-jacket", "white", "women", "jackets&coats", 29, ['women-winter-jacket1.jpg']),
  Data(4, "Shoe-Nike-nizza", "white", "men", "shoes", 69.99, ['Shoe-Nike-nizza1.jpg']),
  Data(5, "kids-autumn-jacket", "white", "Kids", "jackets&coats", 23.99, ['kids-autumn-jacket1.jpg']),
  Data(6, "kids-Winter-coat", "white", "Kids", "jackets&coats", 17.99, ['kids-Winter-coat1.jpg']),
  Data(7, "kids-Socks", "white", "Kids", "accessories", 7.00, ['kids-Socks1.jpg']),
  Data(8, "kids-warm-jacket", "white", "Kids", "jackets&coats", 13.50, ['kids-warm-jacket1.jpg']),
  Data(9, "men-Breathable-Casualshoes", "black", "men", "shoes", 21.99, ['men-Breathable-CasualShoes1.jpg']),
  Data(10, "men-jewelry-leatherbracelet", "black", "men", "accessories", 9.99, ['men-jewelry-leatherbracelet1.jpg']),
  Data(11, "men-jexxi-ring", "white", "men", "accessories", 45.99, ['men-jexxi-ring1.jpg']),
  Data(12, "Men-Leather-shoes", "black", "men", "shoes", 69.99, ['Men-Leather-Shoes1.jpg']),
  Data(13, "men-pants-casual", "grey", "men", "pants", 13.99, ['men-pants-casual1.jpg']),
  Data(14, "shoe-women-casual", "white", "women", "shoes", 119.99, ['shoe-women-casual1.jpg']),
  Data(15, "women-adidas-pants", "white", "women", "pants", 19.99, ['women-adidas-pants1.jpg']),
  Data(16, "women-jewelry-bracelet", "white", "women", "accessories", 69.00, ['women-jewelry-bracelet1.jpg']),
  Data(17, "women-jewelry-silverbracelet", "white", "women", "accessories", 69.99, ['women-jewelry-silverbracelet1.jpg']),
  Data(18, "women-Sterling-Silver-Necklace-owl", "white", "women", "accessories", 25.99, ['women-Sterling-Silver-Necklace-owl1.jpg']),
  Data(19, "women-top", "white", "women", "tops&tees", 35.99, ['women-top1.jpg']),
  Data(20, "blue-shirt", "blue", "men", "shirts", 35.99, ['blue-shirt1.jpg']),
  Data(21, "dark-blue-shirt", "blue", "men", "shirts", 35.99, ['dark-blue-shirt1.jpg']),
  Data(22, "sweatshirt", "white", "men", "hoodies&sweatshirts", 35.99, ['sweatshirt1.jpg']),
  Data(23, "blue-sweatshirt", "blue", "men", "hoodies&sweatshirts", 35.99, ['blue-sweatshirt1.jpg']),
  Data(24, "dark-blue-sweatshirt", "white", "men", "hoodies&sweatshirts", 35.99, ['dark-blue-sweatshirt1.jpg']),
  Data(25, "white-shirt", "white", "men", "hoodies&sweatshirts", 35.99, ['white-shirt1.jpg']),
  Data(26, "black-top", "white", "men", "tops&tees", 35.99, ['black-top1.jpg']),
  Data(27, "Parkas-Hooded-coat", "white", "men", "jackets&coats", 35.99, ['Parkas-Hooded-coat1.jpg']),
  Data(28, "puma-coat", "white", "men", "jackets&coats", 35.99, ['puma-coat1.jpg']),
  Data(29, "Alpinestars-Winter-Jacket", "white", "men", "jackets&coats", 35.99, ['Alpinestars-Winter-Jacket1.jpg']),
  Data(30, "Hip-Hop-Streetwear", "white", "men", "jackets&coats", 35.99, ['Hip-Hop-Streetwear1.jpg']),
  Data(31, "Men-Joggers-Oversize", "white", "men", "pants", 35.99, ['Men-Joggers-Oversize1.jpg']),
  Data(32, "Vangull-Leather-Jacket", "white", "women", "jackets&coats", 35.99, ['Vangull-Leather-Jacket1.jpg']),
  Data(33, "hooded-Coats-Casual", "white", "women", "jackets&coats", 35.99, ['hooded-Coats-Casual1.jpg']),
  Data(34, "red-autumn-hoodie", "white", "women", "hoodies&sweatshirts", 35.99, ['red-autumn-hoodie1.jpg']),
  Data(35, "Elegant-Drawstring-Sweet", "white", "women", "hoodies&sweatshirts", 35.99, ['Elegant-Drawstring-Sweet1.jpg']),
  Data(36, "grey-Oversize-Hooded", "white", "women", "hoodies&sweatshirts", 35.99, ['grey-Oversize-Hooded1.jpg']),
  Data(36, "Gothic-Pants-Plaid", "white", "women", "pants", 35.99, ['Gothic-Pants-Plaid1.jpg']),
  Data(36, "Harajuku-Ladies-Joggers", "white", "women", "pants", 35.99, ['Harajuku-Ladies-Joggers1.jpg']),
  Data(36, "Ladies-Office-Work-Pants", "white", "women", "pants", 35.99, ['Ladies-Office-Work-Pants1.jpg']),
  Data(36, "High-Heels-Party", "white", "women", "shoes", 35.99, ['High-Heels-Party1.jpg']),
  Data(36, "Shirt-Ladies-Floral", "white", "women", "shirts", 35.99, ['Shirt-Ladies-Floral1.jpg']),
  Data(36, "Office-Lady-Blouse", "white", "women", "shirts", 35.99, ['Office-Lady-Blouse1.jpg']),
  Data(36, "Autumn-Chiffon-Blouse", "white", "women", "shirts", 35.99, ['Autumn-Chiffon-Blouse1.jpg']),
  Data(36, "Spring-Lace-Hollow", "white", "women", "tops&tees", 35.99, ['Spring-Lace-Hollow1.jpg']),
]