const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://brncode.github.io/',
  title: '',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Bruno de Oliveira',
  role: 'Cientista de Dados',
  description:
    'Tenho experiência no desenvolvimento de modelos preditivos aplicados à concessão de crédito, séries temporais, análise de churn e Marketing Mix Modeling (MMM). Além disso, tenho conhecimentos intermediários em inglês e espanhol.',
  resume: '/CV_Bruno.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/o-brn/',
    github: 'https://github.com/BrnCode/',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Previsão de Aluguéis de Bicicletas com Séries Temporais',
    description:
      'O objetivo deste projeto é desenvolver um modelo preditivo capaz de estimar o número de bicicletas que serão alugadas',
    stack: ['Python', 'Prophet', 'Matplotlib'],
    sourceCode: 'https://github.com/BrnCode/Previsao_Alugueis_Bicicletas_Series_Temporais',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'SQL',
  'Python',
  'Excel',
  'PowerBI',
  'Flask',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'brn.olives@gmail.com',
}

export { header, about, projects, skills, contact }
