
import { Payload} from "./Payload";
import { Astronaut } from "./Astronaut";
import {Cargo} from "./Cargo";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[]=[];
    astronauts :Astronaut[]=[];

    constructor(name:string, totalCapacityKg: number){
        this.name= name;
        this.totalCapacityKg= totalCapacityKg;
    }

    sumMass (items:Payload[]): number {
        let sum:number = 0;
        for(let i: number = 0; i<items.length; i++){
            sum += items[i].massKg;
        //for(let item of items){
            //sum +=item.massCargo;
        //}
        }
        return sum;

    }
       
    currentMassKg(): number {
        //not correct =>return this.sumMass(this.astronauts)+this.sumMass(this.cargoItems);
        let total: number = 0;
        total += this.sumMass(this.astronauts);
        total += this.sumMass(this.cargoItems);

        return total;    
    }

    canAdd(item: Payload): boolean{
         return this.currentMassKg() + item.massKg <= this.totalCapacityKg ;
        

    }

    addCargo(cargo:Cargo): boolean{
        if (this.canAdd(this.cargoItems.massKg) === true){
            return true;
        }else{
            return false;
        }
    }








}