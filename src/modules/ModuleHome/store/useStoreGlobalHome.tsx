import create from 'zustand'

export const useStoreGlobalHome = create((set: any) => {
    const day = new Date(Date.now())
    const dataUser: any = localStorage.getItem('data_temp');
    return {
        userName: "Juan",
        setUserName: (nuevoValor: any) => set({userName: nuevoValor }),
        estatura: 0,
        setEstatura: (nuevoValor: any) => set({estatura: nuevoValor }),
        direccion: 0,
        setdireccion: (nuevoValor: any) => set({direccion: nuevoValor }),
        hoy: day,
        showResults: false,
        setShowResults: (nuevoValor: any) => set({showResults: nuevoValor }),
    };
})