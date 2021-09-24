# Rick and Morty Characters Information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Project Live Link: [Visit Site](https://fleek-rick-and-morty.vercel.app/)

## _Solution Process_

- Analysed the data from Rick and Morty character API endpoints, to understand the structure of the data
- Built out the redux structure for the various states to be managed, corresponding actions and reducers
- Linked the redux action calls with the API fetch functions by use of thunk middleware
- Managed query string generation using saved state for query parameters
- Manage API loading, and error response using redux actions and state (show loading and error status on UI)
- No external Icon Library used, to keep app simple (alternatively used, css content icons and SVG icons)

### **Home Page (Characters List)**

- Built out components like Character, CharacterList, Sidebar etc.
- Built out the Pagination component to manage page navigation, managing page number state with redux (page number needed to be used for query parameters as well)
- Built out SideBar component with input box for search and select input for gender and status, use custom useDebounce hook in calling redux action for filter API calls
- Built the Header component to house Logo and mobile navigation

### **Single Character Page**

- Load character details from the saved characters list in Redux if data exists, if not call API to fetch character data (to reduce uneccessary API call)
- Generate the Episode tabs(limit to 5 using array slice), use string functions to get Episode number from links Array
- Load Episode data for each Tab change

### **Managing State Data**

I used REDUX to manage state data across the application, having store slices for characters, episode, pages/query parameters and api loading state

Used Redux Thunk middleware to manage API endpoints loading, response and error

**Characters List Page**
Use browser disk cache for API requests and reponses (using the default header: cache-control: max-age=259200)

### **Pages**

**Characters List Page**

- Grid view of characters per page
- Link to individual character page (Page routing is achieved using `react-router-dom`)
- Side bar with filters for name, gender and status

**Single Character Page**

- Character details and Image
- Episode tabs and episode details

### _Suggestions on API_

The episodes array were only links to API and the episode numbers were not part of the array elements, it required me to perform some string functions on the Url while generating Episode `Tabs` to get the episode numbers

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
