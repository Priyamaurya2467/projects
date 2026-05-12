from flask import Flask,request,jsonify
import joblib
import numpy as np


model = joblib.load("burnout_model.pkl")
sleep_quality_encoder = joblib.load("sleep_quality_encoder.pkl")
burnout_encoder = joblib.load("burnout_encoder.pkl")


app = Flask(__name__)

@app.route("/")
def home():
    return "Burnout Prediction API running"

@app.route("/predict",methods=["POST"])
def predict():
    data = request.json
    study_hours= data["study_hours"]
    sleep=data["sleep"]
    academic_pressure_score=data["academin_pressure_score"]
    sleep_quality=data["sleep_quality"]

    encoded_sleep_quality = sleep_quality_encoder.transform([sleep_quality])[0]

    sample = np.array([[
            study_hours,
            sleep,
            academic_pressure_score,
            encoded_sleep_quality
    ]])

    prediction = model.predict(sample)

    burnout_result = burnout_encoder.inverse_transform(prediction)

    return jsonify({
        "burnout_risk": burnout_result[0]
    })

if __name__ == "_main_":
    app.run(debug=True , port=8000)
    