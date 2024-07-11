interface CodeExample {
  name: string;
  language: string;
  value: string;
}

interface Example {
  input: string;
  output: string;
}

interface Tag {
  id: number;
  name: string;
}

interface Config {
  cpp: CodeExample;
  c: CodeExample;
  javascript: CodeExample;
  python: CodeExample;
}

interface Question {
  difficulty: string;
  config: Config;
  id: string;
  title: string;
  description: string;
  examples: Example[];
  constraints: string[];
  tags: Tag[];
}

const getConfig = (): Config => {
  return {
    cpp: {
      name: "C++",
      language: "cpp",
      value: "#include <iostream>\n\nint main() {\n    // Your code here\n    return 0;\n}"
,
    },
    c: {
      name: "C",
      language: "c",
      value:
        "#include <stdio.h>\n\nint main() {\n    // Your code here\n    return 0;\n}"
    },
    javascript: {
      name: "JavaScript",
      language: "javascript",
      value: "// Your code here\nconsole.log('Hello, World!');",
    },
    python: {
      name: "Python",
      language: "python",
      value: "# Your code here\nprint('Hello, World!')",
    },
  };
};

export const questions: Question = {
  difficulty: "easy",
  config: getConfig(),
  id: "1",
  title: "Two Sum",
  description:
    "Given an array of elements, find 2 numbers whose sum is equal to 0.",
  examples: [
    { input: "[2,7,11,15]", output: "-1" },
    { input: "[2,7,-2,1]", output: "{2,-2}" },
  ],
  constraints: ["arr.size()<1e5"],
  tags: [{ id: 1, name: "Arrays" }],
};
