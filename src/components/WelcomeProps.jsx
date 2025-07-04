const WelcomeProps = (props) => {

    const firstProps = props.firstProps;

    if (!firstProps) {
        return (
            <>
                <h2>Welcome</h2>
            </>
        )
    }
    return (
        <>
            <h2>{props.firstProps}</h2>
        </>
    )
}

export default WelcomeProps