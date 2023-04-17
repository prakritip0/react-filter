const Display = ({ defaultTag, data }) => {
    // console.log(keys);
    // console.log(data);
    return (
        <>
            <div className="dataDisplay flex-row">
                {/* {data.map((datum) => {
                    console.log(defaultTag);
                    return (
                        <p key={datum.email}>
                            {datum[defaultTag]}
                        </p>
                    )
                })} */}
                {data.map((datum) => {
                    // datum.map((key)=>{
                    //     console.log(key)
                    // })
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
                            <p>Employment Status: {datum.is_employed ? "Employed": "Unemployed"}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Display

