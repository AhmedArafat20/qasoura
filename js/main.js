// قصور الغاز — سكربت الموقع
(function () {
  "use strict";

  var WHATSAPP_NUMBER = "966570730788"; // بصيغة دولية بدون + أو صفر

  // تبديل قائمة الجوال
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // سنة الفوتر
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // نموذج اتصل بنا: يبني رسالة واتساب من بيانات النموذج
  var form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("#cf-name").value.trim();
      var phone = form.querySelector("#cf-phone").value.trim();
      var service = form.querySelector("#cf-service").value;
      var message = form.querySelector("#cf-message").value.trim();

      var lines = [
        "طلب تواصل جديد من موقع قصور الغاز:",
        "الاسم: " + name,
        "الجوال: " + phone,
        "نوع الخدمة: " + service
      ];
      if (message) lines.push("التفاصيل: " + message);

      var text = encodeURIComponent(lines.join("\n"));
      var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + text;
      window.open(url, "_blank", "noopener");
    });
  }
})();
