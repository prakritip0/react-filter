import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { MdOutlineKeyboardAlt } from "react-icons/md";

let data = require("./data/data.json")
const Filters = () => {
  const tagsArray = Object.keys(data[0]);
  tagsArray.unshift("Please select a category");
  
  const [defaultTag, setDefaultTag] = useState("Please select a category");
  return (
    <div className="filters flex-row">
      <div className="firstFilter flex-row">
        <select id="tags" defaultValue={defaultTag}>
          {tagsArray && tagsArray.map((category) => {
            return (
              <>
                <option value={category}>{category}</option>
              </>
            )
          })}
        </select>
        <BsChevronDown className='dropIcon1'/>
      </div>

      <div className="secondFilter flex-row border">
        <p>Is</p>
        <BsChevronDown className='dropIcon2' />
      </div>
      <div className="thirdFilter">
        <input type="text" placeholder='type keywords...' />
        <MdOutlineKeyboardAlt className="keyboardIcon" />
      </div>
    </div>
  )
}

export default Filters