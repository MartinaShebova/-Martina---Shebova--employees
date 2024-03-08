function workTimeCalculator(csvContent) {

    const standartizeDate = (date) => {
        let day = date.getDate();

        if (day < 10) {
            day = `0${day}`;
        }

        let month = date.getMonth() + 1;

        if (month < 10) {
            month = `0${month}`;
        }

        const year = date.getFullYear();

        return `${year}-${month}-${day}`;
    }

    const tryToFormatDate = (inputDate) => {
        if (isNaN(new Date(inputDate)) && inputDate !== "NULL") {
            return false;
        } else {
            return new Date(inputDate);
        }
    }

    let formatedCSVData = csvContent.map(record => {

        const dateFrom = tryToFormatDate(record.DateFrom);
        const dateTo = tryToFormatDate(record.DateTo);

        if (dateFrom === false || dateTo === false) {
            return {};
        } else {
            record.DateFrom = standartizeDate(new Date(record.DateFrom));

            if (record.DateTo === "NULL") {
                record.DateTo = standartizeDate(new Date());
            } else {
                record.DateTo = standartizeDate(new Date(record.DateTo));
            }

            return record;
        }
    })

    formatedCSVData = formatedCSVData.filter(data => Object.keys(data).length > 0);

    let projects = Object.groupBy(formatedCSVData, ({ ProjectID }) => ProjectID);
    let finalResult = {};
    const buildEmployeePairIdentifier = (firstEmployee, secondEmployee) => `${firstEmployee}-${secondEmployee}`;

    Object.keys(projects).forEach(project => {
        const currentProject = projects[project];

        for (let i = 0; i < currentProject.length; i++) {
            for (let j = i + 1; j < currentProject.length; j++) {

                const firstEmployee = currentProject[i];
                const secondEmployee = currentProject[j];
                let pairIndentifier;

                if (firstEmployee.EmpID !== secondEmployee.EmpID) {
                    pairIndentifier = buildEmployeePairIdentifier(firstEmployee.EmpID, secondEmployee.EmpID);
                }

                const overlapDaysCount = calculateOverlapDays(
                    new Date(firstEmployee.DateFrom),
                    new Date(firstEmployee.DateTo),
                    new Date(secondEmployee.DateFrom),
                    new Date(secondEmployee.DateTo)
                );

                if (overlapDaysCount && pairIndentifier) {
                    if (finalResult.hasOwnProperty(pairIndentifier)) {
                        finalResult[pairIndentifier] += overlapDaysCount;
                    } else {
                        finalResult[pairIndentifier] = overlapDaysCount;
                    }
                }
            }
        }
    })

    function calculateOverlapDays(firstEmployeeStartDate, firstEmployeeEndDate, secondEmployeeStartDate, secondEmployeeEndDate) {

        const overlapStartDate = new Date(Math.max(firstEmployeeStartDate, secondEmployeeStartDate));
        const overlapEndDate = new Date(Math.min(firstEmployeeEndDate, secondEmployeeEndDate));

        // If there's no overlap, return 0
        if (overlapStartDate > overlapEndDate) {
            return 0;
        }

        const millisecondsInDay = 1000 * 60 * 60 * 24;
        const overlapDays = Math.floor((overlapEndDate - overlapStartDate) / millisecondsInDay) + 1;

        return overlapDays;
    }

    //Pair of employees who have worked together for the longest time
    let maxPair = null;
    let maxValue = 0;

    for (const pair in finalResult) {
        const value = finalResult[pair];
        if (value > maxValue) {
            maxValue = value;
            maxPair = { [pair]: value };
        }
    }

    return maxPair;
}

export default workTimeCalculator;