import create from 'zustand'

export const useStoreNavbar = create((set: any) => {
    return {
        collapsed: false,
        setCollapsed: (nuevoValor: any) => set({collapsed: nuevoValor }),
     
    };
})