import { SelectMenu } from '@/components/SelectMenu'
import React ,  {useState , useEffect, useRef} from 'react'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { Skeleton } from '@/components/ui/skeleton';
import { on } from 'events';


const CodeEditor = ({config , questionId , setMessage , setLoading , loading, onSubmit}:{config:any , questionId:string , setMessage: Function , setLoading:Function , loading:boolean, onSubmit: Function}) => {
    const [language , setLanguage] = React.useState<string>('c')
    const [theme , setTheme] = React.useState<string>('vs-dark')
    const [code , setCode] = useState<string | undefined>("");

    const editorRef = useRef()
    const onMount = (editor : any) =>{
        editorRef.current = editor;
        editor.focus();
    }

    /*useEffect(()=>{
         console.log(code);
     },[code])*/

    const RunCode = () =>{
        //ADD API LOGIC LATER
        const requestBody = {
            code: code,
            language: language
        };
        console.log(requestBody);
        // Send a POST request to your backend
        fetch('http://localhost:8080/execute', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Response from server:', data);
            // Handle the response from the server
            // Example: Update UI with output or handle errors
            onSubmit(data.output);
        })
        .catch(error => {
            console.error('Error sending request:', error);
            // Handle error scenarios
        });
        console.log(code);
    }
    
    return (
        
        <div className='flex gap-2 pl-3 h-full w-full flex-col'>
            <div className='flex justify-between mr-5 pt-1  '>
                <SelectMenu topic='language' options={["c", "cpp" , "javascript" , "python"]} setState={setLanguage}/>
                <div className='flex gap-2 items-center'>
                    <button className='border border-[#83B4FF] font-semibold rounded w-24 h-9 transition duration-300 ease-in-out hover:bg-[#83B4FF] hover:text-background'>Run</button>
                    <button onClick={RunCode} className='border border-[#83B4FF] font-semibold rounded w-24 h-9 transition duration-300 ease-in-out hover:bg-[#83B4FF] hover:text-background'>Submit</button>
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