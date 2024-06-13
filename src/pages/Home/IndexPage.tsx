
import { useHome } from './useHome'
import "./home.css"

export const HomePage = () => {
    const { count, handelIncrement, handelDecrement, handelNegativeChange, handelPositiveChange, AddRecord, negativeRecord, positiveRecord, handelDelete, createJsonFile } = useHome()
    return (
        <>
            <h1>Dynamic Counter App</h1>
            <div>
                <button onClick={createJsonFile}>Export To Json</button>
            </div>
            <p>{count}</p>
            <div className='button-section'>
                <button onClick={handelIncrement}>Increment</button>
                <button onClick={handelDecrement}>Decrement</button>
            </div>
            
            <div className='input-section'>
                <div>
                    <label>Positive</label>
                    <input style={{ marginLeft: "15px" }} type="text" onChange={(e) => handelPositiveChange(e)} />
                </div>
                <div>
                    <label>Negative</label>
                    <input type="text" style={{ marginLeft: "5px" }} onChange={(e) => handelNegativeChange(e)} />
                </div>
           </div>
            <button onClick={AddRecord}>Add Record</button>
            <div className='record-Section'> 
                <div>

                    {positiveRecord.length > 0 ? <div>
                        <h3>Positive Records</h3>
                        {positiveRecord.map((records, index) => {
                            return (
                                <div key={index} className='record-container'>
                                    <p>{records}</p>
                                    <button onClick={() => handelDelete(records, "positive")}>Delete</button>
                                </div>
                            )
                        })}

                    </div> : ""}
                </div>
                <div>

                    {negativeRecord.length > 0 ? <div>
                        <h3>Negative Records</h3>
                        {negativeRecord.map((records, index) => {
                            return (
                                <div key={index} className='record-container'>
                                    <p>{records}</p>
                                    <button onClick={() => handelDelete(records, "negative")}>Delete</button>
                                </div>
                            )
                        })}

                    </div> : ""}
                </div>
            </div>
            

        </>

    )
}
