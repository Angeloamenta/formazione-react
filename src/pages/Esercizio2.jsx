import StampaEsercizio from "../components/StampaEsercizio"

import ProfileCard from "../components/ProfileCard"


const Esercizio2 = () => {
    
   const users = [
        {
            name: "mimmo",
            info: "cose a caso"
        },
        {
            name: "maccio",
            info: "sempre le cose a caso"
        },

        {

        },
        {
            
        }
    ]

    return (
        <>
        <StampaEsercizio numero="2" />
        <div>
            <h2>Card Component</h2>
        </div>
        <div className="card-container flex gap-4">
            {users.map((user, index) => {
                return(
                    <ProfileCard key={index} name={user.name} info={user.info}/>
                )
            })}
            
        </div>
        </>
    )
}

export default Esercizio2