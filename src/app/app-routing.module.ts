import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

import { NoRecipesComponent } from './recipes/no-recipes/no-recipes.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'  },
    { path: 'recipes', component: RecipesComponent, 
        children: [
            { path: '', component: NoRecipesComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent },
        ] 
    },
    
    { path: 'shopping-list', component: ShoppingListComponent },
    
]; 

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

    constructor() {

    }

}