import { useEffect, useState } from 'react'
import Display from "../components/Display"
import Filters from '../components/Filters'
let rawData = require("../data/data.json")

const Main = () => {
    const [data, setData] = useState(rawData);
    const [tag, setTag] = useState("Please select a category");
    const [midTag, setMidTag] = useState("")
    const [filterInput, setFilterInput] = useState("")

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
    // console.log(data)
    // const tagsArray = Object.keys(data[0]);

    useEffect(() => {
        console.log("FROM MAIN", data)
        console.log(tag, midTag)
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
                console.log(filter2Data)
            } else {
                setData(rawData)
            }
        } else {

        }
    }, [tag, midTag, filterInput])


    return (
        <div>
            <h1 className='logo'>Filter</h1>
            <Filters tag={tag} handleTag={handleTag} data={data} tagsArray={data} filter={filter} handleMidTag={handleMidTag} midTag={midTag} handleFilterInput={handleFilterInput} resetData={resetData} />
            <Display data={data} />
        </div>
    )
}

export default Main
