import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
blogs:{id:number,title:string,description:string,image:string,loginId:number}[]=[
  {id:1,title:"Fruit Pizza",description:"This is my go to recipe for fruit pizza. The cookie base is a really good recipe and everyone loves it when I make it.",image:"assets/images/FruitPizza.jpg",loginId:1},
  {id:2,title:"Easy Crockpot Carnitas",description:"These are the easiest crockpot carnitas and simple enough for anyone to make! Juicy, flavorful, and perfectly browned with a crispy crust.",image:"assets/images/crockpot.jpg",loginId:2},
  {id:3,title:"Vegan Crunchwrap Supreme",description:"These Vegan Crunchwraps are so easy and delicious, even my carnivore hubby loves these! I will definitely be making these for my family regularly! Thank you for the recipe!!!  ",image:"assets/images/crunchwrap.jpg",loginId:3},
  {id:4,title:" Best Avocado Egg Salad",description:"This was the best tasting egg salad I ever made! I will never go back to putting mayonnaise on my egg salad again. Thank you so much for this recipe.",image:"assets/images/eggsSalade.jpg",loginId:4},
  {id:5,title:" Cauliflower Fried Rice",description:"Very good, healthy, and quick recipe! Thank you. I added red peppers for color and another vegetable. I will definitely be making this again.",image:"assets/images/friedRice.jpg",loginId:5},
  {id:6,title:"Basic + Awesome Vegetarian Lasagna",description:"The very best Vegetarian Lasagna! Walnuts, zucchini, carrots, onions, and mushrooms blitzed up into a meat-like texture that gets layered with lots of cheese and sauce. Cozy + nourishing!",image:"assets/images/lasagne.jpg",loginId:6},
  {id:7,title:"Spicy Peanut Soba Noodle ",description:"This Spicy Peanut Soba Noodle Salad features red peppers, cabbage, chicken, soba noodles, and a quick homemade spicy peanut sauce. Salads don’t get much yummier than this.",image:"assets/images/spicy.jpg",loginId:7},
  {id:8,title:"Quick Homemade Ramen       ",description:"Take the usual ramen up a notch with this quick homemade ramen. Fresh veggies and herbs make this extra delicious, healthy, and cozy!",image:"assets/images/vege.jpg",loginId:8},
  {id:9,title:"Quick Homemade Ramen     ",description:"Take the usual ramen up a notch with this quick homemade ramen. Fresh veggies and herbs make this extra delicious, healthy, and cozy!",image:"assets/images/vege.jpg",loginId:9}
]
  constructor() { }
  getBlog(){
    this.blogs;
  }
  getBlogById(id:number){
    return this.blogs.filter(blog=>blog.id===id)[0];

  }
}
