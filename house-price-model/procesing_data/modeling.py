import pandas as pd

df = pd.read_csv('Housing.csv')

with open('data/processed_data.py', 'w') as f:
    for column in df.columns:
        values = df[column].tolist()

        formatted_values = ', '.join([f'"{v}"' if isinstance(v, str) else str(v) for v in values])

        f.write(f"{column} = [{formatted_values}]\n")

