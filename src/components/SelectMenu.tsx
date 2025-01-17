import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectMenu({topic , options , setState}: {topic:string , options:string[] , setState: Function}) {
  return (
    <Select onValueChange={(value)=> setState(value)}>
      <SelectTrigger className="w-[180px] rounded">
        <SelectValue placeholder={`${options[0]}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
            {
                options.map((option , index) => (
                    <SelectItem key={index} value={option}>{option}</SelectItem>
                ))
            }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}