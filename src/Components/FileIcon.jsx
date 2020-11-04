import PropTypes from 'prop-types'

const FileIcon = ({file}) => {
    console.log(file);
    let icon = "fa-file-text-o";
    if (file.type === "folder") icon = "fa-folder" 
    return(
        <td className="file-icon">
            <i className={`fa ${icon}`}></i>
        </td>
    )
}

FileIcon.propTypes = {
    file: PropTypes.object.isRequired,
}


export default FileIcon;