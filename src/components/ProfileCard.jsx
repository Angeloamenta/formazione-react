const ProfileCard = ({ 
  name = "Utente inesistente", 
  info = "informazione non disponibile" 
}) => {
    return (
        <>
        <div className="card shadow-2xl rounded-2xl w-100">
            <div className="innerCard p-4">
                <div className="avatar-container text-center">
                    <img className="avatar w-100" src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="" />
                </div>
                <div className="user-info">
                    <h3 className="font-semibold mt-1">{name}</h3>
                </div>
                <div className="">
                    <p>{info} </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProfileCard