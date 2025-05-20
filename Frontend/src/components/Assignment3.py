import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import accuracy_score

# Sample dataset (height in cm, gender: 1 for Male, 0 for Female)
data = {
    'Height': [150, 160, 165, 170, 175, 180, 185, 190, 195, 200],
    'Gender': [0, 0, 0, 1, 1, 1, 1, 1, 1, 1]  # 0: Female, 1: Male
}

df = pd.DataFrame(data)
X = df[['Height']]
y = df['Gender']

# Splitting data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Creating and training the model
model = LinearRegression()
model.fit(X_train, y_train)

# Making predictions
y_pred = model.predict(X_test)
y_pred = [1 if pred >= 0.5 else 0 for pred in y_pred]  # Convert probabilities to binary labels

# Evaluating the model
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy * 100:.2f}%")

# Visualizing the results
plt.scatter(X, y, color='blue', label='Actual Data')
plt.plot(X, model.predict(X), color='red', linewidth=2, label='Regression Line')
plt.xlabel('Height (cm)')
plt.ylabel('Gender (0: Female, 1: Male)')
plt.legend()
plt.show()
