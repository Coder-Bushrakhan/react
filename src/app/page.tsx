"use client"
"use state"

import { useState } from "react"

export default function Home()
{
const [log,unlog]=useState(false)


  return(
    <div>
{
log?<h1>hi bushra</h1>:<h1>bye</h1>
  
}

    </div>
  )
}