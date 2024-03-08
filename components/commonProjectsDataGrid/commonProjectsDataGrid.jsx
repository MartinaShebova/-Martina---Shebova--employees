function CommonProjectsDataGrid({ dataGridData }){
    function containsScript(row) {
        for (const cell of row) {
            if (/<script[\s\S]*?>[\s\S]*?<\/script>/i.test(cell)) {
                return true;
            }
        }
        return false;
    }

    console.log("dataGridData", dataGridData);
}

export default CommonProjectsDataGrid;