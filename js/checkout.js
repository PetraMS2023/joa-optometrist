let patWay = document.getElementById("payWay");
let visa = document.getElementById("visa");
let paypal = document.getElementById("paypal");
let select = document.getElementById("select");
let r1 = document.getElementById("r1");
let r2 = document.getElementById("r2");
let month = document.getElementById("month");
let year = document.getElementById("year");
let cvv = document.getElementById("cvv");


month.addEventListener("input", () => {
  if (month.value.length >= 2) {
    month.value = month.value.slice(0, 2);
  }
});

year.addEventListener("input", () => {
  if (year.value.length >= 4) {
    year.value = year.value.slice(0, 4);
  }
});
cvv.addEventListener("input", () => {
  if (cvv.value.length >= 3) {
    cvv.value = cvv.value.slice(0, 3);
  }
});

r1.addEventListener("input", () => {
  if (r1.checked) {
    patWay.style.display = "flex";
  }
});
r2.addEventListener("input", () => {
  if (r2.checked) {
    patWay.style.display = "none";
  }
});

select.addEventListener("input", () => {
  if (select.value === "visa") {
    visa.style.display = "flex";
    paypal.style.display = "none";
  } else {
    visa.style.display = "none";
    paypal.style.display = "flex";
  }
});
