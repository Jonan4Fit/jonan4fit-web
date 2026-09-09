/**
 * Configuración global del sitio: identidad, contacto y ubicación.
 * Cambia aquí el número de WhatsApp cuando lo tengas definitivo.
 */

export const site = {
  // Marca de la web (header, footer, metadatos, Open Graph, título de las pestañas).
  brandName: 'Jonan4Fit',
  // Nombre de la persona, usado solo cuando se habla de él (Sobre mí, mensajes de WhatsApp).
  personName: 'Jonan',
  description:
    'Clases de escalada en Valencia para adultos y niños, clases particulares y entrenamiento online personalizado de fuerza y escalada con seguimiento en TrainingPeaks.',
  // Actualiza esta URL cuando conectes tu dominio propio (ver README, sección "Dominio propio").
  url: 'https://jonan4fit.pages.dev',
  locale: 'es-ES',
  themeColor: '#1c1917',
};

export const contact = {
  whatsappNumber: '34633883356',
  whatsappDisplayLabel: 'Escríbenos por WhatsApp',
};

export function whatsappLink(message: string): string {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  generico: 'Hola Jonan, he visto tu web y me gustaría más información.',
  clasesAdultos:
    'Hola Jonan, he visto la información de las clases de adultos y me gustaría informarme.',
  clasesInfantil:
    'Hola Jonan, me interesan las clases infantiles y me gustaría más información.',
  particulares:
    'Hola Jonan, me interesan las clases particulares y me gustaría más información.',
  entrenamientoOnline:
    'Hola Jonan, he visto el entrenamiento online de escalada y me gustaría recibir más información.',
  entrenamientoFuerza:
    'Hola Jonan, me interesa el entrenamiento online de fuerza y movilidad.',
  entrenamientoEscalada:
    'Hola Jonan, me interesa el entrenamiento online de escalada.',
  entrenamientoPack:
    'Hola Jonan, me interesa el pack de fuerza + escalada.',
  nutricion: 'Hola Jonan, me interesa la nutrición con INDYA y me gustaría más información.',
  contacto: 'Hola Jonan, te escribo desde la web para consultarte una cosa.',
};

export const location = {
  businessName: 'Vuit Climbing Club',
  street: 'Calle del Dr. Rafael Bartual, 2',
  postalCode: '46014',
  city: 'Valencia',
  region: 'Comunitat Valenciana',
  country: 'ES',
  mapsQuery: 'Vuit+Climbing+Club+Calle+del+Dr+Rafael+Bartual+2+46014+Valencia',
};

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${location.mapsQuery}`;
