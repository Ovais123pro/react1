import { useState } from "react";

function Assignment(){
    const[num, setNum]=useState(1);
    return(
        <> 
        <h1> Hit counter</h1>
        <h1>counter:{num}</h1>
        <button onClick={()=>setNum(num+1)}>Plus</button>
         <button onClick={()=>setNum(num-1)}>Minus</button>
          <button onClick={()=>setNum(num*2)}>Multiply</button>
          <button onClick={()=>setNum(0)}>Reset</button>
        <h3>Range(0 To 5)</h3>
        {
            Number==0?<h1>Zero</h1>
            :Number==1?<h1>One</h1>
             :Number==2?<h1>Two</h1>
              :Number==3?<h1>Three</h1>
               :Number==4?<h1>Four</h1>
                :Number==5?<h1>Five</h1>:<h1></h1>
        }
        </>
    )
}
export default Assignment;