const productos = [
  {
    imagen: "./images/A03S.jpg",
    id: 1,
    categoria: "Celulares",
    nombre: "SAMSUNG A03S",
    precio: 54000,
  },
  {
    imagen: "./images/A53.jpg",
    id: 3,
    categoria: "Celulares",
    nombre: "SAMSUNG A53 5G",
    precio: 163999,
  },
  {
    imagen: "./images/S21.jpg",
    id: 4,
    categoria: "Celulares",
    nombre: "SAMSUNG S21 FE 5G",
    precio: 249999,
  },
  {
    imagen: "./images/A33.jpg",
    id: 5,
    categoria: "Celulares",
    nombre: "SAMSUNG A33 5G",
    precio: 141999,
  },
  {
    imagen: "./images/S20.jpg",
    id: 7,
    categoria: "Celulares",
    nombre: "SAMSUNG S20 FE 5G",
    precio: 209999,
  },
  {
    imagen: "./images/S22.jpg",
    id: 8,
    categoria: "Celulares",
    nombre: "SAMSUNG S22",
    precio: 284999,
  },
  {
    imagen: "./images/A72.webp",
    id: 10,
    categoria: "Celulares",
    nombre: "SAMSUNG A72",
    precio: 98852,
  },
  {
    imagen: "./images/A03S.jpg",
    id: 11,
    categoria: "Celulares",
    nombre: "SAMSUNG A03S",
    precio: 54000,
  },
  {
    imagen: "./images/M23.jpg",
    id: 12,
    categoria: "Celulares",
    nombre: "SAMSUNG M23 5G",
    precio: 95999,
  },
  {
    imagen: "./images/A53.jpg",
    id: 13,
    categoria: "Celulares",
    nombre: "SAMSUNG A53 5G",
    precio: 163999,
  },
  {
    imagen: "./images/S21.jpg",
    id: 14,
    categoria: "Celulares",
    nombre: "SAMSUNG S21 FE 5G",
    precio: 249999,
  },
  {
    imagen: "./images/S20.jpg",
    id: 17,
    categoria: "Celulares",
    nombre: "SAMSUNG S20",
    precio: 209999,
  },
  {
    imagen: "./images/dw-mon19.jpg",
    id: 18,
    categoria: "Monitor",
    nombre: "DAEWOO DW-MON19",
    precio: 44839,
  },
  {
    imagen: "./images/dw-mon19.jpg",
    id: 19,
    categoria: "Monitor",
    nombre: "AOC G2490VX",
    precio: 73586,
  },
  {
    imagen: "./images/dw-mon19.jpg",
    id: 20,
    categoria: "Monitor",
    nombre: "Philips V193V5LHSB2",
    precio: 38999,
  },
  {
    imagen: "./images/dw-mon19.jpg",
    id: 21,
    categoria: "Monitor",
    nombre: "Gfast 21.5 T-220",
    precio: 199999,
  },
  {
    imagen: "./images/dw-mon19.jpg",
    id: 22,
    categoria: "Monitor",
    nombre: "Samsung Odyssey Crg5 24",
    precio: 98999,
  },
  {
    imagen: "./images/dw-mon19.jpg",
    id: 23,
    categoria: "Monitor",
    nombre: "Samsung F24t35",
    precio: 59999,
  },
  {
    imagen: "./images/dw-mon19.jpg",
    id: 24,
    categoria: "Monitor",
    nombre: "BenQ GW2780 ",
    precio: 209999,
  },
  {
    imagen: "./images/dw-mon19.jpg",
    id: 25,
    categoria: "Monitor",
    nombre: "Samsung F22T35",
    precio: 209999,
  },
  {
    imagen: "./images/SW1.jpg",
    id: 70,
    categoria: "SMW",
    nombre: "Samsung Galaxy Watch4",
    precio: 104699,
  },
  {
    imagen: "./images/SW2.png",
    id: 71,
    categoria: "SMW",
    nombre: "Microwear W26 1.75",
    precio: 4870,
  },
  {
    imagen: "./images/SW3.jpg",
    id: 72,
    categoria: "SMW",
    nombre: "Amazfit GTS 4 Mini 1.65",
    precio: 20999,
  },
  {
    imagen: "./images/SW4.png",
    id: 73,
    categoria: "SMW",
    nombre: "Nitcom NT14 Pantalla 1.75",
    precio: 12599,
  },
  {
    imagen: "./images/SW5.jpg",
    id: 74,
    categoria: "SMW",
    nombre: "Zl02d ",
    precio: 20999,
  },
  {
    imagen: "./images/SW6.jpg",
    id: 75,
    categoria: "SMW",
    nombre: "Microwear series 6 W26",
    precio: 17999,
  },
  {
    imagen: "./images/SW7.jpg",
    id: 76,
    categoria: "SMW",
    nombre: "Xiaomi Redmi Smart Band 2",
    precio: 39999,
  },
  {
    imagen: "./images/SW8.png",
    id: 77,
    categoria: "SMW",
    nombre: "Gadnic Rws10",
    precio: 21999,
  },
  {
    imagen: "./images/SW9.jpg",
    id: 78,
    categoria: "SMW",
    nombre: "Huawei Fit Active 1.64",
    precio: 32348,
  },
  {
    imagen: "./images/SW10.jpg",
    id: 79,
    categoria: "SMW",
    nombre: "Garmin Forerunner 45 1.04",
    precio: 68619,
  },
  {
    imagen: "./images/hp1.jpg",
    id: 60,
    categoria: "Notebook",
    nombre: "VAIO VJFE54A0411H Core i5 8GB 512GB",
    precio: 288389,
  },
  {
    imagen: "./images/hp.png",
    id: 61,
    categoria: "Notebook",
    nombre: "DELL Alienware15 Intel i7",
    precio: 1130439,
  },
  {
    imagen: "./images/lenovo.jpg",
    id: 62,
    categoria: "Notebook",
    nombre: "DELL Inspiron 15 3525",
    precio: 271279,
  },
  {
    imagen: "./images/hp1.jpg",
    id: 63,
    categoria: "Notebook",
    nombre: "VAIO VJFE54A0411H Core i5 8GB 512GB",
    precio: 288389,
  },
];

// Almacenar("Productos",productos)
function almacenar(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// Recuperar objeto
function recuperar(key) {
  let recuperado = JSON.parse(localStorage.getItem(key));
  if (recuperado === null) {
    return (recuperado = []);
  } else {
    return recuperado;
  }
}
// Agregar Objeto
function agregar(key, new_element) {
  let dato = recuperar(key);
  dato.push(new_element);
  almacenar(key, dato);
}
