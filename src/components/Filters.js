import { BsChevronDown } from "react-icons/bs";
import { MdOutlineKeyboardAlt } from "react-icons/md";


// export const chosenCategory = ()=>{
//   return defaultTag
// }
const Filters = ({ tag, setTag, data, tagsArray}) => {

  const handleCategoryChange = (e) => {
    setTag(e.target.value)
    
  }
  return (
    <div className="filters flex-row">
        <select className="padding border" id="tags" defaultValue={tag} onChange={handleCategoryChange}>
          <option value="">Please select a category</option>
          {tagsArray && tagsArray.map((category) => {
            console.log(tag);
            return (
              <>
                <option value={category }>{category.split("_")}</option>
              </>
            )
          })}
        </select>

      <div className="secondFilter flex-row border padding">
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