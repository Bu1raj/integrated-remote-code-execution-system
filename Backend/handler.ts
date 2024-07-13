import { exec } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const executePythonCode = (code: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const filename = 'temp.py';
    fs.writeFileSync(filename, code);
    
    exec(`python ${filename}`, (error, stdout, stderr) => {
      fs.unlinkSync(filename);
      if (error) {
        reject(stderr);
      } else {
        resolve(stdout);
      }
    });
  });
};

const executeCCode = (code: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const filename = 'temp.c';
    const output = 'temp_c';
    fs.writeFileSync(filename, code);

    exec(`gcc ${filename} -o ${output}`, (error, stdout, stderr) => {
      if (error) {
        fs.unlinkSync(filename);
        reject(stderr);
      } else {
        exec(`./${output}`, (runError, runStdout, runStderr) => {
          fs.unlinkSync(filename);
          fs.unlinkSync(output);
          if (runError) {
            reject(runStderr);
          } else {
            resolve(runStdout);
          }
        });
      }
    });
  });
};

const executeCppCode = (code: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const filename = 'temp.cpp';
    const output = 'temp_cpp';
    fs.writeFileSync(filename, code);

    exec(`g++ ${filename} -o ${output}`, (error, stdout, stderr) => {
      if (error) {
        fs.unlinkSync(filename);
        reject(stderr);
      } else {
        exec(`./${output}`, (runError, runStdout, runStderr) => {
          fs.unlinkSync(filename);
          fs.unlinkSync(output);
          if (runError) {
            reject(runStderr);
          } else {
            resolve(runStdout);
          }
        });
      }
    });
  });
};

interface Event {
  language: string;
  code: string;
}

export const handler = async (event: Event) => {
  const language = event.language || 'C';
  const code = event.code || '';
  
  try {
    let result;
    if (language === 'C') {
      result = await executeCCode(code);
    } else if (language === 'C++') {
      result = await executeCppCode(code);
    } else if (language === 'python') {
      result = await executePythonCode(code);
    } else {
      result = "Support Coming soon :)";
    }
    
    return {
      statusCode: 200,
      body: result,
    };
  } catch (error) {
    let errorMessage = 'An error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    }
    return {
      statusCode: 500,
      body: errorMessage,
    };
  }
};
