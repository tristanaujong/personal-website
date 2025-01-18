function Projects (props) {
    return (
        <div class="w-60 h-60 rounded p-2 ml-4 mr-4 mb-10 hover:opacity-75">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <img src={props.image} alt="project_logo"></img>
            </a>
            <h2 class="font-sfprodisplaybold text-center mt-3 text-xl">
                {props.name}
            </h2>
        </div>
    )
}

export default Projects