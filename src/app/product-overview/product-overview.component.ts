import { Component } from '@angular/core';
import { take } from 'rxjs';
import { ProductDataService } from '../services/product-data.service';
import { ProductStylesService } from '../services/product-styles.service';
import { RelatedService } from '../services/related.service';
import { StarsComponent } from '../shared/stars/stars.component';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css'],
})
export class ProductOverviewComponent {
  constructor(
    private productDataService: ProductDataService,
    private productStylesService: ProductStylesService,
    private relatedProducts: RelatedService
  ) {}
  ngOnInit(): void {
    this.productDataService
      .getData()
      .pipe(take(1))
      .subscribe((prodData) => {
        this.productData = prodData;
        console.log(this.productData);
      });
    this.productStylesService
      .getStylesData()
      .pipe(take(1))
      .subscribe((stylesData) => {
        this.productStyles = stylesData;
        console.log(this.productStyles);
      });
    this.relatedProducts
      .getRelated()
      .pipe(take(1))
      .subscribe((related) => {
        this.relatedData = related;
      });
  }
  productData: any;
  productStyles: any;
  relatedData: any;
}

// export interface productDataType {
//   id: number;
//   name: string;
//   slogan: string;
//   description: string;
//   category: string;
//   default_price: string;
//   features: feature[];
// }

// export interface feature {
//   feature: string;
//   value: string;
// }

// export interface stylesDataType {
//   product_id: string;
//   result: stylesResult;
// }

// export interface stylesResult {
//   name: string;
//   default_style: string;
//   original_price: string | null;
//   sale_price: string | null;
//   style_id: number;
//   photos: photos[];
//   skus: sku[];
// }

// export interface photos {
//   thumbnail_url: string;
//   url: string;
// }

// export interface sku {
//   quantity: number;
//   size: string;
// }
