import joblib
import numpy as np


model = joblib.load("burnout_model.pkl")
sleep_quality_encoder = joblib.load("sleep_quality_encoder.pkl")
burnout_encoder = joblib.load("burnout_encoder.pkl")

study_hours=4
sleep=10
academic_pressure_score=9
sleep_quality="Poor"

encoded_quality = sleep_quality_encoder.transform([sleep_quality])[0]

sample = np.array([[
    study_hours,
    sleep,
    academic_pressure_score,
    encoded_quality
]])

prediction = model.predict(sample)

burnout_result = burnout_encoder.inverse_transform(prediction)

print("Burnout Risk",burnout_result[0])