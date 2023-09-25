export default class Character {
  // 1. Typage des propiétés d'un personnage.
 id: number;
 hp: number;
 cp: number;
 name: string;
 picture: string;
 powers: Array<string>;
 createdAt: Date;
  
 // 2. Définition des valeurs par défaut des propriétés d'un personnage.
 constructor(
  id: number,
  hp: number = 100,
  cp: number = 10,
  name: string = 'name',
  picture: string = 'http://...',
  powers: Array<string> = ['Haki'],
  createdAt: Date = new Date()
 ) {
  // 3. Initialisation des propiétés d'un personnage.
  this.id = id;
  this.hp = hp;
  this.cp = cp;
  this.name = name;
  this.picture = picture;
  this.powers = powers;
  this.createdAt = createdAt;
 }
}