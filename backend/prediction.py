from flask import Flask, request, jsonify, Blueprint
import torch
import pickle
import torch.nn.functional as F
from torchvision import transforms

predict_bp = Blueprint('prediction', __name__)
model_weights_path = r'C:\Users\sanke\OneDrive\Desktop\akatsuki\backend\best.pt'

def load_model():
    pass

@predict_bp.route('/prediction', methods=['POST'])
def result():
    data = request.get_json(force=True)
    print(data)
    tweets = [data[f'Data{i+1}'] for i in range(5)]
    print(tweets)

    # Load the PyTorch model using the load_model function
    model = load_model()
    return jsonify([])