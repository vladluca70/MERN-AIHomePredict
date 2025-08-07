🏠 **House Price Predictor (MERN + Python)**  
This project is a full-stack web application (MERN stack + Python) designed to predict the price of a house using logistic regression.

### 🔧 Technologies
- **Frontend:** React, HTML, CSS  
- **Backend:** Node.js, Express  
- **Authentication:** bcrypt (password hashing)  
- **Machine Learning:** Python, Pandas, scikit-learn, Flask  
- **Model Management:** joblib (save/load model)  
- **Database:** MongoDB  
- **Other:** CORS, Flask API 

🚀 **Key Features**  
- Create an account with a username and password  
- Passwords are hashed and stored in MongoDB using bcrypt  
- Users can log in to access the prediction page  
- Users fill out a React form with required house details  
- The data is sent to an Express endpoint, which forwards it to a Flask (Python) server  

**The Flask server:**  
- Loads the pre-trained model (saved using joblib)  
- Runs the prediction using the received data  
- Sends the result back to the frontend

🧠 **Machine Learning Model**  
- The dataset was sourced from Kaggle  
- Logistic regression from the `sklearn` library was used  
- The model was trained on data extracted from a CSV file using `pandas`  
- The trained model was saved using `joblib` for later reuse

🔒 **Security**  
- Authentication via username and password  
- Passwords are securely stored as hashes (not in plain text) using bcrypt  
- CORS is enabled in the backend to allow communication between the frontend and the Python/Node.js APIs

📁 **Project Structure**

```bash
MERN-AIHomePredict  
├── backend/             # Express + MongoDB + authentication  
├── frontend/            # React + form for data input  
├── house-price-model/   # Flask API + saved ML model  
└── README.md
```


🚀 **How to Run the Project Locally**

```bash
git clone https://github.com/vladluca70/MERN-AIHomePredict
cd MERN-AIHomePredict/
```

**First terminal:**  
```bash
cd backend
node index.js
```

**Second terminal:**  
```bash
cd house-price-model/create-model/
source venv/bin/activate
python3 backend.py
```

**Third terminal:**  
```bash
cd frontend
npm run dev
```


📬 **Contact**  
For questions or suggestions, please reach out at: [your_name@email.com]
