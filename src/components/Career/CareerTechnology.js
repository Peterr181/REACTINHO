import React from "react";

const programmingLanguages = [
  { name: "HTML", jobTitle: "Frontend Developer" },
  { name: "CSS", jobTitle: "Frontend Developer" },
  { name: "JavaScript", jobTitle: "Frontend Developer" },
  { name: "React", jobTitle: "Frontend Developer" },
  { name: "Vue.js", jobTitle: "Frontend Developer" },
  { name: "Angular", jobTitle: "Frontend Developer" },
  { name: "Bootstrap", jobTitle: "Frontend Developer" },
  { name: "jQuery", jobTitle: "Frontend Developer" },
  { name: "SASS", jobTitle: "Frontend Developer" },
  { name: "LESS", jobTitle: "Frontend Developer" },
  { name: "Stylus", jobTitle: "Frontend Developer" },
  { name: "PHP", jobTitle: "Backend Developer" },
  { name: "Python", jobTitle: "Backend Developer" },
  { name: "Java", jobTitle: "Backend Developer" },
  { name: "Ruby", jobTitle: "Backend Developer" },
  { name: "Node.js", jobTitle: "Backend Developer" },
  { name: "C#", jobTitle: "Backend Developer" },
  { name: "Go", jobTitle: "Backend Developer" },
  { name: "Scala", jobTitle: "Backend Developer" },
  { name: "Django", jobTitle: "Backend Developer" },
  { name: "Flask", jobTitle: "Backend Developer" },
  { name: "Spring", jobTitle: "Backend Developer" },
  { name: "Express.js", jobTitle: "Backend Developer" },
  { name: "PostgreSQL", jobTitle: "Database Developer" },
  { name: "MySQL", jobTitle: "Database Developer" },
  { name: "MongoDB", jobTitle: "Database Developer" },
  { name: "Redis", jobTitle: "Database Developer" },
  { name: "GraphQL", jobTitle: "API Developer" },
  { name: "REST", jobTitle: "API Developer" },
  { name: "SOAP", jobTitle: "API Developer" },
  { name: "OAuth", jobTitle: "API Developer" },
  { name: "JSON Tokens", jobTitle: "API Developer" },
  { name: "AWS", jobTitle: "Cloud Developer" },
  { name: "Azure", jobTitle: "Cloud Developer" },
  { name: "Cloud Platform", jobTitle: "Cloud Developer" },
  { name: "Firebase", jobTitle: "Mobile and Web App Developer" },
  { name: "Swift", jobTitle: "Mobile App Developer" },
  { name: "React Native", jobTitle: "Mobile App Developer" },
  { name: "Flutter", jobTitle: "Mobile App Developer" },
  { name: "Xamarin", jobTitle: "Mobile App Developer" },
  { name: "Unity", jobTitle: "Game Developer" },
  { name: "C++", jobTitle: "Game Developer" },
  { name: "Unreal Engine", jobTitle: "Game Developer" },
  { name: "OpenGL", jobTitle: "Graphics Developer" },
  { name: "Kotlin", jobTitle: "Mobile App Developer" },
  { name: "React.js", jobTitle: "Frontend Developer" },
  { name: "Ember.js", jobTitle: "Frontend Developer" },
  { name: "Backbone.js", jobTitle: "Frontend Developer" },
  { name: "Handlebars.js", jobTitle: "Frontend Developer" },
  { name: "Gatsby", jobTitle: "Frontend Developer" },
  { name: "Next.js", jobTitle: "Frontend Developer" },
  { name: "Nuxt.js", jobTitle: "Frontend Developer" },
  { name: "Jest", jobTitle: "Frontend Developer" },
  { name: "Enzyme", jobTitle: "Frontend Developer" },
  { name: "Cypress", jobTitle: "Frontend Developer" },
  { name: "D3.js", jobTitle: "Frontend Developer" },
  { name: "Three.js", jobTitle: "Graphics Developer" },
  { name: "Pandas", jobTitle: "Data Scientist" },
  { name: "NumPy", jobTitle: "Data Scientist" },
  { name: "Scikit-learn", jobTitle: "Data Scientist" },
  { name: "PyTorch", jobTitle: "Data Scientist" },
  { name: "TensorFlow", jobTitle: "Data Scientist" },
  { name: "Ruby on Rails", jobTitle: "Backend Developer" },
  { name: "Laravel", jobTitle: "Backend Developer" },
  { name: "Symfony", jobTitle: "Backend Developer" },
  { name: "Ionic", jobTitle: "Mobile App Developer" },
  { name: "PhoneGap", jobTitle: "Mobile App Developer" },
  { name: "Corona SDK", jobTitle: "Game Developer" },
  { name: "Godot", jobTitle: "Game Developer" },
  { name: "Blender", jobTitle: "Graphics Developer" },
  { name: "Adobe Illustrator", jobTitle: "Graphics Developer" },
  { name: "Inkscape", jobTitle: "Graphics Developer" },
  { name: "Figma", jobTitle: "UI/UX Designer" },
  { name: "Sketch", jobTitle: "UI/UX Designer" },
  { name: "Adobe XD", jobTitle: "UI/UX Designer" },
  { name: "InVision", jobTitle: "UI/UX Designer" },
  { name: "Dart", jobTitle: "Mobile and Web App Developer" },
  { name: "Assembly", jobTitle: "System Developer" },
  { name: "Rust", jobTitle: "System Developer" },
  { name: "Perl", jobTitle: "Backend Developer" },
  { name: "Bash", jobTitle: "System Developer" },
  { name: "PowerShell", jobTitle: "System Developer" },
  { name: "Lua", jobTitle: "Game Developer" },
  { name: "Haskell", jobTitle: "Backend Developer" },
  { name: "Erlang", jobTitle: "Backend Developer" },
  { name: "F#", jobTitle: "Backend Developer" },
  { name: "Clojure", jobTitle: "Backend Developer" },
  { name: "Groovy", jobTitle: "Backend Developer" },
  { name: "Perl 6", jobTitle: "Backend Developer" },
  { name: "Julia", jobTitle: "Data Scientist" },
  { name: "R", jobTitle: "Data Scientist" },
  { name: "MATLAB", jobTitle: "Data Scientist" },
  { name: "Octave", jobTitle: "Data Scientist" },
  { name: "LabVIEW", jobTitle: "System Developer" },
  { name: "Prolog", jobTitle: "AI Developer" },
  { name: "Lisp", jobTitle: "AI Developer" },
  { name: "Scheme", jobTitle: "AI Developer" },
  { name: "Smalltalk", jobTitle: "Object-Oriented Developer" },
  { name: "Objective-C", jobTitle: "iOS Developer" },
  { name: "Haxe", jobTitle: "Game Developer" },
  { name: "Pascal", jobTitle: "System Developer" },
  { name: "COBOL", jobTitle: "Legacy Developer" },
  { name: "FORTRAN", jobTitle: "Legacy Developer" },
  { name: "Ada", jobTitle: "System Developer" },
  { name: "PL/SQL", jobTitle: "Database Developer" },
  { name: "T-SQL", jobTitle: "Database Developer" },
  { name: "KDB+", jobTitle: "Data Scientist" },
  { name: "Visual Basic", jobTitle: "Legacy Developer" },
  { name: "TypeScript", jobTitle: "Frontend Developer" },
  { name: "Deno", jobTitle: "Backend Developer" },
  { name: "Nim", jobTitle: "System Developer" },
  { name: "Crystal", jobTitle: "Backend Developer" },
  { name: "COq", jobTitle: "AI Developer" },
  { name: "D", jobTitle: "System Developer" },
  { name: "Elixir", jobTitle: "Backend Developer" },
  { name: "Phoenix", jobTitle: "Backend Developer" },
  { name: "Racket", jobTitle: "AI Developer" },
  { name: "OCaml", jobTitle: "Backend Developer" },
  { name: "Reason", jobTitle: "Backend Developer" },
  { name: "SML", jobTitle: "Backend Developer" },
  { name: "Mercury", jobTitle: "Backend Developer" },
  { name: "Red", jobTitle: "Backend Developer" },
];

export default programmingLanguages;
