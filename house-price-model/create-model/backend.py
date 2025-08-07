from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

model = joblib.load('model.joblib')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    try:
        features = [
            data['bedrooms'],
            data['bathrooms'],
            data['sqft_living'],
            data['floors'],
            data['waterfront'],
            data['view'],
            data['condition'],
            data['yr_built'],
            data['yr_renovated']
        ]

        features_array = np.array(features).reshape(1, -1)
        prediction = model.predict(features_array)

        return jsonify({'predicted_price': prediction[0]})

    except KeyError as e:
        return jsonify({'error': f'Missing field: {str(e)}'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
