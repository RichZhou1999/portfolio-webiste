import "./ProjectCell.scss"

const ProjectCell = ({src,description,position})=>{

    return(
        <>
        <div className="project_cell_frame">
        <img className="cell_img" src={src} />
        <div> {description}</div>
        </div>
        </>
    )
}
export default ProjectCell