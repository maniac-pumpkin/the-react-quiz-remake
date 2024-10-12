const angularQuiz = [
  {
    question: "What is the purpose of NgModule in Angular?",
    options: [
      "To define a module that encapsulates components, directives, and pipes",
      "To create a new component",
      "To handle HTTP requests",
      "To manage application state",
    ],
    correctAnswer: 0,
    score: 5,
  },
  {
    question: "Which decorator is used to define a component in Angular?",
    options: ["@Component", "@NgComponent", "@View", "@Template"],
    correctAnswer: 0,
    score: 5,
  },
  {
    question: "What is the purpose of the ngOnInit() lifecycle hook?",
    options: [
      "To initialize the component after Angular sets the input properties",
      "To detect changes in the component",
      "To clean up the component before it's destroyed",
      "To create the component instance",
    ],
    correctAnswer: 0,
    score: 5,
  },
  {
    question: "How do you create a service in Angular?",
    options: [
      "@Service decorator",
      "@Injectable decorator",
      "@Provide decorator",
      "@NgService decorator",
    ],
    correctAnswer: 1,
    score: 5,
  },
  {
    question: "What is the purpose of Angular's pipe operator?",
    options: [
      "To transform data in the template",
      "To handle asynchronous operations",
      "To create observables",
      "To define routing",
    ],
    correctAnswer: 0,
    score: 5,
  },
  {
    question: "Which directive is used for two-way data binding in Angular?",
    options: ["[(ngModel)]", "{{}}", "[ngBind]", "(ngChange)"],
    correctAnswer: 0,
    score: 5,
  },
  {
    question: "What is the purpose of the async pipe in Angular?",
    options: [
      "To handle asynchronous data in templates",
      "To create asynchronous functions",
      "To manage HTTP requests",
      "To define asynchronous routes",
    ],
    correctAnswer: 0,
    score: 10,
  },
  {
    question:
      "How do you pass data from a parent component to a child component?",
    options: [
      "Using @Input decorator",
      "Using @Output decorator",
      "Using services",
      "Using ngOnChanges lifecycle hook",
    ],
    correctAnswer: 0,
    score: 5,
  },
  {
    question: "What is the purpose of Angular's RouterModule?",
    options: [
      "To handle navigation and URL manipulation",
      "To create reusable UI components",
      "To manage form validations",
      "To handle HTTP interceptors",
    ],
    correctAnswer: 0,
    score: 5,
  },
  {
    question:
      "Which of the following is used for dependency injection in Angular?",
    options: [
      "Constructor injection",
      "@Inject decorator",
      "useClass provider",
      "All of the above",
    ],
    correctAnswer: 3,
    score: 10,
  },
  {
    question: "What is the purpose of ViewChild in Angular?",
    options: [
      "To get a reference to a child component, directive, or DOM element",
      "To create a child component",
      "To define a view template",
      "To handle child routes",
    ],
    correctAnswer: 0,
    score: 10,
  },
  {
    question: "Which Angular CLI command is used to generate a new component?",
    options: [
      "ng generate component",
      "ng create component",
      "ng new component",
      "ng add component",
    ],
    correctAnswer: 0,
    score: 5,
  },
  {
    question: "What is the purpose of NgZone in Angular?",
    options: [
      "To execute work inside or outside of the Angular zone",
      "To define zones in the template",
      "To create zone-specific services",
      "To handle zone-based routing",
    ],
    correctAnswer: 0,
    score: 10,
  },
  {
    question: "Which directive is used for conditional rendering in Angular?",
    options: ["*ngIf", "v-if", "[ngShow]", "ng-show"],
    correctAnswer: 0,
    score: 5,
  },
  {
    question: "What is the purpose of the ChangeDetectorRef in Angular?",
    options: [
      "To manually trigger change detection",
      "To detect changes in the DOM",
      "To change the detection strategy",
      "To reference changed elements",
    ],
    correctAnswer: 0,
    score: 10,
  },
  {
    question: "How do you handle form validations in Angular?",
    options: [
      "Using Validators class",
      "Using ngForm directive",
      "Using FormBuilder service",
      "All of the above",
    ],
    correctAnswer: 3,
    score: 10,
  },
  {
    question: "What is the purpose of the ngOnChanges lifecycle hook?",
    options: [
      "To respond when Angular sets or resets data-bound input properties",
      "To initialize the directive or component",
      "To detect changes in the view",
      "To clean up the component",
    ],
    correctAnswer: 0,
    score: 5,
  },
  {
    question: "Which module is used for making HTTP requests in Angular?",
    options: ["HttpClientModule", "HttpModule", "AjaxModule", "RequestModule"],
    correctAnswer: 0,
    score: 5,
  },
  {
    question: "What is the purpose of Angular's AOT compilation?",
    options: [
      "To compile Angular applications ahead of time",
      "To optimize template syntax",
      "To handle asynchronous operations",
      "To manage application state",
    ],
    correctAnswer: 0,
    score: 10,
  },
  {
    question: "How do you create a custom structural directive in Angular?",
    options: [
      "Using @Directive decorator and TemplateRef",
      "Using @Component decorator",
      "Using @Pipe decorator",
      "Using @Injectable decorator",
    ],
    correctAnswer: 0,
    score: 10,
  },
  {
    question: "What is the purpose of the ngContent directive?",
    options: [
      "To project content into components",
      "To create content dynamically",
      "To style content",
      "To validate content",
    ],
    correctAnswer: 0,
    score: 10,
  },
  {
    question:
      "Which Angular feature is used for sharing data between unrelated components?",
    options: [
      "Services",
      "@Input decorator",
      "@Output decorator",
      "Template variables",
    ],
    correctAnswer: 0,
    score: 5,
  },
  {
    question:
      "What is the purpose of the TrackBy function in NgForOf directive?",
    options: [
      "To improve performance when rendering lists",
      "To track user interactions",
      "To sort list items",
      "To filter list items",
    ],
    correctAnswer: 0,
    score: 10,
  },
  {
    question: "How do you handle route parameters in Angular?",
    options: [
      "Using ActivatedRoute service",
      "Using Router service",
      "Using Location service",
      "Using NavigationExtras",
    ],
    correctAnswer: 0,
    score: 5,
  },
  {
    question: "What is the purpose of Angular's TestBed?",
    options: [
      "To create a testing module for Angular applications",
      "To test database connections",
      "To simulate HTTP requests",
      "To generate test cases automatically",
    ],
    correctAnswer: 0,
    score: 10,
  },
]

export default angularQuiz
