import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Personajes } from '../interfaces/personajes.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getPersonajes(): Observable<Personajes[]> {
    const personajesRef = collection(this.firestore, 'personajes');
    return collectionData(personajesRef, { idField: 'id'}) as Observable<Personajes[]>;
  }

  getPersonajeById(id: any): Observable<Personajes> {
    const PersonajesDocRef = doc(this.firestore, `personajes/${id}`);
    return docData(PersonajesDocRef, { idField: 'id' }) as Observable<Personajes>;
  }

  addPersonaje(personaje: Personajes) {
    const personajesRef = collection(this.firestore, 'personajes');
    return addDoc(personajesRef, personaje);
  }

  deletePersonaje(personaje: Personajes) {
    const PersonajesDocRef = doc(this.firestore, `personajes/${personaje.id}`);
    return deleteDoc(PersonajesDocRef);
  }

  updatePersonaje(personaje: Personajes) {
    const PersonajesDocRef = doc(this.firestore, `personajes/${personaje.id}`);
    return updateDoc(PersonajesDocRef, { name: personaje.name, lastname: personaje.lastname, img: personaje.img });
  }
}