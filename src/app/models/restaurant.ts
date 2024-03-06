export class Restaurant {
  static REF = 'restaurants';
  key: string;
  name: string;
  category: string;
  description: string;
  logo: string;
  image: string;
  rating: number;
  dishesCategories: string[];
  categories: string[];
  deliveryPrice: number;
  startTime: number;
  endTime: number;
  createdAt: number;
  updatedAt: number;

  constructor(
    key: string,
    name: string,
    category: string,
    description: string,
    logo: string,
    image: string,
    rating: number,
    dishesCategories: string[],
    categories: string[],
    deliveryPrice: number,
    startTime: number,
    endTime: number

  ) {
    this.key = key;
    this.name = name;
    this.category = category;
    this.description = description;
    this.logo = logo;
    this.image = image;
    this.rating = rating;
    this.dishesCategories = dishesCategories;
    this.categories = categories;
    this.deliveryPrice = deliveryPrice;
    this.startTime = startTime;
    this.endTime = endTime;
    this.createdAt = new Date().getTime();
    this.updatedAt = new Date().getTime();
  }
}
