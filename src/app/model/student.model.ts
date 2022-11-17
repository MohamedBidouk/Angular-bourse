import { Category } from "./category.model";
export class Student{
    id! : number;
    cin! : number;
    firstName! : string;
    lastName! : string;
    bacGeneration! : number;
    category! : Category;
}