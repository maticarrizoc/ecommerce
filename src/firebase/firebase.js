// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    doc,
    getDoc,
    getDocs,
    collection,
    query,
    where,
    addDoc,
    updateDoc,
    writeBatch,
  } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnUVWJO91n2k-WUkBmSZd299ZY833-lZI",
  authDomain: "electrodomesticosmendoza-23ee5.firebaseapp.com",
  projectId: "electrodomesticosmendoza-23ee5",
  storageBucket: "electrodomesticosmendoza-23ee5.firebasestorage.app",
  messagingSenderId: "643200900321",
  appId: "1:643200900321:web:46fdc075250c760ca36ba0"
};

const app = initializeApp(firebaseConfig);

const dataBase = getFirestore(app);

export async function getSingleProduct(id) {
    const documentRef = doc(dataBase, 'productos', id);
  
    try {
      const snapshot = await getDoc(documentRef);
      if (snapshot.exists()) {
        return snapshot.data();
      } else {
        console.log('El producto no existe!');
      }
    } catch (error) {
      console.error('Error al obtener el producto: ', error);
    }
  }
  
  export async function getProducts() {
    try {
      const querySnapshot = await getDocs(collection(dataBase, 'productos'));
      if (querySnapshot.size !== 0) {
        const productsList = querySnapshot.docs.map((docu) => {
          return {
            id: docu.id,
            ...docu.data(),
          };
        });
        return productsList;
      } else {
        console.log('Coleccion vacía !');
      }
    } catch (error) {
      console.error('Error al obtener la coleccion: ', error);
    }
  }
  
  // Agregar una nueva orden de pedido
  export async function sendOrder(order) {
    const ordersCollection = collection(dataBase, 'orders');
    try {
      const docRef = await addDoc(ordersCollection, order);
      return docRef.id;
    } catch (error) {
      console.error('Error al agregar el documento nuevo ', error);
    }
  }
  
  // Actualizar un producto
  export async function updateProduct(id, toUpdate) {
    const itemDocRef = doc(dataBase, 'products', id);
    try {
      await updateDoc(itemDocRef, toUpdate);
      alert('Se actualizo el producto!');
    } catch (error) {
      console.log('Hubo un error al actualizar!', error);
    }
  }
  