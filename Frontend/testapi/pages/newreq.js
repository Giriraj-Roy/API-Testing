import Script from "next/script"
import { useState } from "react";
import swal from 'sweetalert';
export default function NewReq()
{

  const [drop, setDrop] = useState(false)
  // let typex="GET";
  const [typex, setTypex] = useState("GET")

  const createdata = async (e) => {
    e.preventDefault()
    // alert('hello');
    // Stop the form from submitting and refreshing the page.
    //event.preventDefault();
  
    const button =document.activeElement.getAttribute('value');

    // const a=document.getElementById('GET').checked;
    // const b=document.getElementById('POST').checked;
    // const c=document.getElementById('PUT').checked;
    // const d=document.getElementById('DELETE').checked;
    
    // if(a)
    // typex="GET";
    // else if(b)
    // typex="POST";
    // else if(c)
    // typex="PUT";
    // else if(d)
    // typex="DELETE";
    
  // alert(typex)
 
  if(button=="create")
  {const endpoint = '/proxy/api/requests/create';
  const data = {
    type: typex,
    content: e.target.Body.value,
    url :e.target.link.value,
    token:e.target.usertoken.value,
  }
  const JSONdata=JSON.stringify(data);
 
  const options = {
  
    method: 'POST',
  
    headers: {
      Authorization:e.target.token1.value,
      'Content-Type': 'application/json'
    },
  
    body: JSONdata
}
console.log(options);
    const response = await fetch(endpoint, options)

   
   const result = await response.json()
   console.log(result)
   if(`${result.url}`=="undefined")
   { //sweet alert to be used later
     
     swal({
       title: "Please fill all the fields",
       
       icon: "error",
       button: "Try again",
     });
}
}
else if(button=="save")
{
  const endpoint = '/proxy/api/requests/';
  endpoint+=e.target._id.value;
  const data = {
    
    type: typex,
    content: e.target.Body.value,
    url :e.target.link.value,
    token:e.target.usertoken.value,
    
  }
  const JSONdata=JSON.stringify(data);
  const options = {
  
    method: 'PUT',
  
    headers: {
      Authorization:e.target.token1.value,
      'Content-Type': 'application/json'
    },
  
    body: JSONdata
}
    const response = await fetch(endpoint, options)

   
   const result = await response.json()
   
   if(`${result.url}`=="undefined")
   { //sweet alert to be used later
     
     swal({
       title: "Please fill all the fields",
       
       icon: "error",
       button: "Try again",
     });
}
}
else if(button=="del")
{
  const endpoint = '/proxy/api/requests/';
  endpoint+=e.target._id.value;
  
  
  const options = {
  
    method: 'DELETE',
  
    headers: {
      Authorization:e.target.token1.value,
      'Content-Type': 'application/json'
    },
  
   
}
    const response = await fetch(endpoint, options)

   
   const result = await response.json()
}
else if(button=="run")
{
  
  const endpoint = '/proxy/api/requests/send/';
  endpoint+=e.target._id.value;
  const data = {
    
    type: typex,
    content: e.target.Body.value,
    url :e.target.link.value,
    token:e.target.usertoken.value,
    
  }
  const JSONdata=JSON.stringify(data);
  const options = {
  
    method: 'GET',
  
    headers: {
      Authorization:e.target.token1.value,
      'Content-Type': 'application/json'
    },
  
   
}
    const response = await fetch(endpoint, options)

   
   const result = await response.json()
   
   
     
     swal({
      title:"Result",
       text:JSON.stringify(result)
       
     });


   
}
  
}
    return <div className="NewReq">
        
        <form   className="reqform" id="reqform" onSubmit={createdata}>
        <div className="reqHead">
          <input type='text' name="token" id="token1" className="token hide"/>
          <input type='text' name='_id' id='_id' className="hide" />
          <div className="dropdownHead" onClick={()=>setDrop(!drop)}>
              {typex}
          </div>
          {
            drop ? 
            <div className="radbtn" onClick={()=>setDrop(!drop)}>
              <div>
                <input type='radio' name="reqtype" id='GET' onClick={()=>setTypex("GET")}/>
                {/* checked="checked"/> */}
                <label for= 'GET' id='GET' onClick={()=>setTypex("GET")} >GET</label>
              </div>
              <div>
                <input type='radio' name="reqtype" id='POST' onClick={()=>setTypex("POST")}/>
                <label for= 'POST' id='POST' onClick={()=>setTypex("POST")}>POST</label>
              </div>
              <div>
                <input type='radio' name="reqtype" id='PUT' onClick={()=>setTypex("PUT")}/>
                <label for= 'PUT' id='PUT' onClick={()=>setTypex("PUT")}>PUT</label>
              </div>
              <div>
                <input type='radio' name="reqtype" id='DELETE' onClick={()=>setTypex("DELETE")}/>
                <label for= 'DELETE' id='DELETE' onClick={()=>setTypex("DELETE")}>DELETE</label>
              </div>
            </div>
            :
            null
            
          }

          <div className="extra">
            {/* <label className="URL" id='URL'>URL</label> */}
            <input type='text' placeholder="http://www.google.com" className="link"  id="link"></input>
          </div>
        </div>
          <div className="details">
            <textarea placeholder='{"key ":"value"}' className="Body" id="Body" ></textarea>
            
            <input type='text' placeholder='token' className="usertoken" id="usertoken"></input>
            
            <button type="submit" name="createreq" value="create" id='createreq' className="btn4">Create Request</button>
          
            <div className="btnlist" id="btnlist">
              <button type="submit" className="savebtn" id="savebtn" value="save">Save</button>
              <button type="submit" className="delbtn" id="delbtn" value="del">Delete</button>
              <button type="submit" className="runbtn" id="runbtn" value="run"> Run </button>
            </div>
          </div>
        </form>
    </div>
}