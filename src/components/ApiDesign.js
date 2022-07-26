import React from "react";  
import styles from '../style.module.css'

const ApiDesign = ({operationName,operationNameFunc}) =>{
    const ChildToParentOperationName = (e) =>{
        operationNameFunc(e)
    }
    return(
        <>
            <div>
                <label>Operation Name : </label> &nbsp;
                <input type='text' className={styles.operationName} value={operationName} onChange={ChildToParentOperationName}></input>
            </div>
           
        </>
    )
}

export default ApiDesign