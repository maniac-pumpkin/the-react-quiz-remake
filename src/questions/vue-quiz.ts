const vueQuiz = [
  {
    question: "What is the correct way to create a Vue instance?",
    options: ["new Vue()", "Vue.create()", "createVue()", "Vue.instance()"],
    correctAnswer: 0,
    score: 5,
  },
  {
    question: "Which directive is used for two-way data binding in Vue.js?",
    options: ["v-bind", "v-model", "v-two-way", "v-sync"],
    correctAnswer: 1,
    score: 5,
  },
  {
    question:
      "What is the Vue.js template syntax for rendering a list of items?",
    options: ["v-for", "v-list", "v-each", "v-repeat"],
    correctAnswer: 0,
    score: 5,
  },
  {
    question:
      "Which lifecycle hook is called after the Vue instance is created?",
    options: ["created()", "mounted()", "beforeCreate()", "afterCreate()"],
    correctAnswer: 0,
    score: 5,
  },
  {
    question: "What is the purpose of the 'key' attribute in v-for directives?",
    options: [
      "To style list items",
      "To provide a unique identifier for each item",
      "To determine the order of items",
      "To add event listeners to items",
    ],
    correctAnswer: 1,
    score: 10,
  },
  {
    question: "How do you define a computed property in Vue.js?",
    options: [
      "computed: { property() { ... } }",
      "methods: { property() { ... } }",
      "data: { property: function() { ... } }",
      "watchers: { property() { ... } }",
    ],
    correctAnswer: 0,
    score: 10,
  },
  {
    question: "What is the correct way to handle form submission in Vue.js?",
    options: [
      '<form v-on:submit="handleSubmit">',
      '<form @submit="handleSubmit">',
      '<form v-submit="handleSubmit">',
      "Both A and B",
    ],
    correctAnswer: 3,
    score: 5,
  },
  {
    question:
      "Which directive is used to conditionally render an element in Vue.js?",
    options: ["v-if", "v-show", "v-render", "v-display"],
    correctAnswer: 0,
    score: 5,
  },
  {
    question: "What is Vuex used for in Vue.js applications?",
    options: [
      "Routing",
      "State management",
      "Form validation",
      "Server-side rendering",
    ],
    correctAnswer: 1,
    score: 10,
  },
  {
    question:
      "How do you emit a custom event from a child component to its parent in Vue.js?",
    options: [
      "this.$emit('event-name')",
      "this.emit('event-name')",
      "this.$event('event-name')",
      "this.dispatchEvent('event-name')",
    ],
    correctAnswer: 0,
    score: 10,
  },
  {
    question: "What is the purpose of the 'ref' attribute in Vue.js?",
    options: [
      "To create a reference to a DOM element or child component",
      "To define a prop",
      "To create a computed property",
      "To define a method",
    ],
    correctAnswer: 0,
    score: 10,
  },
  {
    question:
      "Which Vue.js directive is used to bind an attribute to an expression?",
    options: ["v-bind", "v-attr", "v-prop", "v-expression"],
    correctAnswer: 0,
    score: 5,
  },
  {
    question: "What is the purpose of Vue mixins?",
    options: [
      "To create reusable component logic",
      "To define global styles",
      "To manage routing",
      "To handle HTTP requests",
    ],
    correctAnswer: 0,
    score: 10,
  },
  {
    question: "How do you define a watcher in Vue.js?",
    options: [
      "watchers: { property(newVal, oldVal) { ... } }",
      "watch: { property(newVal, oldVal) { ... } }",
      "computed: { property(newVal, oldVal) { ... } }",
      "methods: { property(newVal, oldVal) { ... } }",
    ],
    correctAnswer: 1,
    score: 10,
  },
  {
    question: "What is the purpose of the 'v-cloak' directive in Vue.js?",
    options: [
      "To hide uncompiled mustache bindings",
      "To create a clock component",
      "To measure component rendering time",
      "To define a timed event",
    ],
    correctAnswer: 0,
    score: 10,
  },
  {
    question:
      "Which lifecycle hook is called right before a Vue instance is destroyed?",
    options: [
      "beforeDestroy()",
      "destroyed()",
      "beforeUnmount()",
      "unmounted()",
    ],
    correctAnswer: 2,
    score: 5,
  },
  {
    question: "What is the correct way to use props in a Vue.js component?",
    options: [
      "props: ['propName']",
      "properties: { propName: String }",
      "props: { propName: { type: String } }",
      "Both A and C",
    ],
    correctAnswer: 3,
    score: 10,
  },
  {
    question: "Which Vue.js directive is used to bind inline styles?",
    options: ["v-style", "v-css", "v-bind:style", ":style"],
    correctAnswer: 3,
    score: 5,
  },
  {
    question: "What is the purpose of the 'keep-alive' component in Vue.js?",
    options: [
      "To cache component instances",
      "To prevent memory leaks",
      "To optimize rendering performance",
      "To handle component lifecycle",
    ],
    correctAnswer: 0,
    score: 10,
  },
  {
    question: "How do you create a custom directive in Vue.js?",
    options: [
      "Vue.directive('name', { ... })",
      "Vue.createDirective('name', { ... })",
      "Vue.component('name', { ... })",
      "Vue.customDirective('name', { ... })",
    ],
    correctAnswer: 0,
    score: 10,
  },
  {
    question:
      "What is the purpose of the 'scoped' attribute in Vue.js style tags?",
    options: [
      "To limit the CSS to the current component",
      "To define global styles",
      "To optimize CSS rendering",
      "To enable CSS modules",
    ],
    correctAnswer: 0,
    score: 5,
  },
  {
    question:
      "Which Vue.js method is used to manually force a component to re-render?",
    options: ["$forceUpdate()", "$reload()", "$refresh()", "$rerender()"],
    correctAnswer: 0,
    score: 10,
  },
  {
    question: "What is the purpose of the 'v-once' directive in Vue.js?",
    options: [
      "To render an element only once",
      "To create a single-use component",
      "To define a one-time event listener",
      "To initialize data properties",
    ],
    correctAnswer: 0,
    score: 5,
  },
  {
    question: "How do you access the Vuex store in a Vue component?",
    options: ["this.$store", "this.store", "this.$vuex", "this.vuex"],
    correctAnswer: 0,
    score: 5,
  },
  {
    question: "What is the purpose of the 'nextTick' method in Vue.js?",
    options: [
      "To execute code after the next DOM update cycle",
      "To create an asynchronous component",
      "To delay the execution of a method",
      "To optimize rendering performance",
    ],
    correctAnswer: 0,
    score: 10,
  },
]

export default vueQuiz
