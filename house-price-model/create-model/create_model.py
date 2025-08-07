
import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib

df = pd.read_csv('Housing.csv')
df.columns = df.columns.str.strip().str.lower()

X = df[['bedrooms', 'bathrooms', 'sqft_living',
        'floors', 'waterfront', 'view', 'condition',
        'yr_built', 'yr_renovated']]
y = df['price']

model = LinearRegression()
model.fit(X, y)

joblib.dump(model, 'model.joblib')
