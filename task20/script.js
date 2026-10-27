// المنتجات الجاهزة
let products = [
  { name: "سكر 1 كغ", price: 3},
  { name: "رز 5 كغ", price: 35 },
  { name: "زيت زيتون", price:35},
  { name: "طحين 10 كغ", price: 45 },
  { name: "شاي", price: 12 }
];

let hasDiscount = false;     // هل الكوبون مفعّل؟
let crossingClosed = false;  // هل المعبر مسكّر؟


 // 2) عناصر الصفحة
 
const productName    = document.getElementById("productName");
const productPrice   = document.getElementById("productPrice");
const addButton      = document.getElementById("addButton");
const productsList   = document.getElementById("productsList");
const couponInput    = document.getElementById("couponInput");
const couponButton   = document.getElementById("couponButton");
const invoiceButton  = document.getElementById("invoiceButton");
const crossingButton = document.getElementById("crossingButton");
const invoiceBox     = document.getElementById("invoiceBox");


 // 3) عرض قائمة المنتجات
 
function showProducts() {
  productsList.innerHTML = "";

  products.forEach(function (product, index) {
    const item = document.createElement("li");
    item.className = "flex justify-between border-b py-2";

    // إذا المعبر مسكّر، السعر بينضرب بـ 150%
    let price = product.price;
    if (crossingClosed) {
      price = price * 1.5;
    }

    item.innerHTML = `
      <span>${product.name}</span>
      <span>
        ${price}
        <button class="text-red-500 mr-3" onclick="deleteProduct(${index})">✕</button>
      </span>
    `;

    productsList.appendChild(item);
  });
}


 // 4) زر + (إضافة منتج)
 
function addProduct() {
  const name = productName.value;
  const price = Number(productPrice.value);

  if (name === "" || price <= 0) {
    alert("اكتب اسم المنتج والسعر");
    return;
  }

  products.push({ name: name, price: price });

  productName.value = "";
  productPrice.value = "";

  showProducts();
}


 // 5) حذف منتج
 
function deleteProduct(index) {
  products.splice(index, 1);
  showProducts();
}


 // 6) زر الكوبون
 
function applyCoupon() {
  const code = couponInput.value;

  if (code === "ABC123" || code === "abc123") {
    hasDiscount = true;
    alert("تم تطبيق خصم 20%");
  } else {
    hasDiscount = false;
    alert("الكوبون غلط");
  }

  createInvoice();
}


 // 7) زر سكر المعبر (تشغيل / إطفاء)
 
function toggleCrossing() {
  crossingClosed = !crossingClosed;

  if (crossingClosed) {
    // تشغيل: حذف الخصم وتعطيل الكوبون
    hasDiscount = false;
    couponInput.value = "";
    couponButton.disabled = true;

    crossingButton.innerText = "سكر المعبر: شغّال";
    crossingButton.className = "flex-1 bg-red-600 text-white p-2 rounded";
  } else {
    // إطفاء: رجوع الكوبون
    couponButton.disabled = false;

    crossingButton.innerText = "سكر المعبر";
    crossingButton.className = "flex-1 bg-orange-500 text-white p-2 rounded";
  }

  showProducts();   // تحديث الأسعار بالقائمة
  createInvoice();
}


 // 8) زر إنشاء الفاتورة
 
function createInvoice() {
  let total = 0;
  let rows = "";

  // حساب سعر كل منتج
  products.forEach(function (product) {
    let price = product.price;

    if (crossingClosed) {
      price = price * 1.5;   // ضرب بـ 150%
    }

    total = total + price;

    rows += `
      <div class="flex justify-between">
        <span>${product.name}</span>
        <span>${price.toFixed(2)}</span>
      </div>
    `;
  });

  // حساب الخصم
  let discount = 0;
  if (hasDiscount) {
    discount = total * 0.20;   // خصم 20%
  }

  const finalTotal = total - discount;

  // عنوان ولون الفاتورة
  let title = "الفاتورة";
  let border = "border-gray-800";
  if (crossingClosed) {
    title = "الفاتورة (المعبر مسكّر × 150%)";
    border = "border-red-600";
  }

  // عرض الفاتورة
  invoiceBox.innerHTML = `
    <div class="border-2 ${border} rounded p-4">
      <h2 class="font-bold text-lg mb-2">${title}</h2>
      ${rows}
      <hr class="my-2">
      <div class="flex justify-between">
        <span>المجموع</span><span>${total.toFixed(2)}</span>
      </div>
      <div class="flex justify-between text-green-600">
        <span>الخصم</span><span>${discount.toFixed(2)}</span>
      </div>
      <div class="flex justify-between font-bold text-xl">
        <span>الإجمالي</span><span>${finalTotal.toFixed(2)}</span>
      </div>
    </div>
  `;
}


 // 9) ربط الأزرار بالدوال
 
addButton.addEventListener("click", addProduct);
couponButton.addEventListener("click", applyCoupon);
invoiceButton.addEventListener("click", createInvoice);
crossingButton.addEventListener("click", toggleCrossing);


 // 10) أول ما تفتح الصفحة
 
showProducts();