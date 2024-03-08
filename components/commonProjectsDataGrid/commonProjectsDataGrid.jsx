import styles from '../../styles/CommonProjectsDataGrid.module.css';

function CommonProjectsDataGrid({ dataGridData }) {

    console.log("dataGridData", dataGridData);
    // {
    //     114-218: 434
    // }

    const extractValues = (data) => {
        return (
            <div>
                {Object.keys(dataGridData).map(key => (
                    <td key={key}>{key}: {data[key]}</td>
                ))}
            </div>
        );
    }

    return <>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th className={styles.header}>Employee ID #1</th>
                    <th className={styles.header}>Employee ID #2</th>
                    <th className={styles.header}>Days Worked</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(dataGridData).map((key, index) => {
                    const pairs = key.split("-");
                    const firstEmployee = pairs[0];
                    const secondEmployee = pairs[1];

                    return <tr key={index} className={styles.row}>
                        <td className={styles.cell}>{firstEmployee}</td>
                        <td className={styles.cell}>{secondEmployee}</td>
                        <td className={styles.cell}>{dataGridData[key]}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}

export default CommonProjectsDataGrid;