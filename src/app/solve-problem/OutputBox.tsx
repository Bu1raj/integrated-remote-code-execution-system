import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@radix-ui/react-separator";


const OutputBox = ({
  examples,
  message,
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
    <div className="p-3 w-full">
      {
        <Tabs defaultValue="test-case-1" className="h-full w-full flex flex-col">
          <TabsList className="font-semibold grid grid-cols-2 w-[350px] text-center">
            {examples.map((example: any, index: number) => (
              <TabsTrigger
                value={`test-case-${index + 1}`}
                key={index}
                className="text-center font-semibold rounded"
              >
                Test Case {index + 1}
              </TabsTrigger>
            ))}
          </TabsList>

          {examples.map((example: any, index: number) => (
            <TabsContent
              value={`test-case-${index + 1}`}
              key={index}
              className="font-mono h-full"
            >
              <div className="flex flex-col gap-7 bg-subtleBackground p-5 h-full rounded">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">Input:</p>
                  <p className="w-fit  p-2 rounded-md">
                    {example.input}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">Output:</p>
                  <p className="w-fit  p-2 rounded-md">
                    {message}
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
