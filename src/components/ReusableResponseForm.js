import React from "react";
import styles from '../style.module.css'
const ReusableResponseForm = ({formTitle,formLabel1,formLabel2,formLabel3,type,description,format,typeFunc,descriptionFunc,formatFunc,handleAddFields,handleRemoveFields}) =>{
    const ChildToParentType = (e) =>{
        typeFunc(e)
    }
    const ChildToParentDescription = (e) =>{
        descriptionFunc(e)
    }
    const ChildToParentFormat = (e) =>{
        formatFunc(e)
    }
    return(
        <>
            <h6>{formTitle}</h6>
            <label>{formLabel1}</label>
            <select className={styles.urlInput} name='type' value={type} onChange={ChildToParentType}>
                <option>100 : Continue </option>
                <option>101 : Switching Protocols</option>
                <option>200 : Ok </option>
                <option>201 : Created</option>
                <option>202 : Accepted </option>
                <option>203 : Non Authorative Information</option>
                <option>204 : No Content </option>
                <option>205 : Reset Content</option>
                <option>206 : Partial Content </option>
                <option>207 : Multi Status</option>
                <option>208 : Already Reported </option>
                <option>226 : IM Used</option>
                <option>300 : Multiple Choices </option>
                <option>301 : Moved Permanently</option>
                <option>302 : Found </option>
                <option>303 : See Other</option>
                <option>304 : Not Modified </option>
                <option>305 : Use Proxy</option>
                <option>306 : (Unused)</option>
                <option>307 : Temporary Redirect </option>
                <option>308 : Permanent Redirect</option>
                <option>400 : Bad Request </option>
                <option>401 : Unauthorized</option>
                <option>402 : Payment Required </option>
                <option>403 : Forbidden</option>
                <option>404 : Not Found </option>
                <option>405 : Method Not Allowed</option>
                <option>406 : Not Acceptable </option>
                <option>407 : Proxy Authentication Required</option>
                <option>408 : Request Timeout </option>
                <option>409 : Conflict</option>
                <option>410 : Gone </option>
                <option>411 : Length Required</option>
                <option>412 : Continue </option>
                <option>413 : Switching Protocols</option>
                <option>414 : Request-URI Too Long </option>
                <option>415 : Unsupported Media Type</option>
                <option>416 : Requested Range Not Satisfied </option>
                <option>417 : Expectation Failed</option>
                <option>418 : I'm a teapot(RFC 2324) </option>
                <option>420 : Enhance Your Calm(Twitter)</option>
                <option>422 : Unprocessable Entity </option>
                <option>423 : Locked</option>
                <option>424 : Failed Dependency </option>
                <option>425 : Too Early</option>
                <option>426 : Upgrade Required </option>
                <option>428 : Precondition Required</option>
                <option>429 : Too Many Requests </option>
                <option>431 : Request Header Fields Too Large</option>
                <option>444 : No Response </option>
                <option>449 : Retry With(Microsoft)</option>
                <option>450 : Blocked by Windows Parental Control </option>
                <option>451 : Unavailable for Legal Reasons</option>
                <option>499 : Client Closed Request </option>
                <option>500 : Internal Server Error</option>
                <option>501 : Not Impressed </option>
                <option>502 : Bad Gateway</option>
                <option>503 : Service Unavailable </option>
                <option>504 : Gateway Timeout</option>
                <option>505 : HTTP Version Not Supported </option>
                <option>506 : Variant Also Negotiates</option>
                <option>507 : Insufficient Storage </option>
                <option>508 : Loop Detected</option>
                <option>509 : Bandwidth Limit Exceeded </option>
                <option>510 : Not Extended</option>
                <option>511 : Network Authentication Required </option>
                <option>598 : Network read timeout error</option>
                <option>599 : Network connect timeout error </option>
            </select><br></br><br></br>
            <label>{formLabel2}</label>
            <input className={styles.urlInput} type='text' name='description' placeholder='description' value={description} onChange={ChildToParentDescription}></input><br></br><br></br>
            <label>{formLabel3}</label>
            <select className={styles.urlInput} value={format} name='format' onChange={ChildToParentFormat}>
                <option>application/json</option>
                <option>application/xml</option>
                <option>application/json</option>
            </select>
            <br></br><br></br>
            <button  type='button' className={styles.tabOperationFieldsBtn} onClick={()=>handleAddFields()}>Add Response</button>
            <button  type='button' className={styles.tabOperationFieldsBtn} onClick={()=>handleRemoveFields()}>Remove Response</button>
        </>
    )
}
 
export default ReusableResponseForm