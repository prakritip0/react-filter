import { MdOutlineKeyboardAlt } from "react-icons/md";


const Filters = (props) => {
  const { tag, tagsArray, filter, midTag, filterInput } = props.allData;
  const { handleTag, handleMidTag, handleFilterInput } = props.handleChange;
  const resetData = props.resetData;



  const handleCategoryChange = (e) => {
    resetData();
    handleFilterInput("")
    handleTag(e.target.value)
    handleMidTag('');
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
      <select className="padding border" id="tags" value={tag} onChange={handleCategoryChange}>
        <option>Please select a category</option>
        {filterOptions.map((category, i) => {
          return (
            <>
              <option key={i} value={category}>{category.replace("_", " ")}</option>
            </>
          )
        })}
      </select>

      <select className="padding" id="middleTags" value={midTag} onChange={handleMidTagChange}>
        <option>Select filter type</option>
        {filter[tag]?.options && filter[tag]?.options.map((midTag, i) => {

          return (
            <option key={midTag.value} value={midTag.value}>{midTag.label}</option>
          )

        }
        )}
      </select>

      <div className="thirdFilter">

        {(tag === "date_of_birth" ? (
          <input type="date" disabled={!filter[tag]?.search || midTag === ""} placeholder='type keywords...' onChange={handleFilterInputChange} />
        ) : tag === "provinces " ? (
          <input type="number" disabled={!filter[tag]?.search || midTag === ""} placeholder='type province...' onChange={handleFilterInputChange} />
        ) : (
          <input type="text" disabled={!filter[tag]?.search || midTag === ""} placeholder='type keywords...' value={filterInput} onChange={handleFilterInputChange} />
        )
        )}
        <MdOutlineKeyboardAlt className="keyboardIcon" />
      </div>
    </div>
  )
}

export default Filters