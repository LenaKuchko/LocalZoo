export class Animal {
  currentDate = new Date();
  admittionDate: string = (this.currentDate.getMonth() + 1).toString() + "/" + (this.currentDate.getDate()).toString() + "/" + (this.currentDate.getFullYear()).toString();
  constructor(public name: string, public species: string, public age: number, public diet: string, public zooLocation: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string){}
}
