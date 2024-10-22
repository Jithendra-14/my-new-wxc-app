export const ToolsCardLayout = (props: any) => {

    const filteredObj = props.obj;
    const objkey = props.objkey;

    let nameDiv;
    let descriptionDiv;

    if (filteredObj.name !== "") {
        nameDiv = <div className='card-initiative-container'>
            <div className='card-initiative'>
                <span className='tools-card-sub-heading'> {filteredObj.name}</span></div>
        </div>
    }

    if (filteredObj.description !== "") {
        descriptionDiv = <div className='card-initiative-container'>
            <div className='card-initiative'>
                <span className='tools-card-sub-heading'> {filteredObj.description}</span></div>
        </div>
    }

    return (
        <a href={process.env.PUBLIC_URL + filteredObj.link} rel="noreferrer" target="_blank" className='link-container' key={objkey}>
            <img src={filteredObj.image} alt={filteredObj.linkLabel} />
            <div className="main-card">
                <div className='card-link-label'>{filteredObj.linkLabel ? filteredObj.linkLabel : ""} </div>
                {nameDiv}
                {descriptionDiv}
            </div>
        </a>
    )
}
