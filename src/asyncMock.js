const items = [
    { id: 'A100', name: 'remera', descripcion: 'Remera mangas corta de algodon ', stock: 45 },
    { id: 'B200', name: 'pantalon', descripcion: 'jean', stock: 22 },
    { id: 'C300', name: 'short', descripcion: 'color blanco', stock: 38 },
  ];
  
  export const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items);
    }, 2000);
  });
  