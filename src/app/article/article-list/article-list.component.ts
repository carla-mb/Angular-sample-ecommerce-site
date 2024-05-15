import { Component } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-list',
  template: `
  <div *ngFor="let article of articles">
    <app-article-item [article]="article"></app-article-item>
  </div>
`,
  styles: [`
  :host {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
  }
  .article-container {
    flex: 1; 
  }
  `]
})
export class ArticleListComponent {
  public articles: Article[] = [
    {
      name: 'Gominolas Fresas Salvajes 100 gr',
      imageUrl: "assets/images/fresas-salvajes-de-gominola.jpg",
      price: 11,
      isOnSale: true,
      quantityInCart: 0
    },
    {
      name: 'Nubes de Azúcar Multicolor 125 ud',
      imageUrl: "assets/images/nubes-de-colores.jpg",
      price: 6,
      isOnSale: false,
      quantityInCart: 0
    },
    {
      name: 'Caramelos Masticables Sugus 1 Kg',
      imageUrl: "assets/images/caramelos-sugus.jpg",
      price: 8,
      isOnSale: true,
      quantityInCart: 0
    }
  ];
}
