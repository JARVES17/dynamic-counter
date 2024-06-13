import { useState } from "react"

export const useHome = () => {

    const [count, setCount] = useState<number>(0)
    const [negativeInput,setNegativeInput] = useState<number>(0)
    const [positoveINput, setPositiveInput] = useState<number>(0)
    const [positiveRecord,setPositiveRecord]=useState<number[]>([])
    const [negativeRecord,setNegativeRecord]=useState<number[]>([])
    

    const handelIncrement = () => {
        setCount(positoveINput===0?count+1:count+positoveINput)
    }
    const handelDecrement = () => {
         setCount(negativeInput===0?count-1:count-negativeInput)
    }
    const handelNegativeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
         if (!isNaN(parseInt(e.target.value)))
            setNegativeInput(parseInt(e.target.value))
         
    }
    const handelPositiveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isNaN(parseInt(e.target.value))) {
             setPositiveInput(parseInt(e.target.value))
        }

       
         
    }
    const AddRecord = () => {
        if (count >= 0) {
            setPositiveRecord([...positiveRecord,count])
        } else {
               setNegativeRecord([...negativeRecord,count])
            
        }
    }
    const handelDelete = (records: number, recordArray: string) => {
        if (recordArray === "negative") {
            const NewArray=negativeRecord.filter((values)=>records!==values)
            setNegativeRecord(NewArray)
        }
        if (recordArray === "positive") {
            const NewArray=positiveRecord.filter((values)=>records!==values)
            setPositiveRecord(NewArray)
        }
        
    }
    const createJsonFile = () => {
        const jsonData=`data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify({positive:positiveRecord,Negative:negativeRecord}))}`
        const link = document.createElement("a")
        link.href=jsonData
        link.download = "data.export.txt"
        link.click()
    }
    return {
        count,
        handelDecrement,
        handelIncrement,
        handelNegativeChange,
        handelPositiveChange,
        AddRecord,
        positiveRecord,
        negativeRecord,
        handelDelete,
        createJsonFile


      
  }
}
