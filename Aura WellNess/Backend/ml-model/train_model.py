import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib



print("Loading dataset...")
data = pd.read_csv("student_mental_health_burnout.csv")
print(data.head())

print("Encoding categorical data....")

sleep_quality_encoder = LabelEncoder()
data["sleep_quality"] = sleep_quality_encoder.fit_transform(data["sleep_quality"])

burnout_encoder = LabelEncoder()
data["burnout"] = burnout_encoder.fit_transform(data["burnout"])


X = data[[
    "study_hours",
    "sleep",
    "academic_pressure_score",
    "sleep_quality",
]]

y = data["burnout"]

print("Splitting dataset...")
X_train,X_test,y_train,y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)
 
print("Creating Random Forest model...")

model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)


print("Training Model...")

model.fit(X_train,y_train)

print("Testing model")

predictions = model.predict(X_test)
accuracy = accuracy_score(y_test,predictions)
print(f"Model Accuracy : {accuracy*100:2f}%")

joblib.dump(model,"burnout_model.pkl")
joblib.dump(sleep_quality_encoder,"sleep_quality_encoder.pkl")
joblib.dump(burnout_encoder,"burnout_encoder.pkl")

print("Model and encoder saved successfully")

