import "../MainContainer/mainContainer.scss"

import { ToolsCardLayout } from '../ToolsCardLayout'
import { Constants } from "../constants/Constants"
import toolsObject from '../../jsonData/Tools.json'

export const Tools = () => {
    const data = toolsObject.toolsData
    return (<main>
        <div className="prototypes-main-section">
            <h3> {Constants.Tools} </h3>
            <div className='flex-container'>
                {data.Tools.map((obj: any, i: any) => (
                    <ToolsCardLayout obj={obj} objkey={i}></ToolsCardLayout>
                ))
                }
            </div>
        </div>
    </main>)
}