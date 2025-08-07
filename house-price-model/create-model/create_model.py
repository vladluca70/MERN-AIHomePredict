import pandas as pd
from sklearn.linear_model import LinearRegression

df = pd.read_csv('Housing.csv')

A = df[['bedrooms']]    
B = df[['bathrooms']]
C = df[['sqft_living']]
D = df[['sqft_lot']]
E = df[['floors']]
F = df[['waterfront']]
G = df[['view']]
y = df['price']     # target

model = LinearRegression()
model.fit(X, y)

