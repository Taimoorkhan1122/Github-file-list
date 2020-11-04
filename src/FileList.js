import FileName from "./Components/FileName";

const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map((file) => (
        <tr className="file-list-item" key={file.id}>
          {<FileName file={file} />}
        </tr>
      ))}
    </tbody>
  </table>
);

export default FileList;
