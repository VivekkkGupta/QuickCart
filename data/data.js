export const categories = [
  { id: "electronics", label: "Electronics" },
  { id: "clothing", label: "Clothing" },
  { id: "books", label: "Books" },
  { id: "home", label: "Home & Kitchen" },
  { id: "sports", label: "Sports" },
];

export const brands = [
  { id: "apple", label: "Apple" },
  { id: "samsung", label: "Samsung" },
  { id: "nike", label: "Nike" },
  { id: "adidas", label: "Adidas" },
  { id: "sony", label: "Sony" },
];

export const productsForHomePage = [
  {
    "id": 1,
    "image": "https://source.unsplash.com/400x300/?laptop,gaming",
    "name": "Gaming Laptop",
    "price": 1200,
    "discount": 20,
    "rating": 4.5,
    "reviews": 35,
    "category": "Electronics",
    "tags": ["Gaming", "Laptop", "High Performance"],
    "slug": "gaming-laptop"
  },
  {
    "id": 2,
    "image": "https://source.unsplash.com/400x300/?smartphone,technology",
    "name": "Smartphone Pro",
    "price": 800,
    "discount": 10,
    "rating": 4.8,
    "reviews": 50,
    "category": "Electronics",
    "tags": ["Smartphone", "5G", "Android"],
    "slug": "smartphone-pro"
  },
  {
    "id": 3,
    "image": "https://source.unsplash.com/400x300/?headphones,music",
    "name": "Wireless Headphones",
    "price": 250,
    "discount": 15,
    "rating": 4.2,
    "reviews": 20,
    "category": "Accessories",
    "tags": ["Headphones", "Wireless", "Noise Cancelling"],
    "slug": "wireless-headphones"
  },
  {
    "id": 4,
    "image": "https://source.unsplash.com/400x300/?television,entertainment",
    "name": "4K OLED TV",
    "price": 1500,
    "discount": 25,
    "rating": 4.7,
    "reviews": 45,
    "category": "Home Appliances",
    "tags": ["TV", "4K", "OLED"],
    "slug": "4k-oled-tv"
  },
  {
    "id": 5,
    "image": "https://source.unsplash.com/400x300/?camera,photography",
    "name": "Mirrorless Camera",
    "price": 1100,
    "discount": 18,
    "rating": 4.6,
    "reviews": 30,
    "category": "Cameras",
    "tags": ["Photography", "Mirrorless", "DSLR"],
    "slug": "mirrorless-camera"
  }
];
//http://localhost:1337/api/products`
// [{
//   "id": 17,
//   "documentId": "bnt253wxxvb2r2wtn8kfjbu2",
//   "ProductName": "MAC",
//   "slug": "mac",
//   "ProductDescription": "dvsfdds",
//   "ProductPrice": "3123122321",
//   "ProductStock": 1,
//   "createdAt": "2025-03-22T17:12:34.015Z",
//   "updatedAt": "2025-03-22T17:12:34.015Z",
//   "publishedAt": "2025-03-22T17:12:34.036Z"
//   }]


export const wishList = [
  {
    id: 5,
    image: "/dummyimage.png",
    name: "Mirrorless Camera",
    price: 1100,
    discount: 18,
    rating: 4.6,
    reviews: 30,
    slug: "mirrorless-camera",
  },
  {
    id: 4,
    image: "/dummyimage.png",
    name: "4K OLED TV",
    price: 1500,
    discount: 25,
    rating: 4.7,
    reviews: 45,
    slug: "4k-oled-tv",
  },
];

export const cartList = [
  {
    id: 4,
    image: "/dummyimage.png",
    name: "4K OLED TV",
    price: 1500,
    discount: 25,
    rating: 4.7,
    reviews: 45,
    slug: "4k-oled-tv",
  },
  {
    id: 5,
    image: "/dummyimage.png",
    name: "Mirrorless Camera",
    price: 1100,
    discount: 18,
    rating: 4.6,
    reviews: 30,
    slug: "mirrorless-camera",
  },
];


export const UserAddress= [
  {
    "receiver": "John Doe",
    "address1": "1234, 56th Street",
    "address2": "Near ABC Park",
    "city": "New York",
    "state": "New York",
    "pin": "10001",
    "id": 1
  },
  {
    "receiver": "Jane Doe",
    "address1": "5678, 90th Street",
    "address2": "Near XYZ Park",
    "city": "Los Angeles",
    "state": "California",
    "pin": "90001",
    "id": 2
  }
]

export const orderHistory = [
  {
    id: "ORD123456",
    orderDate: "2024-03-25",
    items: [
      { name: "Wireless Mouse", quantity: 1, price: 1299 },
      { name: "Mechanical Keyboard", quantity: 1, price: 3499 },
    ],
    totalAmount: 4798,
    status: "Delivered",
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD123457",
    orderDate: "2024-03-22",
    items: [
      { name: "Gaming Headset", quantity: 1, price: 2499 },
      { name: "USB-C Hub", quantity: 2, price: 999 },
    ],
    totalAmount: 4497,
    status: "Shipped",
    paymentMethod: "UPI",
  },
  {
    id: "ORD123458",
    orderDate: "2024-03-18",
    items: [{ name: "Laptop Stand", quantity: 1, price: 1899 }],
    totalAmount: 1899,
    status: "Cancelled",
    paymentMethod: "Net Banking",
  },
  {
    id: "ORD123459",
    orderDate: "2024-03-15",
    items: [
      { name: "Bluetooth Speaker", quantity: 1, price: 2999 },
      { name: "USB-C Charger", quantity: 1, price: 1499 },
    ],
    totalAmount: 4498,
    status: "Delivered",
    paymentMethod: "Debit Card",
  },
  {
    id: "ORD123460",
    orderDate: "2024-03-10",
    items: [{ name: "Smartwatch", quantity: 1, price: 5999 }],
    totalAmount: 5999,
    status: "Returned",
    paymentMethod: "Cash on Delivery",
  },
];


export const returnsHistory = [
  {
    id: "RET123456",
    returnDate: "2024-03-25",
    items: [
      { name: "Wireless Mouse", quantity: 1, price: 1299, image: "/mouse.png" },
      { name: "Mechanical Keyboard", quantity: 1, price: 3499, image: "/keyboard.png" },
    ],
    totalAmount: 4798,
    status: "Refunded",
    paymentMethod: "Credit Card",
  },
  {
    id: "RET123457",
    returnDate: "2024-03-22",
    items: [
      { name: "Gaming Headset", quantity: 1, price: 2499, image: "/headset.png" },
      { name: "USB-C Hub", quantity: 2, price: 999, image: "/hub.png" },
    ],
    totalAmount: 4497,
    status: "Processing",
    paymentMethod: "UPI",
  },
  {
    id: "RET123458",
    returnDate: "2024-03-18",
    items: [{ name: "Laptop Stand", quantity: 1, price: 1899, image: "/stand.png" }],
    totalAmount: 1899,
    status: "Rejected",
    paymentMethod: "Net Banking",
  },
  {
    id: "RET123459",
    returnDate: "2024-03-15",
    items: [
      { name: "Bluetooth Speaker", quantity: 1, price: 2999, image: "/speaker.png" },
      { name: "USB-C Charger", quantity: 1, price: 1499, image: "/charger.png" },
    ],
    totalAmount: 4498,
    status: "Refunded",
    paymentMethod: "Debit Card",
  },
  {
    id: "RET123460",
    returnDate: "2024-03-10",
    items: [{ name: "Smartwatch", quantity: 1, price: 5999, image: "/smartwatch.png" }],
    totalAmount: 5999,
    status: "Pending",
    paymentMethod: "Cash on Delivery",
  },
];

export const personalDetails = [
  {
    firstName: "Rahul",
    lastName: "Sharma",
    email: "rahul.sharma@example.com",
    phone: "+91 9876543210",
  }
];

export const productDetails = [{
  "id": 1,
  "name": "Gaming Laptop",
  "description": "A high-performance gaming laptop featuring an Intel i7 13th Gen processor, 16GB RAM, and an RTX 4060 GPU. Ideal for gamers and professionals.",
  "slug": "gaming-laptop",
  "price": 1200,
  "discount": 20,
  "rating": 4.5,//dynamcially fetched from api
  "reviews": 35,//dynamcially fetched from api
  "category": "Electronics",
  "tags": ["Gaming", "Laptop", "High Performance"],
  "images": [
"/dummyimage.png",
"/hp-pav.jpg",
"/tuf-gaming.jpg", 
"/dummyimage.png",
"/hp-pav.jpg",
"/tuf-gaming.jpg", 
],
"stockAvailability": 10,
  "specifications": {
    "Processor": "Intel i7 13th Gen",
    "RAM": "16GB DDR5",
    "Storage": "1TB SSD",
    "GPU": "NVIDIA RTX 4060",
    "Display": "15.6-inch 144Hz",
    "Battery Life": "8 hours"
  },
  "colors": ["Black", "Silver"],
  "sizes": ["15.6-inch", "17-inch"]
}];

//http://localhost:1337/api/products?populate=*
//need to add according to the product page
// [
//   {
//     "id": 9,
//     "documentId": "rjosm2x6jctlhxsnz94qrkee",
//     "ProductName": "iphone 15",
//     "slug": "iphone-15",
//     "ProductDescription": "asdadawdwa",
//     "ProductPrice": "1234",
//     "ProductStock": 3,
//     "createdAt": "2025-03-22T12:41:05.631Z",
//     "updatedAt": "2025-03-22T12:41:05.631Z",
//     "publishedAt": "2025-03-22T12:41:05.642Z",
//     "product_category": {},
//     "ProductImage": [],
//     "product_sub_categories": []
//   }
// ]



//PRoduct categories api
// http://localhost:1337/api/product-categories/
// [
//   {
//     "id": 10,
//     "documentId": "a74lzhzm3w8vhzkhtob8sfyl",
//     "CategoryName": "Books",
//     "createdAt": "2025-03-22T13:04:26.200Z",
//     "updatedAt": "2025-03-22T13:04:58.358Z",
//     "publishedAt": "2025-03-22T13:04:58.375Z",
//     "slug": "books"
//     },
// ]


//to get specific category products
// http://localhost:1337/api/product-categories?filters[CategoryName][$eq]=Books
// [{
// "id": 10,
// "documentId": "a74lzhzm3w8vhzkhtob8sfyl",
// "CategoryName": "Books",
// "createdAt": "2025-03-22T13:04:26.200Z",
// "updatedAt": "2025-03-22T13:04:58.358Z",
// "publishedAt": "2025-03-22T13:04:58.375Z",
// "slug": "books"
// }]