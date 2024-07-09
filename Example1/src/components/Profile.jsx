const user={
    name:"SOHO 13206",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/MMA_2023_NCT_Dream_1.jpg/800px-MMA_2023_NCT_Dream_1.jpg",
    imagesize:"500px"
}
const members=[
    {id:"1" ,name:"Haritha"},
    {id:"2" ,name:"Aravindh"},
    {id:"3" ,name:"Lalitha"},
    {id:"4" ,name:"Subhadra"},
    {id:"5" ,name:"Yeswanth"},
    {id:"6" ,name:"Adhi"},
    {id:"7" ,name:"Naveen"}


]
  const listmembers=members.map(person=>
    <li key="person.id">{person.name}</li>
) 

export function Profile(){


    return(
        <>
        <h1>{user.name}</h1>
        <img  src={user.image} width={user.imagesize} />
        <ul >{listmembers}</ul>
        </>
    )
}