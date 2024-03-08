import workTimeCalculator from '@/services/workTimeCalculator/workTimeCalculator';
import Papa from 'papaparse';

function CSVUploader({ parsedData }) {

    const passFileValidations = (file) => {
        if (file.type !== 'text/csv') {
            console.log('Please select a CSV file');
            return false;
        }

        if (file.size === 0) {
            console.log('File is empty');
            return false;
        }

        if (file.size > 1024 * 1024) { // 1 MB limit
            console.log('File size exceeds the limit');
            return false;
        }

        return true;
    }

    const handleFileUpload = (event) => {
        const file = event.target.files[0];

        if (!passFileValidations(file)) {
            return;
        }

        Papa.parse(file, {
            complete: (result) => {
                const csvData = result.data;
                const calculatedData = workTimeCalculator(csvData);
                parsedData(calculatedData);
            },
            header: true
        })
    }

    return <input type="file" onChange={handleFileUpload} />
}

export default CSVUploader;