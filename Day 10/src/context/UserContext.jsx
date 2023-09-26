import { createContext } from "react";


const UserContext=createContext();

export const useUser=() =>{
    return useContext(UserContext);
}

export const userProvider=({children}) =>{
    const[isUserLoggedIn, setIsUserLoggedIn]=useState(false);
}

const login=()=>{
    setIsUserLoggedIn(true);

}
const logout=()=>{
    setIsUserLoggedIn(false);
}

const userValue=useMemo(()=>(
    {
        isUserLoggedIn,login,logout
    }
),[]);

return(
    <UserContext.Provider value={userValue}>
    {children}
    </UserContext.Provider>
)