let api=fetch("https://fakestoreapi.com/products");
let api1 = api.then((x) => x.json());

api1.then((x) => {
  let y = [...x];
  console.log(y)
  for (let z in y) {
    let maindiv = document.getElementById("maindiv");
    let productDiv = document.createElement("div");
    productDiv.classList.add("product");
    let img = document.createElement("div");
    img.innerHTML = `<img src=${y[z].image} alt="image"/>`;
    productDiv.appendChild(img);
    let n = document.createElement("div");
    n.innerHTML = `<b>Index:${y[z].id}</b>`;
    productDiv.appendChild(n);
    let m = document.createElement("div");
    m.innerHTML = `<b>$:</b><p>${y[z].price}</p>`;
    productDiv.appendChild(m);
    let c = document.createElement("div");
    c.innerHTML = `<b>Category:</b><p>${y[z].category}</p>`;
    productDiv.appendChild(c);
    let h = document.createElement("div");
    h.innerHTML =` <b>Title:</b><p>${y[z].title}</p>`;
    productDiv.appendChild(h);
    let des = document.createElement("div");
    des.innerHTML = `<b>Description:</b><p>${y[z].description.substring(0,100)}</p>`;
    productDiv.appendChild(des);
    let btn = document.createElement("button");
    btn.innerHTML = `Add to Cart`;
    productDiv.appendChild(btn)
    maindiv.appendChild(productDiv);
    let t1 = document.createElement("p")
  }
});
