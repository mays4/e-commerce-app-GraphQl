// const{products}=require("../db")

exports.Category={
  //(parent,args,context)
  products:({id:categoryId},{filter},{db})=>{
    // const categoryId = parent.id;
     const categoryProducts =  db.products.filter((product)=>
    product.categoryId === categoryId);
    let filterCategoryProducts = categoryProducts;
    if(filter){
      if(filter.onSale === true){
        filterCategoryProducts = filterCategoryProducts.filter(product => {
          return product.onSale
          
        })
          
      }
    }
    return filterCategoryProducts

  }
}