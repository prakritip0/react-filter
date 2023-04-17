import { BsChevronDown } from "react-icons/bs";
import { MdOutlineKeyboardAlt } from "react-icons/md";

let data = require("./data/data.json")
const Filters = () => {
  // const filter1options = data.map((profile)=>{
  //   const tagsArray = Object.keys(profile);
  //   console.log(tagsArray)
  // })
  const tagsArray = Object.keys(data[0]);
  // console.log("tagsArray")
  return (
    <div className="filters flex-row">
      <div className="firstFilter flex-row">
        <BsChevronDown className='dropIcon1' />
        <input list="tags" id="filter1input" placeholder="Category" name="option" />
        <datalist id="tags">
          {tagsArray && tagsArray.map((category)=>{
            // console.log(category);
            return(
              <option value={category}></option>
            )
          })}
        </datalist>
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