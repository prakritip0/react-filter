import { useEffect, useState } from 'react'
import Display from "../components/Display"
import Filters from '../components/Filters'
let rawData = require("../data/data.json")

const Main = () => {
    const [data, setData] = useState(rawData);
    const [tag, setTag] = useState("");
    const [midTag, setMidTag] = useState("")
    const [filterInput, setFilterInput] = useState("")

    // console.log(tag, midTag);

    const handleTag = (val) => {
        setTag(val);
    }
    const handleMidTag = (val) => {
        setMidTag(val);
    }
    const handleFilterInput = (val) => {
        setFilterInput(val)
    }
    const resetData = () => {
        setData(rawData)
    }

    const filter = {
        first_name: {
            options: [{ label: "has", value: "has" }, { label: "is", value: "is" }],
            search: true
        },
        last_name: {
            options: [{ label: "has", value: "has" }, { label: "is", value: "is" }],
            search: true
        },
        email: {
            options: [{ label: "has", value: "has" }, { label: "is", value: "is" }],
            search: true
        },
        gender: {
            options: [{ label: "Male", value: "Male" }, { label: "Female", value: "Female" }, { label: "Non-binary", value: "Non-binary" }, { label: "Genderfluid", value: "Genderfluid" }, { label: "Bigender", value: "Bigender" }, { label: "Genderqueer", value: "Genderqueer" }, { label: "Agender", value: "Agender" }, { label: "Polygender", value: "Polygender" }],
            search: false
        },
        date_of_birth: {
            options: [{ label: "before", value: "before" }, { label: "after", value: "after" }, { label: "is", value: "is" }],
            search: true
        },
        "provinces ": {
            options: [{ label: "is", value: "is" }, { label: "is not", value: "is not" }],
            search: true
        },
        hobbies: {
            options: [{ label: "include", value: "include" }, { label: "exclude", value: "exclude" }],
            search: true
        },
        socials: {
            options: [{ label: "has", value: "has" }, { label: "is", value: "is" }],
            search: true
        },
        ip_address: {
            options: [{ label: "range equals", value: "range equals" }],
            search: true
        },
        is_employed: {
            options: [{ label: "Employed", value: true }, { label: "Unemployed", value: false }],
            search: false
        }
    }

    useEffect(() => {
        console.log(midTag)
        if (tag === "gender") {
            if (midTag !== "") {
                const filter2Data = data.filter((profile) => {
                    return profile[tag] === midTag;
                })
                setData(filter2Data)
            } else {
                setData(rawData)
            }
        }
        else if (tag === "is_employed") {
            if (midTag !== "") {
                const filter2Data = data.filter((profile) => {
                    return profile[tag] === (midTag === "true" ? true : false);
                })
                setData(filter2Data)
            } else {
                setData(rawData)
            }
        } else if (tag === "first_name" || tag === "last_name" || tag === "email" || tag === "socials") {
            if (midTag !== "") {
                if (midTag === "has") {
                    const filter2Data = data.filter((profile) => {
                        return (profile[tag].toLowerCase()).includes((`${filterInput}`).toLowerCase())
                    })
                    if (filterInput !== "") {
                        setData(filter2Data);
                    }

                    return
                }
                if (midTag === "is") {
                    const filter2Data = data.filter((profile) => {
                        return (profile[tag]).toLowerCase() === (filterInput).toLowerCase();
                    })
                    if (filterInput !== "") {
                        setData(filter2Data);
                    }
                }
            }
            else {
                setData(rawData)
            }

        } else if (tag === "provinces ") {
            if (midTag !== "") {
                if (midTag === "is") {
                    const filter2Data = data.filter((profile) => {
                        return profile[tag] === Number(filterInput);
                    })
                    if (filterInput !== "") {
                        setData(filter2Data);
                    }
                }
                if (midTag === "is not") {
                    const filter2Data = data.filter((profile) => {
                        return profile[tag] !== Number(filterInput);
                    })
                    if (filterInput !== "") {
                        setData(filter2Data);
                    }
                }
            } else {
                setData(rawData)
            }
        } else if (tag === "hobbies") {
            if (midTag !== "") {
                if (midTag === "include") {
                    const filter2Data = data.filter((profile) => {
                        return profile[tag] === filterInput;
                    })
                    if (filterInput !== "") {
                        setData(filter2Data);
                    }
                }
                if (midTag === "exclude") {
                    const filter2Data = data.filter((profile) => {
                        return profile[tag] !== filterInput;
                    })
                    if (filterInput !== "") {
                        setData(filter2Data);
                    }
                }
            } else {
                setData(rawData)
            }
        } else if (tag === "date_of_birth") {
            if (midTag !== "") {
                if (midTag === "is") {
                    const filter2Data = data.filter((profile) => {
                        const incomingDateISO = profile[tag].split('/');
                        const formattedDate = incomingDateISO[2] + '-' + incomingDateISO[0].padStart(2, '0') + '-' + incomingDateISO[1].padStart(2, '0');
                        return formattedDate === (filterInput).replace(/\//g, '-');
                    })
                    if (filterInput !== "") {
                        setData(filter2Data);
                    }
                }
                if (midTag === "before") {
                    const filter2Data = data.filter((profile) => {
                        const incomingDateISO = profile[tag].split('/');
                        const formattedDate = incomingDateISO[2] + '-' + incomingDateISO[0].padStart(2, '0') + '-' + incomingDateISO[1].padStart(2, '0');
                        return formattedDate < (filterInput).replace(/\//g, '-');
                    })
                    if (filterInput !== "") {
                        setData(filter2Data);
                    }
                }
                if (midTag === "after") {
                    const filter2Data = data.filter((profile) => {
                        const incomingDateISO = profile[tag].split('/');
                        const formattedDate = incomingDateISO[2] + '-' + incomingDateISO[0].padStart(2, '0') + '-' + incomingDateISO[1].padStart(2, '0');
                        return formattedDate > (filterInput).replace(/\//g, '-');
                    })
                    if (filterInput !== "") {
                        setData(filter2Data);
                    }
                }
            } else {
                setData(rawData)
            }

        }
    }, [tag, midTag, filterInput])

    const allData = {
        tag: tag,
        data: data,
        tagsArray: rawData,
        filter: filter,
        midTag: midTag,
        filterInput: filterInput
    }
    const handleChange = {
        handleTag,
        handleMidTag,
        handleFilterInput
    }

    return (
        <div>
            <a href="index.html" className='logo'>Filter</a>
            <Filters allData={allData} handleChange={handleChange} resetData={resetData} />
            <Display data={data} />
        </div>
    )
}

export default Main
