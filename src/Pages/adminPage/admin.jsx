import { seconddatabase } from "../../FirebaseConfig";
import { collection,
    getDoc,
    getDocs,
    addDoc,
    updateDoc, 
    deleteDoc,
    doc } from "firebase/firestore";


    const adminCollectionRef = collection(seconddatabase, "admin");
    class AdminServer {
        addName = (name) => {
            return addDoc(adminCollectionRef, name);
        };
        updateName = (id, updatename) => {
            const docRef = doc(seconddatabase, "admin", id);
            return updateDoc(docRef, updatename);
        };
        deleteName = (id) => {
            const docRef = doc(seconddatabase, "admin", id);
            return deleteDoc(docRef);
        };
        getNames = () => {
            return getDocs(adminCollectionRef);
        };
        getName = (id) => {
            const docRef = doc(seconddatabase, "admin", id);
            return getDoc(docRef);
        };
    }

    export default new AdminServer();

