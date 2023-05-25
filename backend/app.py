from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost/fullstackapp'
mongo = PyMongo(app)

CORS(app)

db = mongo.db.users

@app.route("/users", methods=['POST'])
def create_user():
    user_data = {
        'name': request.json['name'],
        'email': request.json['email'],
        'phone': request.json['phone'],
        'address': request.json['address']
    }
    result = db.insert_one(user_data)
    inserted_id = str(result.inserted_id)
    return jsonify({'id': inserted_id, 'msg': 'User added successfully.'})

if __name__ == "__main__":
    app.run(debug=True)
