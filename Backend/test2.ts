import { handler } from './handler';

const eventPython = {
  language: 'python',
  code: `
print("Hello, World!")
x = 5
y = 10
print("Sum:", x + y)
`
};

const eventC = {
  language: 'C',
  code: `
#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    int x = 5;
    int y = 10;
    printf("Sum: %d\\n", x + y);
    return 0;
}
`
};

const eventCpp = {
  language: 'C++',
  code: `
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    int x = 5;
    int y = 10;
    std::cout << "Sum: " << x + y << std::endl;
    return 0;
}
`
};

const test = async () => {
  console.log("Python Response:");
  console.log(await handler(eventPython));
  
  console.log("\nC Response:");
  console.log(await handler(eventC));
  
  console.log("\nC++ Response:");
  console.log(await handler(eventCpp));
};

test();
