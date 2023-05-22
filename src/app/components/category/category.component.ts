import { Component, OnInit } from '@angular/core';
import { CategoryService } from "@app/services/category/category.service";
import { Category } from "@app/models/category";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{

  categories = [] as Category[]
  category = {} as Category

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe( response => {
      this.categories = response
    })
  }

  createCategory(): void {
    this.categoryService.saveCategory(this.category).subscribe(
      ()=> {
        alert("Lote salvo com sucesso!")
        //this.lotes.reset()
      },
      (error)=> {
        console.log(error)
      },
      ()=> {}
    )
  }


}
