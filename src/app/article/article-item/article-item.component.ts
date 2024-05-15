import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
// Import the Article interface
import { Article } from '../../models/article.model'; 

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleItemComponent {
  @Input() article: Article;
  @Output() ArticleQuantityChange = new EventEmitter<{ article: Article, quantity: number }>();

  constructor() { }

  // Increment quantity of the article
  incrementQuantity() {
    this.article.quantityInCart++;
    this.emitQuantityChange();
  }

  // Decrement quantity of the article
  decrementQuantity() {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
      this.emitQuantityChange();
    }
  }

  // Emit an object containing both the article and the quantity
  private emitQuantityChange() {
    this.ArticleQuantityChange.emit({ article: this.article, quantity: this.article.quantityInCart });
  }
}
