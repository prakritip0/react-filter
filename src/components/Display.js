const Display = ({ data }) => {

    return (
        <>
        <p className="total">Results: {data.length}</p>
            <div className="dataDisplay grid-3">
                
                {
                    data.length < 1 ? <p>No matches found</p> :

                        data.map((datum) => {
                            return (
                                <div className="singleProfile" key={datum.email}>
                                    <h2>{datum.first_name} {datum.last_name}</h2>
                                    <p>Email: {datum.email}</p>
                                    <p>Gender: {datum.gender}</p>
                                    <p>DOB: {datum.date_of_birth}</p>
                                    <p>Province: {datum["provinces "]}</p>
                                    <p>Hobbby: {datum.hobbies}</p>
                                    <p>Social Handle: {datum.socials}</p>
                                    <p>IP Address: {datum.ip_address}</p>
                                    <p>Employment Status: {datum.is_employed ? "Employed" : "Unemployed"}</p>
                                </div>
                            )
                        })}
            </div>
        </>
    )
}

export default Display

