import { database } from "../../FirebaseConfig";
import { collection,
    getDoc,
    getDocs,
    addDoc,
    updateDoc, 
    deleteDoc,
    doc } from "firebase/firestore";


    const adminCollectionRef = collection(database, "deliveryInfo");
    class AdminServer {
        addName = (name) => {
            return addDoc(adminCollectionRef, name);
        };
        updateName = (id, updatename) => {
            const docRef = doc(database, "deliveryInfo", id);
            return updateDoc(docRef, updatename);
        };
        deleteName = (id) => {
            const docRef = doc(database, "deliveryInfo", id);
            return deleteDoc(docRef);
        };
        getNames = () => {
            return getDocs(adminCollectionRef);
        };
        getName = (id) => {
            const docRef = doc(database, "deliveryInfo", id);
            return getDoc(docRef);
        };
    }

    export default new AdminServer();

