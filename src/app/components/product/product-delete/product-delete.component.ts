import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  
  product: Product
  constructor(private productServise: ProductService,private router:Router,private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.productServise.readById(id).subscribe(product=>{
      this.product =product
    })
  }

  deleteProduct(): void{
    this.productServise.delete(this.product.id).subscribe(()=>{
      this.productServise.showOnConsole("Produto excluido")
      this.router.navigate(["/products"])
    })
  }

  cancelar():void{
    this.router.navigate(['/products'])
  }

}
