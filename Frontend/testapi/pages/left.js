import Loader from "./components/Loader";
import Req from "./req";
function Left()
 {  
      // console.log(localStorage.getItem('token'));
      // console.log("Bearer"+localStorage.getItem('token'));
      const leftdata = async (event) => {

          // console.log(`Bearer${event.target.token.value}`)
          // Stop the form from submitting and refreshing the page.
          event.preventDefault();
          const endpoint="/proxy/api/requests";

          // Get data from the form.
          ///  alert(event.target.token.value)
          const data = {
            Authorization:event.target.token.value
          }
          const JSONdata = JSON.stringify(data)
        //  alert(JSONdata);

          const options = {
            // The method is POST because we are sending data.
            method: 'GET',
            // Tell the server we're sending JSON.
            headers: {
              Authorization:`Bearer${event.target.token.value}`
            }
            // Body of the request is the JSON data we created above.
          
          }
          const response = await fetch(endpoint, options)
            //alert(JSON.stringify(options['headers']))
            // Get the response data from server as JSON.
            // If server returns the name submitted, that means the form works.
          const result = await response.json()
            //alert(JSON.stringify(result))
            // document.getElementById('ld').innerHTML=JSON.stringify(result);
          document.getElementById('ld').innerHTML="";
          JSON.stringify(result)
          console.log(typeof(result))
          console.log(result);
          
          // result.map((res)=>{
          //   return (<div className="Bord" id={res._id}>
          //     <div className="Reqcard">
          //       <div className="top">
          //         <div className="type"> {res.type}</div>
          //         <div className="url"> {res.url}</div>
          //         <button className="closebtn"> X </button>
          //       </div>
          //       <div className="cotent" id={res.token}>
          //         {res.content}
          //       </div>
          //     </div>
          //   </div>
          //   )
          // })

          for (let i=0; i<result.length; i++){
            
              document.getElementById('ld').innerHTML+="<div class='Bord' id='"+result[i]._id+"' name=''><div class='Reqcard'>"+
              "<div class='top'>"+      
                  "<div class='type'>"+result[i].type+
                  "<div class='closebtn'>X</div></div>"+
                  "<div class='url'>"+result[i].url+"</div>"+
                  
              "</div><div class='content' id='"+result[i].token+"'>"+result[i].content+"</div>"+"</div></div> "
            }
            document.getElementById('ld').innerHTML+="<img class='plus' onclick='showdata()'id='plus' src='./images/add.png'/>" 
            changedata();
    }

  return(
    <div className='Left' id='Left' >
   
      <div id="ld" className="id">
        <Loader/>
      </div>

      
      <form className="auto1" onSubmit={leftdata}>
        <input type='text' name="token" id="token" value=""></input>
        <button type="submit" id='loadreq'>submit</button>
      </form>
    </div>
  )

} 


export default Left;