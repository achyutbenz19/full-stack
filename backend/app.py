from flask import Flask, jsonify, request
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost/test'
mongo = PyMongo(app)

CORS(app)

db = mongo.db.users
@app.route("/", methods = ['GET'])
def main():
    return '<h1>Hello World!</h1'

if __name__ == "__main__":
    app.run(debug=True)