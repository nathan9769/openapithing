import styles from '../style.module.css'
 
const OperationsForm = ({name,type,description,required,nameFunc,descriptionFunc,typeFunc,requiredFunc,handleAddFields,handleRemoveFields}) =>{
 
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
   
 
    // const[inputFields,setInputFields] = useState([
    //     {name:'',type:'',description:'',required:''}
    // ])
 
 
    // const handleChangeInput = (index,e) =>{
    //     const values = [...inputFields]
    //     values[index][e.target.name] = e.target.value
    //     setInputFields(values)
    // }
 
    // const handleAddFields = () =>{
    //     setInputFields([...inputFields,{name : '',type : '',description:'',required:''}])
    //   }
   
    //   const handleRemoveFields = (index) =>{
    //     const values = [...inputFields]
    //     values.splice(index,1)
    //     setInputFields(values)
    //   }
   
    //   const handleSubmit = (e) =>{
    //     e.preventDefault()
    //     console.log('InputFields : ' , inputFields)
    //   }
 
 
    return(
        <>
            <div>
                {/* <form onSubmit={handleSubmit}> */}
                {/* {inputFields.map((inputField,index)=>( */}
                    <div className={styles.pathParamsFormParentContainer}>
                        <div  className={styles.pathParamsFormChildContainer}>
                            <label>Name : </label>&nbsp;
                            <input name='name' type='text' placeholder='Name..' value={name} onChange={ChildToParentName}></input><br></br><br></br>
                            {/* <label>Type(Any,String,Number,Boolean) : </label>
                            <input name='type' type='text' placeholder='Type..' value={inputField.type} onChange={e => handleChangeInput(index,e)}></input> */}
                            <label>Description : </label>&nbsp;
                            <input name='description' type='text' placeholder='Description..' value={description} onChange={ChildToParentDescription}></input><br></br><br></br>
                            <label>Type :</label>&nbsp;
                            <select name = 'type' value = {type} onChange={ChildToParentType}>
                                <option>Any</option>
                                <option>String</option>
                                <option>Boolean</option>
                                <option>Array</option>
                                <option>Number</option>
                                <option>Integer</option>
                            </select><br></br><br></br>
                            <label>Required ? : </label> &nbsp;
                            <select name='required' placeholder='Yes or No..' value={required} onChange={ChildToParentRequired}>
                                <option>yes</option>
                                <option>no</option>
                            </select><br></br><br></br>
                            {/* <input name='required' type='text' placeholder='Yes or No..' value={required} onChange={ChildToParentRequired}></input><br></br><br></br> */}
                            <button type='button' onClick={()=>handleAddFields()}>Add</button> &nbsp;
                            <button type='button' onClick={()=>handleRemoveFields()}>Remove</button><br></br><br></br>
                        </div>
                    </div>
                {/* ))} */}
                {/* <button type='button' onClick={handleSubmit}>Send !</button> */}
                {/* </form> */}
            </div>
        </>
    )
}
 
export default OperationsForm