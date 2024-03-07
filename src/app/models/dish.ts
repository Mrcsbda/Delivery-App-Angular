export class Dish {
    static REF = "dishes"
    adittions: string[];
    key: string;
    restaurantId: string;
    name: string;
    description: string;
    price: number;
    image: string;
    categories: string[];
    createdAt: number;
    updatedAt: number;

    constructor(
        adittions: string[],
        key: string,
        restaurantId: string,
        name: string,
        description: string,
        price: number,
        image: string,
        categories: string[]
    ) {
        this.adittions = adittions;
        this.key = key;
        this.restaurantId = restaurantId;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.categories = categories;
        this.createdAt = new Date().getTime();
        this.updatedAt = new Date().getTime();
    }
}