const FileIcon = ({ type }) => {
    
    let icon = "fa-file-text-o";
    if (type === "folder") icon = "fa-folder" 
    return(
        <td className="file-icon">
            <i className={`fa ${icon}`}></i>
        </td>
    )
}

export default FileIcon;