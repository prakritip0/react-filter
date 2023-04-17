import { BsChevronDown } from "react-icons/bs";
import { MdOutlineKeyboardAlt } from "react-icons/md";


// export const chosenCategory = ()=>{
//   return defaultTag
// }
const Filters = ({ defaultTag, setDefaultTag, data }) => {
  const tagsArray = Object.keys(data[0]);

  // tagsArray.unshift("Please select a category");

  const handleCategoryChange = (e) => {
    setDefaultTag(e.target.value)
  }
  return (
    <div className="filters flex-row">
      <div className="firstFilter flex-row">
        <select id="tags" defaultValue={defaultTag} onChange={handleCategoryChange}>
          <option value="">Please select a category</option>
          {tagsArray && tagsArray.map((category) => {
            console.log(defaultTag);
            return (
              <>
                <option value={category}>{category}</option>
              </>
            )
          })}
        </select>
        <BsChevronDown className='dropIcon1' />
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