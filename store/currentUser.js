import { User } from "firebase/auth";
import create from "zustand";

export default useStoreUser = create((set) => ({
     currentUser: User || undefined,
     setCurrentUser: (user) => set({ currentUser: user })
}))