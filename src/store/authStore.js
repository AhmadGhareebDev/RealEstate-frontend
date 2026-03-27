import { create } from "zustand";

export const useAuthStore = create((set) => ({
    status: 'unknown',
    accessToken: null,
    user: null,

    setSession: ({accessToken , user}) => set({
        accessToken,
        user,
        status: 'authenticated'
    }),

    clearSession: () => set({
        accessToken: null,
        user: null,
        status: 'unauthenticated'
    })

    
}))