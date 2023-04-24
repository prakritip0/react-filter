import { MdOutlineKeyboardAlt } from "react-icons/md";


const Filters = ({ tag, handleTag, resetData, tagsArray, filter, handleMidTag, midTag, handleFilterInput, filterInput }) => {
  // console.log(tag)
  
  const handleCategoryChange = (e) => {
    resetData()
    handleMidTag("")
    handleTag(e.target.value)
    handleFilterInput("")
  }


  const handleMidTagChange = (e) => {
    resetData()
    handleMidTag(e.target.value)
    handleFilterInput("")
  }
  const handleFilterInputChange = (e) => {
      resetData()
      handleFilterInput(e.target.value)
  }
  const filterOptions = Object.keys(tagsArray[0]).length && Object.keys(tagsArray[0])

  return (
    <div className="filters flex-row">
      <select className="padding border" id="tags" defaultValue={tag} onChange={handleCategoryChange}>
        <option value="">Please select a category</option>
        {filterOptions.map((category, i) => {
          return (
            <>
              <option key={i} value={category}>{category.split("_")}</option>
            </>
          )
        })}
      </select>

      <select className="padding" id="middleTags" onChange={handleMidTagChange}>
        <option value="" selected="selected">Select filter type</option>
        {filter[tag]?.options && filter[tag]?.options.map((midTag, i) => {
          return (
            <option key={midTag.value} value={midTag.value}>{midTag.label} </option>
          )

        }
        )}
      </select>

      <div className="thirdFilter">
        
        {tag==="date_of_birth"? <input type="date" placeholder='type keywords...' onChange={handleFilterInputChange} />: 
        <input type="text" disabled={!filter[tag]?.search || midTag==="" } placeholder='type keywords...' value={filterInput} onChange={handleFilterInputChange} />}
        <MdOutlineKeyboardAlt className="keyboardIcon" />
      </div>
    </div>
  )
}

export default Filters