import FileName from "./Components/FileName";
import CommitMessage from "./Components/CommitMessage.jsx";

const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map((file) => (
        <tr className="file-list-item" key={file.id}>
          <FileName file={file} />
          <CommitMessage commit={file.latestCommit} />
        </tr>
      ))}
    </tbody>
  </table>
);

export default FileList;
