import create from 'zustand'

export const useGlobalStore = create((set: any) => {
    return {
        characterList: [],
        setCharacterList: (nuevoValor: any) => set({characterList: nuevoValor }),
    };
})