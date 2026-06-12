export const siteConfig = {
  palette: {
    "bg": "#0f172a",
    "primary": "#f8fafc",
    "accent": "#fde047" // Un amarillo más "Saul"
  },
  profile: {
    name: "Saul Goodman",
    title: "Instructor de Esquí (y Asesor Legal de Montaña)",
    location: "Albuquerque Ski Crest / Andorra",
    experience: {
      years: 15,
      instructorLevel: "Nivel 3 - Certificado por la 'Barra' de Instructores"
    },
    languages: ["Español", "Inglés", "Lenguaje de señas para evitar multas"],
    highlights: [
      "¿Problemas con el paralelo? ¡Mejor llama a Saul!",
      "Especialista en 'desaparecer' en la nieve polvo",
      "Experto en encontrar los mejores atajos de la montaña"
    ],
    certifications: [
      "Máster en Descenso por la Universidad de Samoa Americana",
      "Certificación en Evasión de Obstáculos y Patrullas",
      "Protocolo de Emergencias 'S'all Good, Man'"
    ],
    contact: {
      whatsapp: "+34555555555",
      email: "saul@lawyerski.com",
      instagram: "@bettercallsaul_ski"
    }
  },
  hero: {
    subheadline: "No dejes que una mala técnica te mande a juicio. ¡Aprende a esquiar como un profesional!",
    ctaPrimary: {
      label: "¡Llama a Saul ahora!",
      action: "whatsapp" as const,
    },
    ctaSecondary: {
      label: "Ver mis 'coartadas'",
      action: "scroll" as const,
    },
    whatsapp: "+34555555555",
  },
  about: {
    bio: "Soy Saul Goodman, y estoy aquí para decirte que, legalmente, cualquiera puede esquiar, ¡pero solo conmigo lo harás sin romperte una pierna! He pasado temporadas en los lugares más remotos, desde los Andes hasta los Pirineos, perfeccionando el arte de la persuasión gravitacional.",
    experience: [
      {
        name: "Grandvalira",
        country: "Andorra",
        flag: "🇦🇩"
      },
      {
        name: "Las Leñas",
        country: "Argentina",
        flag: "🇦🇷"
      },
      {
        name: "Portillo",
        country: "Chile",
        flag: "🇨🇱"
      },
      {
        name: "Taos Ski Valley",
        country: "United States",
        flag: "🇺🇸"
      }
    ]
  },
  services: [
    {
      "title": "La 'Coartada' de Iniciación",
      "description": "Si nunca te has puesto unos esquís, yo te doy la mejor defensa. Posición básica y frenado antes de que la patrulla te vea.",
      "price": 50,
      "currency": "EUR",
      "duration": "1 hora"
    },
    {
      "title": "Lavado de Técnica (Carving)",
      "description": "Limpiamos esos giros sucios. Perfeccionamiento en pista para que parezca que naciste con las tablas puestas.",
      "price": 150,
      "currency": "EUR",
      "duration": "3 horas"
    },
    {
      "title": "Operación Fuera de Pista",
      "description": "Para los que buscan el anonimato en la nieve virgen. Guía experto en terrenos donde nadie te encontrará.",
      "price": 300,
      "currency": "EUR",
      "duration": "Jornada completa"
    },
    {
      "title": "Clase VIP 'Protección de Testigos'",
      "description": "Esquía sin ser visto. Un recorrido por las zonas más exclusivas y menos concurridas de la estación.",
      "price": 450,
      "currency": "EUR",
      "duration": "Jornada completa"
    },
    {
      "title": "Workshop de Seguridad y 'Leyes' de Montaña",
      "description": "Cómo evitar accidentes y qué hacer cuando las cosas se ponen feas. Uso de ARVA y protocolos de rescate.",
      "price": 120,
      "currency": "EUR",
      "duration": "2.5 horas"
    },
    {
      "title": "Entrenamiento para Clientes Difíciles",
      "description": "¿Eres un caso perdido? Yo te hago esquiar. Resultados garantizados o te devuelvo el 10% (menos mis honorarios).",
      "price": 200,
      "currency": "EUR",
      "duration": "3 horas"
    }
  ],
  booking: {
    mode: "school_and_whatsapp" as const,
    school: {
      name: "H&M Ski Associates",
      url: "https://www.bettercallsaul.com",
    },
    whatsapp: "+34555555555",
  },
};
