import React from 'react'

const GlobalContext = React.createContext({})

export const Provider = GlobalContext.Provider
export const Consumer = GlobalContext.Consumer
export default GlobalContext

export const langData = {
  'en-US': {
  	aboutme: {
  		about: 'About me',
  		title: 'WHO AM I?',
  		intro: "Im a computer science grad student from Facultad de Ciencias Exactas y Naturales, UBA. I love exploring new technologies that allow me to solve diferent problems!",
  		skills: "As a CS student, I have a good grasp in terms of data structures, algorithms, databases (SQL and non-SQL), design patterns, OOP, testing, etc.",
  		whatIDo: 'What do I do?',
  		solve: "I also do personal projects to learn new tools and solve problems I encounter either at university or in my everyday life. For example, being a person with diabetes means that not only I have to pay extra attention to what I eat, I also have to monitor my blood sugar levels throughout the day.",
  		projectTitle: "PROJECTS",
  		myProjects: "To make this process easier, I decided to implement the following projects:",
  		projectAPI: "A python (flask) Web API that allows users to document and retrieve their glucose measurements, and also generate a spreadsheet with all gathered data in a certain period.",
  		projectMobile: "An android mobile app that allows users to easily log any data needed, such as blood sugar, amount of carbs in a meal, insulin doses administered, etc.",
  		projectWeb:"This web page to showcase projects and document current and future objectives for each one.",
	},
	sidebar:{
		intro:"INTRODUCTION",
		about:"ABOUT",
		timeline:"TIMELINE",
	},
	timeline:{
		title1:'Computer Science at Facultad de Ciencias Exactas, UBA',
		description1:"Remaining: 3 Opt + Tesis - Currently: Deep Neural Networks (Deep Learning)",
		time1:"2009 - Present",
		title2:'Escuela Técnica N 21 D.E.10 “Fragata Escuela Libertad”',
		description2:"Getting Computer technician title. During my time at school I enjoyed math and and programming clases, which led me to study CS in University.",
		time2:"2003 - 2008",
	},
  },
  'es-ES': {
  	aboutme: {
  		about: 'Sobre mi',
  		title: 'QUIEN SOY?',
  		intro: "Soy un estudiante de Ciencias de la computación de la Facultad de Ciencias Exactas y Naturales, UBA. Me gusta aprender nuevas tecnologias para resolver distintos problemas!",
  		skills: "Como estudiante de ciencias de la computación, tengo un buen conocimiento de algoritmos, estructuras de datos, bases de datos (relacionales y no relacionales), patrones de diseño, programación orientada a objetos, testing, etc.",
  		whatIDo: 'Qué hago?',
  		solve: "También realizo proyectos personales con el objetivo de aprender nuevas herramientas y resolver problemas relacionados con la facultad o con problemas cotiadianos. Por ejemplo, al ser diabetico, no solo debo prestar atencion a las cantidades de azucar de cada comida sino que tambien debo monitorear mis niveles de azucar en sangre durante todo el dia.",
  		projectTitle: "PROYECTOS",
  		myProjects: "Para facilitar esta tarea, decidi realizar los siguientes proyectos:",
  		projectAPI: "Una API Web implementada en Python (con flask) que permite, a cada usuario, documentar y extraer su registros de glucosa en sangre, y ademas generar una tabla con todas las mediciones en un intervalo de tiempo determiando.",
  		projectMobile: "Una aplicacion mobile para android que permite a los usuarios registrar facilmente datos como, azucar en sangre, cantidad de carbohidratos en una comida, cantidad de insulina administrada, etc. La app se sincronizara con la API rest.",
  		projectWeb:"Pagina web para mostrar los distintos proyectos y documentar objetivos realizados y por hacer.",
  	},
  	sidebar:{
  		intro:"INTRODUCCION",
  		about:"SOBRE MI",
  		timeline:"TIMELINE",
	},
	timeline:{
		title1:'Ciencias de la Computacion en la Facultad de Ciencias Exactas, UBA ',
		description1:"Materias Restantes: 3 Optativas + Tesis de Licenciatura - Cursando: Redes Neuronales Profundas (Aprendizaje Profundo)",
		time1:"2009 - Presente ",
		title2:'Escuela Técnica N 21 D.E.10 “Fragata Escuela Libertad” ',
		description2:"Obteniendo el título de Técnico en computación. Durante mi tiempo en el secundario, disfruté de las clases de matemáticas y programación, lo que me llevó a estudiar CS en la Universidad.",
		time2:"2003 - 2008",
	},
  },
}