import { useState } from 'react'
import Display from "../components/Display"
import Filters from '../components/Filters'
let rawData = require("../data/data.json")

const Main = () => {
    const [tag, setTag] = useState("Please select a category");
    console.log(tag);

    const handleTag = () => {
        setTag();
    }
    const [data, setData] = useState(rawData);

    const handleCategoryChange = (e) => {
    console.log(e.target.value);
    setTag(e.target.value)
  }
  const tagsArray = Object.keys(data[0]);

    return (
        <div>
            <h1 className='logo'>Filter</h1>
            <Filters tag={tag} setTag={handleTag} data={data} tagsArray={tagsArray} />
            <Display tag={tag} data={data} />
        </div>
    )
}

export default Main
