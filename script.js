/* ============================================================
   marketworld – script.js
   Product data, rendering, search, filters, interactions
   ============================================================ */

// ── PRODUCT DATA ────────────────────────────────────────────
const PRODUCTS = [
  // ELECTRONICS – GLOBAL
  {
    id: 1,
    name: "Boult Astra Neo Truly Wireless Bluetooth Earbuds",
    description: "GOBOULT Astra Neo earbuds with 70H battery, deep bass, ENC mic, fast charging, and low latency gaming mode.",
    price: "₹981",
    originalPrice: "₹3,499",
    discount: "72% OFF",
    category: "electronics",
    scope: "global",
    retailer: "Amazon & Flipkart",
    badge: "HOT DEAL",
    badgeClass: "",
    image: "https://m.media-amazon.com/images/I/61wdIp45PqL._SL1440_.jpg",
    affiliateLink: "https://amzn.to/42r7EsX",
    flipkartLink: "https://www.flipkart.com/goboult-astra-neo-70hrs-playtime-4-mic-enc-bt-5-4-comfort-grip-case-bluetooth/p/itm6c2a88c0cfbce?pid=ACCGXY5FVH2HXK5E&marketplace=FLIPKART&lid=LSTACCGXY5FVH2HXK5EOVWQUB&q=goboult+astra+neo&fm=organic&pageUID=1778247483642",
    featured: true, trending: true
  },
  {
    id: 2,
    name: "Samsung Galaxy S25 Ultra 5G",
    description: "AI Smartphone (Titanium Silverblue, 12GB RAM, 256GB Storage), 200MP Camera, S Pen Included, Long Battery Life",
    price: "₹99,999",
    originalPrice: "₹1,29,999",
    discount: "23% OFF",
    category: "electronics",
    scope: "global",
    retailer: "Amazon & Flipkart",
    badge: "TRENDING",
    badgeClass: "badge-trending",
    image: "https://m.media-amazon.com/images/I/71tl8pu4fKL._SL1500_.jpg",
    affiliateLink: "https://amzn.to/4eG1dcX",
    flipkartLink: "https://www.flipkart.com/samsung-galaxy-s26-ultra-5g-black-256-gb/p/itmf4799d3841c43?",
    featured: true, trending: true
  },
  {
    id: 3,
    name: "Apple 2024 MacBook Air 13",
    description: "Apple M3 chip, 18-hour battery, Liquid Retina display. Thin, light, and blazing fast. Perfect for creators and students.",
    price: "₹1,24,990",
    originalPrice: "₹1,54,999",
    discount: "-19% OFF",
    category: "electronics",
    scope: "global",
    retailer: "Amazon & Flipkart",
    badge: "NEW",
    badgeClass: "badge-new",
    image: "https://m.media-amazon.com/images/I/71-D1xCuVwL._SL1500_.jpg",
    affiliateLink: "https://amzn.to/4uBhowG",
    flipkartLink: "https://www.flipkart.com/apple-macbook-air-m3-8-gb-512-gb-ssd-macos-sonoma-mrxw3hn-a/p/itmb1aa0cc739560?",
    featured: true, trending: false
  },
  {
    id: 4,
    name: "Boat New Launch Rockerz 650 Pro",
    description: "Touch/Swipe Controls, Dolby Audio, 80Hrs Battery, 2Mics ENx, Fast Charge, App Support, Dual Pair, Bluetooth Over Ear Headphones with Mic (Iris Black)",
    price: "₹2,499",
    originalPrice: "₹8,990",
    discount: "-72% OFF",
    category: "electronics",
    scope: "global",
    retailer: "Amazon & Flipkart",
    badge: "BEST OFFER",
    badgeClass: "",
    image: "https://m.media-amazon.com/images/I/61-XNG5lPBL._SL1500_.jpg",
    affiliateLink: "https://amzn.to/4d3UwA6",
    flipkartLink: "https://www.flipkart.com/boat-rockerz-650-pro-2025-launch-touch-swipe-controls-dolby-audio-80-hrs-battery-bluetooth/p/itmded454eeb49f5?",
    featured: false, trending: true
  },
  {
    id: 5,
    name: "Lumio Vision 7 ",
    description: "139 cm (55 inches) 4K Ultra-HD Smart QLED Google TV FTW3-ADSG.",
    price: "₹36,999",
    originalPrice: "₹68,999",
    discount: "-46% OFF",
    category: "electronics",
    scope: "global",
    retailer: "Amazon & Flipkart",
    badge: "HOT DEAL",
    badgeClass: "",
    image: "https://m.media-amazon.com/images/I/71U9W5tUfLL._SL1500_.jpg",
    affiliateLink: "https://amzn.to/4d54r8x",
    flipkartLink: "https://www.flipkart.com/lumio-vision-7-139-cm-55-inch-qled-ultra-hd-4k-smart-google-tv-4k-hdr-dolby-atmos-over-100-colour-indias-fastest-tv-3gb-ram/p/itma32f5f9af6681?",
    featured: true, trending: false
  },
  {
    id: 6,
    name: "ProElite Slim Smart Flip case Cover",
    description: "Amazon Kindle Paperwhite 11th Generation 6.8 inch 2021, Flowers (Fits Signature Edition Also).",
    price: "₹521",
    originalPrice: "₹1,999",
    discount: "-74% OFF",
    category: "electronics",
    scope: "global",
    retailer: "Amazon & Flipkart",
    badge: "",
    badgeClass: "",
    image: "https://m.media-amazon.com/images/I/81iLwkcj6kL._SL1500_.jpg",
    affiliateLink: "https://amzn.to/4dzeeUx",
    flipkartLink: "https://www.flipkart.com/proelite-flip-cover-amazon-kindle-paperwhite-11th-gen-6-8-inch/p/itm88e355db3f6a9?",
    featured: false, trending: false
  },

  // ELECTRONICS – LOCAL (India)
  {
    id: 7,
    name: "Fastrack Astor FS1 Pro Smart Watch",
    description: "AMOLED Display, Bluetooth Calling, 100+ Sports Modes.",
    price: "₹2,099",
    originalPrice: "₹4,999",
    discount: "-58% OFF",
    category: "electronics",
    scope: "local",
    retailer: "Amazon & Flipkart",
    badge: "HOT DEAL",
    badgeClass: "",
    image: "https://m.media-amazon.com/images/I/71IGrF1UHTL._SL1500_.jpg",
    affiliateLink: "https://amzn.to/49qg6fQ",
    flipkartLink: "https://www.flipkart.com/fastrack-revoltt-pro-1-97-super-amoled-display-aod-working-crown-bt-calling-fast-charge-smartwatch/p/itmc40e5a8e02685?",
    featured: true, trending: true
  },
  {
    id: 8,
    name: "Round Wall Mounter Mirror with Led Light",
    description: "6x16 Inch Wall-Mounted LED Mirror with Smart Sensor Bathroom Mirror (Round Finish : Polished).",
    price: "₹1,674",
    originalPrice: "₹3,500",
    discount: "-52% OFF",
    category: "electronics",
    scope: "local",
    retailer: "Amazon & Flipkart",
    badge: "TRENDING",
    badgeClass: "badge-trending",
    image: "https://m.media-amazon.com/images/I/61e0tli8xAL._SL1024_.jpg",
    affiliateLink: "https://amzn.to/49o2the",
    flipkartLink: "https://www.flipkart.com/flipkart-perfect-homes-16x16-inch-wall-mounted-led-mirror-smart-sensor-bathroom-mirror/p/itm1b9cbbf0e7a8c?",
    featured: true, trending: true
  },

  // FASHION – GLOBAL
  {
    id: 9,
    name: "DEELMO Men’s Stylish Cotton Blend Casual Shirt ",
    description: "Full Sleeve Button-Down Shirt with Dual Flap Pockets || Comfortable Breathable Fabric || Perfect for Casual Office and Outing Wear.",
    price: "₹449",
    originalPrice: "₹2,599",
    discount: "-83% OFF",
    category: "fashion",
    scope: "global",
    retailer: "Amazon & Flipkart",
    badge: "BEST OFFER",
    badgeClass: "",
    image: "https://m.media-amazon.com/images/I/61UoSWUwOUL._SY741_.jpg",
    affiliateLink: "https://amzn.to/4wnV5w3",
    flipkartLink: "https://www.flipkart.com/deemoon-men-solid-casual-blue-shirt/p/itm3504183eb748d?",
    featured: false, trending: true
  },
  {
    id: 10,
    name: "Bacca Bucci Men Lace Up Basketball Shoe",
    description: "bacca bucci BALANCER Fashion Sneakers For Men (Blue , 9). Street-ready style meets all-day comfort.",
    price: "₹1,424",
    originalPrice: "₹3,499",
    discount: "59% OFF",
    category: "fashion",
    scope: "global",
    retailer: "Amazon & Flipkart",
    badge: "TRENDING",
    badgeClass: "badge-trending",
    image: "https://m.media-amazon.com/images/I/71V4GGv1edL._SY625_.jpg",
    affiliateLink: "https://amzn.to/4u4iotf",
    flipkartLink: "https://www.flipkart.com/bacca-bucci-balancer-fashion-sneakers-men/p/itm00676e149c847?.",
    featured: true, trending: true
  },
  {
    id: 11,
    name: "UV Protection Coating Round Sunglasses",
    description: "Dervin UV Protection Oval Sunglasses (Free Size) (For Men & Women, Black).",
    price: "₹484",
    originalPrice: "₹2,499",
    discount: "-81% OFF",
    category: "fashion",
    scope: "global",
    retailer: "Amazon & Flipkart",
    badge: "HOT DEAL",
    badgeClass: "",
    image: "https://m.media-amazon.com/images/I/51kD8jragbL._SX679_.jpg",
    affiliateLink: "https://amzn.to/4tsKDAK",
    flipkartLink: "https://www.flipkart.com/dervin-oval-sunglasses/p/itm4321d30e67df3?",
    featured: true, trending: false
  },

  // FASHION – LOCAL (India)
  {
    id: 12,
    name: "Fabindia Kurta Set for Men",
    description: "Hand-block printed cotton kurta with pajama. Crafted by Indian artisans. Ideal for festive occasions.",
    price: "₹1,499",
    originalPrice: "₹2,499",
    discount: "40% OFF",
    category: "fashion",
    scope: "local",
    retailer: "Amazon & Flipkart",
    badge: "LOCAL PICK",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop",
    affiliateLink: "https://amzn.to/4ngi34j",
    flipkartLink: "https://fktr.in/0ZEKcS0",
    featured: false, trending: false
  },

  // HOME & LIVING – GLOBAL
  {
    id: 13,
    name: "Instant Pot Duo 7-in-1",
    description: "Pressure cooker, slow cooker, rice cooker, steamer, sauté, yogurt maker, and warmer. 6-quart capacity. Saves 70% cooking time.",
    price: "₹6,900",
    originalPrice: "₹9,900  ",
    discount: "30% OFF",
    category: "home",
    scope: "global",
    retailer: "Amazon & Flipkart",
    badge: "BEST SELLER",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400&h=300&fit=crop",
    affiliateLink: "https://amzn.to/4ngi34j",
    flipkartLink: "https://fktr.in/0ZEKcS0",
    featured: true, trending: true
  },
  {
    id: 14,
    name: "Dyson V15 Detect Cordless Vacuum",
    description: "Laser dust detection, HEPA filtration, 60-min runtime, LCD screen showing particle counts. Whole-home cleaning redefined.",
    price: "₹59,999",
    originalPrice: "₹74,999",
    discount: "20% OFF",
    category: "home",
    scope: "global",
    retailer: "Amazon & Flipkart",
    badge: "PREMIUM",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    affiliateLink: "https://amzn.to/4ngi34j",
    flipkartLink: "https://fktr.in/0ZEKcS0",
    featured: false, trending: true
  },
  {
    id: 15,
    name: "IKEA KALLAX Shelf Unit",
    description: "Versatile 4x4 cube shelf for books, boxes, and baskets. Customizable with inserts. Timeless Scandinavian design.",
    price: "₹14,900",
    originalPrice: "₹17,900",
    discount: "16% OFF",
    category: "home",
    scope: "global",
    retailer: "Amazon & Flipkart",
    badge: "",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
    affiliateLink: "https://amzn.to/4ngi34j",
    flipkartLink: "https://fktr.in/0ZEKcS0",
    featured: false, trending: false
  },

  // HOME – LOCAL
  {
    id: 16,
    name: "Prestige Iris 750W Mixer Grinder",
    description: "3 jars, 4 speed settings with incher, stainless steel blades, overload protector. Best kitchen companion for Indian cooking.",
    price: "₹2,699",
    originalPrice: "₹4,000",
    discount: "32% OFF",
    category: "home",
    scope: "local",
    retailer: "Amazon & Flipkart",
    badge: "LOCAL DEAL",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1461088945293-0c17689e48ac?w=400&h=300&fit=crop",
    affiliateLink: "https://amzn.to/4ngi34j",
    flipkartLink: "https://fktr.in/0ZEKcS0",
    featured: true, trending: true
  },

  // BEAUTY – GLOBAL
  {
    id: 17,
    name: "Dyson Airwrap Multi-Styler",
    description: "Curl, wave, smooth, dry, volumize – all with one tool. Uses air instead of extreme heat. Intelligent heat control.",
    price: "₹47,900",
    originalPrice: "₹59,900",
    discount: "20% OFF",
    category: "beauty",
    scope: "global",
    retailer: "Amazon & Flipkart",
    badge: "LUXURY PICK",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop",
    affiliateLink: "https://amzn.to/4ngi34j",
    flipkartLink: "https://fktr.in/0ZEKcS0",
    featured: true, trending: true
  },
  {
    id: 18,
    name: "CeraVe Moisturizing Cream 19oz",
    description: "Developed with dermatologists. Ceramides + hyaluronic acid. Non-comedogenic, fragrance-free, restores skin barrier.",
    price: "₹1,400",
    originalPrice: "₹2,200",
    discount: "36% OFF",
    category: "beauty",
    scope: "global",
    retailer: "Amazon & Flipkart",
    badge: "BEST OFFER",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop",
    affiliateLink: "https://amzn.to/4ngi34j",
    flipkartLink: "https://fktr.in/0ZEKcS0",
    featured: false, trending: true
  },

  // SPORTS – GLOBAL
  {
    id: 19,
    name: "Garmin Forerunner 255 GPS Watch",
    description: "Running dynamics, HRV status, race predictor, 14-day battery in smartwatch mode. Built for serious runners.",
    price: "₹24,900",
    originalPrice: "₹34,900",
    discount: "28% OFF",
    category: "sports",
    scope: "global",
    retailer: "Amazon & Flipkart",
    badge: "TRENDING",
    badgeClass: "badge-trending",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    affiliateLink: "https://amzn.to/4ngi34j",
    flipkartLink: "https://fktr.in/0ZEKcS0",
    featured: true, trending: true
  },
  {
    id: 20,
    name: "Adidas Ultraboost 23 Running Shoes",
    description: "BOOST midsole, Primeknit+ upper, Continental rubber outsole. Every step gets energy back. Road to record-ready.",
    price: "₹11,900",
    originalPrice: "₹19,000",
    discount: "37% OFF",
    category: "sports",
    scope: "global",
    retailer: "Amazon & Flipkart",
    badge: "HOT DEAL",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=300&fit=crop",
    affiliateLink: "https://amzn.to/4ngi34j",
    flipkartLink: "https://fktr.in/0ZEKcS0",
    featured: true, trending: true
  },

  // SPORTS – LOCAL
  {
    id: 21,
    name: "Yonex Nanoray 7 Badminton Racket",
    description: "Carbon graphite frame, isometric head shape, lightweight 83g. Used by Indian professional players. Ideal for intermediate players.",
    price: "₹1,299",
    originalPrice: "₹2,000",
    discount: "35% OFF",
    category: "sports",
    scope: "local",
    retailer: "Amazon & Flipkart",
    badge: "LOCAL PICK",
    badgeClass: "badge-new",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&h=300&fit=crop",
    affiliateLink: "https://amzn.to/4ngi34j",
    flipkartLink: "https://fktr.in/0ZEKcS0",
    featured: false, trending: true
  },
  {
    id: 22,
    name: "Boldfit Whey Protein 2kg",
    description: "25g protein per serving, 5.5g BCAA, low sugar. Made in India. Chocolate flavor. 60 servings. GMP certified.",
    price: "₹1,799",
    originalPrice: "₹3,499",
    discount: "48% OFF",
    category: "sports",
    scope: "local",
    retailer: "Amazon & Flipkart",
    badge: "BEST OFFER",
    badgeClass: "",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=300&fit=crop",
    affiliateLink: "https://amzn.to/4ngi34j",
    flipkartLink: "https://fktr.in/0ZEKcS0",
    featured: true, trending: false
  }
];
localStorage.setItem("allProducts", JSON.stringify(PRODUCTS));
// ── UTILITIES ────────────────────────────────────────────────
// ── UTILITIES ────────────────────────────────────────────────
function getWishlist() {
  return JSON.parse(localStorage.getItem('wishlist') || '[]');
}

function saveWishlist(list) {
  localStorage.setItem('wishlist', JSON.stringify(list));
}
function isInWishlist(id) {
  const list = getWishlist();
  return list.includes(id);
}

function toggleWishlist(id) {
  let list = getWishlist();

  const index = list.indexOf(id);

  if (index !== -1) {
    list.splice(index, 1);
    showToast('💔 Removed from Wishlist', 'error');
  } else {
    list.push(id);
    showToast('❤️ Added to Wishlist!', 'success');
  }

  saveWishlist(list);
  updateWishlistCount();

  return list.includes(id);
}
function updateWishlistCount() {

  const count = getWishlist().length;

  document.querySelectorAll('#navWishCount').forEach(el => {
    el.textContent = count;
  });

}

// ---- TOAST ----
let toastTimer;
function showToast(msg, type = 'success') {
  let toast = document.getElementById('mw-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'mw-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = `toast ${type} show`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ---- RENDER PRODUCT CARD ----
function renderProductCard(product, small = false) {
  const inWL = isInWishlist(product.id);
  return `
    <div class="product-card fade-in" data-id="${product.id}">
      <div class="product-img-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x220/16213e/FF4B2B?text=MarketWorld'">
        <button class="wishlist-heart ${inWL ? 'active' : ''}" onclick="handleWishlistToggle(${product.id}, this)" title="Add to Wishlist">
          ${inWL ? '❤️' : '🤍'}
        </button>
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
      </div>
      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-desc">${product.description}</p>
        <div class="product-rating">
          <span class="stars">${getStars(product.rating)}</span>
          <span class="rating-count">${product.rating} (${product.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price-row">
          <span class="product-price">₹${product.price.toLocaleString()}</span>
          <span class="product-price-original">₹${product.originalPrice.toLocaleString()}</span>
          <span class="product-discount">${product.discount}% OFF</span>
        </div>
        <div class="product-buy-btns">
          <a href="${product.amazonLink}" target="_blank" rel="noopener" class="btn btn-amazon">🛒 Amazon</a>
          <a href="${product.flipkartLink}" target="_blank" rel="noopener" class="btn btn-flipkart">🏪 Flipkart</a>
        </div>
      </div>
    </div>
  `;
}

function getStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

// ---- WISHLIST TOGGLE HANDLER ----
function handleWishlistToggle(id, btn) {
  const inWL = toggleWishlist(id);

  btn.classList.toggle('active', inWL);
  btn.innerHTML = inWL ? '❤️' : '🤍';
}
function checkEmptyWishlist() {
  const grid = document.getElementById('wishlist-grid');
  if (!grid) return;
  if (grid.children.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <div class="empty-icon">💔</div>
        <h3>Your Wishlist is Empty</h3>
        <p>Save products you love to compare and buy later</p>
        <a href="products.html" class="btn btn-primary">Browse Products</a>
      </div>
    `;
  }
}
// ---- NAVBAR SETUP ----
function setupNavbar() {
  updateWishlistCount();
  
  // Active link highlighting
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Hamburger
  const ham = document.getElementById('hamburger');
  const menu = document.getElementById('nav-menu');
  if (ham && menu) {
    ham.addEventListener('click', () => {
      menu.classList.toggle('open');
      ham.classList.toggle('open');
    });
  }
}

// ---- SEARCH FILTER ----
function setupSearch(inputId, gridId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    document.querySelectorAll(`#${gridId} .product-card`).forEach(card => {
      const id = parseInt(card.dataset.id);
      const product = PRODUCTS.find(p => p.id === id);
      if (!product) return;
      const match = product.name.toLowerCase().includes(q) ||
                    product.category.toLowerCase().includes(q) ||
                    product.description.toLowerCase().includes(q);
      card.style.display = match ? '' : 'none';
    });
  });
}

// ---- CATEGORY FILTER ----
function setupCategoryFilter() {
  const btns = document.querySelectorAll('.cat-btn');
  if (!btns.length) return;
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      document.querySelectorAll('#products-grid .product-card').forEach(card => {
        const id = parseInt(card.dataset.id);
        const product = PRODUCTS.find(p => p.id === id);
        card.style.display = (cat === 'all' || product?.category === cat) ? '' : 'none';
      });
    });
  });
}

// ---- ON PAGE LOAD ----
document.addEventListener('DOMContentLoaded', () => {
  setupNavbar();
});
function createProductCard(product, delay = 0) {
  const inWL = isInWishlist(product.id);

  return `
    <div class="product-card" style="animation-delay:${delay}s">

      <div class="product-image-wrap">
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          loading="lazy"
          onerror="this.src='https://via.placeholder.com/400x220?text=Image+Not+Found'"
        />

        <!-- Wishlist Heart -->
        <button 
          class="wishlist-heart ${inWL ? 'active' : ''}"
          onclick="event.stopPropagation(); handleWishlistToggle(${product.id}, this)"
        >
          ${inWL ? '❤️' : '🤍'}
        </button>

        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
      </div>

      <div class="product-body" onclick="goToCheckout(${product.id})">

        <div class="product-category">
          ${product.category}
        </div>

        <h3 class="product-title">
          ${product.name}
        </h3>

        <p class="product-desc">
          ${product.description}
        </p>

        <div class="product-pricing">
          <span class="product-price">${product.price}</span>

          ${product.originalPrice ? `
            <span class="product-original">${product.originalPrice}</span>
          ` : ''}

          ${product.discount ? `
            <span class="product-discount">${product.discount}</span>
          ` : ''}
        </div>

      </div>

      <div class="product-footer">
        <div class="buy-buttons">

          <button 
            onclick="event.stopPropagation(); openAmazon(${product.id})" 
            class="amazon-btn"
          >
            Amazon
          </button>

          <button 
            onclick="event.stopPropagation(); openFlipkart(${product.id})" 
            class="flipkart-btn"
          >
            Flipkart
          </button>

        </div>
      </div>

    </div>
  `;
}
function goToCheckout(id) {
  window.location.href = `checkout.html?id=${id}`;
}

function openAmazon(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (product) window.open(product.affiliateLink, '_blank');
}

function openFlipkart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (product) window.open(product.flipkartLink, '_blank');
}
// ── HEADER ───────────────────────────────────────────────────
function initHeader() {
  // Scroll shadow
  window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (header) header.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
    // Close on link click
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  // Search toggle
  const searchToggle = document.getElementById('searchToggle');
  const searchBar = document.getElementById('searchBar');
  const searchInput = document.getElementById('searchInput');
  if (searchToggle && searchBar) {
    searchToggle.addEventListener('click', () => {
      searchBar.classList.toggle('open');
      if (searchBar.classList.contains('open') && searchInput) searchInput.focus();
    });
  }

  // Search button → go to products page
  const searchBtn = document.getElementById('searchBtn');
  if (searchBtn && searchInput) {
    const doSearch = () => {
      const q = searchInput.value.trim();
      if (q) window.location.href = `products.html?q=${encodeURIComponent(q)}`;
    };
    searchBtn.addEventListener('click', doSearch);
    searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
  }
}

// ── HOMEPAGE RENDERING ───────────────────────────────────────
function renderHomepage() {
  // Top Deals
  const topDealsEl = document.getElementById('topDealsGrid');
  if (topDealsEl) {
    const topDeals = PRODUCTS.filter(p => p.featured).slice(0, 8);
    topDealsEl.innerHTML = topDeals.map((p, i) => createProductCard(p, i * 0.07)).join('');
  }
  // Trending
  const trendingEl = document.getElementById('trendingGrid');
  if (trendingEl) {
    const trending = PRODUCTS.filter(p => p.trending).slice(0, 8);
    trendingEl.innerHTML = trending.map((p, i) => createProductCard(p, i * 0.07)).join('');
  }
  // Best Offers (highest discount)
  const bestOffersEl = document.getElementById('bestOffersGrid');
  if (bestOffersEl) {
    const sorted = [...PRODUCTS]
      .filter(p => p.discount)
      .sort((a, b) => parseInt(b.discount) - parseInt(a.discount))
      .slice(0, 8);
    bestOffersEl.innerHTML = sorted.map((p, i) => createProductCard(p, i * 0.07)).join('');
  }
}

// Category tabs on homepage
function initCategoryTabs() {
  const tabs = document.querySelectorAll('.cat-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.dataset.cat;
      filterHomeSections(cat);
    });
  });
}

function filterHomeSections(cat) {
  const grids = ['topDealsGrid', 'trendingGrid', 'bestOffersGrid'];
  grids.forEach(gridId => {
    const el = document.getElementById(gridId);
    if (!el) return;
    const cards = el.querySelectorAll('.product-card');
    cards.forEach((card, i) => {
      const productId = parseInt(card.getAttribute('onclick')?.match(/\d+/)?.[0]);
      const product = PRODUCTS.find(p => p.id === productId);
      if (!product) return;
      const show = cat === 'all' ||
        product.category === cat ||
        product.scope === cat.replace('🌍 ', '').replace('🇮🇳 ', '');
      card.style.display = show ? '' : 'none';
      if (show) card.style.animationDelay = `${i * 0.05}s`;
    });
  });
}

// ── PRODUCTS PAGE ────────────────────────────────────────────
function renderAllProducts() {
  const grid = document.getElementById('allProductsGrid');
  if (!grid) return;

  const params = new URLSearchParams(window.location.search);
  const urlQ = params.get('q') || '';
  const urlCat = params.get('cat') || '';

  if (urlQ && document.getElementById('productSearch')) {
    document.getElementById('productSearch').value = urlQ;
  }
  if (urlCat && document.getElementById('categoryFilter')) {
    document.getElementById('categoryFilter').value = urlCat;
  }

  applyFilters();

  // Live filter listeners
  const searchEl = document.getElementById('productSearch');
  const catEl = document.getElementById('categoryFilter');
  const sortEl = document.getElementById('sortFilter');

  if (searchEl) searchEl.addEventListener('input', applyFilters);
  if (catEl) catEl.addEventListener('change', applyFilters);
  if (sortEl) sortEl.addEventListener('change', applyFilters);
}

function applyFilters() {
  const grid = document.getElementById('allProductsGrid');
  const noResults = document.getElementById('noResults');
  const countEl = document.getElementById('resultsCount');
  if (!grid) return;

  const q = (document.getElementById('productSearch')?.value || '').toLowerCase();
  const cat = document.getElementById('categoryFilter')?.value || 'all';
  const sort = document.getElementById('sortFilter')?.value || 'default';

  let filtered = PRODUCTS.filter(p => {
    const matchQ = !q ||
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.retailer.toLowerCase().includes(q);
    const matchCat = cat === 'all' || p.category === cat || p.scope === cat;
    return matchQ && matchCat;
  });

  // Sort
  if (sort === 'price-asc') {
    filtered.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  } else if (sort === 'price-desc') {
    filtered.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
  } else if (sort === 'discount') {
    filtered.sort((a, b) => parseInt(b.discount || 0) - parseInt(a.discount || 0));
  }

  if (countEl) countEl.textContent = `Showing ${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (noResults) noResults.style.display = 'flex';
  } else {
    if (noResults) noResults.style.display = 'none';
    grid.innerHTML = filtered.map((p, i) => createProductCard(p, i * 0.04)).join('');
  }
}

function parsePrice(priceStr) {
  return parseFloat(priceStr.replace(/[^0-9.]/g, '')) || 0;
}

// ── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  // Homepage
  if (document.getElementById('topDealsGrid')) {
    renderHomepage();
    initCategoryTabs();
  }

  // Products page – only if renderAllProducts not already called inline
  if (document.getElementById('allProductsGrid') && !document.querySelector('[data-products-init]')) {
    renderAllProducts();
  }

  // Scroll reveal for feature cards
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.feature-card, .about-stat').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`;
    observer.observe(el);
  });
});
function updateWishlistUI() {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  document.querySelectorAll(".wishlist-btn").forEach(btn => {
    const id = parseInt(btn.getAttribute("data-id"));

    const exists = wishlist.find(p => p.id === id);

    if (exists) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}
