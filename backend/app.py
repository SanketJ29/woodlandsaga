from flask import Flask
from prediction import predict_bp

app = Flask(__name__)
app.register_blueprint(predict_bp)
if __name__ == '__main__':
    app.run(debug = True)