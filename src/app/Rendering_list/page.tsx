export default function Page()
{
    // make array 
    const people = [{
        
       name: 'Creola Katherine Johnson',
       profession: 'mathematician',},
          {    name:'Mario José Molina-Pasquel Henríquez',
       profession:'chemist',}
       
];
// apply map
const chemists =people.map(person=>
<li>{person.profession==='chemist'} </li> )


    return(
        <div className="text-center">
            <ul>{chemists}</ul>
        </div>
    )
}