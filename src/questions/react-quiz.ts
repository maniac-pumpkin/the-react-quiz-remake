const reactQuiz = [
  {
    question:
      "What is the correct way to create a functional component in React?",
    options: [
      "function MyComponent() { return <div>Hello</div>; }",
      "class MyComponent { render() { return <div>Hello</div>; } }",
      "const MyComponent = () => { <div>Hello</div> }",
      "var MyComponent = function() { return <div>Hello</div>; }",
    ],
    correctAnswer: 0,
    score: 5,
  },
  {
    question: "Which hook is used for side effects in functional components?",
    options: ["useEffect()", "useState()", "useContext()", "useReducer()"],
    correctAnswer: 0,
    score: 5,
  },
  {
    question:
      "What is the purpose of the `key` prop when rendering a list of elements?",
    options: [
      "To style the elements",
      "To provide a unique identifier for each element",
      "To determine the order of elements",
      "To add event listeners to elements",
    ],
    correctAnswer: 1,
    score: 10,
  },
  {
    question:
      "How do you pass data from a parent component to a child component?",
    options: ["Using state", "Using props", "Using context", "Using refs"],
    correctAnswer: 1,
    score: 5,
  },
  {
    question: "What is the correct way to update state in a class component?",
    options: [
      "this.state.count = this.state.count + 1",
      "this.setState({ count: this.state.count + 1 })",
      "this.state = { ...this.state, count: this.state.count + 1 }",
      "this.updateState({ count: this.state.count + 1 })",
    ],
    correctAnswer: 1,
    score: 10,
  },
  {
    question:
      "Which method is called after a component is rendered for the first time?",
    options: [
      "componentDidMount()",
      "componentWillMount()",
      "componentDidUpdate()",
      "componentWillUpdate()",
    ],
    correctAnswer: 0,
    score: 10,
  },
  {
    question: "What is the purpose of the `useState` hook?",
    options: [
      "To create side effects",
      "To manage component lifecycle",
      "To handle state in functional components",
      "To create context",
    ],
    correctAnswer: 2,
    score: 5,
  },
  {
    question: "How can you prevent a component from rendering?",
    options: [
      "Return `false` from the render method",
      "Return `null` from the render method",
      "Use the `shouldComponentUpdate` method",
      "Use the `componentWillUnmount` method",
    ],
    correctAnswer: 1,
    score: 5,
  },
  {
    question: "What is the correct way to handle form submission in React?",
    options: [
      "<form onSubmit={this.handleSubmit}>",
      "<form submit={this.handleSubmit}>",
      "<form onSubmit={handleSubmit()}>",
      "<form onSubmit={() => this.handleSubmit}>",
    ],
    correctAnswer: 0,
    score: 10,
  },
  {
    question: "Which of the following is NOT a hook in React?",
    options: ["useEffect", "useState", "useContext", "useComponent"],
    correctAnswer: 3,
    score: 10,
  },
  {
    question: "What is the purpose of React.Fragment?",
    options: [
      "To create a new component",
      "To group multiple elements without adding extra nodes to the DOM",
      "To memoize components",
      "To create a context provider",
    ],
    correctAnswer: 1,
    score: 10,
  },
  {
    question: "How do you create a controlled input in React?",
    options: [
      "<input value={this.state.value} onChange={this.handleChange} />",
      "<input defaultValue={this.state.value} />",
      "<input value={this.state.value} />",
      "<input onChange={this.handleChange} />",
    ],
    correctAnswer: 0,
    score: 5,
  },
  {
    question: "What is the purpose of the `useCallback` hook?",
    options: [
      "To memoize functions",
      "To create side effects",
      "To manage state",
      "To access the context",
    ],
    correctAnswer: 0,
    score: 10,
  },
  {
    question:
      "Which lifecycle method is called before a component is unmounted and destroyed?",
    options: [
      "componentWillUnmount",
      "componentDidUnmount",
      "componentWillDestroy",
      "componentDidDestroy",
    ],
    correctAnswer: 0,
    score: 5,
  },
  {
    question: "What is the correct way to render a component conditionally?",
    options: [
      "if (condition) { return <Component />; }",
      "condition && <Component />",
      "condition ? <Component /> : null",
      "All of the above",
    ],
    correctAnswer: 3,
    score: 5,
  },
  {
    question:
      "How do you pass all props to a child component without listing them individually?",
    options: [
      "<ChildComponent props={this.props} />",
      "<ChildComponent {...this.props} />",
      "<ChildComponent this.props />",
      "<ChildComponent props={...this.props} />",
    ],
    correctAnswer: 1,
    score: 5,
  },
  {
    question: "What is the purpose of the `useMemo` hook?",
    options: [
      "To memoize functions",
      "To memoize values",
      "To create side effects",
      "To manage state",
    ],
    correctAnswer: 1,
    score: 5,
  },
  {
    question: "How do you create a ref in a functional component?",
    options: [
      "const ref = React.createRef()",
      "const ref = useRef()",
      "const [ref, setRef] = useState(null)",
      "const ref = createRef()",
    ],
    correctAnswer: 1,
    score: 5,
  },
  {
    question:
      "What is the correct way to use the context in a class component?",
    options: [
      "static contextType = MyContext",
      "this.context = MyContext",
      "const context = useContext(MyContext)",
      "const context = this.getContext(MyContext)",
    ],
    correctAnswer: 0,
    score: 10,
  },
  {
    question:
      "Which of the following is NOT a valid way to style React components?",
    options: [
      "Inline styles",
      "CSS modules",
      "Styled components",
      "React.style",
    ],
    correctAnswer: 3,
    score: 5,
  },
  {
    question: "What is the purpose of the `key` prop in React.lazy?",
    options: [
      "To provide a unique identifier for the lazy-loaded component",
      "To specify the loading priority",
      "To determine when to reload the component",
      "React.lazy doesn't use a `key` prop",
    ],
    correctAnswer: 3,
    score: 10,
  },
  {
    question: "How do you create an error boundary in React?",
    options: [
      "By implementing `componentDidCatch` lifecycle method",
      "By using the `try-catch` statement in render method",
      "By using the `ErrorBoundary` component from React",
      "By using the `useError` hook",
    ],
    correctAnswer: 0,
    score: 5,
  },
  {
    question: "What is the purpose of the `useReducer` hook?",
    options: [
      "To manage complex state logic",
      "To create side effects",
      "To memoize values",
      "To access the context",
    ],
    correctAnswer: 0,
    score: 5,
  },
  {
    question: "How can you optimize performance in React?",
    options: [
      "By using `React.memo`",
      "By implementing `shouldComponentUpdate`",
      "By using `useMemo` and `useCallback`",
      "All of the above",
    ],
    correctAnswer: 3,
    score: 5,
  },
  {
    question:
      "What is the correct way to render multiple elements in React without a wrapper element?",
    options: [
      'return [<div key="1">Element 1</div>, <div key="2">Element 2</div>]',
      "return <React.Fragment><div>Element 1</div><div>Element 2</div></React.Fragment>",
      "return <><div>Element 1</div><div>Element 2</div></>",
      "All of the above",
    ],
    correctAnswer: 3,
    score: 10,
  },
]

export default reactQuiz
