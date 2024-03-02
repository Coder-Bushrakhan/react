
const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];
export default function Rendering()
{
    // const item=people.map(person=><ul>{person}</ul>)
const chemist =people.filter(person=>person.profession==="chemist"  )   ////filtering chemist from data
const chemist_list= chemist.map(person=><li>   
     <p>
       <b>{person.name}:</b>
       {' ' + person.profession + ' '}
     </p>
  </li>)  ////maping over chemist


const math=people.filter(person=>person.profession==="mathematician")
const mathList=math.map(person=>
<li>
   <b> {person.name}</b> <p>{''+person.profession+""}</p></li> )


return(
        // <li>{item}</li>

//  <ul>{chemist_list}
// </ul> 
<ul>{mathList}</ul>

    )
}