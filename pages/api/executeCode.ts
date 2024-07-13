import type { NextApiRequest, NextApiResponse } from 'next';
import { exec } from 'child_process';
import * as fs from 'fs';

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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { language, code } = req.body;

  try {
    let result;
    if (language === 'c') {
      result = await executeCCode(code);
    } else if (language === 'cpp') {
      result = await executeCppCode(code);
    } else if (language === 'python') {
      result = await executePythonCode(code);
    } else {
      result = "Support Coming soon :)";
    }

    res.status(200).json({ result });
  } catch (error) {
    let errorMessage = 'An error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    }
    res.status(500).json({ error: errorMessage });
  }
}
