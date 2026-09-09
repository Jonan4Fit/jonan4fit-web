/**
 * Preguntas frecuentes. Contenido basado en la base de conocimientos del negocio.
 * category se usa para agrupar visualmente en /faq.
 */

export type FaqItem = {
  question: string;
  answer: string;
  category: 'clases' | 'particulares' | 'online' | 'nutricion' | 'general';
};

export const faqItems: FaqItem[] = [
  {
    category: 'clases',
    question: '¿Hace falta experiencia previa para las clases?',
    answer:
      'No. Las clases se adaptan al nivel de cada grupo y se puede empezar sin experiencia previa en escalada.',
  },
  {
    category: 'clases',
    question: '¿Hay clase de prueba?',
    answer:
      'No hay clase de prueba. Si decides apuntarte y se confirma tu plaza, se te facilita un formulario para adelantar tus datos. El primer día hay que llegar unos 5 minutos antes para completar la inscripción y firmar en la tablet del centro.',
  },
  {
    category: 'clases',
    question: '¿Qué material necesito para empezar?',
    answer:
      'Ropa deportiva, pies de gato y magnesio. En las clases de adultos también puede ser útil un reloj o el móvil para algunos ejercicios cronometrados.',
  },
  {
    category: 'clases',
    question: '¿Cómo funciona la inscripción?',
    answer:
      'Se completa el primer día desde la tablet del centro, donde se firman los documentos de normas y adhesión. Antes de confirmar el grupo se piden algunos datos básicos (nombre, si es clase de adultos o infantil, horario preferido y experiencia); esa recogida de datos no confirma por sí sola una plaza, la disponibilidad la confirma Jonan.',
  },
  {
    category: 'clases',
    question: '¿Puedo recuperar una clase si falto?',
    answer:
      'Una ausencia personal no genera recuperación automática ni cambia el calendario general. Cualquier excepción debe consultarse y confirmarse directamente.',
  },
  {
    category: 'clases',
    question: '¿Cuál es la diferencia entre socio y no socio?',
    answer:
      'La modalidad de socio incluye la mensualidad de socio del club más las clases. La modalidad de no socio incluye solo las clases. Los precios de cada una están en la página de Clases presenciales.',
  },
  {
    category: 'particulares',
    question: '¿Cómo funcionan las clases particulares?',
    answer:
      'Son sesiones para 1, 2 o 3 personas con horario y contenido flexible según lo que necesites. Se cobran por persona y hora, con la opción de sesión suelta o bono de 4 horas por participante a un precio reducido. La duración exacta (1h, 1h30, 2h u otra) se acuerda según disponibilidad.',
  },
  {
    category: 'particulares',
    question: '¿Cuándo tiene más sentido una particular que una clase grupal?',
    answer:
      'Cuando buscas atención totalmente individual, quieres trabajar una dificultad técnica concreta, prefieres un horario a medida o quieres entrenar en pareja o con dos amigos más sin ajustarte al ritmo de un grupo.',
  },
  {
    category: 'online',
    question: '¿Puedo entrenar online si vivo lejos de Valencia?',
    answer:
      'Sí. El entrenamiento online no requiere asistir a las clases grupales de Vuit Climbing Club. Puedes entrenar en otro rocódromo, en un gimnasio o desde otra ciudad; la planificación se adapta a tu material y a tu lugar de entrenamiento.',
  },
  {
    category: 'online',
    question: '¿Cómo funciona el seguimiento con TrainingPeaks?',
    answer:
      'Tras el onboarding inicial recibes acceso a TrainingPeaks por email y consultas tu calendario de sesiones desde la aplicación. Después de cada entrenamiento registras los datos reales (pesos, repeticiones, RPE, sensaciones) y los comentarios de cada sesión son el canal principal para dudas y ajustes. El tiempo de respuesta habitual es de 24-48 horas laborables.',
  },
  {
    category: 'online',
    question: '¿Hay permanencia en el entrenamiento online?',
    answer:
      'No hay permanencia. Para cancelar basta con avisar antes de la renovación correspondiente. Si tienes una semana mala, viaje, estrés o cambios de horario, se puede ajustar la planificación si lo comunicas.',
  },
  {
    category: 'online',
    question: '¿Los resultados están garantizados?',
    answer:
      'No. La planificación se individualiza según tu nivel, objetivos, disponibilidad y material, y se ajusta con el seguimiento en TrainingPeaks, pero ningún entrenamiento puede garantizar un resultado concreto.',
  },
  {
    category: 'nutricion',
    question: '¿Cómo funciona la nutrición con INDYA?',
    answer:
      'INDYA es un servicio de nutrición con el que Jonan colabora. La modalidad sin nutricionista ofrece planificación en la app (calorías, macronutrientes, recetas, lista de la compra e informes) sin seguimiento individual de un profesional. La modalidad con nutricionista añade contacto por chat, primera consulta online y revisiones mensuales con un nutricionista.',
  },
  {
    category: 'nutricion',
    question: '¿Jonan actúa como nutricionista?',
    answer:
      'No. Jonan no es nutricionista. La parte nutricional se presta a través de INDYA y sus profesionales cuando la modalidad contratada lo incluye.',
  },
  {
    category: 'general',
    question: '¿Tengo una lesión o molestia, puede Jonan tratarla?',
    answer:
      'No se ofrece diagnóstico, tratamiento ni rehabilitación clínica. El entrenamiento puede adaptarse dentro del ámbito de la preparación física, pero la valoración de una lesión o dolor corresponde siempre a un profesional sanitario.',
  },
];
