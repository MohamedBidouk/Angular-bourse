import { Category } from "./category.model";
export class Student{
    id! : number;
    CIN! : number;
    firstname! : string;
    lastname! : string;
    bacgeneration! : number;
    category! : Category;
}