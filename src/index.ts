let producto = document.getElementById("producto");
let precio = document.getElementById("precio");
let agregar = document.getElementById("btn-agregar");
let descuento = document.getElementById("descuento");
let lista = document.getElementById("lista");
let total = document.getElementById("total");
let vaciar = document.getElementById("vaciar");
let promo = document.getElementById("promo");
let productos = [];
let precios = [];
let suma = 0;

//FUNCIONES PARA EVENTOS
const agregarAlCarrito = () => {
  //metodo push para agregar un elemento al final arreglo
  productos.push(producto.value);
  precios.push(Number(precio.value));

  lista?.innerHTML += `<li>${producto.value} : $${precio.value}</li>`;
  suma += Number(precio.value);
  total?.innerHTML = suma;
  //vaciar los campos de entrada
  producto.value = "";
  precio.value = "";
};

const hayDescuento = () => {
  if (suma > 2500) {
    promo.innerHTML =
      "Felicitaciones, con su compra obtuvo un 10% de descuento";
    total?.innerHTML = suma * 0.9;
  } else
    promo.innerHTML = "Con su compra de $2500 puede acceder a un descuento";
};

const vaciarLista = () => {
  lista?.innerHTML = "";
  total?.innerHTML = "";
};

//AGREGAMOS EVENTOS A LOS BOTONES
agregar?.addEventListener("click", agregarAlCarrito);
descuento?.addEventListener("click", hayDescuento);
vaciar?.addEventListener("click", vaciarLista);
