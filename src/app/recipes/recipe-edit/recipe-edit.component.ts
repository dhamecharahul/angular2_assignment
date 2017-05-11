import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }
  id: number;
  editMode = false;
  recipe: Recipe;

  ngOnInit() {
        this.route.params
        .subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.recipe = this.recipeService.getRecipe(this.id);
                this.editMode = params['id'] != null;
                
            }
        )
  }

}
