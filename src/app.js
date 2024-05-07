document.addEventListener('alpine:init', () => {
  Alpine.data('products', () => ({
    items: [
      { id: 1, name: 'Robusta Brazil', img: '1.jpg', price: 20000 },
      { id: 2, name: 'Arabica Brazil', img: '1.jpg', price: 20000 },
      { id: 3, name: 'Arabica Colombia', img: '1.jpg', price: 20000 },
      { id: 4, name: 'Arabica Ethiopia', img: '1.jpg', price: 20000 },
      { id: 5, name: 'Arabica Guatemala', img: '1.jpg', price: 20000 },
    ],
  }));

  Alpine.store('cart', {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      //cek apakah item sudah ada di cart
      const cartItem = this.items.find((item) => item.id === newItem.id);
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        this.items = this.items.map((item) => {
          if (item.id !== newItem.id) {
            return item;
          } else {
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);
      if (cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else {
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// konversi ke Rupiah
const Rupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(number);
};

function toggleItemDetailModal() {
  const itemDetailModal = document.querySelector('#item-detail-modal');
  const closeIcon = document.querySelector('.close-icon');

  // Toggle modal display
  itemDetailModal.style.display =
    itemDetailModal.style.display === 'none' ||
    itemDetailModal.style.display === ''
      ? 'flex'
      : 'none';

  // Handle click on close icon
  closeIcon.onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
  };

  // Handle click outside modal
  window.onclick = (event) => {
    if (event.target === itemDetailModal) {
      itemDetailModal.style.display = 'none';
    }
  };
}
