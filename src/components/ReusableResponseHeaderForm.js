import React from "react";
import styles from '../style.module.css'

const ReusableResponseHeaderForm = ({formTitle,formLabel1,formLabel2,formLabel3,name,type,description,nameFunc,typeFunc,descriptionFunc,handleAddFields,handleRemoveFields}) =>{
   
    const ChildToParentName = (e) =>{
        nameFunc(e)
    }
 
    const ChildToParentType = (e) =>{
        typeFunc(e)
    }
    const ChildToParentDescription = (e) =>{
        descriptionFunc(e)
    }
    
    return(
        <>
            <h6>{formTitle}</h6>
            <label>{formLabel1}</label>
            <input className={styles.urlInput} name='name' type='text' value={name} onChange={ChildToParentName}></input><br></br><br></br>
            <label>{formLabel2}</label>
            <select className={styles.urlInput} name='type' value={type} onChange={ChildToParentType}>
                <option>any</option>
                <option>string</option>
                <option>boolean</option>
                <option>array</option>
                <option>integer</option>
                <option>number</option>
            </select><br></br><br></br>
            <label>{formLabel3}</label>
            <input className={styles.urlInput} name='description' type='text' value={description} onChange={ChildToParentDescription}></input><br></br><br></br>
            <button type='button' className={styles.tabOperationFieldsBtn} onClick={()=>handleAddFields()}>Add Response Header</button>
            <button type='button' className={styles.tabOperationFieldsBtn} onClick={()=>handleRemoveFields()}>Remove Response Header</button>
        </>
    )
}
 
export default ReusableResponseHeaderForm