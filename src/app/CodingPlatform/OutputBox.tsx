import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


const OutputBox = ({
  examples,
  loading,
}: {
  examples: any;
  message: any;
  loading: boolean;
}) => {
  if (!examples || loading) {
    return <Skeleton className="h-[80%] w-full p-2" />;
  }

  return (
    <div className="p-2 h-full w-full">
      {
        <Tabs defaultValue="test-case-1">
          <TabsList className="font-semibold grid grid-cols-2 w-[350px] text-center rounded-xl">
            {examples.map((example: any, index: number) => (
              <TabsTrigger
                value={`test-case-${index + 1}`}
                key={index}
                className="text-center font-semibold rounded-xl"
              >
                Test Case {index + 1}
              </TabsTrigger>
            ))}
          </TabsList>
          <button>Submit</button>
          {examples.map((example: any, index: number) => (
            <TabsContent
              value={`test-case-${index + 1}`}
              key={index}
              className="font-mono pt-3"
            >
              <div className="flex gap-5 flex-wrap">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">Input:</p>
                  <p className="bg-[#83B4FF] w-fit  p-2 rounded-md">
                    {example.input}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">Output:</p>
                  <p className="bg-[#83B4FF] w-fit  p-2 rounded-md">
                    {example.output}
                  </p>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      }
    </div>
  );
};

export default OutputBox;
