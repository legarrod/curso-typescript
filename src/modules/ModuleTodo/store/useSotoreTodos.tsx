import create from 'zustand'

export const useSotoreTodos = create((set: any) => {
    const listTodos: any = localStorage.getItem('listTodos');
    return {
        listTodos: JSON.parse(listTodos) || [],
        setListTodos: (nuevoValor: any) => set({listTodos: nuevoValor }),
    };
})

