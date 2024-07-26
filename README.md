# Project Title

Wellness Retreats Web Application

# Project Description

This project is a React-based web application designed to display and filter a list of meditation retreats. The application includes features like search, filter by date and type, and pagination. It aims to help users find tranquility and rejuvenation through a series of wellness retreats.



# Table of Contents

	1.	Project Title
	2.	Project Description
	3.	Table of Contents
	4.	How to Install and Run the Project
	5.	How to Use the Project
	6.	Components
	    •	Body
	    •	Footer
	    •	Header
	    •	MeditationCard
	    •	SelectInput
	7.	License


# How to Install and Run the Project

To set up the project locally, follow these steps:

1.	Clone the Repository:
```bash

     git clone https://github.com/your-username/wellness-retreats.git
     cd wellness-retreats
```


2.	Install Dependencies:

     Make sure you have Node.js and npm installed. Then run:
```bash
npm install
```

3.	Start the Development Server:

```bash
npm start
```	
4.	Open the Application:

Open your browser and navigate to http://localhost:1234.

# How to Use the Project

Once the application is running, you can:
•	View Meditation Retreats: The main page displays a list of available 
        meditation retreats.

•	Search Retreats: Use the search bar to find retreats by title.

•	Filter Retreats: Use the dropdowns to filter retreats by date and 
         type.

•	Paginate: Use the “Previous” and “Next” buttons to navigate through 
        the list of retreats.

# Components
 ## Body.js

   Body.js is the main component that manages the state and logic for 
  fetching, filtering, searching, and paginating the meditation retreat data.

### State Variables:

•	listOfMeditationCard: Stores the complete list of retreats.

•	filterMeditationCard: Stores the filtered list based on search and filters.

•	searchText: Stores the search input text.

•	currentPage: Tracks the current page for pagination.

•	selectedDateOption and selectedTypeOption: Store the selected filter options.

•	disableButton: Controls the state of the pagination buttons.

### Effects:
•	Fetch initial data on mount.

•	Reset the current page on search text change.

•	Fetch paginated data on page or search text change.

### Functions:
•	fetchData(): Fetches initial and paginated data from the API.

•	getPaginationData(): Fetches paginated and filtered data.

•	handleDateChange and handleTypeChange: Update selected filter options and call filterList.

•	filterList(): Filters the list based on selected options.

## Footer.js

Footer.js is a simple component that renders the footer of the page with copyright information. 

## Header.js

Header.js is the header component that includes the title and a banner image.

## MeditationCard.js

MeditationCard.js represents a single meditation retreat card.

## SelectInput.js

SelectInput.js is a reusable component for rendering a dropdown select input.

# License

This project is licensed under the ISC License. 

