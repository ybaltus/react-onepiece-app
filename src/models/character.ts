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
  picture: string = 'http://...',
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