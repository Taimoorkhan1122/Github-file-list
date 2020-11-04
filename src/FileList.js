const FileList = ({ files }) => (
  <table>
    <tbody>
      {files.map((file) => (
        <tr className="file-list-itme" key={file.id}>
          <td className="file-name">{file.name}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default FileList;
