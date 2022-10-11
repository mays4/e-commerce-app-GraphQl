// const{products,categories}=require("../db")

exports.Query={
  // hello: () => {
  //   return "World!";
  // },
  // numberOfAnimals: () => {
  //   return 55;
  // },
  // price: () => {
  //   return 2333.2222;
  // },
  // isCool: () => {
  //   return false;
  // },
  // arr: () => {
  //   return ["Hello", "Mays"];
  // },
  // products: (parent, args, context) => {
  //   return products;
  // },
  // product: (parent, args, context) => {
    // {id} =arges
    // const productId = args.id;
    // const product = products.find((product) => product.id === productId);
    // if (!product) {
    //   return null;
    // } else {
    //   return product;
    // }
  //   return products.find(product=>  product.id === productId);
  // },
  // categories:(parent, args, context)=>{
  //   return categories

  // },
  // category:(parent, args, context)=>{
  //   const {id} = args;
  //   return categories.find((category)=>
  //     category.id === id);
      
  // },
  products: (parent, {filter}, {db}) => {
    let filteredProducts = db.products;
    // console.log(filteredProducts)
    if(filter){
      const {onSale , avgRating} = filter
      if(onSale){
        filteredProducts = filteredProducts.filter((product) => {
          return product.onSale
          
        });
          
      }
      if([1,2,3,4,5].includes(avgRating)){
        filteredProducts = filteredProducts.filter((product)=>{
          let sumRating = 0;
          let numberOfReviews = 0;
          db.reviews.forEach((review) =>{
            if(review.productId === product.id) {
              sumRating+= review.rating;
              numberOfReviews++;
            }
          });
          const avgProductRating = sumRating /numberOfReviews;
          return avgProductRating  >= avgRating;
        });
      }
    }
    return filteredProducts;
    
  },
  
  product: (parent, {id}, {db}) => { 
    return db.products.find((product)=>  product.id === id);
  },
  categories:(parent, args, {db})=>db.categories,
  category:(parent, {id}, {db})=>{
    return db.categories.find((category)=>
      category.id === id);
      
  }
}