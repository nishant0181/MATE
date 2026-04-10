const localNotes = [
  {
    id: "mathematics-1",
    title: "Mathematics 1",
    description: "Comprehensive notes on calculus and algebra",
    subject: "Mathematics",
    semester: "1",
    branch: "all",
    university: "GTU",
    files: [
      {
        fileId: "maths-1-syllabus",
        title: "Syllabus",
        description: "Comprehensive notes on calculus and algebra",
        tag: "Syllabus",
        pages: 2,
        url: "https://cdn.jsdelivr.net/gh/nishant0181/MATE-Notes-Storage@main/sem1/BE01000021.pdf"
      },
      {
        fileId: "maths-1-notes",
        title: "Subject Notes",
        description: "Comprehensive notes on calculus and algebra",
        tag: "Notes",
        pages: 45,
        url: "https://cdn.jsdelivr.net/gh/nishant0181/MATE-Notes-Storage@main/sem1/engineering-maths-unit1.pdf",
      }
    ]
  },
  {
    id: "mathematics-2",
    title: "Mathematics 2",
    description: "Comprehensive notes on differential equations and linear algebra",
    subject: "Mathematics",
    semester: "2",
    branch: "all",
    university: "GTU",
    files: [
      {
        fileId: "maths-2-notes",
        title: "Subject Notes",
        description: "Comprehensive notes on differential equations and linear algebra",
        tag: "Notes",
        pages: 45,
        url: "https://cdn.jsdelivr.net/gh/nishant0181/MATE-Notes-Storage@main/sem1/BE01000021.pdf",
      }
    ]
  },
  {
    id: "fai-1",
    title: "FAI",
    description: "Detailed notes on mechanics and thermodynamics",
    subject: "FAI",
    semester: "1-2",
    branch: "all",
    university: "GTU",
    files: [
      {
        fileId: "fai-1-notes",
        title: "Subject Notes",
        description: "Detailed notes on mechanics and thermodynamics",
        tag: "Notes",
        pages: 50,
        url: "https://example.com/physics1-notes",
      }
    ]
  },
  {
    id: "physics-3",
    title: "Physics 3",
    description: "Detailed notes on mechanics and thermodynamics",
    subject: "Physics",
    semester: "2",
    branch: "AIML",
    university: "GTU",
    files: [
      {
        fileId: "physics-3-notes",
        title: "Subject Notes",
        description: "Detailed notes on mechanics and thermodynamics",
        tag: "Notes",
        pages: 50,
        url: "https://example.com/physics2-notes",
      }
    ]
  },
  {
    id: "physics-4",
    title: "Physics 4",
    description: "Detailed notes on mechanics and thermodynamics",
    subject: "Physics",
    semester: "3",
    branch: "RA",
    university: "GTU",
    files: [
      {
        fileId: "physics-4-notes",
        title: "Subject Notes",
        description: "Detailed notes on mechanics and thermodynamics",
        tag: "Notes",
        pages: 50,
        url: "https://example.com/physics3-notes",
      }
    ]
  },
  {
    id: "physics-5",
    title: "Physics 5",
    description: "Detailed notes on mechanics and thermodynamics",
    subject: "Physics",
    semester: "4",
    branch: "EE",
    university: "GTU",
    files: [
      {
        fileId: "physics-5-notes",
        title: "Subject Notes",
        description: "Detailed notes on mechanics and thermodynamics",
        tag: "Notes",
        pages: 50,
        url: "https://example.com/physics4-notes",
      }
    ]
  },
  {
    id: "physics-6",
    title: "Physics 6",
    description: "Detailed notes on mechanics and thermodynamics",
    subject: "Physics",
    semester: "5",
    branch: "EE",
    university: "GTU",
    files: [
      {
        fileId: "physics-6-notes",
        title: "Subject Notes",
        description: "Detailed notes on mechanics and thermodynamics",
        tag: "Notes",
        pages: 50,
        url: "https://example.com/physics5-notes",
      }
    ]
  },
  {
    id: "physics-7",
    title: "Physics 7",
    description: "Detailed notes on mechanics and thermodynamics",
    subject: "Physics",
    semester: "6",
    branch: "EE",
    university: "GTU",
    files: [
      {
        fileId: "physics-7-notes",
        title: "Subject Notes",
        description: "Detailed notes on mechanics and thermodynamics",
        tag: "Notes",
        pages: 50,
        url: "https://example.com/physics6-notes",
      }
    ]
  },
  {
    id: "physics-8",
    title: "Physics 8",
    description: "Detailed notes on mechanics and thermodynamics",
    subject: "Physics",
    semester: "7",
    branch: "EE",
    university: "GTU",
    files: [
      {
        fileId: "physics-8-notes",
        title: "Subject Notes",
        description: "Detailed notes on mechanics and thermodynamics",
        tag: "Notes",
        pages: 50,
        url: "https://example.com/physics7-notes",
      }
    ]
  }
];

export function getLocalNotes() {
  return localNotes;
}