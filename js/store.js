

const STORE_CONFIG = {
  name: "Retro Station",
  currency: "IQD",
  deliveryFee: 5000,
  phone: "+9647809643675",
  whatsappNumber: "9647809643675",
  logo: "./Images/logo.png",

  coupons: {
    RETROSTATIONJR44: { type: "percent", value: 0.1, label: "10% off" },
  },
};

const PRODUCTS = [
  {
    id: 1,
    name: "R36S Handheld",
    price: 59000,
    badge: "Bestseller",
    image: "./Images/R36S Purple.png",
    images: [
      "./Images/R36S Purple.png",
      "./Images/Rs36-noBackground.png",
      "./Images/RS36.jpg",
    ],
    description:
      "Open-source retro gaming handheld with a 3.5-inch 640×480 IPS display, RK3326 quad-core processor, 3200mAh battery, and support for thousands of classic games.",
    specs: [
      "3.5-inch IPS Display",
      "640×480 Resolution",
      "RK3326 Quad-Core CPU",
      "Mali-G31 GPU",
      "3200mAh Battery",
      "Linux/Open-Source System",
      "TF / MicroSD Storage Support",
      "Supports Classic Retro Emulators",
      "USB-C Charging",
      "3.5mm Headphone Jack",
    ],
  },
  {
    id: 2,
    name: "M22 Handheld",
    price: 69000,
    badge: "Full HD",
    image: "./Images/M22 Black.png",
    images: [
      "./Images/M22 Black.png",
      "./Images/M22 Black 2.png",
      "./Images/M22 white.png",
    ],
    description:
      "Portable retro handheld with a large 5-inch IPS display, 3000mAh battery, and large-capacity game storage options.",
    specs: [
      "5.0-inch IPS Display",
      "1920×1080 Listed Resolution",
      "N909 Dual-Core 1.2GHz CPU",
      "3000mAh Battery",
      "64GB / 128GB TF Card Options",
      "20,000+ Listed Games Depending on Version",
      "Built-in Speaker",
      "Multiple Language Support",
      "Portable Lightweight Body",
      "USB Charging",
    ],
  },
  {
    id: 3,
    name: "G28 Handheld",
    price: 69000,
    badge: "Pro",
    image: "./Images/G28 Black.png",
    images: ["./Images/G28 Black.png"],
    description:
      "Compact retro gaming handheld with a 4.3-inch IPS display, 64GB expandable storage options, OTG support, and thousands of preloaded classic games depending on version.",
    specs: [
      "4.3-inch IPS Display",
      "480×272 Resolution",
      "16:9 Screen Ratio",
      "60Hz Refresh Rate",
      "2000mAh Battery",
      "64GB Storage Version Available",
      "Expandable TF / MicroSD Storage",
      "OTG Support",
      "Supports Multiple Retro Emulators",
      "Portable Plug-and-Play Design",
    ],
  },
  {
    id: 4,
    name: "Retro Gaming Light Box",
    price: 15000,
    badge: "Decor",
    image: "./Images/Light Box Red.png",
    images: ["./Images/Light Box Red.png"],
    description:
      "Decorative gaming-themed LED light box for desks, gaming rooms, shelves, entertainment setups, and gift displays.",
    specs: [
      "Gaming Room Decoration",
      "LED Light Box Design",
      "Side-Lit 3D Visual Effect",
      "Dimmable Brightness",
      "Desk / Shelf Display",
      "Gift-Friendly Design",
      "Approx. 28×50×3.5cm Listed Size",
      "Ambient Gaming Setup Lighting",
    ],
  },
  {
    id: 5,
    name: "Gaming Carry Bags",
    price: 32000,
    badge: "Protection",
    image: "./Images/Bags.png",
    images: [
      "./Images/Bags.png",
      "./Images/Bag AOT.png",
    ],
    description:
      "Protective carrying bags for handheld consoles and gaming accessories, made for safer storage, travel, and daily use.",
    specs: [
      "Protective Carrying Bag",
      "Fits Handheld Consoles",
      "Accessory Storage Space",
      "Travel-Friendly Design",
      "Scratch Protection",
      "Shock-Resistant Exterior",
      "Zipper Closure",
      "Lightweight Portable Build",
    ],
  },
  {
    id: 6,
    name: "Board Game",
    price: 25000,
    badge: "New",
    image: "./Images/Board Game.png",
    images: ["./Images/Board Game.png"],
    description:
      "Fun tabletop board game option for family nights, friends, parties, and offline entertainment.",
    specs: [
      "Tabletop Board Game",
      "Family-Friendly Entertainment",
      "Good for Friends and Parties",
      "Offline Multiplayer Fun",
      "Easy to Learn",
      "Replayable Gameplay",
      "Gift-Friendly Product",
      "Portable Box Packaging",
    ],
  },
];

const CART_KEY = "retro_cart";

function parseIQD(text) {
  const cleaned = String(text || "")
    .replace(/IQD/gi, "")
    .replace(/[^\d]/g, "");

  return Number(cleaned || 0);
}

function formatIQD(n) {
  return (Number(n) || 0).toLocaleString("en-US") + " " + STORE_CONFIG.currency;
}

function formatPhoneDisplay(phone = STORE_CONFIG.phone) {
  const digits = String(phone).replace(/\D/g, "");

  if (digits.startsWith("964") && digits.length >= 12) {
    return `+964 ${digits.slice(3, 6)} ${digits.slice(6, 9)} ${digits.slice(9)}`;
  }

  return phone.startsWith("+") ? phone : `+${digits}`;
}

function applyStoreContactInfo() {
  const tel = STORE_CONFIG.phone;
  const display = formatPhoneDisplay(tel);

  document.querySelectorAll("[data-store-phone]").forEach((el) => {
    el.textContent = display;
    if (el.tagName === "A") {
      el.setAttribute("href", `tel:${tel}`);
    }
  });

  document.querySelectorAll("[data-store-logo]").forEach((el) => {
    if (el.tagName === "IMG" && STORE_CONFIG.logo) {
      el.src = STORE_CONFIG.logo;
    }
  });
}

function getProduct(id) {
  return PRODUCTS.find((p) => String(p.id) === String(id)) || null;
}

function getProductImages(product) {
  if (!product) return [];

  if (Array.isArray(product.images) && product.images.length) {
    return product.images;
  }

  return product.image ? [product.image] : [];
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  } catch {
    return [];
  }
}

function setCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function getCartCount(cart) {
  return (cart || getCart()).reduce((sum, it) => {
    return sum + (Number(it.qty) || 0);
  }, 0);
}

function updateCartBadge() {
  const count = getCartCount();

  document.querySelectorAll("[data-cart-badge]").forEach((el) => {
    el.textContent = count > 0 ? String(count) : "";
    el.classList.toggle("is-visible", count > 0);
  });

  document.querySelectorAll("[data-cart-label]").forEach((el) => {
    el.textContent = count > 0 ? `(${count})` : "";
  });
}

function upsertCartItem(item) {
  const cart = getCart();
  const idx = cart.findIndex((x) => String(x.id) === String(item.id));

  if (idx >= 0) {
    cart[idx].qty = (Number(cart[idx].qty) || 0) + (Number(item.qty) || 1);
    cart[idx].name = item.name;
    cart[idx].price = item.price;
    cart[idx].img = item.img;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      img: item.img,
      qty: Number(item.qty) || 1,
    });
  }

  setCart(cart);
  return cart;
}

function addProductToCart(productId, qty = 1) {
  const product = getProduct(productId);
  if (!product) return null;

  upsertCartItem({
    id: product.id,
    name: product.name,
    price: product.price,
    img: product.image,
    qty,
  });

  return product;
}

function computeOrder(cart, coupon, deliveryFee = STORE_CONFIG.deliveryFee) {
  const subtotal = cart.reduce((sum, it) => {
    return sum + (Number(it.price) || 0) * (Number(it.qty) || 0);
  }, 0);

  const delivery = subtotal > 0 ? Math.max(0, Number(deliveryFee) || 0) : 0;
  let discount = 0;

  if (coupon) {
    if (coupon.type === "percent") {
      discount = Math.round(subtotal * coupon.value);
    }

    if (coupon.type === "fixed") {
      discount = coupon.value;
    }

    if (discount > subtotal) {
      discount = subtotal;
    }
  }

  const total = Math.max(0, subtotal - discount + delivery);

  return {
    subtotal,
    discount,
    delivery,
    total,
  };
}

function resolveCoupon(code) {
  const raw = String(code || "").trim();

  if (!raw) return null;

  const key = Object.keys(STORE_CONFIG.coupons).find(
    (k) => k.toUpperCase() === raw.toUpperCase()
  );

  if (!key) return null;

  return { ...STORE_CONFIG.coupons[key], code: key };
}

function buildWhatsAppOrderMessage(cart, summary, customer = {}) {
  const lang = typeof getCurrentLang === "function" ? getCurrentLang() : "en";
  const lines = [];

  if (lang === "ar") {
    lines.push("طلب جديد من Retro Station");
    lines.push("");
    lines.push(`الاسم: ${customer.name || "-"}`);
    lines.push(`المحافظة: ${customer.city || "-"}`);
    lines.push(`العنوان: ${customer.address || "-"}`);
    lines.push(`ملاحظات: ${customer.notes || "-"}`);
    lines.push("");
    lines.push("المنتجات:");

    cart.forEach((item, index) => {
      const itemTotal = Number(item.price) * Number(item.qty);

      lines.push(
        `${index + 1}. ${item.name} × ${item.qty} — ${formatIQD(itemTotal)}`
      );
    });

    lines.push("");
    lines.push(`المجموع الفرعي: ${formatIQD(summary.subtotal)}`);
    lines.push(`الخصم: ${formatIQD(summary.discount)}`);
    lines.push(`التوصيل: ${formatIQD(summary.delivery)}`);
    lines.push(`الإجمالي: ${formatIQD(summary.total)}`);

    return lines.join("\n");
  }

  if (lang === "ku") {
    lines.push("داواکاریی نوێ لە Retro Station");
    lines.push("");
    lines.push(`ناو: ${customer.name || "-"}`);
    lines.push(`پارێزگا: ${customer.city || "-"}`);
    lines.push(`ناونیشان: ${customer.address || "-"}`);
    lines.push(`تێبینی: ${customer.notes || "-"}`);
    lines.push("");
    lines.push("بەرهەمەکان:");

    cart.forEach((item, index) => {
      const itemTotal = Number(item.price) * Number(item.qty);

      lines.push(
        `${index + 1}. ${item.name} × ${item.qty} — ${formatIQD(itemTotal)}`
      );
    });

    lines.push("");
    lines.push(`کۆی لاوەکی: ${formatIQD(summary.subtotal)}`);
    lines.push(`داشکاندن: ${formatIQD(summary.discount)}`);
    lines.push(`گەیاندن: ${formatIQD(summary.delivery)}`);
    lines.push(`کۆی گشتی: ${formatIQD(summary.total)}`);

    return lines.join("\n");
  }

  lines.push("New order from Retro Station");
  lines.push("");
  lines.push(`Name: ${customer.name || "-"}`);
  lines.push(`City: ${customer.city || "-"}`);
  lines.push(`Address: ${customer.address || "-"}`);
  lines.push(`Notes: ${customer.notes || "-"}`);
  lines.push("");
  lines.push("Products:");

  cart.forEach((item, index) => {
    const itemTotal = Number(item.price) * Number(item.qty);

    lines.push(
      `${index + 1}. ${item.name} × ${item.qty} — ${formatIQD(itemTotal)}`
    );
  });

  lines.push("");
  lines.push(`Subtotal: ${formatIQD(summary.subtotal)}`);
  lines.push(`Discount: ${formatIQD(summary.discount)}`);
  lines.push(`Delivery: ${formatIQD(summary.delivery)}`);
  lines.push(`Total: ${formatIQD(summary.total)}`);

  return lines.join("\n");
}

function openWhatsAppOrder(cart, summary, customer = {}) {
  const phone = String(STORE_CONFIG.whatsappNumber || "").replace(/[^\d]/g, "");

  if (!phone) {
    showToast("WhatsApp number is missing.", "error");
    return false;
  }

  const message = buildWhatsAppOrderMessage(cart, summary, customer);
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");

  return true;
}

function submitOrder(cart, summary, customer = {}) {
  if (!cart.length) {
    showToast(t("toast.cartEmpty"), "error");
    return false;
  }

  if (!customer.name) {
    showToast(t("errors.nameRequired"), "error");
    return false;
  }

  if (!customer.city) {
    showToast(t("errors.cityRequired"), "error");
    return false;
  }

  const opened = openWhatsAppOrder(cart, summary, customer);

  if (!opened) {
    return false;
  }

  showToast(t("toast.orderPlaced", { total: formatIQD(summary.total) }));

  localStorage.removeItem(CART_KEY);
  updateCartBadge();

  return true;
}

function showToast(message, type = "success") {
  const existing = document.querySelector(".rs-toast");

  if (existing) {
    existing.remove();
  }

  const toast = document.createElement("div");
  toast.className = `rs-toast rs-toast--${type}`;
  toast.innerHTML = `
    <i class="fas ${type === "error" ? "fa-circle-exclamation" : "fa-circle-check"}"></i>
    <span>${message}</span>
  `;

  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("is-visible");
  });

  setTimeout(() => {
    toast.classList.remove("is-visible");

    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2400);
}

function renderProductCard(product) {
  const p = getLocalizedProduct(product.id) || product;

  return `
    <div class="col-lg-4 col-md-6 col-sm-6">
      <article class="product-card" data-product-id="${p.id}">
        <div class="product-badge">${p.badge}</div>

        <div class="product-image">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>

        <div class="product-info">
          <h3 class="product-name">${p.name}</h3>
          <p class="product-description">${p.description}</p>
          <div class="product-price">${formatIQD(p.price)}</div>

          <div class="product-actions">
            <a class="btn-view-details" href="./product-detail.html?id=${p.id}">
              <i class="fas fa-eye"></i> ${t("product.details")}
            </a>

            <button type="button" class="btn-add-cart" data-add-cart="${p.id}">
              <i class="fas fa-cart-plus"></i> ${t("product.add")}
            </button>
          </div>
        </div>
      </article>
    </div>
  `;
}

function renderProductsGrid(containerId) {
  const grid = document.getElementById(containerId);

  if (!grid) {
    return;
  }

  grid.innerHTML = PRODUCTS.map(renderProductCard).join("");
  bindAddToCartButtons(grid);
}

function bindAddToCartButtons(root = document) {
  root.querySelectorAll("[data-add-cart]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const id = btn.getAttribute("data-add-cart");
      const product = addProductToCart(id);

      if (product) {
        const localized = getLocalizedProduct(product.id) || product;
        showToast(t("toast.added", { name: localized.name }));
      }
    });
  });
}

function refreshStoreUI() {
  renderProductsGrid("productsGrid");
}

function initStore() {
  updateCartBadge();
  applyStoreContactInfo();
  window.addEventListener("languageChanged", refreshStoreUI);
}

document.addEventListener("DOMContentLoaded", initStore);
