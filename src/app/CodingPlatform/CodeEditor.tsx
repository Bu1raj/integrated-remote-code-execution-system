import { SelectMenu } from '@/components/SelectMenu'
import React ,  {useState , useEffect, useRef} from 'react'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { Skeleton } from '@/components/ui/skeleton';

const CodeEditor = ({config , questionId , setMessage , setLoading , loading}:{config:any , questionId:string , setMessage: Function , setLoading:Function , loading:boolean}) => {


    const [language , setLanguage] = React.useState<string>('c')
    const [theme , setTheme] = React.useState<string>('vs-dark')
    const [code , setCode] = useState<string>("");

    const editorRef = useRef()
    const onMount = (editor) =>{
        editorRef.current = editor;
        editor.focus();
    }

    /*useEffect(()=>{
         console.log(code);
     },[code])*/

    const RunCode = async () =>{
      console.log(language);
        try {
            const response = await fetch('/api/executeCode', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ code, language }),
            });
            
            const data = await response.json();
            if (response.ok) {
              console.log('Result:', data.result);
            } else {
              console.error('Error:', data.error);
            }
          } catch (error) {
            console.error('Request failed:', error);
          }
    }
    
  return (
    
    <div className='flex gap-2 pl-3 h-full w-full flex-col'>
        <div className='flex justify-between mr-5 pt-1  '>
            <SelectMenu topic='language' options={["c", "cpp" , "javascript" , "python"]} setState={setLanguage}/>
            <div className='flex gap-2 items-center'>
                <button className='border border-[#83B4FF] font-semibold rounded w-24 h-9 transition duration-300 ease-in-out hover:bg-[#83B4FF] hover:text-background' onClick={RunCode}>Run</button>
                <button className='border border-[#83B4FF] font-semibold rounded w-24 h-9 transition duration-300 ease-in-out hover:bg-[#83B4FF] hover:text-background'>Submit</button>
            </div>
        </div>
        {
            config && (
                <Editor
                language="c"
                value={config[language].value}
                onChange={(value)=>setCode(value)}
                theme={theme}
                onMount={onMount}
                />
            )
        }
        {
            !config && (
                <Skeleton className='h-[90%] w-full  p-2'/>
            )
        }

    </div>
  )
}
export default CodeEditor