// src/data/coachesData.js

export const coachesData = [
  {
    id: 1,
    name: 'Rebecca',
    title: {
      de: 'Coach',
      en: 'Coach'
    },
    image: '/assets/coach-1.jpg',
    description: {
      de: 'Sport war schon immer ein wichtiger Bestandteil ihres Lebens. Als Coach möchte sie ihre Begeisterung für die Freude an Bewegung weitergeben, jeden kleinen Fortschritt feiern und vor allem gemeinsam Spaß haben.',
      en: 'Sports have always been an important part of her life. As a coach, she wants to share her enthusiasm for the joy of movement, celebrate every small progress, and above all have fun together.'
    },
    certifications: [
      'CrossFit Level 1',
      'CrossFit Level 2',
      'Fitness B Lizenz',
      'Athletiktrainerin',
      'Personal Trainerin',
      'Ernährungsberaterin'
    ]
  },
  {
    id: 2,
    name: 'Sabrina',
    title: {
      de: 'Coach',
      en: 'Coach'
    },
    image: '/assets/coach-2.jpg',
    description: {
      de: 'Sabrina hat einen Masters Degree in Physiotherapie der Universität von Queensland (Australien) und viel Erfahrung darin, Bewegungsmuster zu analysieren und Verbesserungspotential zu erkennen. Functional Fitness ist seit vier Jahren ihre Leidenschaft - einiges durfte sie von CrossFit-Games-Athleten lernen. Zu coachen ist ihre Leidenschaft und es macht ihr viel Freude, wenn sie anderen helfen kann, ihre Technik zu verbessern.',
      en: 'Sabrina holds a Masters Degree in Physiotherapy from the University of Queensland (Australia) and has extensive experience in analyzing movement patterns and identifying improvement potential. Functional Fitness has been her passion for four years - she had the opportunity to learn from CrossFit Games athletes. Coaching is her passion and she finds great joy in helping others improve their technique.'
    },
    certifications: ['Masters in Physiotherapy - University of Queensland']
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