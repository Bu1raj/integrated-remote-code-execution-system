const quiz = {
    totalQuestions: 25,
    questions: [
      {
        id: 1,
        question: 'What is the syntax for a "for" loop in C?',
        answers: ['for (initialization; condition; increment/decrement)', 'for (condition; increment/decrement; initialization)', 'for (increment/decrement; initialization; condition)', 'for (initialization; increment/decrement; condition)'],
        correctAnswer: 'for (initialization; condition; increment/decrement)',
      },
      {
        id: 2,
        question: 'Which loop is guaranteed to execute at least once in C?',
        answers: ['for loop', 'while loop', 'do-while loop', 'All loops behave the same in C'],
        correctAnswer: 'do-while loop',
      },
      {
        id: 3,
        question: 'What is the syntax for a "do-while" loop in C?',
        answers: ['do { statement(s); } while (condition);', 'while (condition) { statement(s); }', 'for (initialization; condition; increment/decrement) { statement(s); }', 'while (condition) do { statement(s); };'],
        correctAnswer: 'do { statement(s); } while (condition);',
      },
      {
        id: 4,
        question: 'How are arrays indexed in C?',
        answers: ['Starting from 1', 'Starting from 0', 'Starting from -1', 'Randomly'],
        correctAnswer: 'Starting from 0',
      },
      {
        id: 5,
        question: 'Which operator is used to access the value at the address of a variable in C?',
        answers: ['&', '*', '#', '$'],
        correctAnswer: '*',
      },
      {
        id: 6,
        question: 'What is the correct syntax to declare a pointer in C?',
        answers: ['int *ptr;', 'int ptr;', 'ptr = &var;', 'None of the above'],
        correctAnswer: 'int *ptr;',
      },
      {
        id: 7,
        question: 'What is the output of the following code snippet?\n\nint x = 10;\nprintf("%d", x++);',
        answers: ['10', '11', '9', 'Compiler Error'],
        correctAnswer: '10',
      },
      {
        id: 8,
        question: 'In C, what does the "++" operator do when applied to a pointer?',
        answers: ['Increments the value at the pointer address', 'Increments the pointer to the next memory location', 'Decrements the pointer to the previous memory location', 'None of the above'],
        correctAnswer: 'Increments the pointer to the next memory location',
      },
      {
        id: 9,
        question: 'Which keyword is used to define a recursive function in C?',
        answers: ['loop', 'repeat', 'recursive', 'None of the above'],
        correctAnswer: 'None of the above',
      },
      {
        id: 10,
        question: 'What is the base address of an array in C?',
        answers: ['First element address', 'Last element address', 'Middle element address', 'Random element address'],
        correctAnswer: 'First element address',
      },
      {
        id: 11,
        question: 'What is the output of the following code snippet?\n\nint i = 0;\nwhile (i++ < 5) {\n  printf("%d ", i);\n}',
        answers: ['1 2 3 4 5', '0 1 2 3 4', '1 2 3 4', 'Compiler Error'],
        correctAnswer: '1 2 3 4 5',
      },
      {
        id: 12,
        question: 'Which operator has the highest precedence in C?',
        answers: ['+', '*', '()', '!='],
        correctAnswer: '()',
      },
      {
        id: 13,
        question: 'What is the output of the following code snippet?\n\nint arr[3][3] = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };\nprintf("%d", arr[1][1]);',
        answers: ['1', '2', '5', '6'],
        correctAnswer: '5',
      },
      {
        id: 14,
        question: 'What is the result of the following operation in C?\n\nint x = 5;\nint y = 10;\nint z = x++ * y;',
        answers: ['50', '60', '55', '51'],
        correctAnswer: '50',
      },
      {
        id: 15,
        question: 'Which of the following correctly declares a recursive function factorial(n) in C?',
        answers: ['int factorial(int n) { return n * factorial(n - 1); }', 'int factorial(int n) { return n == 1 ? 1 : n * factorial(n - 1); }', 'void factorial(int n) { return n == 1 ? 1 : n * factorial(n - 1); }', 'None of the above'],
        correctAnswer: 'int factorial(int n) { return n == 1 ? 1 : n * factorial(n - 1); }',
      },
      {
        id: 16,
        question: 'What is the output of the following code snippet?\n\nint x = 5;\nint y = 10;\nif (x > y) {\n  printf("x is greater");\n} else {\n  printf("y is greater");\n}',
        answers: ['x is greater', 'y is greater', 'No output', 'Compiler Error'],
        correctAnswer: 'y is greater',
      },
      {
        id: 17,
        question: 'Which of the following is a valid declaration of an array of 10 integers in C?',
        answers: ['int arr[10];', 'arr = [10];', 'array int[10];', 'None of the above'],
        correctAnswer: 'int arr[10];',
      },
      {
        id: 18,
        question: 'What is the output of the following code snippet?\n\nint x = 10;\nint *ptr = &x;\nprintf("%d", *ptr);',
        answers: ['10', '0', 'Error', 'Undefined'],
        correctAnswer: '10',
      },
      {
        id: 19,
        question: 'In C, which function is used to allocate memory dynamically?',
        answers: ['malloc()', 'alloc()', 'calloc()', 'reserve()'],
        correctAnswer: 'malloc()',
      },
      {
        id: 20,
        question: 'What is the result of the expression (5 + 3 * 2) in C?',
        answers: ['16', '11', '13', '10'],
        correctAnswer: '11',
      },
      {
        id: 21,
        question: 'What is the output of the following code snippet?\n\nint arr[5] = {1, 2, 3, 4, 5};\nprintf("%d", arr[3]);',
        answers: ['1', '2', '3', '4'],
        correctAnswer: '4',
      },
      {
        id: 22,
        question: 'Which of the following is the correct way to declare a function pointer in C?',
        answers: ['int *funPtr();', 'void (*funPtr)();', 'int (*funPtr)();', 'void *funPtr();'],
        correctAnswer: 'int (*funPtr)();',
      },
      {
        id: 23,
        question: 'What is the output of the following code snippet?\n\nint x = 5;\nint *ptr = &x;\nprintf("%d", ptr);',
        answers: ['5', '0', 'Error', 'Undefined'],
        correctAnswer: 'Error',
      },
      {
        id: 24,
        question: 'In C, what is the ternary operator?',
        answers: ['?:', '??', '!!', '~~'],
        correctAnswer: '?:',
      },
      {
        id: 25,
        question: 'Which of the following operators is used to access structure members in C?',
        answers: ['.', '->', '*', '&'],
        correctAnswer: '->',
      },
    ],
  };


export default quiz;
  