import Image from "next/image"
export default function Profile(prop:any)
{
    return(
<div>
   <h1>
    {prop.name}
   </h1>
</div>
    )
}