"use client"
import { useState } from "react"

export default function Page()
{
    const [value,set_vale]=useState("Blue")
    return(

        <div>
<button onClick={()=>set_vale("Red") }>
  
  
    Button
    {value}
</button>
        </div>
    )
}