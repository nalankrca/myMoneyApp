import { AuthContext } from "../contex/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw Error('useAuthContext must be inside an AuthContexrProvider')
    }
    return context
};
