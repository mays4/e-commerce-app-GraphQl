
const {v4:uuid} = require("uuid");
const { products } = require("../db");
exports.Mutation = {
  addCategory: (parent,{input},{db}) =>{
    const { name }  = input;
       const newCategory ={
        id:uuid(),
        name,
       };
       db.categories.push(newCategory);
       return newCategory;

       
  },
  addProduct:(parent,{input},{db})=>{
    const { name,
      image,
      price,
      onSale,
      quantity,
      description,
      categoryId}  = input;
       const newProducts ={
        id:uuid(),
        name,
        image,
        price,
        onSale,
        quantity,
        description,
        categoryId
       };
       db.products.push(newProducts);
       return newProducts;

       
  },
  addReview:(parent,{input},{db})=>{
   const {
    date,
    title,
    comment,
    rating,
    prodcutId
  } = input
  const newReview ={
    id:uuid(),
    date,
    title,
    comment,
    rating,
    prodcutId
   };
   db.reviews.push(newReview);
   return newReview;


},
deleteCategory:(parent,{id},{db})=>{
   db.categories = db.categories.filter((category)=> category.id !== id);
   db.products = db.products.map(product=>{
    if(product.categoryId === id)return {
      ...product,
      categoryId:null
    }
    else return  product
    
   })
   return true;
},
deteteProduct:(parent,{id},{db})=>{
  db.products = db.products.filter((product)=> 
  product.id !== id);
  db.reviews = db.reviews.filter((review)=>
  review.prodcutId !== id);
  
  return true;
},deleteReview:(parent,{id},{db})=>{
  
  db.reviews = db.reviews.filter((review)=>
  review.id !== id);
  return true;
  
},
updateCategory:(parent,{id,input},{db})=>{
  const index = db.categories.findIndex(category=> category.id === id);
  // console.log(index);
  if(index === -1 ) return null;
  db.categories[index] = {
    ...db.categories[index],
    ...input
  };
  return db.categories[index];
},
updateProduct:(parent,{id,input},{db})=>{
  const index = db.products.findIndex((product)=> product.id === id);
  if(index === -1 ) return null;
  db.products[index] = {
    ...db.products[index],
    ...input
  };
  return db.products[index];
},
updateReview:(parent,{id,input},{db})=>{
  const index = db.reviews.findIndex((review)=> review.id === id);
  if(index === -1 ) return null;
  db.reviews[index] = {
    ...db.reviews[index],
    ...input
  };
  return db.reviews[index];
}
}