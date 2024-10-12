const svelteQuiz = [
  {
    question: "What is the file extension for Svelte component files?",
    options: [".svelte", ".sv", ".svt", ".svelte.js"],
    correctAnswer: 0,
    score: 5,
  },
  {
    question: "How do you declare a reactive statement in Svelte?",
    options: [
      "compute: statement",
      "reactive: statement",
      "$: statement",
      "watch: statement",
    ],
    correctAnswer: 2,
    score: 5,
  },
  {
    question:
      "What is the correct way to bind an input value to a variable in Svelte?",
    options: [
      "v-model={variable}",
      "bind:value={variable}",
      "[(ngModel)]=variable",
      "value={variable}",
    ],
    correctAnswer: 1,
    score: 5,
  },
  {
    question: "How do you conditionally render content in Svelte?",
    options: [
      '<template v-if="condition">...</template>',
      '*ngIf="condition"',
      "{% if condition %}...{% endif %}",
      "{#if condition}...{/if}",
    ],
    correctAnswer: 3,
    score: 5,
  },
  {
    question:
      "What is the purpose of the 'export' keyword in Svelte component scripts?",
    options: [
      "To export functions for external use",
      "To create global variables",
      "To define component lifecycle hooks",
      "To declare props that the component accepts",
    ],
    correctAnswer: 3,
    score: 5,
  },
  {
    question: "How do you create a loop in Svelte templates?",
    options: [
      "{#each items as item}...{/each}",
      '<template v-for="item in items">...</template>',
      '*ngFor="let item of items"',
      "{% for item in items %}...{% endfor %}",
    ],
    correctAnswer: 0,
    score: 5,
  },
  {
    question: "What is the purpose of the 'svelte:self' element?",
    options: [
      "To create a self-closing element",
      "To allow a component to recursively nest itself",
      "To reference the component's own methods",
      "To define a component's template",
    ],
    correctAnswer: 1,
    score: 10,
  },
  {
    question: "How do you handle component lifecycle in Svelte?",
    options: [
      "Using lifecycle hooks like created(), mounted(), and destroyed()",
      "Using componentDidMount() and componentWillUnmount()",
      "Using ngOnInit(), ngOnDestroy(), and ngOnChanges()",
      "Using onMount, onDestroy, beforeUpdate, and afterUpdate functions",
    ],
    correctAnswer: 3,
    score: 10,
  },
  {
    question: "What is the purpose of the 'svelte:component' element?",
    options: [
      "To import a component",
      "To create a new component",
      "To dynamically render a component",
      "To define a component's props",
    ],
    correctAnswer: 2,
    score: 10,
  },
  {
    question: "How do you create a store in Svelte?",
    options: [
      "import { Store } from 'svelte/store'",
      "import { createStore } from 'svelte'",
      "import { storeFactory } from 'svelte'",
      "import { writable } from 'svelte/store'",
    ],
    correctAnswer: 3,
    score: 5,
  },
  {
    question:
      "What is the purpose of the '$' prefix when using stores in Svelte?",
    options: [
      "To create a global variable",
      "To automatically subscribe to the store and get its value",
      "To mark a variable as reactive",
      "To define a computed property",
    ],
    correctAnswer: 1,
    score: 10,
  },
  {
    question: "How do you add event listeners to elements in Svelte?",
    options: [
      'v-on:event="handler"',
      '@event="handler"',
      "on:event={handler}",
      '(event)="handler()"',
    ],
    correctAnswer: 2,
    score: 5,
  },
  {
    question: "What is the purpose of the 'svelte:window' element?",
    options: [
      "To create a new browser window",
      "To listen to events on the window object",
      "To define the component's root element",
      "To set global styles",
    ],
    correctAnswer: 1,
    score: 10,
  },
  {
    question: "How do you create a custom event in Svelte?",
    options: [
      "Using the EventEmitter class",
      "Using the customEvent function",
      "Using the $emit method",
      "Using the createEventDispatcher function",
    ],
    correctAnswer: 3,
    score: 10,
  },
  {
    question: "What is the purpose of the 'use:action' directive in Svelte?",
    options: [
      "To import an external library",
      "To use a predefined action",
      "To add custom behavior to an element",
      "To define a new component",
    ],
    correctAnswer: 2,
    score: 10,
  },
  {
    question: "How do you handle asynchronous data loading in Svelte?",
    options: [
      "Using the async pipe",
      "Using the v-if and v-else directives",
      "Using the {#await} block",
      "Using the *ngIf directive",
    ],
    correctAnswer: 2,
    score: 10,
  },
  {
    question: "What is the purpose of the 'svelte:head' element?",
    options: [
      "To create a fixed header for the page",
      "To insert elements into the document head",
      "To define the component's header",
      "To import head-specific styles",
    ],
    correctAnswer: 1,
    score: 5,
  },
  {
    question: "How do you create transitions in Svelte?",
    options: [
      "Using the transition() method",
      "Using the animate attribute",
      "Using the @transition decorator",
      "Using the transition:fn directive",
    ],
    correctAnswer: 3,
    score: 10,
  },
  {
    question: "What is the purpose of the 'context' API in Svelte?",
    options: [
      "To create a global state",
      "To share data between components without passing props",
      "To handle component lifecycle",
      "To define the component's context",
    ],
    correctAnswer: 1,
    score: 10,
  },
  {
    question: "How do you handle form submissions in Svelte?",
    options: [
      "onSubmit={handleSubmit}",
      '@submit.prevent="handleSubmit"',
      "on:submit|preventDefault={handleSubmit}",
      '(ngSubmit)="handleSubmit()"',
    ],
    correctAnswer: 2,
    score: 5,
  },
  {
    question: "What is the purpose of the 'slot' element in Svelte?",
    options: [
      "To allocate memory for the component",
      "To create a slot machine component",
      "To define where child content should be rendered in a component",
      "To define a time slot for animations",
    ],
    correctAnswer: 2,
    score: 5,
  },
  {
    question: "How do you create a derived store in Svelte?",
    options: [
      "Using the createDerivedStore function",
      "Using the derived function from 'svelte/store'",
      "Using the compute method on a store",
      "Using the map operator on a store",
    ],
    correctAnswer: 1,
    score: 10,
  },
  {
    question: "What is the purpose of the 'svelte:options' element?",
    options: [
      "To configure build options for the project",
      "To set global options for the entire application",
      "To specify compiler options for a component",
      "To define runtime options for a component",
    ],
    correctAnswer: 2,
    score: 10,
  },
  {
    question: "How do you handle keyboard events in Svelte?",
    options: [
      '@keydown="handler"',
      'v-on:keydown="handler"',
      '(keydown)="handler($event)"',
      "on:keydown={handler}",
    ],
    correctAnswer: 3,
    score: 5,
  },
  {
    question: "What is the purpose of the 'debugger' statement in Svelte?",
    options: [
      "To enable debug mode for the component",
      "To create a debugger component",
      "To pause execution and open browser developer tools",
      "To log debugging information to the console",
    ],
    correctAnswer: 2,
    score: 5,
  },
]

export default svelteQuiz
