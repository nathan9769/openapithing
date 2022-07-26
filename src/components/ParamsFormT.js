import React, { useState , useEffect} from 'react'
import styles from '../style.module.css'
import OperationsForm from './OperationsForm'
import { Button, Tab, Tabs } from "react-bootstrap";
import ApiDesign from './ApiDesign';
import ReusableResponseForm from './ReusableResponseForm';
import ReusableResponseHeaderForm from './ReusableResponseHeaderForm';
// import TabGetOpAddHeaderForm from './TabGet/TabGetOpAddHeaderForm';
// import TabGetOpAddQueryParamForm from './TabGet/TabGetOpAddQueryParamForm'
// import TabGetOpAddCookieForm from './TabGet/TabGetOpAddCookieForm';
// import TabPostOpAddHeaderForm from './TabPost/TabPostOpAddHeaderForm';
// import TabPostOpAddQueryParamForm from './TabPost/TabPostOpAddQueryParamForm';
// import TabPostOpAddCookieForm from './TabPost/TabPostOpAddCookieForm';
// import TabPutOpAddHeaderForm from './TabPut/TabPutOpAddHeaderForm';
// import TabPutOpAddQueryParamForm from './TabPut/TabPutOpAddQueryParamForm';
// import TabPutOpAddCookieForm from './TabPut/TabPutOpAddCookieForm';
import ReusableForm from './ReusableForm';

const ParamsFormT = () => {
    const[isToggled,setIsToggled] = useState(false)
    const[operationName,setOperationName] = useState('')
    const [file, setFile] = useState();
    const[url,setUrl] = useState('')
    const[endpoint,setEndpoint] = useState('')
    const[formData,setFormData] = useState(
      [{name:'',description:'',type:'',required:''}]
    )
    
    

    const[operationId,setOperationId] = useState('')
    const[description,setDescription] = useState('')
    const[getOperationAddHeaderFormData,setGetOperationAddHeaderFormData] = useState(
      [{name:'',description:'',type:'',required:''}]
    )
    const[getOperationAddQueryParamFormData,setGetOperationAddQueryParamFormData] = useState(
        [{name:'',description:'',type:'',required:''}]
    )
    const[getOperationAddCookieFormData,setGetOperationAddCookieFormData] = useState(
        [{name:'',description:'',type:'',required:''}]
    )
    const[getOperationAddResponseFormData,setGetOperationAddResponseFormData] = useState(
        [{type:'',description:'',format:'',headers:[]}]
    )
    const objValsGetOperationId = Object.values(operationId)
    const objValsGetOperationDescription = Object.values(description)
    
    

    // const[getOperationAddResponseFormData,setGetOperationAddResponseFormData] = useState(
    //     [{type:'',description:'',format:'',headers:[{name:'',type:'',description:''}]}]
    // )
    const[getOperationAddResponseAddHeaderFormData,setGetOperationAddResponseAddHeaderFormData] = useState(
        [{name:'',type:'',description:''}]
    )

    const [saveState, setSaveState] = useState([])
 
    const[postOperationId,setPostOperationId] = useState('')
    const[postOperationDescription,setPostOperationDescription] = useState('')
    const[postOperationAddHeaderFormData,setPostOperationAddHeaderFormData] = useState(
        [{name:'',description:'',type:'',required:''}]
      )
    const[postOperationAddQueryParamFormData,setPostOperationAddQueryParamFormData] = useState(
          [{name:'',description:'',type:'',required:''}]
      )
    const[postOperationAddCookieFormData,setPostOperationAddCookieFormData] = useState(
        [{name:'',description:'',type:'',required:''}]
        )
    const[postOperationAddResponseFormData,setPostOperationAddResponseFormData] = useState(
            [{type:'',description:'',format:'',headers:[]}]
        )
    const[postOperationAddResponseAddHeaderFormData,setPostOperationAddResponseAddHeaderFormData] = useState(
            [{name:'',type:'',description:''}]
        )
        const objValsPostOperationId = Object.values(postOperationId)
        const objValsPostOperationDescription = Object.values(postOperationDescription)
   
      const[putOperationId,setPutOperationId] = useState('')
      const[putOperationDescription,setPutOperationDescription] = useState('')
      const[putOperationAddHeaderFormData,setPutOperationAddHeaderFormData] = useState(
          [{name:'',description:'',type:'',required:''}]
        )
        const[putOperationAddQueryParamFormData,setPutOperationAddQueryParamFormData] = useState(
            [{name:'',description:'',type:'',required:''}]
        )
        const[putOperationAddCookieFormData,setPutOperationAddCookieFormData] = useState(
            [{name:'',description:'',type:'',required:''}]
        )
        const[putOperationAddResponseFormData,setPutOperationAddResponseFormData] = useState(
            [{type:'',description:'',format:'',headers:[]}]
        )
    const[putOperationAddResponseAddHeaderFormData,setPutOperationAddResponseAddHeaderFormData] = useState(
            [{name:'',type:'',description:''}]
        )
        const objValsPutOperationId = Object.values(putOperationId)
        const objValsPutOperationDescription = Object.values(putOperationDescription)
   
    
    
    
 
   
  
    const[isToggledGet,setIsToggledGet] = useState(false)
    const[isToggledPost,setIsToggledPost] = useState(false)
    const[isToggledPut,setIsToggledPut] = useState(false)

    const[isToggledGetHeaderBtn,setIsToggledGetHeaderBtn] = useState(false)
    const[isToggledGetQueryParamBtn,setIsToggledQueryParamBtn] = useState(false)
    const[isToggledGetCookieBtn,setIsToggledGetCookieBtn] = useState(false)
    const[isToggledGetSecurityBtn,setIsToggledGetSecurityBtn] = useState(false)
    const[isToggledGetResponseBtn,setIsToggledGetResponseBtn] = useState(false)
    const[isToggledGetAddResponseAddHeaderBtn,setIsToggledGetAddResponseAddHeaderBtn] = useState(false)


    const[isToggledPostHeaderBtn,setIsToggledPostHeaderBtn] = useState(false)
    const[isToggledPostQueryParamBtn,setIsToggledPostQueryParamBtn] = useState(false)
    const[isToggledPostCookieBtn,setIsToggledPostCookieBtn] = useState(false)
    const[isToggledPostSecurityBtn,setIsToggledPostSecurityBtn] = useState(false)
    const[isToggledPostResponseBtn,setIsToggledPostResponseBtn] = useState(false)
    const[isToggledPostAddResponseAddHeaderBtn,setIsToggledPostAddResponseAddHeaderBtn] = useState(false)

    const[isToggledPutHeaderBtn,setIsToggledPutHeaderBtn] = useState(false)
    const[isToggledPutQueryParamBtn,setIsToggledPutQueryParamBtn] = useState(false)
    const[isToggledPutCookieBtn,setIsToggledPutCookieBtn] = useState(false)
    const[isToggledPutSecurityBtn,setIsToggledPutSecurityBtn] = useState(false)
    const[isToggledPutResponseBtn,setIsToggledPutResponseBtn] = useState(false)
    const[isToggledPutAddResponseAddHeaderBtn,setIsToggledPutAddResponseAddHeaderBtn] = useState(false)
  
    const handleChangeOperationName = (e) =>{
        setOperationName(e.target.value)
    }        
    const handleChangeUrl = (e) =>{
      setUrl(e.target.value)
    }

    const  handleChangeEndpoint = (e) =>{
      setEndpoint(e.target.value)
    }
    const handleChangeOperationId = (e) =>{
      setOperationId(e.target.value)
    }
    const handleChangeDescription = (e)=>{
      setDescription(e.target.value)
    }
    const handleChangePostOperationId = (e) =>{
        setPostOperationId(e.target.value)
    }
    const handleChangePostOperationDescription = (e) =>{
        setPostOperationDescription(e.target.value)
    }
    const handleChangePutOperationId = (e) =>{
        setPutOperationId(e.target.value)
    }
    const handleChangePutOperationDescription = (e) =>{
        setPutOperationDescription(e.target.value)
    }

    const handleFile = (e) =>{
        setFile(e.target.files[0])
    }

    useEffect(() => {
        const fileReader = new FileReader();
        if (file) {
          fileReader.onload = (e) => {
            if (e.target.result) {
              const data = JSON.parse(e.target.result);
            //   setFirstName(data.firstName);
            //   setLastName(data.lastName);
                setOperationName(data.operationName)
                setUrl(data.url)
                setEndpoint(data.endpoint)
                // setFormData(data.formData)
                setOperationId(data.operationId)
                setDescription(data.description)
                setGetOperationAddHeaderFormData(data.getOperationAddHeaderFormData)
                setGetOperationAddQueryParamFormData(data.getOperationAddQueryParamFormData)
                setGetOperationAddCookieFormData(data.getOperationAddCookieFormData)
                setGetOperationAddResponseFormData(data.getOperationAddResponseFormData)
                setPostOperationId(data.postOperationId)
                setPostOperationDescription(data.postOperationDescription)
                setPostOperationAddHeaderFormData(data.postOperationAddHeaderFormData)
                setPostOperationAddQueryParamFormData(data.postOperationAddQueryParamFormData)
                setPostOperationAddCookieFormData(data.postOperationAddCookieFormData)
                setPostOperationAddResponseFormData(data.postOperationAddResponseFormData)
                setPutOperationAddHeaderFormData(data.putOperationAddHeaderFormData)
                setPutOperationAddQueryParamFormData(data.putOperationAddQueryParamFormData)
                setPutOperationAddCookieFormData(data.putOperationAddCookieFormData)
                setPutOperationAddResponseFormData(data.putOperationAddResponseFormData)

            }
          };
          fileReader.readAsText(file);
        }
      }, [file]);

    const handleInputChange = (e, setInput) => setInput(e.target.value);
    // var jsonData = {operationName,url,endpoint,operationId,description,getOperationAddHeaderFormData,getOperationAddQueryParamFormData,getOperationAddCookieFormData,getOperationAddResponseFormData,postOperationId,postOperationDescription,postOperationAddHeaderFormData,postOperationAddQueryParamFormData,postOperationAddCookieFormData,postOperationAddResponseFormData,postOperationAddResponseAddHeaderFormData,putOperationId,putOperationDescription,putOperationAddHeaderFormData,putOperationAddQueryParamFormData,putOperationAddCookieFormData}
    const handleSubmit = (e) =>{
       
       
        getOperationAddResponseFormData.forEach((formData)=>{
            formData.headers.push(...getOperationAddResponseAddHeaderFormData)
        })
        // console.log(objValsGetOperationId)
        // console.log(objValsGetOperationDescription)
    
        postOperationAddResponseFormData.forEach((formData)=>{
            formData.headers.push(...postOperationAddResponseAddHeaderFormData)
        })
        putOperationAddResponseFormData.forEach((formData)=>{
            formData.headers.push(...putOperationAddResponseAddHeaderFormData)
        })

        console.log(JSON.stringify({
            operationName,
            url,
            endpoint,
            operationId,
            description,
            getOperationAddHeaderFormData,
            getOperationAddQueryParamFormData,
            getOperationAddCookieFormData,
            getOperationAddResponseFormData,
            postOperationId,
            postOperationDescription,
            postOperationAddHeaderFormData,
            postOperationAddQueryParamFormData,
            postOperationAddCookieFormData,
            postOperationAddResponseFormData,
            postOperationAddResponseAddHeaderFormData,
            putOperationId,
            putOperationDescription,
            putOperationAddHeaderFormData,
            putOperationAddQueryParamFormData,putOperationAddCookieFormData},null,4))
        
        alert('Form Submitted , You can Download the File .')
        
        

        
      e.preventDefault()
        // if(objValsGetOperationDescription.length === 0 || objValsGetOperationId.length === 0 || objValsPostOperationId.length === 0 || objValsPostOperationDescription === 0){
        //         jsonData = {operationName,url,endpoint,putOperationId,putOperationDescription,putOperationAddHeaderFormData,putOperationAddQueryParamFormData,putOperationAddCookieFormData}
        //         console.log(JSON.stringify(jsonData,null,4)) 
        // }
        // for(let i=0;i<=objValsPathParam.length;i++)
        // {
        //     if(objValsPathParam[i]==='')
        //     {
        //         flagObjVals = true
        //     }
        // }
        // if(flagObjVals){
        //     console.log(JSON.stringify({
        //         operationName,
        //         url,
        //         endpoint,
        //         operationId,
        //         description,
        //         getOperationAddHeaderFormData,
        //         getOperationAddQueryParamFormData,
        //         getOperationAddCookieFormData,
        //         getOperationAddResponseFormData,
        //         postOperationId,
        //         postOperationDescription,
        //         postOperationAddHeaderFormData,
        //         postOperationAddQueryParamFormData,
        //         postOperationAddCookieFormData,
        //         postOperationAddResponseFormData,
        //         postOperationAddResponseAddHeaderFormData,
        //         putOperationId,
        //         putOperationDescription,
        //         putOperationAddHeaderFormData,
        //         putOperationAddQueryParamFormData,putOperationAddCookieFormData},null,4)) 
        // }
        
        
        // else{
        //     console.log(JSON.stringify({
        //         operationName,
        //         url,
        //         endpoint,
        //         formData,
        //         operationId,
        //         description,
        //         getOperationAddHeaderFormData,
        //         getOperationAddQueryParamFormData,
        //         getOperationAddCookieFormData,
        //         getOperationAddResponseFormData,
        //         getOperationAddResponseAddHeaderFormData,
        //         postOperationId,
        //         postOperationDescription,
        //         postOperationAddHeaderFormData,
        //         postOperationAddQueryParamFormData,
        //         postOperationAddCookieFormData,
        //         putOperationId,
        //         putOperationDescription,
        //         putOperationAddHeaderFormData,
        //         putOperationAddQueryParamFormData,putOperationAddCookieFormData},null,4))
        // }
        
        
       
    }

    // Common Handler to handle TabFormOperations(GET,POST,PUT) data
    const handleFormData = (e,index,data,setData) => {
        const values = [...data]
        values[index][e.target.name] = e.target.value
        setData(values)
    }

    const handleChangeInput = (index,e) =>{
      const values = [...formData]
      values[index][e.target.name] = e.target.value
      setFormData(values)
    }

    
 
    const handleChangeInputGetAddHeaderOperation = (index,e)=>{
        const values = [...getOperationAddHeaderFormData]
        values[index][e.target.name] = e.target.value
        setGetOperationAddHeaderFormData(values)
    }
    const handleChangeInputGetQueryParamOperation = (index,e)=>{
        const values = [...getOperationAddQueryParamFormData]
        values[index][e.target.name] = e.target.value
        setGetOperationAddQueryParamFormData(values)
    }
    const handleChangeInputGetAddCookieOperation = (index,e)=>{
        const values = [...getOperationAddCookieFormData]
        values[index][e.target.name] = e.target.value
       setGetOperationAddCookieFormData(values)
    }
    const handleChangeInputGetAddResponseOperation = (index,e)=>{
        const values = [...getOperationAddResponseFormData]
        values[index][e.target.name] = e.target.value
        setGetOperationAddResponseFormData(values)
    }

    const handleChangeInputGetAddResponseAddHeaderOperation = (index,e)=>{
        const values = [...getOperationAddResponseAddHeaderFormData]
        values[index][e.target.name] = e.target.value
        setGetOperationAddResponseAddHeaderFormData(values)
    }
 
    const handleChangeInputPostAddHeaderOperation = (index,e)=>{
        const values = [...postOperationAddHeaderFormData]
        values[index][e.target.name] = e.target.value
        setPostOperationAddHeaderFormData(values)
    }
    const handleChangeInputPostAddQueryParamOperation = (index,e)=>{
        const values = [...postOperationAddQueryParamFormData]
        values[index][e.target.name] = e.target.value
        setPostOperationAddQueryParamFormData(values)
    }
    const handleChangeInputPostAddCookieOperation = (index,e)=>{
        const values = [...postOperationAddCookieFormData]
        values[index][e.target.name] = e.target.value
        setPostOperationAddCookieFormData(values)
    }
    const handleChangeInputPostAddResponseOperation = (index,e)=>{
        const values = [...postOperationAddResponseFormData]
        values[index][e.target.name] = e.target.value
        setPostOperationAddResponseFormData(values)
    }

    const handleChangeInputPostAddResponseAddHeaderOperation = (index,e)=>{
        const values = [...postOperationAddResponseAddHeaderFormData]
        values[index][e.target.name] = e.target.value
        setPostOperationAddResponseAddHeaderFormData(values)
    }
 
    const handleChangeInputPutAddHeaderOperation = (index,e)=>{
        const values = [...putOperationAddHeaderFormData]
        values[index][e.target.name] = e.target.value
        setPutOperationAddHeaderFormData(values)
    }
    const handleChangeInputPutAddQueryParamOperation = (index,e)=>{
        const values = [...putOperationAddQueryParamFormData]
        values[index][e.target.name] = e.target.value
        setPutOperationAddQueryParamFormData(values)
    }
    const handleChangeInputPutAddCookieOperation = (index,e)=>{
        const values = [...putOperationAddCookieFormData]
        values[index][e.target.name] = e.target.value
        setPutOperationAddCookieFormData(values)
    }
    const handleChangeInputPutAddResponseOperation = (index,e)=>{
        const values = [...putOperationAddResponseFormData]
        values[index][e.target.name] = e.target.value
        setPutOperationAddResponseFormData(values)
    }
 
    const handleChangeInputPutAddResponseAddHeaderOperation = (index,e)=>{
        const values = [...putOperationAddResponseAddHeaderFormData]
        values[index][e.target.name] = e.target.value
        setPutOperationAddResponseAddHeaderFormData(values)
    }
    
 
    const handleAddFields = () =>{
      setFormData([...formData,{name:'',description:'',type:'',required:''}])
    }
    const handleAddFieldsGetAddHeaderOperation = () =>{
      setGetOperationAddHeaderFormData([...getOperationAddHeaderFormData,{name:'',description:'',type:'',required:''}])
    }
    const handleAddFieldsGetQueryParamOperation = () =>{
        setGetOperationAddQueryParamFormData([...getOperationAddQueryParamFormData,{name:'',description:'',type:'',required:''}])
    }
    const handleAddFieldsGetCookieOperation = () =>{
        setGetOperationAddCookieFormData([...getOperationAddCookieFormData,{name:'',description:'',type:'',required:''}])
    }
    const handleAddFieldsGetResponseOperation = () =>{
        setGetOperationAddResponseFormData([...getOperationAddResponseFormData,{type:'',description:'',format:'',headers:[]}])
    }
    // const handleAddFieldsGetResponseOperation = () =>{
    //     setGetOperationAddResponseFormData([...getOperationAddResponseFormData,{type:'',description:'',format:'',headers:[{name:'',type:'',description:''}]}])
    // }
    const handleAddFieldsGetResponseAddHeaderOperation = () =>{
        setGetOperationAddResponseAddHeaderFormData([...getOperationAddResponseAddHeaderFormData,{name:'',type:'',description:''}])
    }
    const handleAddFieldsPostAddHeaderOperation = () =>{
        setPostOperationAddHeaderFormData([...postOperationAddHeaderFormData,{name:'',description:'',type:'',required:''}])
    }
    const handleAddFieldsPostAddQueryParamOperation = () =>{
        setPostOperationAddQueryParamFormData([...postOperationAddQueryParamFormData,{name:'',description:'',type:'',required:''}])
    }
    const handleAddFieldsPostCookieOperation = () =>{
        setPostOperationAddCookieFormData([...postOperationAddCookieFormData,{name:'',description:'',type:'',required:''}])
    }
    const handleAddFieldsPostResponseOperation = () =>{
        setPostOperationAddResponseFormData([...postOperationAddResponseFormData,{type:'',description:'',format:'',headers:[]}])
    }
    const handleAddFieldsPostResponseAddHeaderOperation = () =>{
        setPostOperationAddResponseAddHeaderFormData([...postOperationAddResponseAddHeaderFormData,{name:'',type:'',description:''}])
    }
    const handleAddFieldsPutAddHeaderOperation = () =>{
        setPutOperationAddHeaderFormData([...putOperationAddHeaderFormData,{name:'',description:'',type:'',required:''}])
    }
    const handleAddFieldsPutAddQueryParamOperation = () =>{
        setPutOperationAddHeaderFormData([...putOperationAddQueryParamFormData,{name:'',description:'',type:'',required:''}])
    }
    const handleAddFieldsPutCookieOperation = () =>{
        setGetOperationAddCookieFormData([...putOperationAddCookieFormData,{name:'',description:'',type:'',required:''}])
    }
    const handleAddFieldsPutResponseOperation = () =>{
        setPutOperationAddResponseFormData([...putOperationAddResponseFormData,{type:'',description:'',format:'',headers:[]}])
    }
    const handleAddFieldsPutResponseAddHeaderOperation = () =>{
        setPutOperationAddResponseAddHeaderFormData([...putOperationAddResponseAddHeaderFormData,{name:'',type:'',description:''}])
    }
 
    const handleRemoveFields = (index) =>{
      const values = [...formData]
      values.splice(index,1)
      setFormData(values)
    }
    const handleRemoveFieldsGetAddHeaderOperation = (index) =>{
        const values = [...getOperationAddHeaderFormData]
        values.splice(index,1)
        setGetOperationAddHeaderFormData(values)
    }
    const handleRemoveFieldsGetQueryParamOperation = (index)=>{
        const values = [...getOperationAddQueryParamFormData]
        values.splice(index,1)
        setGetOperationAddQueryParamFormData(values)
    }
    const handleRemoveFieldsGetAddCookieOperation = (index)=>{
        const values = [...getOperationAddCookieFormData]
        values.splice(index,1)
        setGetOperationAddCookieFormData(values)
    }
    const handleRemoveFieldsGetAddResponseOperation = (index)=>{
        const values = [...getOperationAddResponseFormData]
        values.splice(index,1)
        setGetOperationAddResponseFormData(values)
    }
    const handleRemoveFieldsGetAddResponseAddHeaderOperation = (index)=>{
        const values = [...getOperationAddResponseAddHeaderFormData]
        values.splice(index,1)
        setGetOperationAddResponseAddHeaderFormData(values)
    }
    
    const handleRemoveFieldsPostAddHeaderOperation = (index) =>{
        const values = [...postOperationAddHeaderFormData]
        values.splice(index,1)
        setPostOperationAddHeaderFormData(values)
    }
    const handleRemoveFieldsPostAddQueryParamOperation = (index) =>{
        const values = [...postOperationAddQueryParamFormData]
        values.splice(index,1)
        setPostOperationAddQueryParamFormData(values)
    }
    const handleRemoveFieldsPostAddCookieOperation = (index)=>{
        const values = [...postOperationAddCookieFormData]
        values.splice(index,1)
        setPostOperationAddCookieFormData(values)
    }
    const handleRemoveFieldsPostAddResponseOperation = (index)=>{
        const values = [...postOperationAddResponseFormData]
        values.splice(index,1)
        setPostOperationAddResponseFormData(values)
    }
    const handleRemoveFieldsPostAddResponseAddHeaderOperation = (index)=>{
        const values = [...postOperationAddResponseAddHeaderFormData]
        values.splice(index,1)
        setPostOperationAddResponseAddHeaderFormData(values)
    }

    const handleRemoveFieldsPutAddHeaderOperation = (index) =>{
        const values = [...putOperationAddHeaderFormData]
        values.splice(index,1)
        setPutOperationAddHeaderFormData(values)
    }
    const handleRemoveFieldsPutAddQueryParamOperation = (index) =>{
        const values = [...putOperationAddQueryParamFormData]
        values.splice(index,1)
        setPutOperationAddQueryParamFormData(values)
    }
    const handleRemoveFieldsPutAddCookieOperation = (index) =>{
        const values = [...putOperationAddCookieFormData]
        values.splice(index,1)
        setPutOperationAddCookieFormData(values)
    }
    const handleRemoveFieldsPutAddResponseOperation = (index)=>{
        const values = [...putOperationAddResponseFormData]
        values.splice(index,1)
        setPutOperationAddResponseFormData(values)
    }
    const handleRemoveFieldsPutAddResponseAddHeaderOperation = (index)=>{
        const values = [...putOperationAddResponseAddHeaderFormData]
        values.splice(index,1)
        setPutOperationAddResponseAddHeaderFormData(values)
    }

 
  return (
    <div className={styles.paramFormsContainer}>
        
      <form onSubmit={handleSubmit}>
      <input type="file" id="file" onChange={handleFile} accept=".json" /><br></br><br></br>
        <ApiDesign
        operationName={operationName}
        operationNameFunc={(e)=>handleChangeOperationName(e)}
        >
        </ApiDesign><br></br>
        {/* <input type='text' name='url' placeholder='Url..' value={url} onChange={handleChangeUrl}></input>
        <input type='text' name='endpoint' placeholder='Endpoint...' value={endpoint} style={{flex : 1 }} onChange={handleChangeEndpoint}></input> */}
        <input type='text' className={styles.urlInput} name='url' placeholder='Url..' value={url} onChange={e => handleInputChange(e, setUrl)}></input>
        <input type='text' className={styles.urlInput} name='endpoint' placeholder='Endpoint...' value={endpoint} style={{flex : 1 }} onChange={e => handleInputChange(e, setEndpoint)}></input>

        <button type='button' onClick={()=>setIsToggled(!isToggled)} className={styles.pathParamFormsBtn}>Path Params</button>
        {formData.map((formData,index)=>(
          <div key={index} style={{marginLeft : '-60px'}}>
            {isToggled && <OperationsForm name={formData.name} description={formData.description} type={formData.type} required={formData.required} handleAddFields={handleAddFields} nameFunc={e =>handleChangeInput(index,e)} descriptionFunc={e =>handleChangeInput(index,e)} typeFunc={e =>handleChangeInput(index,e)} requiredFunc={e =>handleChangeInput(index,e)}  handleRemoveFields={handleRemoveFields}></OperationsForm>}
        <br></br><br></br>
          </div>
        ))}
        <div className={styles.tabForms}>
                <Tabs defaultActiveKey="first">
 
                    <Tab eventKey="first" title="GET">
                        <div style={{ textAlign : 'left' , marginTop : '50px'}}>
                            <Button className={styles.tabOperationBtn} type="button"  onClick={()=>setIsToggledGet(!isToggledGet)}>+ GET Operation</Button>
                        </div>
                        <div>
                            {isToggledGet &&
                         
                            <div className={styles.GetOperation}>
                                <div>
                                    {/* <label>Operation ID : </label><input name='operationId' value={operationId} onChange={handleChangeOperationId} size={40} type='text' placeholder="operation-id"></input>
                                    <label>Description : </label><input name='description' value={description} onChange={handleChangeDescription} size={40} type='text' placeholder='Enter any description'></input> */}
                                    <label>Operation ID : </label><input className={styles.urlInput} name='operationId' value={operationId} onChange={e => handleInputChange(e, setOperationId)} size={40} type='text' placeholder="operation-id"></input>
                                    <label>Description : </label><input className={styles.urlInput} name='description' value={description} onChange={e => handleInputChange(e, setDescription)} size={40} type='text' placeholder='Enter any description'></input>
                                    <hr></hr>
                                    <button type="button" className={styles.tabOperationBtn} onClick={()=>setIsToggledGetHeaderBtn(!isToggledGetHeaderBtn)}>+ Header</button> 
                                    <button type="button" className={styles.tabOperationBtn} onClick={()=> setIsToggledQueryParamBtn(!isToggledGetQueryParamBtn)}>+ Query Param</button> 
                                    <button type='button' className={styles.tabOperationBtn} onClick={()=>setIsToggledGetCookieBtn(!isToggledGetCookieBtn)}>+ Cookie</button>  
                                    <button type="button" className={styles.tabOperationBtn} onClick={()=>setIsToggledGetSecurityBtn(!isToggledGetSecurityBtn)}>+ Security</button> 
                                    <button type='button' className={styles.tabOperationBtn} onClick={()=>setIsToggledGetResponseBtn(!isToggledGetResponseBtn)}>+ Responses</button> 
                                    <br></br><br></br>
                                    {isToggledGetHeaderBtn &&
                                    getOperationAddHeaderFormData.map((formData,index)=>(
                                        <div key={index} className={styles.getHeadersFormContainer}>

                                            {/* GET OPERATION , ADD HEADERS FORM */}
                                            <ReusableForm
                                            formTitle={'Headers :'}
                                            formLabel1={'Name : '}
                                            formLabel2={'Type : '}
                                            formLabel3={'Description : '}
                                            formLabel4={'Required Field ? '}
                                            formButton1={'Add'}
                                            formButton2={'Remove'}
                                            name={formData.name}
                                            type={formData.type}
                                            description={formData.description}
                                            required ={formData.required}
                                            nameFunc={(e)=>handleFormData(e,index,getOperationAddHeaderFormData,setGetOperationAddHeaderFormData)}
                                            typeFunc={(e)=>handleFormData(e,index,getOperationAddHeaderFormData,setGetOperationAddHeaderFormData)}
                                            descriptionFunc={(e)=>handleFormData(e,index,getOperationAddHeaderFormData,setGetOperationAddHeaderFormData)}
                                            requiredFunc={(e)=>handleFormData(e,index,getOperationAddHeaderFormData,setGetOperationAddHeaderFormData)}
                                            handleAddFields={handleAddFieldsGetAddHeaderOperation}
                                            handleRemoveFields={handleRemoveFieldsGetAddHeaderOperation}
                                            ></ReusableForm>
                                        </div>
                                    ))
                                     
                                    }
                                    <br></br>
                                    {isToggledGetQueryParamBtn &&
                                    getOperationAddQueryParamFormData.map((formData,index)=>(
                                        <div key={index}>

                                            {/* GET OPERATION , ADD QUERY PARAMS FORM */}
                                            <ReusableForm
                                            formTitle={'Query Params :'}
                                            formLabel1={'Name : '}
                                            formLabel2={'Type : '}
                                            formLabel3={'Description : '}
                                            formLabel4={'Required Field ? '}
                                            formButton1={'Add'}
                                            formButton2={'Remove'}
                                            name={formData.name}
                                            type={formData.type}
                                            description={formData.description}
                                            required ={formData.required}
                                            nameFunc={(e)=>handleFormData(e,index,getOperationAddQueryParamFormData,setGetOperationAddQueryParamFormData)}
                                            typeFunc={(e)=>handleFormData(e,index,getOperationAddQueryParamFormData,setGetOperationAddQueryParamFormData)}
                                            descriptionFunc={(e)=>handleFormData(e,index,getOperationAddQueryParamFormData,setGetOperationAddQueryParamFormData)}
                                            requiredFunc={(e)=>handleFormData(e,index,getOperationAddQueryParamFormData,setGetOperationAddQueryParamFormData)}
                                            handleAddFields={handleAddFieldsGetQueryParamOperation}
                                            handleRemoveFields={handleRemoveFieldsGetQueryParamOperation}
                                            ></ReusableForm>

                                        </div>
                                    )) 
                                    }
                                    <br></br>
                                    {isToggledGetCookieBtn &&
                                    getOperationAddCookieFormData.map((formData,index)=>(
                                        <div key={index}>
                                            {/* GET OPERATION , ADD COOKIES FORM */}
                                            <ReusableForm
                                            formTitle={'Cookie :'}
                                            formLabel1={'Name : '}
                                            formLabel2={'Type : '}
                                            formLabel3={'Description : '}
                                            formLabel4={'Required Field ? '}
                                            formButton1={'Add'}
                                            formButton2={'Remove'}
                                            name={formData.name}
                                            type={formData.type}
                                            description={formData.description}
                                            required ={formData.required}
                                            nameFunc={(e)=>handleFormData(e,index,getOperationAddCookieFormData,setGetOperationAddCookieFormData)}
                                            typeFunc={(e)=>handleFormData(e,index,getOperationAddCookieFormData,setGetOperationAddCookieFormData)}
                                            descriptionFunc={(e)=>handleFormData(e,index,getOperationAddCookieFormData,setGetOperationAddCookieFormData)}
                                            requiredFunc={(e)=>handleFormData(e,index,getOperationAddCookieFormData,setGetOperationAddCookieFormData)}
                                            handleAddFields={handleAddFieldsGetCookieOperation}
                                            handleRemoveFields={handleRemoveFieldsGetAddCookieOperation}
                                            ></ReusableForm>
                                        </div>
                                    ))
                                        
                                    }
                                    <br></br>

                                    {isToggledGetSecurityBtn && <h6>Security Button Clicked</h6>}
                                    <br></br>
                                    {isToggledGetResponseBtn &&
                                    getOperationAddResponseFormData.map((formData,index)=>(
                                        <div key={index}>
                                            <ReusableResponseForm
                                            formTitle={'Response'}
                                            formLabel1={'Type: '}
                                            formLabel2={'Description: '}
                                            formLabel3={'Format: '}
                                            type={formData.type}
                                            description={formData.description}
                                            format={formData.format}
                                            typeFunc={(e)=>handleFormData(e,index,getOperationAddResponseFormData,setGetOperationAddResponseFormData)}
                                            descriptionFunc={(e)=>handleFormData(e,index,getOperationAddResponseFormData,setGetOperationAddResponseFormData)}
                                            formatFunc={(e)=>handleFormData(e,index,getOperationAddResponseFormData,setGetOperationAddResponseFormData)}
                                            handleAddFields={handleAddFieldsGetResponseOperation}
                                            handleRemoveFields={handleRemoveFieldsGetAddResponseOperation}
                                            />
                                        {/* </div>))} */}
                                            <br></br>

                                            {isToggledGetResponseBtn && <button type='button' className={styles.tabOperationFieldsBtn} onClick={()=>setIsToggledGetAddResponseAddHeaderBtn(!isToggledGetAddResponseAddHeaderBtn)}>+ Header</button>}
                                            
                                            {isToggledGetAddResponseAddHeaderBtn && getOperationAddResponseAddHeaderFormData.map((formData,index)=>(
                                            <div key={index}>
                                                <ReusableResponseHeaderForm
                                                formTitle={'Response Headers'}
                                                formLabel1={'Name : '}
                                                formLabel2={'Type : '}
                                                formLabel3={'Description :'}
                                                name={formData.name}
                                                type={formData.type}
                                                description={formData.description}
                                                nameFunc={(e)=>handleFormData(e,index,getOperationAddResponseAddHeaderFormData,setGetOperationAddResponseAddHeaderFormData)}
                                                typeFunc={(e)=>handleFormData(e,index,getOperationAddResponseAddHeaderFormData,setGetOperationAddResponseAddHeaderFormData)}
                                                descriptionFunc={(e)=>handleFormData(e,index,getOperationAddResponseAddHeaderFormData,setGetOperationAddResponseAddHeaderFormData)}
                                                handleAddFields={handleAddFieldsGetResponseAddHeaderOperation}
                                                handleRemoveFields={handleRemoveFieldsGetAddResponseAddHeaderOperation}
                                                />
                                            </div>))}
                                            <br></br>
                                            {/* <button type='button' onClick={()=>handleAddFieldsGetResponseOperation()}>Add Response</button>
                                            <button type='button' onClick={()=>handleRemoveFieldsGetAddResponseOperation()}>Remove Response</button> */}
                                     </div>))
                                    }
                                </div>    
                            </div>}
                        </div>
                    </Tab>
 
                    <Tab eventKey="second" title="POST">
                        <div style={{ textAlign : 'left' , marginTop : '50px'}}>
                            <Button type="button" className={styles.tabOperationBtn}  onClick={()=>setIsToggledPost(!isToggledPost)}>+ POST Operation</Button>
                        </div>
                        <div>
                            {isToggledPost && <div className={styles.GetOperation}>
                                <div>
                                    {/* <label>Operation ID : </label><input name='postOperationId' value={postOperationId} onChange={handleChangePostOperationId} size={40} type='text' placeholder="operation-id"></input>
                                    <label>Description : </label><input name='postDescription' value={postOperationDescription} onChange={handleChangePostOperationDescription} size={40} type='text' placeholder='Enter any description'></input> */}
                                    <label>Operation ID : </label><input name='postOperationId' value={postOperationId} onChange={e => handleInputChange(e, setPostOperationId)} size={40} type='text' placeholder="operation-id"></input>
                                    <label>Description : </label><input name='postDescription' value={postOperationDescription} onChange={e => handleInputChange(e, setPostOperationDescription)} size={40} type='text' placeholder='Enter any description'></input>
                                    <hr></hr>
                                    <button type="button" className={styles.tabOperationBtn} onClick={()=>setIsToggledPostHeaderBtn(!isToggledPostHeaderBtn)}>+ Header</button>
                                    <button type="button" className={styles.tabOperationBtn} onClick={()=> setIsToggledPostQueryParamBtn(!isToggledPostQueryParamBtn)}>+ Query Param</button>
                                    <button type='button' className={styles.tabOperationBtn} onClick={()=>setIsToggledPostCookieBtn(!isToggledPostCookieBtn)}>+ Cookie</button>
                                    <button type="button" className={styles.tabOperationBtn} onClick={()=>setIsToggledPostSecurityBtn(!isToggledPostSecurityBtn)}>+ Security</button>
                                    <button type='button' className={styles.tabOperationBtn} onClick={()=>setIsToggledPostResponseBtn(!isToggledPostResponseBtn)}>+ Responses</button>
                                    {/* <button type='button' onClick={()=>setIsToggledPostAddResponseAddHeaderBtn(!isToggledPostAddResponseAddHeaderBtn)}>+ Response Headers</button> */}

                                    <br></br>
                                    {isToggledPostHeaderBtn &&
                                        postOperationAddHeaderFormData.map((formData,index)=>(
                                        <div key={index} className={styles.getHeadersFormContainer}>

                                            {/* POST OPERATION , ADD HEADERS FORM */}
                                            <ReusableForm
                                            formTitle={'Headers :'}
                                            formLabel1={'Name : '}
                                            formLabel2={'Type : '}
                                            formLabel3={'Description : '}
                                            formLabel4={'Required Field ? '}
                                            formButton1={'Add'}
                                            formButton2={'Remove'}
                                            name={formData.name}
                                            type={formData.type}
                                            description={formData.description}
                                            required ={formData.required}
                                            nameFunc={(e)=>handleFormData(e,index,postOperationAddHeaderFormData,setPostOperationAddHeaderFormData)}
                                            typeFunc={(e)=>handleFormData(e,index,postOperationAddHeaderFormData,setPostOperationAddHeaderFormData)}
                                            descriptionFunc={(e)=>handleFormData(e,index,postOperationAddHeaderFormData,setPostOperationAddHeaderFormData)}
                                            requiredFunc={(e)=>handleFormData(e,index,postOperationAddHeaderFormData,setPostOperationAddHeaderFormData)}
                                            handleAddFields={handleAddFieldsPostAddHeaderOperation}
                                            handleRemoveFields={handleRemoveFieldsPostAddHeaderOperation}
                                            ></ReusableForm>
                                        </div>
                                        ))
                                       
                                    }
                                    <br></br>
                                    {isToggledPostQueryParamBtn &&
                                        postOperationAddQueryParamFormData.map((formData,index)=>(
                                        <div key={index}>

                                            {/* POST OPERATION , ADD QUERY PARAM FORM */}
                                            <ReusableForm
                                            formTitle={'Query Params :'}
                                            formLabel1={'Name : '}
                                            formLabel2={'Type : '}
                                            formLabel3={'Description : '}
                                            formLabel4={'Required Field ? '}
                                            formButton1={'Add'}
                                            formButton2={'Remove'}
                                            name={formData.name}
                                            type={formData.type}
                                            description={formData.description}
                                            required ={formData.required}
                                            nameFunc={(e)=>handleFormData(e,index,postOperationAddQueryParamFormData,setPostOperationAddQueryParamFormData)}
                                            typeFunc={(e)=>handleFormData(e,index,postOperationAddQueryParamFormData,setPostOperationAddQueryParamFormData)}
                                            descriptionFunc={(e)=>handleFormData(e,index,postOperationAddQueryParamFormData,setPostOperationAddQueryParamFormData)}
                                            requiredFunc={(e)=>handleFormData(e,index,postOperationAddQueryParamFormData,setPostOperationAddQueryParamFormData)}
                                            handleAddFields={handleAddFieldsPostAddQueryParamOperation}
                                            handleRemoveFields={handleRemoveFieldsPostAddQueryParamOperation}
                                            ></ReusableForm>

                                        </div>
                                        )) 
                                    }
                                    <br></br>
                                    {isToggledPostCookieBtn &&
                                    postOperationAddCookieFormData.map((formData,index)=>(
                                        <div key={index}>
                                           
                                            {/* POST OPERATION , ADD COOKIE FORM */}
                                            <ReusableForm
                                            formTitle={'Cookie :'}
                                            formLabel1={'Name : '}
                                            formLabel2={'Type : '}
                                            formLabel3={'Description : '}
                                            formLabel4={'Required Field ? '}
                                            formButton1={'Add'}
                                            formButton2={'Remove'}
                                            name={formData.name}
                                            type={formData.type}
                                            description={formData.description}
                                            required ={formData.required}
                                            nameFunc={(e)=>handleFormData(e,index,postOperationAddCookieFormData,setPostOperationAddCookieFormData)}
                                            typeFunc={(e)=>handleFormData(e,index,postOperationAddCookieFormData,setPostOperationAddCookieFormData)}
                                            descriptionFunc={(e)=>handleFormData(e,index,postOperationAddCookieFormData,setPostOperationAddCookieFormData)}
                                            requiredFunc={(e)=>handleFormData(e,index,postOperationAddCookieFormData,setPostOperationAddCookieFormData)}
                                            handleAddFields={handleAddFieldsPostCookieOperation}
                                            handleRemoveFields={handleRemoveFieldsPostAddCookieOperation}
                                            ></ReusableForm>
                                        </div>
                                    ))   
                                    }
                                    <br></br>
                                    {isToggledPostSecurityBtn && <p>Security Button Clicked</p>}
                                    <br></br>
                                    {/* {isToggledPostResponseBtn &&
                                    postOperationAddResponseFormData.map((formData,index)=>(
                                        <div key={index}>
                                            <h6>Response</h6>
                                            <label>Type : </label>
                                            <select name='type' value={formData.type} onChange={(e)=>handleChangeInputPostAddResponseOperation(index,e)}>
                                                <option>200</option>
                                                <option>500</option>
                                                <option>404</option>
                                            </select><br></br>
                                            <label>Description :</label>
                                            <input type='text' name='description' value={formData.description} onChange={(e)=>handleChangeInputPostAddResponseOperation(index,e)}></input><br></br>
                                            <label>Format : </label>
                                            <select name='format' value={formData.format} onChange={(e)=>handleChangeInputPostAddResponseOperation(index,e)}>
                                                <option>application/json</option>
                                                <option>application/xml</option>
                                            </select>
                                            <button type='button' onClick={()=>handleAddFieldsPostResponseOperation()}>Add Response</button>
                                            <button type='button' onClick={()=>handleRemoveFieldsPostAddResponseAddHeaderOperation()}>Remove Response</button>
                                        </div>
                                        
                                    )) 
                                    }
                                    <br></br>
                                    {isToggledPostResponseBtn && <button type='button' onClick={()=>setIsToggledPostAddResponseAddHeaderBtn(!isToggledPostAddResponseAddHeaderBtn)}>+ Response Headers</button>}
                                    {isToggledPostAddResponseAddHeaderBtn &&
                                    postOperationAddResponseAddHeaderFormData.map((formData,index)=>(
                                        <div key={index}>
                                            <h6>Response Header</h6>
                                            <label>Name : </label>
                                            <input type='text' name='name' value={formData.name} onChange={(e)=>handleChangeInputPostAddResponseAddHeaderOperation(index,e)}></input>
                                            <label>Type : </label>
                                            <select name='type' value={formData.type} onChange={(e)=>handleChangeInputPostAddResponseAddHeaderOperation(index,e)}>
                                                <option></option>
                                            </select>
                                            <label>Description : </label>
                                            <input type='text' name='description' value={formData.description} onChange={(e)=>handleChangeInputPostAddResponseAddHeaderOperation(index,e)}></input>
                                            <button type='button' onClick={()=>handleAddFieldsPostResponseAddHeaderOperation()}>Add Header</button>
                                            <button type='button' onClick={()=>handleRemoveFieldsPostAddResponseOperation()}>Remove Header</button>
                                        </div>
                                    ))
                                    } */}
                                    {isToggledPostResponseBtn &&
                                    postOperationAddResponseFormData.map((formData,index)=>(
                                        <div key={index}>
                                            <ReusableResponseForm
                                            formTitle={'Response'}
                                            formLabel1={'Type: '}
                                            formLabel2={'Description: '}
                                            formLabel3={'Format: '}
                                            type={formData.type}
                                            description={formData.description}
                                            format={formData.format}
                                            typeFunc={(e)=>handleFormData(e,index,postOperationAddResponseFormData,setPostOperationAddResponseFormData)}
                                            descriptionFunc={(e)=>handleFormData(e,index,postOperationAddResponseFormData,setPostOperationAddResponseFormData)}
                                            formatFunc={(e)=>handleFormData(e,index,postOperationAddResponseFormData,setPostOperationAddResponseFormData)}
                                            handleAddFields={handleAddFieldsPostResponseOperation}
                                            handleRemoveFields={handleRemoveFieldsPostAddResponseOperation}
                                            />
                                        </div>))
                                    }
                                    <br></br>
                                    {isToggledPostResponseBtn && <button type='button' onClick={()=>setIsToggledPostAddResponseAddHeaderBtn(!isToggledPostAddResponseAddHeaderBtn)}>+ Response Headers</button>}
                                    {isToggledPostAddResponseAddHeaderBtn &&
                                    postOperationAddResponseAddHeaderFormData.map((formData,index)=>(
                                        <div key={index}>
                                            <ReusableResponseHeaderForm
                                            formTitle={'Response Headers'}
                                            formLabel1={'Name : '}
                                            formLabel2={'Type : '}
                                            formLabel3={'Description :'}
                                            name={formData.name}
                                            type={formData.type}
                                            description={formData.description}
                                            nameFunc={(e)=>handleFormData(e,index,postOperationAddResponseAddHeaderFormData,setPostOperationAddResponseAddHeaderFormData)}
                                            typeFunc={(e)=>handleFormData(e,index,postOperationAddResponseAddHeaderFormData,setPostOperationAddResponseAddHeaderFormData)}
                                            descriptionFunc={(e)=>handleFormData(e,index,postOperationAddResponseAddHeaderFormData,setPostOperationAddResponseAddHeaderFormData)}
                                            handleAddFields={handleAddFieldsPostResponseAddHeaderOperation}
                                            handleRemoveFields={handleRemoveFieldsPostAddResponseAddHeaderOperation}
                                            ></ReusableResponseHeaderForm>
                                        </div>))
                                    }
                                </div>
                                </div>}
                        </div>
                    </Tab>
 
                    <Tab eventKey="third" title="PUT">
                        <div style={{ textAlign : 'left' , marginTop : '50px'}}>
                            <Button type="button" className={styles.tabOperationBtn}  onClick={()=>setIsToggledPut(!isToggledPut)}>+ PUT Operation</Button>
                        </div>
                        <div>
                            {isToggledPut && <div className={styles.GetOperation}>
                                <div>
                                    {/* <label>Operation ID : </label><input size={40} type='text' placeholder="operation-id" name='operation-id' value={putOperationId} onChange={handleChangePutOperationId}></input>
                                    <label>Description : </label><input size={40} type='text' placeholder='Enter any description' name='description' value={putOperationDescription} onChange={handleChangePutOperationDescription}></input> */}
                                    <label>Operation ID : </label><input size={40} type='text' placeholder="operation-id" name='operation-id' value={putOperationId} onChange={e => handleInputChange(e, setPutOperationId)}></input>
                                    <label>Description : </label><input size={40} type='text' placeholder='Enter any description' name='description' value={putOperationDescription} onChange={e => handleInputChange(e, setPutOperationDescription)}></input>
                                    <hr></hr>
                                    <button type="button" className={styles.tabOperationBtn} onClick={()=>setIsToggledPutHeaderBtn(!isToggledPutHeaderBtn)}>+ Header</button>
                                    <button type="button" className={styles.tabOperationBtn} onClick={()=> setIsToggledPutQueryParamBtn(!isToggledPutQueryParamBtn)}>+ Query Param</button>
                                    <button type='button' className={styles.tabOperationBtn} onClick={()=>setIsToggledPutCookieBtn(!isToggledPutCookieBtn)}>+ Cookie</button>
                                    <button type="button" className={styles.tabOperationBtn} onClick={()=>setIsToggledPutSecurityBtn(!isToggledPutSecurityBtn)}>+ Security</button>
                                    <button type='button' className={styles.tabOperationBtn} onClick={()=>setIsToggledPutResponseBtn(!isToggledPutResponseBtn)}>+ Responses</button>
                                    <br></br>
                                    {isToggledPutHeaderBtn &&
                                    putOperationAddHeaderFormData.map((formData,index)=>(
                                        <div key={index} className={styles.getHeadersFormContainer}>
                                            
                                            {/* PUT OPERATION , ADD HEADERS FORM */}
                                            <ReusableForm
                                            formTitle={'Headers :'}
                                            formLabel1={'Name : '}
                                            formLabel2={'Type : '}
                                            formLabel3={'Description : '}
                                            formLabel4={'Required Field ? '}
                                            formButton1={'Add'}
                                            formButton2={'Remove'}
                                            name={formData.name}
                                            type={formData.type}
                                            description={formData.description}
                                            required ={formData.required}
                                            nameFunc={(e)=>handleFormData(e,index,putOperationAddHeaderFormData,setPutOperationAddHeaderFormData)}
                                            typeFunc={(e)=>handleFormData(e,index,putOperationAddHeaderFormData,setPutOperationAddHeaderFormData)}
                                            descriptionFunc={(e)=>handleFormData(e,index,putOperationAddHeaderFormData,setPutOperationAddHeaderFormData)}
                                            requiredFunc={(e)=>handleFormData(e,index,putOperationAddHeaderFormData,setPutOperationAddHeaderFormData)}
                                            handleAddFields={handleAddFieldsPutAddHeaderOperation}
                                            handleRemoveFields={handleRemoveFieldsPutAddHeaderOperation} 
                                            ></ReusableForm>

                                        </div>
                                    ))
                                        
                                    }
                                    <br></br>
                                    {isToggledPutQueryParamBtn &&
                                    putOperationAddQueryParamFormData.map((formData,index)=>(
                                        <div key={index}>

                                            {/* PUT OPERATION , ADD QUERY PARAMS FORM */}
                                            <ReusableForm
                                            formTitle={'Query Params :'}
                                            formLabel1={'Name : '}
                                            formLabel2={'Type : '}
                                            formLabel3={'Description : '}
                                            formLabel4={'Required Field ? '}
                                            formButton1={'Add'}
                                            formButton2={'Remove'}
                                            name={formData.name}
                                            type={formData.type}
                                            description={formData.description}
                                            required ={formData.required}
                                            nameFunc={(e)=>handleFormData(e,index,putOperationAddQueryParamFormData,setPutOperationAddQueryParamFormData)}
                                            typeFunc={(e)=>handleFormData(e,index,putOperationAddQueryParamFormData,setPutOperationAddQueryParamFormData)}
                                            descriptionFunc={(e)=>handleFormData(e,index,putOperationAddQueryParamFormData,setPutOperationAddQueryParamFormData)}
                                            requiredFunc={(e)=>handleFormData(e,index,putOperationAddQueryParamFormData,setPutOperationAddQueryParamFormData)}
                                            handleAddFields={handleAddFieldsPutAddQueryParamOperation}
                                            handleRemoveFields={handleRemoveFieldsPutAddQueryParamOperation}
                                            ></ReusableForm>
                                        </div>
                                    ))
                                       
                                    }
                                    <br></br>
                                    {isToggledPutCookieBtn &&
                                    putOperationAddCookieFormData.map((formData,index)=>(
                                        <div key={index}>
                                    
                                            {/* PUT OPERATION , ADD COOKIE FORM */}
                                            <ReusableForm
                                            formTitle={'Cookies :'}
                                            formLabel1={'Name : '}
                                            formLabel2={'Type : '}
                                            formLabel3={'Description : '}
                                            formLabel4={'Required Field ? '}
                                            formButton1={'Add'}
                                            formButton2={'Remove'}
                                            name={formData.name}
                                            type={formData.type}
                                            description={formData.description}
                                            required ={formData.required}
                                            nameFunc={(e)=>handleFormData(e,index,putOperationAddCookieFormData,setPutOperationAddCookieFormData)}
                                            typeFunc={(e)=>handleFormData(e,index,putOperationAddCookieFormData,setPutOperationAddCookieFormData)}
                                            descriptionFunc={(e)=>handleFormData(e,index,putOperationAddCookieFormData,setPutOperationAddCookieFormData)}
                                            requiredFunc={(e)=>handleFormData(e,index,putOperationAddCookieFormData,setPutOperationAddCookieFormData)}
                                            handleAddFields={handleAddFieldsPutCookieOperation}
                                            handleRemoveFields={handleRemoveFieldsPutAddCookieOperation}
                                            ></ReusableForm>

                                        </div>
                                    ))
                                    }
                                    <br></br>
                                    {isToggledPutSecurityBtn && <p>Security Button Clicked</p>}
                                    <br></br>
                                    {isToggledPutResponseBtn &&
                                    putOperationAddResponseFormData.map((formData,index)=>(
                                        <div key={index}>
                                            <ReusableResponseForm
                                            formTitle={'Response'}
                                            formLabel1={'Type : '}
                                            formLabel2={'Description : '}
                                            formLabel3={'Format : '}
                                            type={formData.type}
                                            description={formData.description}
                                            format={formData.format}
                                            typeFunc={(e)=>handleFormData(e,index,putOperationAddResponseFormData,setPutOperationAddResponseFormData)}
                                            descriptionFunc={(e)=>handleFormData(e,index,putOperationAddResponseFormData,setPutOperationAddResponseFormData)}
                                            formatFunc={(e)=>handleFormData(e,index,putOperationAddResponseFormData,setPutOperationAddResponseFormData)}
                                            handleAddFields={handleAddFieldsPutResponseOperation}
                                            handleRemoveFields={handleRemoveFieldsPutAddResponseOperation}
                                            />
                                        </div>
                                      
                                    ))
                                    }
                                    <br></br>
                                    {isToggledPutResponseBtn && <button type='button' onClick={()=>setIsToggledPutAddResponseAddHeaderBtn(!isToggledPutAddResponseAddHeaderBtn)}>+ Response Headers</button>}
                                    {isToggledPutAddResponseAddHeaderBtn &&
                                    putOperationAddResponseAddHeaderFormData.map((formData,index)=>(
                                        <div key={index}>
                                            <ReusableResponseHeaderForm
                                            formTitle={'Response Headers :'}
                                            formLabel1={'Name : '}
                                            formLabel2={'Type : '}
                                            formLabel3={'Description :'}
                                            name={formData.name}
                                            type={formData.type}
                                            description={formData.description}
                                            nameFunc={(e)=>handleFormData(e,index,putOperationAddResponseAddHeaderFormData,setPutOperationAddResponseAddHeaderFormData)}
                                            typeFunc={(e)=>handleFormData(e,index,putOperationAddResponseAddHeaderFormData,setPutOperationAddResponseAddHeaderFormData)}
                                            descriptionFunc={(e)=>handleFormData(e,index,putOperationAddResponseAddHeaderFormData,setPutOperationAddResponseAddHeaderFormData)}
                                            handleAddFields={handleAddFieldsPutResponseAddHeaderOperation}
                                            handleRemoveFields={handleRemoveFieldsPutAddResponseAddHeaderOperation}
                                            ></ReusableResponseHeaderForm>
                                            
                                        </div>
                                    ))
                                    }
                                    
                                </div>
                                </div>}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        <button className={styles.formSubmitBtn} type='submit' onClick={handleSubmit}>Submit</button><br></br><br></br>
        
        <button className={styles.formDownloadBtn}>
        <a
        href={`data:text/json;charset=utf-8,${encodeURIComponent(
            JSON.stringify({operationName,url,endpoint,operationId,description,getOperationAddHeaderFormData,getOperationAddQueryParamFormData,getOperationAddResponseFormData,postOperationId,postOperationDescription,postOperationAddHeaderFormData,postOperationAddQueryParamFormData,postOperationAddCookieFormData,postOperationAddResponseFormData,postOperationAddResponseAddHeaderFormData,putOperationId,putOperationDescription,putOperationAddHeaderFormData,putOperationAddQueryParamFormData,putOperationAddCookieFormData,putOperationAddResponseFormData,putOperationAddResponseAddHeaderFormData},null,4)
        )}`}
        download="filename.json"
        style={{textDecoration:'none',fontColor:'black'}}
        >
            Download JSON
          </a>
        </button><br></br>
        {/* <button type='button' onClick={handleEdit}>Edit</button> */}
        
      </form>
      
    </div>
    
  )
}
export default ParamsFormT