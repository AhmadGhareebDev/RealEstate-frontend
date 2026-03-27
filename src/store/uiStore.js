import { create } from "zustand";


export const useUiStore = create((set) => ({
    loginRequiredOpen: false ,
    postAuthRedirect: null,



    openLoginRequired: (redirectPath = null) => set({
        loginRequiredOpen: true,
        postAuthRedirect: redirectPath
    }),

    closeLoginRequired: () => set({
        loginRequiredOpen: false,
        postAuthRedirect: null
    })
}))