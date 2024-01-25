// type Category {
//     id: String!
//     name: String
//     description: String
//     image: String
//     hasProduct: [Product] @relationship(type: "HAS", direction: OUT)
//     createdAt: DateTime
//     updatedAt: DateTime
//     isActive: Boolean
//     tags: [String]
//   }

//   type Product {
//     id: String!
//     name: String
//     description: String
//     price: Float
//     image: String
//     categoryHas: Category @relationship(type: "HAS", direction: IN)
//     hasVariation: [Variation] @relationship(type: "HAS", direction: OUT)
//     orderHas: [Order] @relationship(type: "HAS", direction: IN)
//     stockQuantity: Int
//     isAvailable: Boolean
//     createdAt: DateTime
//     updatedAt: DateTime
//     manufacturer: String
//     rating: Float
//     reviews: [String]
//   }

//   type Variation {
//     id: String!
//     name: String
//     options: [String]
//     image: String
//     productHas: Product @relationship(type: "HAS", direction: IN)
//     orderHas: [Order] @relationship(type: "HAS", direction: IN)
//     createdAt: DateTime
//     updatedAt: DateTime
//     weight: Float
//     dimensions: [Float]
//   }

//   type Order {
//     number: String!
//     date: String
//     totalAmount: Float
//     hasProduct: [Product] @relationship(type: "HAS", direction: OUT)
//     hasVariation: [Variation] @relationship(type: "HAS", direction: OUT)
//     userPlaced: User @relationship(type: "PLACED", direction: IN)
//     status: String
//     createdAt: DateTime
//     updatedAt: DateTime
//     shippingAddress: String
//     paymentMethod: String
//   }
