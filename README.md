# Mock Event API

This project is a mock API designed to simulate the Event API for testing purposes. It provides endpoints to retrieve badge layout information and attendee registration details.

## Project Structure

```
mock-event-api
├── src
│   ├── index.js            # Entry point of the application
│   ├── routes              # Contains route definitions
│   │   ├── badgeLayout.js  # Route for GETBADGELAYOUT
│   │   └── badgeInfo.js    # Route for GETBADGEINFO
│   └── data                # Contains mock data files
│       ├── badgeLayout.json # Mock data for badge layout
│       └── badges.json     # Mock registration information
├── package.json            # NPM configuration file
└── README.md               # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd mock-event-api
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

The server will run on `http://localhost:3000`.

## API Endpoints

### GETBADGELAYOUT

- **Endpoint**: `/api/badgeLayout`
- **Method**: GET
- **Description**: Returns the layout of the badge including field names and lengths.

**Example Request**:
```
GET /api/badgeLayout
```

**Example Response**:
```json
{
    "Results": [
        {
            "FieldName": "Field Name",
            "Length": "20"
        }
    ]
}
```

### GETBADGEINFO

- **Endpoint**: `/api/badgeInfo`
- **Method**: GET
- **Description**: Retrieves registration information based on the provided badge number and last name.

**Parameters**:
- `badge`: Attendee's Badge Number (required)
- `lastname`: Attendee's Last Name (required)

**Example Request**:
```
GET /api/badgeInfo?badge=BADGENUMBER&lastname=LASTNAME
```

**Example Response**:
```json
{
    "Results": {
        "Reg Category": "",
        "First Name": "",
        "Last Name": "",
        "Job Title": "",
        "Company": "",
        "Company 2": "",
        "Street": "",
        "Street (line 2)": "",
        "City": "",
        "State/Province": "",
        "Zip Code": "",
        "Country": "",
        "Phone": "",
        "Ext": "",
        "Email": "",
        "Job Function": "",
        "Company Type": "",
        "Sales Volume": "",
        "Which of the following product categories do you purchase on behalf of your company for resale?": "",
        "What do you consider to be the primary product category that you shop?": "",
        "Assignment": ""
    }
}
```

## Error Handling

The API will return standard HTTP error responses for invalid requests. 

**Example Error Response**:
```json
{
    "Results": [
        {
            "Error": 400,
            "Message": "Missing or invalid function parameter."
        }
    ]
}
```

## License

This project is licensed under the MIT License.