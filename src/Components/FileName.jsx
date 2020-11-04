import FileIcon from './FileIcon'

const FileName = ({ file: {name ,type } }) => {
    return(
        <>
            <FileIcon type={type}/>
            <td className="file-name">
                {name}
            </td>
        </>
    )
}

export default FileName