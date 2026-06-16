import ski1 from "@/assets/ski1.jpg";
import ski2 from "@/assets/ski2.jpg";
import ski3 from "@/assets/ski3.jpg";

export const siteConfig = {
  palette: {
    bg: '#0F172A',
    primary: '#F8FAFC',
    accent: '#38BDF8'
  },
  profile: {
    name: 'Juan Cruz Trotta',
    title: 'Instructor de ski Nivel 3 ISIA',
    location: 'Bariloche Cerro Catedral',
    experience: {
      years: 15,
      instructorLevel: 'Aadidess Nivel 3 ISIA'
    },
    languages: [
      'English',
      'Español',
      'Portugues'
    ],
    highlights: [
      'Clases para todos los niveles',
      'Clases para niños',
      'Clases para adultos',
      'Entrenador de Freeride',
      'Clases de Freestyle',
      'Clases personalizadas',
      'Asesoramiento tecnico'
    ],
    certifications: [
      'Aadidess Nivel 3',
      'Isia Stamp',
      'Aiare 1 + Rescue (Avalanchas)',
      'Entrenador de Freeride IFSA (L100)',
      'First Aid (Andes Capacitacion)'
    ],
    contact: {
      whatsapp: '+5492944290610',
      email: 'trottajuancruz@gmail.com',
      instagram: '@juancruztrottaski'
    }
  },
  hero: {
    subheadline: 'Clases de Ski en Cerro Catedral',
    ctaPrimary: {
      label: 'Reserva tus clases Whatsapp',
      action: 'whatsapp'
    },
    ctaSecondary: {
      label: 'Clases y valores',
      action: 'scroll'
    }
  },
  about: {
    bio: 'Esquiador desde hace más de 20 años, con una amplia experiencia en montaña. Apasionado por los deportes de aventura, como el parapente, el trekking y la escalada en roca, aunque especializado en la enseñanza del esqui desde hace 15 años!\n\nConocimientos y experiencia en enseñanza de diversas disciplinas, incluyendo esquí alpino, freestyle y freeride.',
    experience: [
      {
        name: 'Cerro Catedral',
        country: 'Argentina',
        flag: '🇦🇷'
      },
      {
        name: 'Laderas Cerro Perito Moreno',
        country: 'Argentina',
        flag: '🇦🇷'
      },
      {
        name: 'Grandvalira',
        country: 'Andorra',
        flag: '🇦🇩'
      },
      {
        name: 'Vail',
        country: 'United States',
        flag: '🇺🇸'
      },
      {
        name: 'Beaver creek',
        country: 'United States',
        flag: '🇺🇸'
      },
      {
        name: 'Breckenridge',
        country: 'United States',
        flag: '🇺🇸'
      }
    ]
  },
  services: [
    {
      title: 'Clase Particular Half Day',
      description: 'Clase de medio dia / 9:30 a 12:30 o 13:00 a 16:00 / Capacidad hasta 4 personas / Principiantes, intermedios o Avanzados (segun nivel)',
      duration: '3 horas',
      price: 350,
      currency: 'USD'
    },
    {
      title: 'Clase particular Mini Day',
      description: 'Clase de medio dia / 9:30 a 14:00 / Capacidad hasta 4 personas / Principiantes, intermedios o Avanzados (segun nivel)',
      duration: '4 horas',
      price: 450,
      currency: 'USD'
    },
    {
      title: 'Clase Particular Full day (Recomendado)',
      description: 'Disponibilidad completa del instructor / 9:30 a 16:30 / Capacidad hasta 4 personas / Principiantes, intermedios o Avanzados (segun nivel) / Acompañamiento en rental',
      duration: '7 horas',
      price: 550,
      currency: 'USD'
    }
  ],
  reviews: [
    {
      name: 'Lucía Fernández',
      comment: 'Excelente experiencia: la clase fue personalizada, divertida y muy segura. Aprendí rápido gracias a la paciencia del instructor.',
      photo: ski1,
      alt: 'Before and after de clase de ski',
      flag: '🇦🇷',
    },
    {
      name: 'Mateo Gómez',
      comment: 'La mejor guía para explorar Catedral. Sentí confianza desde el primer minuto y disfruté muchísimo el día.',
      photo: ski2,
      alt: 'Instructor enseñando técnica de esquí',
      flag: '🇦🇷',
    },
    {
      name: 'Sara Martins',
      comment: 'Perfecto para quienes viajan en familia. Las clases fueron adaptadas a nuestro nivel y el servicio fue impecable.',
      photo: ski3,
      alt: 'Familia disfrutando la montaña durante una clase',
      flag: '🇧🇷',
    },
  ],
  booking: {
    mode: 'whatsapp_only'
  }
};
