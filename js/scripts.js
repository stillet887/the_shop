function changePrice(e){productPrice.innerHTML={s:1500,m:1600,l:1700}[e]+"&#8381;"}function changePicture(e){productImage.src="img/tshirts/tshirt_"+e+".jpg"}const Dispatcher=document.getElementById("dispatcher"),productImage=document.querySelector(".product__image"),productPrice=document.querySelector(".product__price"),navButton=document.querySelector(".nav-button"),navMenu=document.querySelector(".nav-strip");class PropertySelector{constructor(e){this.el=e;const t=e.querySelectorAll(".product__option");this.el.addEventListener("click",e=>{if(e.target.classList.contains("product__option")){t.forEach(e=>{e.classList.remove("product__option_checked")}),e.target.classList.add("product__option_checked");const c=e.target.dataset.type,r=e.target.dataset.value;this.dispatchEvent(c,r)}})}dispatchEvent(e,t){const c=new CustomEvent("property-selected",{detail:{type:e,value:t}});Dispatcher.dispatchEvent(c)}}new PropertySelector(document.querySelector(".product__colors")),new PropertySelector(document.querySelector(".product__sizes")),Dispatcher.addEventListener("property-selected",e=>{const t=e.detail;"color"===t.type&&changePicture(t.value),"size"===t.type&&changePrice(t.value)}),navButton.addEventListener("click",()=>{navMenu.classList.toggle("nav-strip_open")});