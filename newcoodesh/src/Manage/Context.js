import React from 'react'

const Manageallusers =  React.createContext({allusers: [],
    updatingpeople: (id) => null})

export const ManageProvides = Manageallusers.Provider
export default Manageallusers