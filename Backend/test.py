import json
from worker import handler

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


context = {}

response_c = handler(event_c, context)
print("\nC Response:")
print(json.dumps(response_c, indent=4))