import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';



@Injectable()

export class RecipeService {
    
    constructor(private shoppingListService: ShoppingListService) {
        // code...
    }

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
      new Recipe(
                 'Tasty Schnitzel', 
                 'A super-tasty Schnitzel - just awesome', 
                 'https://media-cdn.tripadvisor.com/media/photo-s/0b/d8/d6/fd/schnitzel-tasty-tasty.jpg',
                 [
                     new Ingredient('Meat',1),
                     new Ingredient('French Fries',20)
                 ]),
      new Recipe(
                 'Big Fat Burger', 
                 'What else you need to say', 
                 'http://aht.seriouseats.com/images/20100331-fatburger-large.jpg',
                 [
                    new Ingredient('Bread',2),
                    new Ingredient('Meat',1),
                 ])
    ];

    getRecipes() {
        return this.recipes.slice(); //it will return new instance(copy) of this array
    }

    AddIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}