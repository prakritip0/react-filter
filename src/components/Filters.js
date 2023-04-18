import { MdOutlineKeyboardAlt } from "react-icons/md";


const Filters = ({ tag, handleTag, resetData, tagsArray, filter, handleMidTag, handleFilterInput }) => {
  // useEffect(() => {
  //   if (tag !== "") {
  //   }

  // }, [tag])
  const handleCategoryChange = (e) => {
    handleTag(e.target.value)
  }
  const handleMidTagChange = (e) => {
    resetData()
    handleMidTag(e.target.value)

  }
  const handleFilterInputChange = (e) => {
    handleFilterInput(e.target.value)
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
        <option value="">Select filter type</option>
        {filter[tag]?.options && filter[tag]?.options.map((midTag) => {
          // console.log(typeof filter[tag]?.options !== "object"); //false

          if (typeof filter[tag]?.options[0] !== "object") {
            return (
              <option value={midTag}>{midTag} </option>
            )
          } else {
            return (
              <option value={midTag.value}>{midTag.label} </option>
            )
          }
        }
        )}
      </select>

      <div className="thirdFilter">
        <input type="text" disabled={!filter[tag]?.search} placeholder='type keywords...' onChange={handleFilterInputChange} />
        <MdOutlineKeyboardAlt className="keyboardIcon" />
      </div>
    </div>
  )
}

export default Filters