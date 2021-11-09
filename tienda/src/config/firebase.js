import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  getDocs,
  getDoc,
  query,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3h9mRq9stJ3Q61-UYbhXa66y-2tU26u8",
  authDomain: "lista-tareas-dbc26.firebaseapp.com",
  projectId: "lista-tareas-dbc26",
  storageBucket: "lista-tareas-dbc26.appspot.com",
  messagingSenderId: "946927868760",
  appId: "1:946927868760:web:8f28dce7e9cfcfdfae232d",
  measurementId: "G-8SGQ9TSWLW"
};

initializeApp(firebaseConfig);
const database = getFirestore();

// Guardar
export const guardarDatabase = async (nombreDatabase, data) => {
  try {
    const response = await addDoc(collection(database, nombreDatabase), data);
    console.log(response);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Consultar todos los documentos (Coleccion)
export const consultarDatabase = async (nombreDatabase) => {
  try {
    const response = await getDocs(query(collection(database, nombreDatabase)));
    const elementos = response.docs.map((doc) => {
      const document = {
        id: doc.id,
        ...doc.data(),
      };
      return document;
    });
    console.log(elementos);
    return elementos;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Consultar un documento
export const consultarDocumentoDatabase = async (nombreDatabase, id) => {
  try {
    const response = await getDoc(doc(database, nombreDatabase, id));
    const document = {
      id: response.id,
      ...response.data(),
    };
    return document;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Actualizar un documento
export const actualizarDocumentoDatabase = async (nombreDatabase, id, data) => {
  try {
    const response = await updateDoc(doc(database, nombreDatabase, id), data);
    console.log(response);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Eliminar un documento
export const eliminarDocumentoDatabase = async (nombreDatabase, id) => {
  try {
    const response = await deleteDoc(doc(database, nombreDatabase, id));
    console.log(response);
  } catch (error) {
    throw new Error(error.message);
  }
};
