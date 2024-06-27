import Card from "./CardComponent"
import { dataObj } from "../utils/data";

const Body = () => {
    return (
            <div className="container">
                {
                  dataObj.restaurants.map(res => <Card key={res.info.id} data={res.info}/>)
                }
            </div>
        )
}

export default Body;