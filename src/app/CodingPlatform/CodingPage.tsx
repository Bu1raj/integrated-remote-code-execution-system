"use client"

import React, { useEffect , useState } from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import QuestionPage from './QuestionBox';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import CodeEditor from './CodeEditor';
import OutputBox from './OutputBox';
import { questions } from '../constants';

const Page = ({params}:{params:{questionId:string}}) => {

    const {questionId} = params;

    const [question , setQuestion] = useState<any>();
    const [message, setMessage] = useState<any>(null);
    const [ loading , setLoading] = useState<boolean>(false);



    useEffect(()=>{

        const fetchQuestion = async()=>{
            const question = questions;
            setQuestion(question);
        }

        fetchQuestion();

    } , []);

    
  return (
    <div className='w-[100vw] h-[100vh] overflow-hidden'>
        <Navbar />
        <div className='overflow-hidden h-[calc(100vh-<NavbarHeight>)]'>
          <ResizablePanelGroup
          direction="horizontal"
          className="border relative h-full"
          >
          <ResizablePanel defaultSize={50}>
          <Tabs defaultValue="Questions" className="w-full mt-2">
              <TabsList className="grid w-full grid-cols-2 pr-5">
              <TabsTrigger value="Questions">Questions</TabsTrigger>
              <TabsTrigger value="Submissions">Submissions</TabsTrigger>
              {/* <TabsTrigger value="Discussion">Discussion</TabsTrigger> */}
              </TabsList>
              
              <TabsContent value='Questions' className='w-[100%] h-[90vh]'>
                  <QuestionPage question= {question} />
                
              </TabsContent>
          </Tabs>
          
          </ResizablePanel>
          <ResizableHandle withHandle/>
          <ResizablePanel defaultSize={70}>
            <ResizablePanelGroup direction="vertical" className='mt-2'>
              <ResizablePanel defaultSize={50}>
                  <CodeEditor config={question?.config} questionId={question?.id} setMessage={setMessage} setLoading={setLoading} loading={loading}/>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={40}>
                <OutputBox examples={question?.examples} message={message} loading = {loading}/>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
        </div>
    </div>
  )
}

export default Page