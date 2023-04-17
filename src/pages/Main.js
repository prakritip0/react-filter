import { useState } from 'react'
import Display from "../components/Display"
import Filters from '../components/Filters'
let rawData = require("../data/data.json")

const Main = () => {
    const [defaultTag, setDefaultTag] = useState("Please select a category");
    console.log(defaultTag);
    const handleDefaultTag = () => {
        setDefaultTag();
    }
    const [data, setData] = useState(rawData);

    const handleCategoryChange = (e) => {
    console.log(e.target.value);
    setDefaultTag(e.target.value)
  }

    return (
        <div>
            <h1 className='logo'>Filter</h1>
            <Filters defaultTag={defaultTag} setDefaultTag={handleDefaultTag} data={data} />
            <Display defaultTag={defaultTag} data={data} />
        </div>
    )
}

export default Main
