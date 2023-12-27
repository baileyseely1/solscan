# SnipeOnSol 🚀

SnipeOnSol is a cutting-edge application designed to seamlessly scrape data from a telegram channel which monitors new deployments on the Solana blockchain and then presents them through a React-based frontend. 🌐 

## Features ✨

- **Data Scraping:** Utilizes Telethon to scrape telegram data in real-time. 🤖
- **Data Processing:** Efficiently processes and structures scraped data for easy consumption. 📊
- **API:** Flask-based RESTful API serves the processed data, ready to be consumed by the frontend. 🌐
- **Frontend:** Sleek and responsive frontend built with React, displaying data in an intuitive interface. 💻
- **Deployment:** Backend and scraper hosted on an Amazon EC2 instance for robustness and reliability. ☁️

## How It Works 🛠️

1. **Scraping:** The Python-based scraper runs continuously, collecting data from the specified telegram channel.
2. **Processing:** Data is processed and stored in a JSON file, ensuring ease of access and manipulation.
3. **API:** The Flask API reads the JSON file and serves the data to the frontend application.
4. **Frontend:** The frontend fetches this data and displays it, providing users with up-to-date information.
5. **Hosting:** The entire backend setup is hosted on an EC2 instance, ensuring constant uptime and performance.

## Technologies Used 🧰

- **Frontend:** React, HTML, CSS
- **Backend/API:** Python, Flask, Nginx
- **Data Scraping:** Telethon, Python
- **Hosting:** Amazon EC2
- **Deployment:** Netlify
- **Others:** Git

## TODO:

- **DB:** Incorporate a database instead of writing to the JSON file which is dramatically worse in comparison (performance + scalability wise).  I will probably use google's firestore.

- **React:**
    
    - Write unit and integration tests
    - Incorporate a better way to implement the infinite scrolling
    - Optimize for performance in general (only fetch chunks of data as user scrolls to reduce initial load time?)

## Setup and Installation 🚀

### Prerequisites

- Node.js and npm
- Python 3.x
- Pip
- AWS account (for EC2) (ubuntu instance)

### Running the Application Locally

1. **Configure the front-end:**

- Clone the front-end repo and cd into the solscan folder

    ```bash
    git clone https://github.com/baileyseely1/solscan.git
    cd solscan
    ```

 - Install npm dependencies
 
    ```bash
   npm i
    ```

- Open the directory in your favourite text-editor and navigate to App.jsx. From there, change this line of code to fetch from your local host api.

  ```bash
  useEffect(() => {
    async function getTokenData() {
      setLoading(true);
      try {
        const res = await 
     fetch("http://localhost:5000/get-data");
  // change this line ^^^^       
    ```

 - Start the vite/react server

    ```bash
   npm run dev
    ```

2. **Configure the backend:**

- Clone the back-end repo and cd into the simulation folder
 
    ```bash
    git clone https://github.com/baileyseely1/simulation.git
    cd simulation
    ```

- Install Python dependencies.
      

    ```bash
    pip install -r requirements.txt
    ```
    
   
- Open a separate terminal and start the scraping
     

    ```bash
    cd simulation
    python3 simulation.py
    ```

- Open a second terminal and start the server application which will host the API
  

    ```bash
    cd simulation
    python3 server.py
    ```



- Leave both the scraper and server running locally to ensure up-to-date data. Otherwise, you can leave them running on an amazon aw2 instance with relative ease.


3. **Access the Application:**

    - Open your browser and navigate to http://localhost:5173.

## Contribution Guidelines 🤝

Your contributions and suggestions are welcome. Please follow the standard fork-and-pull workflow.
