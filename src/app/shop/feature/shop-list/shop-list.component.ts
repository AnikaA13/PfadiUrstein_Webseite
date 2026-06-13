import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../../shared/ui/header/header.component';

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  hasSizes: boolean;
  sizes: string[];
}

export interface CartItem {
  product: Product;
  size: string | null;
  quantity: number;
}

@Component({
  selector: 'app-shop-list',
  imports: [HeaderComponent, FormsModule],
  templateUrl: './shop-list.component.html',
  styleUrl: './shop-list.component.css',
})
export class ShopListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Pfadi T-Shirt',
      price: 25,
      imageUrl: 'assets/Pictures/pfaditechnik.jpg',
      hasSizes: true,
      sizes: ['S', 'M', 'L', 'XL'],
    },
    {
      id: 2,
      name: 'Pfadi Hoodie',
      price: 55,
      imageUrl: 'assets/Pictures/pfaditechnik.jpg',
      hasSizes: true,
      sizes: ['S', 'M', 'L', 'XL'],
    },
    {
      id: 3,
      name: 'Pfadi Cap',
      price: 20,
      imageUrl: 'assets/Pictures/pfaditechnik.jpg',
      hasSizes: true,
      sizes: ['S/M', 'L/XL'],
    },
    {
      id: 4,
      name: 'Pfadi Halstuch',
      price: 15,
      imageUrl: 'assets/Pictures/pfaditechnik.jpg',
      hasSizes: false,
      sizes: [],
    },
  ];

  selectedSizes = signal<Record<number, string>>({});

  cart = signal<CartItem[]>([]);

  cartTotal = computed(() =>
    this.cart().reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  );

  cartCount = computed(() =>
    this.cart().reduce((sum, item) => sum + item.quantity, 0)
  );

  showCheckout = signal(false);
  orderSent = signal(false);

  form = signal({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  });

  selectSize(productId: number, size: string): void {
    this.selectedSizes.update(s => ({ ...s, [productId]: size }));
  }

  addToCart(product: Product): void {
    const size = product.hasSizes ? (this.selectedSizes()[product.id] ?? null) : null;
    if (product.hasSizes && !size) return;

    this.cart.update(cart => {
      const existing = cart.find(
        i => i.product.id === product.id && i.size === size
      );
      if (existing) {
        return cart.map(i =>
          i === existing ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...cart, { product, size, quantity: 1 }];
    });
  }

  removeFromCart(item: CartItem): void {
    this.cart.update(cart => cart.filter(i => i !== item));
  }

  updateQuantity(item: CartItem, delta: number): void {
    this.cart.update(cart =>
      cart
        .map(i => (i === item ? { ...i, quantity: i.quantity + delta } : i))
        .filter(i => i.quantity > 0)
    );
  }

  submitOrder(): void {
    // TODO: send to WordPress backend / email
    console.log('Order submitted', {
      items: this.cart(),
      form: this.form(),
    });
    this.orderSent.set(true);
    this.cart.set([]);
    this.showCheckout.set(false);
  }

  updateForm(field: string, value: string): void {
    this.form.update(f => ({ ...f, [field]: value }));
  }

  isFormValid = computed(() => {
    const f = this.form();
    return f.name.trim() !== '' && f.email.trim() !== '' && f.phone.trim() !== '' && this.cart().length > 0;
  });
}
