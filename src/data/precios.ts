/**
 * Fuente única de todos los precios del negocio.
 * Cambia un importe aquí y se actualiza en todas las páginas que lo usan.
 * Datos según la base operativa v3 (08/09/2026). No inventar tarifas fuera de este archivo.
 */

export const clasesAdultos = {
  formato: '2 clases por semana de 1 hora y 30 minutos cada una',
  modalidades: [
    { nombre: 'Socios', precioMes: 55, incluye: 'Mensualidad de socio + clases' },
    { nombre: 'No socios', precioMes: 40, incluye: 'Solo clases' },
  ],
  nota: 'La mensualidad es una tarifa de grupo. El número real de clases depende del calendario y puede haber meses con aproximadamente 6, 7, 8, 9 o 10 sesiones.',
};

export const clasesInfantiles = {
  grupos: [
    {
      edad: '10-11 años',
      dia: 'Viernes',
      horario: '17:30–19:00',
      duracion: '1 hora y media',
      precioMes: 35,
    },
  ],
  nota: 'La asignación a un grupo depende de la edad, el nivel y las plazas disponibles. Para otras edades, consulta directamente para que Jonan te indique el grupo disponible.',
};

export const particulares = {
  // Importes por persona y hora.
  porPersonaHora: {
    suelta: { 1: 28, 2: 22, 3: 18 },
    bono: { 1: 23, 2: 17, 3: 13 },
  },
  bono4h: { 1: 92, 2: 68, 3: 52 },
  descuentoBonoPorHora: 5,
  // Importes totales por sesión suelta según duración y nº de participantes.
  sesionSuelta: {
    '1h': { 1: 28, 2: 22, 3: 18 },
    '1.5h': { 1: 42, 2: 33, 3: 27 },
    '2h': { 1: 56, 2: 44, 3: 36 },
  },
  bonoCompletoGrupo: { pareja: 136, trio: 156 },
};

export const entrenamientoOnline = {
  fuerza: { precioMes: 50, nombre: 'Fuerza y movilidad' },
  escalada: { precioMes: 50, nombre: 'Escalada' },
  pack: { precioMes: 80, nombre: 'Fuerza + escalada' },
};

export const nutricion = {
  indyaSinNutricionista: { precioMes: 15, nombre: 'INDYA sin nutricionista' },
  indyaConNutricionista: { precioMes: 40, nombre: 'INDYA con nutricionista' },
  entrenamientoIndyaSinNutricionista: {
    precioMes: 60,
    nombre: 'Entrenamiento + INDYA sin nutricionista',
  },
  entrenamientoIndyaConNutricionista: {
    precioMes: 85,
    nombre: 'Entrenamiento + INDYA con nutricionista',
  },
};

export function formatEuros(valor: number): string {
  return `${valor.toString().replace('.', ',')} €`;
}
