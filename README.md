# Schedule Assistant

Schedule Assistant is a web application that helps you manage employee preferences and assignments. It provides a user-friendly interface to add employees, update their shifts, and view employee information. This tool is designed to assist in scheduling tasks and facilitate efficient management of employee resources.
<p align="center">
  <img width="1440" alt="Screenshot 2023-06-25 at 11 26 53 PM" src="https://github.com/carsondrobe/Scheduling_Assistant/assets/91719000/7deda89f-b717-40ff-8ce4-ad87560fc3da">
</p>


## Prerequisites

- Node.js (version 18.16.0)
- MySQL

## Installation

1. Clone the repository:

   git clone https://github.com/carsondrobe/schedule_assistant.git

2. Install the dependencies:

   cd schedule_assistant
   npm install


3. Set up the database:
   - Create a MySQL database named `employeeSystem`.
   - Import the SQL schema provided in the `database-schema.sql` file to create the required tables.

4. Configure the server:
   - Open the `server/index.js` file.
   - Update the MySQL connection details (user, password, host) if necessary.

5. Start the server:

   node index.js


6. Open the web application:
   - Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Add an employee:
   - Enter the employee's first name, last name, shifts per week, and position.
   - Click the "Add Employee" button to add the employee to the database.

2. View employees:
   - Click the "View All Employees" button to display a list of all employees.
   - Each employee entry includes their name, position, and shifts per week.

3. Update employee shifts:
   - Enter the new shifts per week for the desired employee.
   - Click the "Update" button to save the changes.

4. Delete an employee:
   - Click the "Delete" button next to an employee to remove them from the database.

5. Filter employees by position:
   - Select a position from the "Filter by Position" dropdown menu.
   - Click the "View All Employees" button to display only the employees with the selected position.

## API Routes

The following API routes are available:

- `POST /create`: Add a new employee.
- `GET /employees`: Retrieve all employees.
- `PUT /update`: Update an employee's shifts.
- `DELETE /delete/:id`: Delete an employee by ID.

## Database Schema

The database schema consists of a single table named `Employees` with the following columns:

- `id`: Employee ID (primary key)
- `firstName`: Employee's first name
- `lastName`: Employee's last name
- `shifts`: Number of shifts per week
- `position`: Employee's position

 For a detailed overview of the database schema, refer to the `database-schema.sql` file.

## Troubleshooting

If you encounter any issues or errors while using Schedule Assistant, consider the following solutions:

- Verify that you have installed the required dependencies correctly.
- Ensure that the MySQL server is running and accessible.
- Double-check the database connection configuration in the server file.

If the problem persists, please contact the project owner (contact information provided below).

## Contributing

Contributions to Schedule Assistant are welcome! If you would like to contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Submit a pull request to the original repository.

Please ensure that your code adheres to the existing coding style and conventions.

## Acknowledgements

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)

## Contact Information

For any inquiries or feedback, please contact the project owner:

- Name: Carson Drobe
- Email: carsondrobe@gmail.com
- GitHub: [github.com/carsondrobe](https://github.com/carsondrobe)



