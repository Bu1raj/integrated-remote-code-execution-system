import json
from worker import handler

# Define a sample event and context for Python
event_python = {
    'language': 'python',
    'code': """
print("Hello, World!")
x = 5
y = 10
print("Sum:", x + y)
"""
}

# Define a sample event and context for C
event_c = {
    'language': 'C',
    'code': """
#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    int x = 5;
    int y = 10;
    printf("Sum: %d\\n", x + y);
    return 0;
}
"""
}

# Define a sample event and context for C++
event_cpp = {
    'language': 'C++',
    'code': """
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    int x = 5;
    int y = 10;
    std::cout << "Sum: " << x + y << std::endl;
    return 0;
}
"""
}

context = {}

# Test Python code
response_python = handler(event_python, context)
print("Python Response:")
print(json.dumps(response_python, indent=4))

# Test C code
response_c = handler(event_c, context)
print("\nC Response:")
print(json.dumps(response_c, indent=4))

# Test C++ code
response_cpp = handler(event_cpp, context)
print("\nC++ Response:")
print(json.dumps(response_cpp, indent=4))
