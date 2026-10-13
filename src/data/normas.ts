/**
 * Normas de las clases.
 *
 * CÓMO AÑADIR UNA NORMA
 * Copia un bloque entero y cambia el texto. Cada norma tiene un título corto
 * y una explicación. El grupo ('grupo') sirve para ordenarlas por bloques.
 *
 * Mientras esta lista esté vacía, la página /normas no aparece en el menú
 * y muestra un aviso de "en preparación". En cuanto añadas la primera norma,
 * el enlace aparece solo en el menú y en el pie de página.
 */

export type Norma = {
  grupo: 'general' | 'seguridad' | 'material' | 'convivencia';
  titulo: string;
  texto: string;
};

export const gruposNormas: { id: Norma['grupo']; label: string }[] = [
  { id: 'general', label: 'Funcionamiento de las clases' },
  { id: 'seguridad', label: 'Seguridad' },
  { id: 'material', label: 'Material' },
  { id: 'convivencia', label: 'Convivencia y respeto' },
];

export const normas: Norma[] = [
  // Ejemplo (borra las dos barras del principio de cada línea para activarlo):
  // {
  //   grupo: 'general',
  //   titulo: 'Puntualidad',
  //   texto: 'Llega unos minutos antes para empezar el calentamiento con el grupo.',
  // },
];
