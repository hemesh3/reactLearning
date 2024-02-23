import React, { createContext, useContext } from 'react'
import Student from './Student'

export const contextValue = createContext()
const UseContexttask = () =>{
    let userName = 'Hemesh';
    return (
    <>
        <div className="border">
            <h2>Counter Section</h2>
            <contextValue.Provider value={userName}>
                <Student name="Child Component"/>
            </contextValue.Provider>
        </div>
    </>
    );
}

export default UseContexttask;