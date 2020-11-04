import FileIcon from './FileIcon'
import PropTypes from 'prop-types';

const FileName = ({ file }) =>(
        <>
            <FileIcon file={file}/>
            <td className="file-name">{file.name}</td>
        </>
)

FileName.propTypes = {
    file: PropTypes.object.isRequired,
}


export default FileName