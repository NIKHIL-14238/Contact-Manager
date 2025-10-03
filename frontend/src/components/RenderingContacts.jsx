
export default function RenderingContacts({contact}){
return <div>
        {contact.map(function(contact){
        return <div>
        <h1>{contact.person_name}</h1>
        <h1>{contact.person_number}</h1>
        </div>
    
        
       })} 
    </div>

}
