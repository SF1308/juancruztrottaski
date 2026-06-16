type SiteConfig = {
  palette: {
    bg: string;
    primary: string;
    accent: string;
  };

  profile: {
    name: string;
    title: string;
    location: string;
    experience: {
      years: number;
      instructorLevel: string;
    };
    languages: string[];
    highlights: string[];
    certifications: string[];
    contact: {
      whatsapp: string;
      email: string;
      instagram: string;
    };
  };

  hero: {
    subheadline: string;
    ctaPrimary: {
      label: string;
      action: string;
    };
    ctaSecondary: {
      label: string;
      action: string;
    };
  };

  about: {
    bio: string;
    experience: {
      name: string;
      country: string;
      flag: string;
    }[];
  };

  services: {
    title: string;
    description: string;
    duration: string;
    price: number;
    currency: string;
  }[];

  reviews: {
    name: string;
    comment: string;
    photo: string;
    flag: string;
  }[];

  booking: {
    title: string;
    description: string;
  };
};
