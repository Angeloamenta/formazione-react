import StampaEsercizio from "../components/StampaEsercizio"

import WelcomeProps from "../components/WelcomeProps"


const Esercizio1 = () => {

    const saluti =["ciao react", "salve react"]

    return (
        <>
        <StampaEsercizio numero="1"/>
        <div>
            {/* <WelcomeProps firstProps="hello!!!"/> */}
            <WelcomeProps saluti={saluti}/>

        </div>
        </>
    )
}

export default Esercizio1

