import { Form } from "@angular/forms";
import { User } from "./user";


export class Commentaire{
  id: number;
  description: string;
  dateCreate: Date;
  dateUpdate: Date;
  user: User;
  forum: Form
}
