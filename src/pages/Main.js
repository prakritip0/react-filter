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
            options: ["has", "is"],
            search: true
        },
        last_name: {
            options: ["has", "is"],
            search: true
        },
        email: {
            options: ["has", "is"],
            search: true
        },
        gender: {
            options: ["Male", "Female", "Non-binary", "Genderfluid", "Bigender", "Genderqueer", "Agender", "Polygender"],
            search: false
        },
        date_of_birth: {
            options: ["before", "after", "is"],
            search: true
        },
        "provinces ": {
            options: ["is", "is not"],
            search: true
        },
        hobbies: {
            options: ["include", "exclude"],
            search: true
        },
        socials: {
            options: ["has", "is"],
            search: true
        },
        ip_address: {
            options: ["range equals"],
            search: true
        },
        is_employed: {
            options: [{ label: "Employed", value: true }, { label: "Unemployed", value: false }],
            search: false
        }
    }

    const tagsArray = Object.keys(data[0]);

    useEffect(() => {
        // console.log(rawData)
        // console.log(tag, midTag)
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
        }
    }, [tag, midTag, filterInput])


    return (
        <div>
            <h1 className='logo'>Filter</h1>
            <Filters tag={tag} handleTag={handleTag} data={data} tagsArray={tagsArray} filter={filter} handleMidTag={handleMidTag} midTag={midTag} handleFilterInput={handleFilterInput} resetData={resetData} />
            <Display data={data} />
        </div>
    )
}

export default Main
