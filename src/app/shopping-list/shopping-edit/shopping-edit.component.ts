import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient }  from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // @ViewChild() addIngrediants: {name: string, amount:number};
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
      const ingName = this.nameInputRef.nativeElement.value;
      const ingAmount = this.amountInputRef.nativeElement.value;
      const newIngrediant = new Ingredient(ingName, ingAmount);
      this.shoppingListService.addIngredient(newIngrediant);
      // this.ingrediantAdded.emit(newIngrediant);
  }

}
