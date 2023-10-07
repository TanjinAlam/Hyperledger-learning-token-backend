import { useState } from "react";
import * as XLSX from "xlsx";
const ExcelRead = () => {
  const [excelData, setExcelData] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);
        setExcelData(jsonData);
      };

      reader.readAsArrayBuffer(file);
    }
  };

  console.log(excelData);

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default ExcelRead;
