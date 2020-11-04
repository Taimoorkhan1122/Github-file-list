import FileName from "./Components/FileName";
import CommitMessage from "./Components/CommitMessage.jsx";
import Time from "./Components/Time";

const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map((file) => (
        <tr className="file-list-item" key={file.id}>
          <FileName file={file} />
          <CommitMessage commit={file.latestCommit} />
          <td className="age">
            <Time time={file.updated_at} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default FileList;
