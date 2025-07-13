// src/data/coachesData.js

export const coachesData = [
  {
    id: 1,
    name: 'Rebecca',
    title: {
      de: 'Head Coach',
      en: 'Head Coach'
    },
    image: '/assets/coach-1.jpg',
    description: {
      de: 'Trainer mit über 10 Jahren Erfahrung. Spezialisiert auf Olympic Lifting und Mobility. Max gründete Phoenix Athletics mit der Vision, eine unterstützende Fitness-Community aufzubauen.',
      en: 'Trainer with over 10 years of experience. Specialized in Olympic Lifting and Mobility. Max founded Phoenix Athletics with the vision of building a supportive fitness community.'
    },
    certifications: ['CrossFit L3', 'USAW L2', 'Mobility Specialist']
  },
  {
    id: 2,
    name: 'Sabrina',
    title: {
      de: 'Coach & Ernährungsexpertin',
      en: 'Coach & Nutrition Expert'
    },
    image: '/assets/coach-2.jpg',
    description: {
      de: 'Leidenschaftliche Trainerin mit Fokus auf funktionelles Training und Ernährungsberatung. Sarah hilft unseren Mitgliedern, ihre Fitnessziele durch ganzheitliche Betreuung zu erreichen.',
      en: 'Passionate trainer with focus on functional training and nutrition counseling. Sarah helps our members achieve their fitness goals through holistic support.'
    },
    certifications: ['CrossFit L2', 'Nutrition Coach', 'First Aid']
  },
  {
    id: 3,
    name: 'Gexxe',
    title: {
      de: 'Coach & Ausdauer-Spezialist',
      en: 'Coach & Endurance Specialist'
    },
    image: '/assets/coach-3.jpg',
    description: {
      de: 'Ehemaliger Leistungssportler und Lauftraining-Experte. Tom bringt seine Erfahrung aus dem Ausdauersport in unsere Lauf- und Konditionstrainings ein.',
      en: 'Former competitive athlete and running training expert. Tom brings his experience from endurance sports to our running and conditioning training.'
    },
    certifications: ['CrossFit L2', 'Running Coach', 'Sports Science B.Sc.']
  }
];

// If you want to add more coaches, just add them to the array above following this format:
/*
{
  id: 4,
  name: 'Your Name',
  title: {
    de: 'German Title',
    en: 'English Title'
  },
  image: '/assets/coach-4.jpg',
  description: {
    de: 'German description',
    en: 'English description'
  },
  certifications: ['Cert 1', 'Cert 2', 'Cert 3']
}
*/