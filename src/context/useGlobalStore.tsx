export interface Direcciones {
  dir1: string;
  dir2: number;
}

interface Persona {
  nombre: string;
  edad: number;
  direciones: Direcciones;
}

const useGlobalStore = () => {
  const crearUsuario = (datoUsuario: Persona) => {
    console.log(datoUsuario);
  };

  const personaAObtener = {
    nombre: 'camilo',
    edad: 23,
    direciones: { dir1: 'centro', dir2: 23 },
  };

  crearUsuario(personaAObtener);

  const name: string = 'Luis';
  const age: number = 37;
  const isMayor: boolean = false;
  const qty: (string | number)[] = ['horas', 'area', '...', 23];
  const qtyCopy: any = ['horas', 'area', '...', 23];
  const address: {} = { dire1: 'en la ezquina', dir2: 'dos cuadras mas abajo' };
  const miDireccion: Direcciones = {
    dir1: 'Cerca al estadio',
    dir2: 2345.4,
  };

  return { name };
};

export default useGlobalStore;
