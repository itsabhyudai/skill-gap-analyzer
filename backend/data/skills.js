/**
 * Canonical skill catalog with aliases for resume matching.
 * Matching is case-insensitive against aliases and the skill name.
 */
const skills = [
  {
    id: "javascript",
    name: "JavaScript",
    category: "Language",
    aliases: ["javascript", "js", "ecmascript", "es6", "es2015", "vanilla js"],
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Language",
    aliases: ["typescript", "ts", "tsx"],
  },
  {
    id: "python",
    name: "Python",
    category: "Language",
    aliases: ["python", "python3", "py"],
  },
  {
    id: "java",
    name: "Java",
    category: "Language",
    aliases: ["java", "jdk", "jvm"],
  },
  {
    id: "go",
    name: "Go",
    category: "Language",
    aliases: ["golang", "go lang"],
  },
  {
    id: "sql",
    name: "SQL",
    category: "Language",
    aliases: ["sql", "mysql", "postgresql", "postgres", "sqlite", "t-sql", "pl/sql"],
  },
  {
    id: "html-css",
    name: "HTML & CSS",
    category: "Frontend",
    aliases: ["html", "css", "html5", "css3", "sass", "scss", "tailwind"],
  },
  {
    id: "react",
    name: "React",
    category: "Frontend",
    aliases: ["react", "react.js", "reactjs", "react native", "next.js", "nextjs"],
  },
  {
    id: "vue",
    name: "Vue.js",
    category: "Frontend",
    aliases: ["vue", "vue.js", "vuejs", "nuxt"],
  },
  {
    id: "angular",
    name: "Angular",
    category: "Frontend",
    aliases: ["angular", "angularjs"],
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    aliases: ["node.js", "nodejs", "node js", "express", "express.js", "nestjs", "nest.js"],
  },
  {
    id: "django",
    name: "Django",
    category: "Backend",
    aliases: ["django", "drf", "django rest"],
  },
  {
    id: "flask",
    name: "Flask",
    category: "Backend",
    aliases: ["flask", "fastapi"],
  },
  {
    id: "spring",
    name: "Spring Boot",
    category: "Backend",
    aliases: ["spring", "spring boot", "springboot"],
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Database",
    aliases: ["mongodb", "mongo", "mongoose", "nosql"],
  },
  {
    id: "redis",
    name: "Redis",
    category: "Database",
    aliases: ["redis", "cache", "elasti cache", "elasticache"],
  },
  {
    id: "aws",
    name: "AWS",
    category: "Cloud",
    aliases: ["aws", "amazon web services", "ec2", "s3", "lambda", "cloudformation"],
  },
  {
    id: "linux",
    name: "Linux",
    category: "DevOps",
    aliases: ["linux", "unix", "bash", "shell scripting", "ubuntu", "centos"],
  },
  {
    id: "docker",
    name: "Docker",
    category: "DevOps",
    aliases: ["docker", "dockerfile", "containerization", "containers"],
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    category: "DevOps",
    aliases: ["kubernetes", "k8s", "helm", "eks", "gke"],
  },
  {
    id: "git",
    name: "Git",
    category: "Tools",
    aliases: ["git", "github", "gitlab", "bitbucket", "version control"],
  },
  {
    id: "rest-apis",
    name: "REST APIs",
    category: "Backend",
    aliases: ["rest", "restful", "rest api", "api design", "openapi", "swagger"],
  },
  {
    id: "graphql",
    name: "GraphQL",
    category: "Backend",
    aliases: ["graphql", "apollo"],
  },
  {
    id: "data-structures",
    name: "Data Structures",
    category: "CS Fundamentals",
    aliases: ["data structures", "data structure", "dsa", "arrays", "linked lists", "trees", "graphs", "hash maps"],
  },
  {
    id: "algorithms",
    name: "Algorithms",
    category: "CS Fundamentals",
    aliases: ["algorithms", "algorithm", "complexity", "big o", "sorting", "searching", "dynamic programming"],
  },
  {
    id: "system-design",
    name: "System Design",
    category: "Architecture",
    aliases: ["system design", "distributed systems", "scalability", "microservices", "architecture"],
  },
  {
    id: "testing",
    name: "Testing",
    category: "Quality",
    aliases: ["testing", "unit test", "jest", "pytest", "cypress", "playwright", "tdd", "qa"],
  },
  {
    id: "ci-cd",
    name: "CI/CD",
    category: "DevOps",
    aliases: ["ci/cd", "cicd", "continuous integration", "github actions", "jenkins", "gitlab ci"],
  },
  {
    id: "machine-learning",
    name: "Machine Learning",
    category: "Data",
    aliases: ["machine learning", "ml", "scikit", "sklearn", "tensorflow", "pytorch", "deep learning"],
  },
  {
    id: "data-analysis",
    name: "Data Analysis",
    category: "Data",
    aliases: ["data analysis", "pandas", "numpy", "data analytics", "etl", "tableau", "power bi"],
  },
  {
    id: "communication",
    name: "Communication",
    category: "Soft Skills",
    aliases: ["communication", "communicator", "presentation", "stakeholder", "technical writing", "technical docs"],
  },
  {
    id: "agile",
    name: "Agile / Scrum",
    category: "Process",
    aliases: ["agile", "scrum", "kanban", "sprint", "jira"],
  },
];

module.exports = { skills };
