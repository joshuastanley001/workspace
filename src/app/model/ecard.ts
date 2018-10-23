import {Recipient} from "./recipient";
import {Sender} from "./sender";

export class Ecard {

  cardStyleId:string;
  message:string;
  messageFont:string;
  messageFontSize:number;
  recipientList:Recipient[];
  sender:Sender;
  }

module Page {

  export enum State {
    Cover,
    Inside,
    Back
  }
}
