const {gql}=require("apollo-server");

exports.typeDefs = gql`
type Query {
  hello: String
  numberOfAnimals: Int
  price: Float
  isCool: Boolean
  arr: [String!]!
  products(filter:ProductsFilterInput): [Product!]!
  product(id: ID!): Product
  categories: [Category!]!
  category(id: ID!):Category
}
type Mutation{
  addCategory(input: AddCategoryInput!):Category!
  addProduct(input :AddProductInput!):Product!
  addReview(input:AddReviewInput!):Review!
  deleteCategory(id:ID!):Boolean!
  deteteProduct(id:ID!):Boolean!
  deleteReview(id:ID!):Boolean!
  updateCategory(id:ID!,input:UpdateCategoryInput!):Category
  updateProduct(id:ID!,input:UpdateProductInput!):Product
  updateReview(id:ID!,input:UpdateReviewInput!):Review
}
type Product {
  id:ID!
  name: String!
  description: String!
  quantity: Int
  price: Float
  image: String!
  onSale: Boolean!
  category:Category
  reviews:[Review!]!
}
type Category {
  id:ID!
  name: String!
  products(filter:ProductsFilterInput):[Product!]!
}
type Review{
  id:ID!
  date:String!
  title:String!
  comment :String!
  rating:Int!
}
input ProductsFilterInput{
  onSale:Boolean
  avgRating:Int
}
input AddCategoryInput{
  name:String!
}
input UpdateCategoryInput{
  name:String!
}
input AddProductInput{
  
  name: String!
  description: String!
  quantity: Int
  price: Float
  image: String!
  onSale: Boolean!
  categoryId :String
  

}
input AddReviewInput{
  
  date:String!
  title:String!
  comment :String!
  rating:Int!
  prodcutId:ID!
}
input UpdateProductInput{
  name: String!
  description: String!
  quantity: Int
  price: Float
  image: String!
  onSale: Boolean!
  categoryId :String
}
input UpdateReviewInput{
  date:String!
  title:String!
  comment :String!
  rating:Int!
  prodcutId:ID!
}
`;