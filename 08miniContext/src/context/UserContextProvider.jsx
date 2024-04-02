import React from "react";
import UserContext from "./UserContext";

// props ko jo  bhi lena hai usko input leke pass krdo in UserContextProvider
const UserContextProvider = ({children}) => {
    // to provide data to the provider we will import usestate.
    const [user, setUser] = React.useState(null);
    return (
        // kon si value ko access deni hai usko user ke andar pass krna hai...
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;