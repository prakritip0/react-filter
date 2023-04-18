import { useState } from 'react'
import Display from "../components/Display"
import Filters from '../components/Filters'
let rawData = require("../data/data.json")

const Main = () => {
    const [data, setData] = useState(rawData);
    const [tag, setTag] = useState("Please select a category");
    const [midTag, setMidTag] = useState("")

    const handleTag = (val) => {
        setTag(val);
    }
    const handleMidTag=(val)=>{ 
        setMidTag(val);
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
            options: ["Male", "Female", "Other"],
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
            options: ["Employed", "Unemployed"],
            search: false
        }
    }
    
    const tagsArray = Object.keys(data[0]);

console.log(midTag)
    return (
        <div>
            <h1 className='logo'>Filter</h1>
            <Filters tag={tag} handleTag={handleTag}  data={data} tagsArray={tagsArray} filter={filter} handleMidTag={handleMidTag} />
            <Display tag={tag} data={data} filter={filter} />
        </div>
    )
}

export default Main
