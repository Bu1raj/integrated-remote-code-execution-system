import { SelectMenu } from '@/components/SelectMenu'
import React ,  {useState , useEffect, useRef} from 'react'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

const CodeEditor = ({config , questionId , setMessage , setLoading , loading}:{config:any , questionId:string , setMessage: Function , setLoading:Function , loading:boolean}) => {

    const [language , setLanguage] = React.useState<string>('c')
    const [theme , setTheme] = React.useState<string>('vs-dark')
    const [code , setCode] = useState<string | undefined>("");

    const editorRef = useRef()
    const onMount = (editor) =>{
        editorRef.current = editor;
        editor.focus();
    }
    
  return (
    
    <div className='flex gap-2 pl-3 h-full w-full flex-col'>
        <div className='flex justify-between mr-5 pt-1  '>
            <SelectMenu topic='language' options={["c", "cpp" , "javascript" , "python"]} setState={setLanguage}/>
            <div className='flex gap-2 items-center'>
                <button className='border border-[#83B4FF] font-semibold rounded w-24 h-9 transition duration-300 ease-in-out hover:bg-[#83B4FF] hover:text-background'>Run</button>
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