import { ToolsCardLayout } from "../ToolsCardLayout"
import { Constants } from "../constants/Constants";
import jsonData from "../../jsonData/DEcomponents.json";

export const DEcomponents = () => {
    const deComponents = jsonData.DEcomponentsData
    return (<main>
        <div className="prototypes-main-section">
            <h1 className="segments-heading">{Constants.Components}</h1>
            <div className='flex-container'>
                {
                    deComponents.Components.map((obj: any, i: any) => (
                        <ToolsCardLayout obj={obj} objkey={i}></ToolsCardLayout>
                    ))
                }
            </div>
        </div>
    </main>)
}