const WelcomeProps = (props) => {

    // const firstProps = props.firstProps
    
    const [primo, secondo] = props.saluti

    if (!primo || !secondo) {
        return (
            <>
                <h2>Welcome</h2>
            </>
        )
    }
    return (
        <>
            <h2>{primo}</h2>
            <h2>{secondo}</h2>

        </>
    )
}

export default WelcomeProps