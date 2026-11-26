/**
 * Curated learning paths for each skill (free / high-signal resources).
 */
const recommendations = {
  javascript: [
    {
      title: "JavaScript.info — The Modern Tutorial",
      url: "https://javascript.info/",
      type: "Course",
      provider: "JavaScript.info",
    },
    {
      title: "MDN JavaScript Guide",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
      type: "Docs",
      provider: "MDN",
    },
  ],
  typescript: [
    {
      title: "TypeScript Handbook",
      url: "https://www.typescriptlang.org/docs/handbook/intro.html",
      type: "Docs",
      provider: "TypeScript",
    },
    {
      title: "Total TypeScript Beginners Tutorial",
      url: "https://www.totaltypescript.com/tutorials/beginners-typescript",
      type: "Course",
      provider: "Total TypeScript",
    },
  ],
  python: [
    {
      title: "Official Python Tutorial",
      url: "https://docs.python.org/3/tutorial/",
      type: "Docs",
      provider: "Python.org",
    },
    {
      title: "freeCodeCamp Python for Everybody",
      url: "https://www.freecodecamp.org/news/python-for-everybody/",
      type: "Course",
      provider: "freeCodeCamp",
    },
  ],
  java: [
    {
      title: "Oracle Java Tutorials",
      url: "https://docs.oracle.com/javase/tutorial/",
      type: "Docs",
      provider: "Oracle",
    },
  ],
  go: [
    {
      title: "A Tour of Go",
      url: "https://go.dev/tour/",
      type: "Course",
      provider: "Go.dev",
    },
  ],
  sql: [
    {
      title: "SQLBolt Interactive Lessons",
      url: "https://sqlbolt.com/",
      type: "Course",
      provider: "SQLBolt",
    },
    {
      title: "Mode SQL Tutorial",
      url: "https://mode.com/sql-tutorial/",
      type: "Course",
      provider: "Mode",
    },
  ],
  "html-css": [
    {
      title: "MDN Learn Web Development",
      url: "https://developer.mozilla.org/en-US/docs/Learn",
      type: "Docs",
      provider: "MDN",
    },
    {
      title: "CSS Tricks Guides",
      url: "https://css-tricks.com/guides/",
      type: "Guide",
      provider: "CSS-Tricks",
    },
  ],
  react: [
    {
      title: "React Official Docs (Learn React)",
      url: "https://react.dev/learn",
      type: "Docs",
      provider: "React",
    },
    {
      title: "Scrimba Learn React",
      url: "https://scrimba.com/learn/learnreact",
      type: "Course",
      provider: "Scrimba",
    },
  ],
  vue: [
    {
      title: "Vue.js Official Guide",
      url: "https://vuejs.org/guide/introduction.html",
      type: "Docs",
      provider: "Vue",
    },
  ],
  angular: [
    {
      title: "Angular Tutorial",
      url: "https://angular.dev/tutorials/learn-angular",
      type: "Docs",
      provider: "Angular",
    },
  ],
  nodejs: [
    {
      title: "Node.js Guides",
      url: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
      type: "Docs",
      provider: "Node.js",
    },
    {
      title: "Express.js Guide",
      url: "https://expressjs.com/en/guide/routing.html",
      type: "Docs",
      provider: "Express",
    },
  ],
  django: [
    {
      title: "Django Official Tutorial",
      url: "https://docs.djangoproject.com/en/stable/intro/tutorial01/",
      type: "Docs",
      provider: "Django",
    },
  ],
  flask: [
    {
      title: "Flask Mega-Tutorial",
      url: "https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world",
      type: "Course",
      provider: "Miguel Grinberg",
    },
  ],
  spring: [
    {
      title: "Spring Boot Guides",
      url: "https://spring.io/guides",
      type: "Docs",
      provider: "Spring",
    },
  ],
  mongodb: [
    {
      title: "MongoDB University Free Courses",
      url: "https://learn.mongodb.com/",
      type: "Course",
      provider: "MongoDB",
    },
  ],
  redis: [
    {
      title: "Redis University",
      url: "https://university.redis.com/",
      type: "Course",
      provider: "Redis",
    },
  ],
  aws: [
    {
      title: "AWS Skill Builder Free Digital Training",
      url: "https://skillbuilder.aws/",
      type: "Course",
      provider: "AWS",
    },
  ],
  linux: [
    {
      title: "Linux Journey",
      url: "https://linuxjourney.com/",
      type: "Course",
      provider: "Linux Journey",
    },
  ],
  docker: [
    {
      title: "Docker Getting Started",
      url: "https://docs.docker.com/get-started/",
      type: "Docs",
      provider: "Docker",
    },
  ],
  kubernetes: [
    {
      title: "Kubernetes Basics",
      url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/",
      type: "Course",
      provider: "Kubernetes",
    },
  ],
  git: [
    {
      title: "Pro Git Book",
      url: "https://git-scm.com/book/en/v2",
      type: "Book",
      provider: "Git",
    },
  ],
  "rest-apis": [
    {
      title: "RESTful API Design Best Practices",
      url: "https://restfulapi.net/",
      type: "Guide",
      provider: "REST API Tutorial",
    },
  ],
  graphql: [
    {
      title: "GraphQL Official Learn",
      url: "https://graphql.org/learn/",
      type: "Docs",
      provider: "GraphQL",
    },
  ],
  "data-structures": [
    {
      title: "VisuAlgo — Visualize Data Structures",
      url: "https://visualgo.net/en",
      type: "Interactive",
      provider: "VisuAlgo",
    },
  ],
  algorithms: [
    {
      title: "freeCodeCamp Algorithms & Data Structures",
      url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
      type: "Course",
      provider: "freeCodeCamp",
    },
  ],
  "system-design": [
    {
      title: "System Design Primer",
      url: "https://github.com/donnemartin/system-design-primer",
      type: "Guide",
      provider: "GitHub",
    },
  ],
  testing: [
    {
      title: "Jest Getting Started",
      url: "https://jestjs.io/docs/getting-started",
      type: "Docs",
      provider: "Jest",
    },
    {
      title: "Testing Library Docs",
      url: "https://testing-library.com/docs/",
      type: "Docs",
      provider: "Testing Library",
    },
  ],
  "ci-cd": [
    {
      title: "GitHub Actions Documentation",
      url: "https://docs.github.com/en/actions",
      type: "Docs",
      provider: "GitHub",
    },
  ],
  "machine-learning": [
    {
      title: "fast.ai Practical Deep Learning",
      url: "https://course.fast.ai/",
      type: "Course",
      provider: "fast.ai",
    },
    {
      title: "Google Machine Learning Crash Course",
      url: "https://developers.google.com/machine-learning/crash-course",
      type: "Course",
      provider: "Google",
    },
  ],
  "data-analysis": [
    {
      title: "pandas Getting Started",
      url: "https://pandas.pydata.org/docs/getting_started/index.html",
      type: "Docs",
      provider: "pandas",
    },
  ],
  communication: [
    {
      title: "Technical Writing One (Google)",
      url: "https://developers.google.com/tech-writing/one",
      type: "Course",
      provider: "Google",
    },
  ],
  agile: [
    {
      title: "Atlassian Agile Coach",
      url: "https://www.atlassian.com/agile",
      type: "Guide",
      provider: "Atlassian",
    },
  ],
};

module.exports = { recommendations };
