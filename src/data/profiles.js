// src/data/profiles.js
const profiles = [
  {
    id: '1',
    name: 'Md Afzal',
    profilePhotoUrl: '/media/images/avatar.jpeg', // Placeholder image
    avatarFallbackText: 'MD',
    skillsOffered: ['JavaScript', 'C++', 'DSA'],
    skillsWanted: ['Photoshop', 'Graphic designer'],
    rating: '3.9/5',
  },
  {
    id: '2',
    name: 'Alice Wonderland',
    profilePhotoUrl: 'https://placehold.co/100x100/FF5733/FFFFFF?text=AW',
    avatarFallbackText: 'AW',
    skillsOffered: ['React', 'Node.js'],
    skillsWanted: ['UI/UX Design', 'Figma'],
    rating: '4.5/5',
  },
  {
    id: '3',
    name: 'Bob The Builder',
    profilePhotoUrl: 'https://placehold.co/100x100/33FF57/FFFFFF?text=BB',
    avatarFallbackText: 'BB',
    skillsOffered: ['Project Management', 'Construction'],
    skillsWanted: ['AutoCAD', 'Architecture'],
    rating: '4.1/5',
  },
];

export default profiles;