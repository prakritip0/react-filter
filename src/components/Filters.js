import { useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";
import { MdOutlineKeyboardAlt } from "react-icons/md";


const Filters = ({ tag, handleTag, data, tagsArray, filter, handleMidTag }) => {
  useEffect(() => {
    if (tag !== "") {
    }

  }, [tag])
  const handleCategoryChange = (e) => {
    handleTag(e.target.value)
  }
  const handleMidTagChange =(e)=>{
    handleMidTag(e.target.value)
  }
  return (
    <div className="filters flex-row">
      <select className="padding border" id="tags" defaultValue={tag} onChange={handleCategoryChange}>
        <option value="">Please select a category</option>
        {tagsArray.length && tagsArray.map((category) => {
          return (
            <>
              <option value={category}>{category.split("_")}</option>
            </>
          )
        })}
      </select>


      <select className="padding" id="middleTags" onChange={handleMidTagChange}>
        {filter[tag]?.options && filter[tag]?.options.map((midTag) => {
          return (
            <option value={midTag}>{midTag} </option>
          )
        }

        )}
      </select>

      <div className="thirdFilter">
        <input type="text" disabled={!filter[tag]?.search} placeholder='type keywords...' />
        <MdOutlineKeyboardAlt className="keyboardIcon" />
      </div>
    </div>
  )
}

export default Filters