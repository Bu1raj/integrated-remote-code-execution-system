import sys
import subprocess
import io
import os

def execute_python_code(code):
    original_stdout = sys.stdout
    sys.stdout = output_capture = io.StringIO()
    try:
        exec(code)
        output = output_capture.getValue()
        print("Code Executed Succesfully\n",output)
        return output
    except Exception as e:
        return str(e)
    finally:
        sys.stdout = original_stdout


def execute_c_code(code):
    with open("temp.c", "w") as f:
        f.write(code)
    
    try:
        compile_result = subprocess.run(["gcc", "temp.c", "-o", "temp_c"], capture_output=True, text=True)
        if compile_result.returncode != 0:
            return compile_result.stderr
        
        run_result = subprocess.run(["./temp_c"], capture_output=True, text=True)
        return run_result.stdout if run_result.returncode == 0 else run_result.stderr
    finally:
        os.remove("temp.c")
        if os.path.exists("temp_c"):
            os.remove("temp_c")


def execute_cpp_code(code):
    with open("temp.cpp", "w") as f:
        f.write(code)
    
    try:
        compile_result = subprocess.run(["g++", "temp.cpp", "-o", "temp_cpp"], capture_output=True, text=True)
        if compile_result.returncode != 0:
            return compile_result.stderr
        
        run_result = subprocess.run(["./temp_cpp"], capture_output=True, text=True)
        return run_result.stdout if run_result.returncode == 0 else run_result.stderr
    finally:
        os.remove("temp.cpp")
        if os.path.exists("temp_cpp"):
            os.remove("temp_cpp")


def handler(event, context):
    language = event.get('language','C')
    code = event.get('code','')
    if language == 'C':
        result = execute_c_code(code)
    elif language == 'C++':
        result = execute_cpp_code(code)
    elif language == 'python':
        result = execute_python_code(code)
    else:
        result = "Support Coming soon :)"
    return{
        'statusCode' :200,
        'body' :result
    } 