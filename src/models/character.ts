export default class Character {
  // 1. Typage des propiétés d'un personnage.
 id: number;
 bounty: number;
 age: number;
 name: string;
 type: string;
 picture: string;
 skills: Array<string>;
 createdAt: Date;
  
 // 2. Définition des valeurs par défaut des propriétés d'un personnage.
 constructor(
  id: number,
  bounty: number = 100,
  age: number = 10,
  name: string = 'name',
  type: string = 'Humain',
  picture: string = "https://imgs.search.brave.com/MmqzBUm8k37sW8I7es69kAqo1HubHcYXsNNPZ5rjE9U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c2VyaWVvdXNseS5j/b20vYXBwL3VwbG9h/ZHMvMjAyMy8wNy9q/YWNrLXNwYXJyb3ct/cGlyYXRlcy1kZXMt/Y2FyYWliZXMtMS5q/cGc",
  skills: Array<string> = ['Haki'],
  createdAt: Date = new Date()
 ) {
  // 3. Initialisation des propiétés d'un personnage.
  this.id = id;
  this.bounty = bounty;
  this.age = age;
  this.name = name;
  this.type = type;
  this.picture = picture;
  this.skills = skills;
  this.createdAt = createdAt;
 }
}