import React  from 'react'
import styles from '../style.module.css'
const ReusableForm = ({formTitle,formLabel1,formLabel2,formLabel3,formLabel4,formButton1,formButton2,name,type,description,required,nameFunc,descriptionFunc,typeFunc,requiredFunc,handleAddFields,handleRemoveFields}) => {
    const ChildToParentName = (e) =>{
        nameFunc(e)
    }
 
    const ChildToParentType = (e) =>{
        typeFunc(e)
    }
 
    const ChildToParentDescription = (e) =>{
        descriptionFunc(e)
    }
 
    const ChildToParentRequired = (e) =>{
        requiredFunc(e)
    }

    return (
        <>
            <h6>{formTitle}</h6>
            <label>{formLabel1}</label>&nbsp;
            <input className={styles.urlInput} name='name' type='text' placeholder='Name..' value={name} onChange={ChildToParentName}></input><br></br><br></br>
            <label>{formLabel2}</label>&nbsp;
            <select className={styles.urlInput} name = 'type' value = {type} onChange={ChildToParentType}>
                <option>any</option>
                <option>string</option>
                <option>number</option>
                <option>boolean</option>
                <option>integer</option>
                <option>array</option>
            </select> <br></br><br></br>
            <label>{formLabel3}</label> &nbsp;
            <input className={styles.urlInput} name='description' type='text' placeholder='Description..' value={description} onChange={ChildToParentDescription}></input><br></br><br></br>
            <label>{formLabel4} :</label> &nbsp;
            <select className={styles.urlInput} name='required' value={required} onChange={ChildToParentRequired}>
                <option>true</option>
                <option>false</option>
            </select><br></br><br></br>
            <button className={styles.tabOperationFieldsBtn} type="button" onClick={()=>handleAddFields()}>{formButton1}</button> &nbsp;
            <button className={styles.tabOperationFieldsBtn} type="button" onClick={()=>handleRemoveFields()}>{formButton2}</button>
        </>
    )
}

export default ReusableForm