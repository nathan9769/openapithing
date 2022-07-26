import React, { useState} from 'react'
import styles from '../style.module.css'
import OperationsForm from './OperationsForm'
import { Button, Tab, Tabs } from "react-bootstrap";
 
const ParamsForm = () => {
    
    const[isToggled,setIsToggled] = useState(false)

    const[url,setUrl] = useState('')
    const[endpoint,setEndpoint] = useState('')
    const[formData,setFormData] = useState(
      [{name:'',description:'',type:'',required:''}]
    )
    
    const[operationId,setOperationId] = useState('')
    const[description,setDescription] = useState('')
    const[getOperationFormData,setGetOperationFormData] = useState(
      [{name:'',description:'',type:'',required:''}]
    )
    
    const[isToggledGet,setIsToggledGet] = useState(false)
    const[isToggledPost,setIsToggledPost] = useState(false)
    const[isToggledPut,setIsToggledPut] = useState(false)

    const[isToggledGetHeaderBtn,setIsToggledGetHeaderBtn] = useState(false)
    const[isToggledGetQueryParamBtn,setIsToggledQueryParamBtn] = useState(false)
    const[isToggledGetSecurityBtn,setIsToggledGetSecurityBtn] = useState(false)

    const[isToggledPostHeaderBtn,setIsToggledPostHeaderBtn] = useState(false)
    const[isToggledPostQueryParamBtn,setIsToggledPostQueryParamBtn] = useState(false)
    const[isToggledPostSecurityBtn,setIsToggledPostSecurityBtn] = useState(false)

    const[isToggledPutHeaderBtn,setIsToggledPutHeaderBtn] = useState(false)
    const[isToggledPutQueryParamBtn,setIsToggledPutQueryParamBtn] = useState(false)
    const[isToggledPutSecurityBtn,setIsToggledPutSecurityBtn] = useState(false)

 
    
   
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
 
    
    const handleSubmit = (e) =>{
      e.preventDefault()
      // console.log('Form Data is :' , JSON.parse(JSON.stringify({url,endpoint,formData})))
      console.log(JSON.stringify({url,endpoint,formData}))
    }
    const handleChangeInput = (index,e) =>{
      const values = [...formData]
      values[index][e.target.name] = e.target.value
      setFormData(values)
    }
 
   
 
    const handleAddFields = () =>{
      setFormData([...formData,{name:'',description:'',type:'',required:''}])
    }

    const handleAddFieldsGetOperation = () =>{
      setGetOperationFormData([...getOperationFormData],{name:'',description:'',type:'',required:''})
    }


    const handleRemoveFields = (index) =>{
      const values = [...formData]
      values.splice(index,1)
      setFormData(values)
    }
  return (
    <div className={styles.paramFormsContainer}>
    
      <form onSubmit={handleSubmit}>
        <input type='text' name='url' placeholder='Url..' value={url} onChange={handleChangeUrl}></input>
        <input type='text' name='endpoint' placeholder='Endpoint...' value={endpoint} style={{flex : 1 }} onChange={handleChangeEndpoint}></input>
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
                            <Button type="button"  onClick={()=>setIsToggledGet(!isToggledGet)}>+ GET Operation</Button>
                        </div>
                        <div>
                            {isToggledGet &&
                             
                            <div className={styles.GetOperation}>
                                <form>
                                    <label>Operation ID : </label><input value={operationId} onChange={handleChangeOperationId} size={40} type='text' placeholder="operation-id"></input>
                                    <label>Description : </label><input value={description} onChange={handleChangeDescription} size={40} type='text' placeholder='Enter any description'></input>
                                    <hr></hr>
                                    <button type="button" onClick={()=>setIsToggledGetHeaderBtn(!isToggledGetHeaderBtn)}>+ Header</button>
                                    <button type="button" onClick={()=> setIsToggledQueryParamBtn(!isToggledGetQueryParamBtn)}>+ Query Param</button>
                                    <button type="button" onClick={()=>setIsToggledGetSecurityBtn(!isToggledGetSecurityBtn)}>+ Security</button>
                                    <br></br>
                                    {isToggledGetHeaderBtn &&
                                        <div className={styles.getHeadersFormContainer}>
                                            <h6>Headers</h6>
                                            <label>Name : </label>
                                            <input type='text' placeholder="Name.."></input><br></br>
                                            <label>Type : </label>
                                            <select>
                                                <option>string</option>
                                                <option>number</option>
                                                <option>boolean</option>
                                                <option>integer</option>
                                                <option>array</option>
                                            </select> &nbsp; <br></br>
                                            <label>Description : </label>
                                            <input type="text"></input>
                                            <label>Required Field ? </label>
                                            <select>
                                                <option>yes</option>
                                                <option>no</option>
                                            </select><br></br>
                                            <button type='button' onClick={()=>handleAddFieldsGetOperation()}>Add</button> &nbsp;
                                            <button type="button">Remove</button>
                                        </div> 
                                    }
                                    <br></br>
                                    {isToggledGetQueryParamBtn &&
                                        <div>
                                            <h6>Query Parameters</h6>
                                            <label>Name : </label>
                                            <input type='text' placeholder="Name.."></input><br></br>
                                            <label>Type : </label>
                                            <select>
                                                <option>string</option>
                                                <option>number</option>
                                                <option>boolean</option>
                                                <option>integer</option>
                                                <option>array</option>
                                            </select> &nbsp; <br></br>
                                            <label>Description : </label>
                                            <input type="text"></input>
                                            <label>Required Field ? </label>
                                            <select>
                                                <option>yes</option>
                                                <option>no</option>
                                            </select>
                                            
                                        </div>  
                                    }
                                    {isToggledGetSecurityBtn && <p>Security Button Clicked</p>}
                                </form>
                                </div>}
                        </div>
                    </Tab>


                    <Tab eventKey="second" title="POST">
                        <div style={{ textAlign : 'left' , marginTop : '50px'}}>
                            <Button type="button"  onClick={()=>setIsToggledPost(!isToggledPost)}>+ POST Operation</Button>
                        </div>
                        <div>
                            {isToggledPost && <div className={styles.GetOperation}>
                                <form>
                                    <label>Operation ID : </label><input size={40} type='text' placeholder="operation-id"></input>
                                    <label>Description : </label><input size={40} type='text' placeholder='Enter any description'></input>
                                    <hr></hr>
                                    <button type="button" onClick={()=>setIsToggledPostHeaderBtn(!isToggledPostHeaderBtn)}>+ Header</button>
                                    <button type="button" onClick={()=> setIsToggledPostQueryParamBtn(!isToggledPostQueryParamBtn)}>+ Query Param</button>
                                    <button type="button" onClick={()=>setIsToggledPostSecurityBtn(!isToggledPostSecurityBtn)}>+ Security</button>
                                    <br></br>
                                    {isToggledPostHeaderBtn &&
                                        <div className={styles.getHeadersFormContainer}>
                                            <h6>Headers</h6>
                                            <label>Name : </label>
                                            <input type='text' placeholder="Name.."></input><br></br>
                                            <label>Type : </label>
                                            <select>
                                                <option>string</option>
                                                <option>number</option>
                                                <option>boolean</option>
                                                <option>integer</option>
                                                <option>array</option>
                                            </select> &nbsp; <br></br>
                                            <label>Description : </label>
                                            <input type="text"></input>
                                            <label>Required Field ? </label>
                                            <select>
                                                <option>yes</option>
                                                <option>no</option>
                                            </select>
                                        </div> 
                                    }
                                    <br></br>
                                    {isToggledPostQueryParamBtn &&
                                        <div>
                                            <h6>Query Parameters</h6>
                                            <label>Name : </label>
                                            <input type='text' placeholder="Name.."></input><br></br>
                                            <label>Type : </label>
                                            <select>
                                                <option>string</option>
                                                <option>number</option>
                                                <option>boolean</option>
                                                <option>integer</option>
                                                <option>array</option>
                                            </select> &nbsp; <br></br>
                                            <label>Description : </label>
                                            <input type="text"></input>
                                            <label>Required Field ? </label>
                                            <select>
                                                <option>yes</option>
                                                <option>no</option>
                                            </select>
                                        </div>  
                                    }
                                    <br></br>
                                    {isToggledPostSecurityBtn && <p>Security Button Clicked</p>}
                                </form>
                                </div>}
                        </div>
                    </Tab>


                    <Tab eventKey="third" title="PUT">
                        <div style={{ textAlign : 'left' , marginTop : '50px'}}>
                            <Button type="button"  onClick={()=>setIsToggledPut(!isToggledPut)}>+ PUT Operation</Button>
                        </div>
                        <div>
                            {isToggledPut && <div className={styles.GetOperation}>
                                <form>
                                    <label>Operation ID : </label><input size={40} type='text' placeholder="operation-id"></input>
                                    <label>Description : </label><input size={40} type='text' placeholder='Enter any description'></input>
                                    <hr></hr>
                                    <button type="button" onClick={()=>setIsToggledPutHeaderBtn(!isToggledPutHeaderBtn)}>+ Header</button>
                                    <button type="button" onClick={()=> setIsToggledPutQueryParamBtn(!isToggledPutQueryParamBtn)}>+ Query Param</button>
                                    <button type="button" onClick={()=>setIsToggledPutSecurityBtn(!isToggledPutSecurityBtn)}>+ Security</button>
                                    <br></br>
                                    {isToggledPutHeaderBtn &&
                                        <div className={styles.getHeadersFormContainer}>
                                            <h6>Headers</h6>
                                            <label>Name : </label>
                                            <input type='text' placeholder="Name.."></input><br></br>
                                            <label>Type : </label>
                                            <select>
                                                <option>string</option>
                                                <option>number</option>
                                                <option>boolean</option>
                                                <option>integer</option>
                                                <option>array</option>
                                            </select> &nbsp; <br></br>
                                            <label>Description : </label>
                                            <input type="text"></input>
                                            <label>Required Field ? </label>
                                            <select>
                                                <option>yes</option>
                                                <option>no</option>
                                            </select>
                                        </div> 
                                    }
                                    <br></br>
                                    {isToggledPutQueryParamBtn &&
                                        <div>
                                            <h6>Query Parameters</h6>
                                            <label>Name : </label>
                                            <input type='text' placeholder="Name.."></input><br></br>
                                            <label>Type : </label>
                                            <select>
                                                <option>string</option>
                                                <option>number</option>
                                                <option>boolean</option>
                                                <option>integer</option>
                                                <option>array</option>
                                            </select> &nbsp; <br></br>
                                            <label>Description : </label>
                                            <input type="text"></input>
                                            <label>Required Field ? </label>
                                            <select>
                                                <option>yes</option>
                                                <option>no</option>
                                            </select>
                                        </div>  
                                    }
                                    <br></br>
                                    {isToggledPutSecurityBtn && <p>Security Button Clicked</p>}
                                </form>
                                </div>}
                        </div>
                    </Tab>
                </Tabs>
            </div>

        <button type='submit' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}
export default ParamsForm