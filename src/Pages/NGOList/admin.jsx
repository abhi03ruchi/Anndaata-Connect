import { database } from "../../FirebaseConfig";
import { collection,
    getDoc,
    getDocs,
    addDoc,
    updateDoc, 
    deleteDoc,
    doc } from "firebase/firestore";


    const adminCollectionRef = collection(database, "ngoAdmin");
    class AdminServer {
        addName = (name) => {
            return addDoc(adminCollectionRef, name);
        };
        updateName = (id, updatename) => {
            const docRef = doc(database, "ngoAdmin", id);
            return updateDoc(docRef, updatename);
        };
        deleteName = (id) => {
            const docRef = doc(database, "ngoAdmin", id);
            return deleteDoc(docRef);
        };
        getNames = () => {
            return getDocs(adminCollectionRef);
        };
        getName = (id) => {
            const docRef = doc(database, "ngoAdmin", id);
            return getDoc(docRef);
        };
    }

    export default new AdminServer();

