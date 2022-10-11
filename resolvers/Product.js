

exports.Product={
  //parent product we are calling from
  //strcutre instend of (parent,args,contxt)=>({categoryId,args,{categories}})
  //category:({categoryId},args,{categories})=>{
  category:({categoryId},args,{db})=>{
    // const categoryId =parent.categoryId;
    return db.categories.find(category=>
      category.id === categoryId
    )
  },
  reviews:({id},args,{db})=>{
    return db.reviews.filter((review)=> review.productId  === id)


  }
}