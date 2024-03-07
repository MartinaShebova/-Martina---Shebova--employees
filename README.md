# Employee Pair Project Duration Finder

This application identifies the pair of employees who have worked together on common projects for the longest period of time.

## Input Data

The input data is provided in a CSV file with the following format:

## Sample Data

EmpID, ProjectID, DateFrom, DateTo

143, 12, 2013-11-01, 2014-01-05
218, 10, 2012-05-16, NULL
143, 10, 2009-01-01, 2011-04-27

## Sample Output

The output displays the employee IDs and the duration of their collaboration on common projects:

## Usage

1. Load the input data from a CSV file.
2. Select the file through the application's UI.
3. View the common projects of employee pairs and the duration of their collaboration in a datagrid.

## Specific Requirements

- `DateTo` can be NULL, equivalent to today's date.
- The input data must be loaded from a CSV file.
- The application provides a user interface for file selection and displays results in a datagrid.

## Bonus Points

- Support for multiple date formats.