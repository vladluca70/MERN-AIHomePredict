import pandas as pd
from sklearn.linear_model import LinearRegression

df = pd.read_csv('Housing.csv')

X = df[['bedrooms']]    # trebuie 2D
y = df['price']     # target

model = LinearRegression()
model.fit(X, y)

