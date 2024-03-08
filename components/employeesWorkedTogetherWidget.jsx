import { useState } from "react";
import CommonProjectsDataGrid from "./commonProjectsDataGrid/commonProjectsDataGrid";
import CSVUploader from "./csvUploader/csvUploader";

function EmployeesWorkedTogetherWidget() {
    const [parsedData, setParsedData] = useState(null);

    const handleParsedData = (data) => {
        setParsedData(data);
    }

    return <>
        <CSVUploader parsedData={handleParsedData} />
        {parsedData && <CommonProjectsDataGrid dataGridData={parsedData} />}
    </>
}

export default EmployeesWorkedTogetherWidget;