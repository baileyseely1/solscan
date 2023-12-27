# SnipeOnSol 🚀

SnipeOnSol is a cutting-edge application designed to seamlessly scrape data from Telegram channels, process it, and present it through a React-based frontend. 🌐 This application is an exemplar of integrating various technologies into a cohesive and functional system.

## Features ✨

- **Data Scraping:** Utilizes Telethon to scrape data in real-time from a telegram channel monitoring new deploys on the Solana blockchain. 🤖
- **Data Processing:** Efficiently processes and structures scraped data for easy consumption. 📊
- **API:** Flask-based RESTful API serves the processed data, ready to be consumed by the frontend. 🌐
- **Frontend:** Sleek and responsive frontend built with React, displaying data in an intuitive interface. 💻
- **Deployment:** Backend and scraper hosted on an Amazon EC2 instance for robustness and reliability. ☁️

## How It Works 🛠️

1. **Scraping:** The Python-based scraper runs continuously, collecting data from Telegram channels.
2. **Processing:** Data is processed and stored in a JSON file, ensuring ease of access and manipulation.
3. **API:** The Flask API reads the JSON file and serves the data to the frontend application.
4. **Frontend:** The frontend fetches this data and displays it, providing users with up-to-date information.
5. **Hosting:** The entire backend setup is hosted on an EC2 instance, ensuring constant uptime and performance.

## Technologies Used 🧰

- **Frontend:** React, HTML, CSS
- **Backend/API:** Flask, Python
- **Data Scraping:** Telethon, Python
- **Hosting:** Amazon EC2
- **Others:** Git
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

 - Install npm dependencies & start the react application.
 
    ```bash
   npm i
   npm run dev
    ```

2. **Configure the backend:**

- Clone the back-end repo and cd into the simulation folder
 
    ```bash
    git clone https://github.com/baileyseely1/simulation.git
    cd simluation
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


3. **Access the Application:**
    - Open your browser and navigate to http://localhost:5173.

## Contribution Guidelines 🤝

Your contributions and suggestions are welcome. Please follow the standard fork-and-pull workflow.
