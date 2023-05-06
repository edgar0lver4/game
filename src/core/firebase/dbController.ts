import { getFirestore, addDoc, collection } from "firebase/firestore";
import { firebase } from "./config";
export type GuestType = {
  name: string;
  tickets: number;
};
class DBController {
  private db;
  private error: any;
  constructor() {
    this.db = getFirestore(firebase);
  }
  public async addNewGuest(guest: GuestType) {
    try {
      const ref = await addDoc(collection(this.db, "guests"), {
        name: guest.name,
        tickets: guest.tickets,
        creationDate: new Date(),
      });
      if (ref) {
        localStorage.setItem("guestId", ref.id);
        return true;
      }
      this.error = "Error desconocido";
      return false;
    } catch (error: any) {
      this.error = error.message;
      return false;
    }
  }
  public getErrors() {
    return this.error;
  }
}

export default DBController;
