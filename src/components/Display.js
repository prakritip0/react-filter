
import { data } from "./Filters";

const Display = (props) => {
    // console.log(data);
    return (
        <>
            <div className="dataDisplay">
                {data.map((profile) => {
                    return (
                        <p>
                            {profile.props.chosenCategory};
                        </p>
                    )
                })}
            </div>
        </>


    )
}

export default Display