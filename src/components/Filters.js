import { BsChevronDown } from "react-icons/bs";
import { MdOutlineKeyboardAlt } from "react-icons/md";

let data = require("./data/data.json")
const Filters = () => {
  const tagsArray = Object.keys(data[0]);
  // console.log("tagsArray")
  return (
    <div className="filters flex-row">
      <div className="firstFilter flex-row">
        <BsChevronDown className='dropIcon1' />
        <input list="tags" id="filter1input" placeholder="Category" name="option" />
        <select id="tags">
          {tagsArray && tagsArray.map((category) => {
            // console.log(category);
            return (
              <option value={category}>{category}</option>
            )
          })}
        </select>
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