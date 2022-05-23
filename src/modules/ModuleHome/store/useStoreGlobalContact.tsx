import create from 'zustand'

export const useStoreGlobalContact = create((set: any) => {
    return {
        numero1: 0,
        setNumero1: (nuevoValor: any) => set({numero1: nuevoValor }),
        numero2: 0,
        setNumero2: (nuevoValor: any) => set({numero2: nuevoValor }),
        sumando: 0,
        setSumando: (nuevoValor: any) => set({sumando: nuevoValor }),
        result: 0,
        setresult: (nuevoValor: any) => set({result: nuevoValor }),
        resultTotal: 0,
        setresultTotal: (nuevoValor: any) => set({resultTotal: nuevoValor }),
    };
})