import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  list: Product[] = 

[{
  "id": 1,
  "catId": 1,
  "name ": "Avocado",
  "description  ": "feugiat non pretium quis lectus suspendisse",
  "image": 1,
  "price": 5730,
  "stock": 85,
  "featured": false,
  "active": true
}, {
  "id": 2,
  "catId": 1,
  "name ": "Pimento - Canned",
  "description  ": "tortor duis mattis egestas metus aenean fermentum donec ut mauris",
  "image": 2,
  "price": 4874,
  "stock": 45,
  "featured": true,
  "active": true
}, {
  "id": 3,
  "catId": 1,
  "name ": "Herb Du Provence - Primerba",
  "description  ": "justo pellentesque viverra pede ac diam cras pellentesque volutpat",
  "image": 3,
  "price": 1039,
  "stock": 44,
  "featured": true,
  "active": false
}, {
  "id": 4,
  "catId": 2,
  "name ": "Crab - Soft Shell",
  "description  ": "faucibus accumsan odio curabitur convallis",
  "image": 4,
  "price": 1199,
  "stock": 6,
  "featured": true,
  "active": false
}, {
  "id": 5,
  "catId": 2,
  "name ": "Pepper - Sorrano",
  "description  ": "sapien cursus vestibulum proin eu",
  "image": 5,
  "price": 2385,
  "stock": 20,
  "featured": false,
  "active": true
}, {
  "id": 6,
  "catId": 2,
  "name ": "Wild Boar - Tenderloin",
  "description  ": "diam erat fermentum justo nec condimentum",
  "image": 6,
  "price": 2050,
  "stock": 59,
  "featured": true,
  "active": true
}, {
  "id": 7,
  "catId": 2,
  "name ": "Veal - Provimi Inside",
  "description  ": "mauris ullamcorper purus sit amet",
  "image": 7,
  "price": 5651,
  "stock": 50,
  "featured": true,
  "active": true
}, {
  "id": 8,
  "catId": 2,
  "name ": "Olives - Green, Pitted",
  "description  ": "nisi eu orci mauris lacinia sapien quis libero nullam",
  "image": 8,
  "price": 4264,
  "stock": 24,
  "featured": true,
  "active": false
}, {
  "id": 9,
  "catId": 1,
  "name ": "Fish - Halibut, Cold Smoked",
  "description  ": "molestie lorem quisque ut erat curabitur gravida nisi",
  "image": 9,
  "price": 1169,
  "stock": 39,
  "featured": false,
  "active": false
}, {
  "id": 10,
  "catId": 1,
  "name ": "Carbonated Water - Wildberry",
  "description  ": "at dolor quis odio consequat varius integer ac",
  "image": 10,
  "price": 541,
  "stock": 29,
  "featured": false,
  "active": false
}, {
  "id": 11,
  "catId": 1,
  "name ": "Syrup - Monin - Passion Fruit",
  "description  ": "suscipit nulla elit ac nulla sed vel enim sit",
  "image": 11,
  "price": 3753,
  "stock": 7,
  "featured": true,
  "active": false
}, {
  "id": 12,
  "catId": 2,
  "name ": "Kaffir Lime Leaves",
  "description  ": "vulputate elementum nullam varius nulla facilisi cras non velit",
  "image": 12,
  "price": 3810,
  "stock": 78,
  "featured": true,
  "active": true
}, {
  "id": 13,
  "catId": 1,
  "name ": "Chocolate - Dark",
  "description  ": "blandit mi in porttitor pede justo",
  "image": 13,
  "price": 4034,
  "stock": 5,
  "featured": false,
  "active": false
}, {
  "id": 14,
  "catId": 2,
  "name ": "Tendrils - Baby Pea, Organic",
  "description  ": "sit amet sem fusce consequat nulla nisl nunc nisl",
  "image": 14,
  "price": 5452,
  "stock": 98,
  "featured": true,
  "active": false
}, {
  "id": 15,
  "catId": 1,
  "name ": "Dehydrated Kelp Kombo",
  "description  ": "eros suspendisse accumsan tortor quis turpis sed ante",
  "image": 15,
  "price": 638,
  "stock": 32,
  "featured": false,
  "active": false
}, {
  "id": 16,
  "catId": 1,
  "name ": "Cake - Night And Day Choclate",
  "description  ": "fusce congue diam id ornare imperdiet sapien",
  "image": 16,
  "price": 2059,
  "stock": 82,
  "featured": false,
  "active": false
}, {
  "id": 17,
  "catId": 2,
  "name ": "Ice Cream Bar - Hagen Daz",
  "description  ": "morbi odio odio elementum eu interdum eu tincidunt",
  "image": 17,
  "price": 3074,
  "stock": 36,
  "featured": true,
  "active": false
}, {
  "id": 18,
  "catId": 1,
  "name ": "Napkin - Beverage 1 Ply",
  "description  ": "id nisl venenatis lacinia aenean sit amet justo",
  "image": 18,
  "price": 861,
  "stock": 23,
  "featured": true,
  "active": false
}, {
  "id": 19,
  "catId": 1,
  "name ": "Flower - Commercial Spider",
  "description  ": "eleifend donec ut dolor morbi",
  "image": 19,
  "price": 1297,
  "stock": 70,
  "featured": false,
  "active": false
}, {
  "id": 20,
  "catId": 2,
  "name ": "Bagel - Everything Presliced",
  "description  ": "mi integer ac neque duis bibendum morbi",
  "image": 20,
  "price": 4236,
  "stock": 82,
  "featured": true,
  "active": false
}, {
  "id": 21,
  "catId": 1,
  "name ": "Pork - Loin, Center Cut",
  "description  ": "eget tincidunt eget tempus vel pede",
  "image": 21,
  "price": 1333,
  "stock": 76,
  "featured": false,
  "active": false
}, {
  "id": 22,
  "catId": 2,
  "name ": "Cookie Dough - Chocolate Chip",
  "description  ": "eleifend quam a odio in hac habitasse platea dictumst maecenas",
  "image": 22,
  "price": 5448,
  "stock": 95,
  "featured": true,
  "active": true
}, {
  "id": 23,
  "catId": 1,
  "name ": "Bar - Granola Trail Mix Fruit Nut",
  "description  ": "nisl venenatis lacinia aenean sit amet justo morbi",
  "image": 23,
  "price": 630,
  "stock": 9,
  "featured": false,
  "active": true
}, {
  "id": 24,
  "catId": 2,
  "name ": "Bread - Roll, Italian",
  "description  ": "turpis adipiscing lorem vitae mattis nibh ligula nec sem",
  "image": 24,
  "price": 2138,
  "stock": 43,
  "featured": false,
  "active": false
}, {
  "id": 25,
  "catId": 1,
  "name ": "Cheese - Provolone",
  "description  ": "sed augue aliquam erat volutpat in congue etiam justo",
  "image": 25,
  "price": 5076,
  "stock": 61,
  "featured": false,
  "active": true
}, {
  "id": 26,
  "catId": 1,
  "name ": "Anisette - Mcguiness",
  "description  ": "turpis enim blandit mi in porttitor pede justo eu massa",
  "image": 26,
  "price": 3879,
  "stock": 23,
  "featured": true,
  "active": true
}, {
  "id": 27,
  "catId": 2,
  "name ": "Soup - Campbells",
  "description  ": "neque duis bibendum morbi non",
  "image": 27,
  "price": 4834,
  "stock": 19,
  "featured": false,
  "active": true
}, {
  "id": 28,
  "catId": 1,
  "name ": "Bar Bran Honey Nut",
  "description  ": "in imperdiet et commodo vulputate",
  "image": 28,
  "price": 4363,
  "stock": 60,
  "featured": true,
  "active": true
}, {
  "id": 29,
  "catId": 1,
  "name ": "Skirt - 24 Foot",
  "description  ": "sodales sed tincidunt eu felis fusce",
  "image": 29,
  "price": 4236,
  "stock": 71,
  "featured": false,
  "active": true
}, {
  "id": 30,
  "catId": 2,
  "name ": "Juice - Apple 284ml",
  "description  ": "massa quis augue luctus tincidunt nulla mollis molestie lorem quisque",
  "image": 30,
  "price": 4479,
  "stock": 19,
  "featured": true,
  "active": false
}, {
  "id": 31,
  "catId": 1,
  "name ": "Pail With Metal Handle 16l White",
  "description  ": "convallis tortor risus dapibus augue",
  "image": 31,
  "price": 275,
  "stock": 78,
  "featured": true,
  "active": true
}, {
  "id": 32,
  "catId": 1,
  "name ": "Longos - Cheese Tortellini",
  "description  ": "odio in hac habitasse platea",
  "image": 32,
  "price": 4309,
  "stock": 50,
  "featured": false,
  "active": false
}, {
  "id": 33,
  "catId": 2,
  "name ": "Sobe - Liz Blizz",
  "description  ": "sit amet justo morbi ut",
  "image": 33,
  "price": 1834,
  "stock": 69,
  "featured": true,
  "active": true
}, {
  "id": 34,
  "catId": 1,
  "name ": "Gin - Gilbeys London, Dry",
  "description  ": "nisl ut volutpat sapien arcu sed augue aliquam",
  "image": 34,
  "price": 2792,
  "stock": 22,
  "featured": false,
  "active": false
}, {
  "id": 35,
  "catId": 2,
  "name ": "Myers Planters Punch",
  "description  ": "posuere metus vitae ipsum aliquam non mauris morbi non lectus",
  "image": 35,
  "price": 1189,
  "stock": 27,
  "featured": true,
  "active": true
}, {
  "id": 36,
  "catId": 1,
  "name ": "Mousse - Mango",
  "description  ": "nulla pede ullamcorper augue a",
  "image": 36,
  "price": 1161,
  "stock": 90,
  "featured": true,
  "active": false
}, {
  "id": 37,
  "catId": 1,
  "name ": "Kohlrabi",
  "description  ": "vivamus vestibulum sagittis sapien cum sociis natoque penatibus",
  "image": 37,
  "price": 1423,
  "stock": 61,
  "featured": true,
  "active": true
}, {
  "id": 38,
  "catId": 2,
  "name ": "Flower - Carnations",
  "description  ": "mattis egestas metus aenean fermentum donec ut",
  "image": 38,
  "price": 1200,
  "stock": 1,
  "featured": true,
  "active": false
}, {
  "id": 39,
  "catId": 1,
  "name ": "Energy Drink Bawls",
  "description  ": "amet nunc viverra dapibus nulla suscipit ligula in",
  "image": 39,
  "price": 728,
  "stock": 36,
  "featured": false,
  "active": false
}, {
  "id": 40,
  "catId": 2,
  "name ": "Canadian Emmenthal",
  "description  ": "tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum",
  "image": 40,
  "price": 5254,
  "stock": 30,
  "featured": true,
  "active": true
}, {
  "id": 41,
  "catId": 2,
  "name ": "Carrots - Mini, Stem On",
  "description  ": "quis orci nullam molestie nibh in",
  "image": 41,
  "price": 5688,
  "stock": 21,
  "featured": false,
  "active": true
}, {
  "id": 42,
  "catId": 1,
  "name ": "Wine - White, Gewurtzraminer",
  "description  ": "molestie lorem quisque ut erat",
  "image": 42,
  "price": 4273,
  "stock": 100,
  "featured": false,
  "active": false
}, {
  "id": 43,
  "catId": 1,
  "name ": "Cheese - Asiago",
  "description  ": "et ultrices posuere cubilia curae duis faucibus accumsan odio",
  "image": 43,
  "price": 153,
  "stock": 51,
  "featured": true,
  "active": true
}, {
  "id": 44,
  "catId": 2,
  "name ": "Coffee - Almond Amaretto",
  "description  ": "rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel",
  "image": 44,
  "price": 2024,
  "stock": 89,
  "featured": false,
  "active": true
}, {
  "id": 45,
  "catId": 2,
  "name ": "Shrimp - Black Tiger 26/30",
  "description  ": "consequat lectus in est risus auctor sed tristique in",
  "image": 45,
  "price": 3050,
  "stock": 13,
  "featured": true,
  "active": true
}, {
  "id": 46,
  "catId": 1,
  "name ": "Oil - Sunflower",
  "description  ": "phasellus in felis donec semper sapien a libero",
  "image": 46,
  "price": 680,
  "stock": 74,
  "featured": true,
  "active": true
}, {
  "id": 47,
  "catId": 1,
  "name ": "Mustard - Seed",
  "description  ": "ut odio cras mi pede malesuada in imperdiet et commodo",
  "image": 47,
  "price": 3638,
  "stock": 12,
  "featured": true,
  "active": false
}, {
  "id": 48,
  "catId": 2,
  "name ": "Pate - Cognac",
  "description  ": "id mauris vulputate elementum nullam varius nulla facilisi cras",
  "image": 48,
  "price": 724,
  "stock": 76,
  "featured": false,
  "active": false
}, {
  "id": 49,
  "catId": 2,
  "name ": "Vector Energy Bar",
  "description  ": "in purus eu magna vulputate luctus cum",
  "image": 49,
  "price": 2012,
  "stock": 96,
  "featured": false,
  "active": true
}, {
  "id": 50,
  "catId": 2,
  "name ": "Wine - Acient Coast Caberne",
  "description  ": "morbi ut odio cras mi pede malesuada in",
  "image": 50,
  "price": 1871,
  "stock": 69,
  "featured": false,
  "active": true
}];
  constructor() { }
}
