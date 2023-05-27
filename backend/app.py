from flask import Flask, jsonify, request
from flask_pymongo import PyMongo, ObjectId
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

@app.route("/users", methods = ['GET'])
def get_users():
    users = []
    for doc in db.find():
        users.append({
            '_id': str(ObjectId(doc['_id'])),
            'name': doc['name'],
            'email': doc['email'],
            'phone': doc['phone'],
            'address': doc['address']
        })
    return jsonify(users)

@app.route("/user/<id>", methods = ['GET'])
def get_user(id):
    user = db.find_one({'_id': ObjectId(id)})
    return jsonify({
        '_id': str(ObjectId(user['_id'])),
        'name': user['name'],
        'email': user['email'],
        'phone': user['phone'],
        'address': user['address']
    })

@app.route("/users/<id>", methods = ['DELETE'])
def delete_user(id):
    db.delete_one({'_id': ObjectId(id)})
    return jsonify({'msg': 'User deleted.'})

@app.route("/users/<id>", methods = ['PUT'])
def update_user(id):
    db.update_one({'_id': ObjectId(id)}, {'$set': {
        'name': request.json['name'],
        'email': request.json['email'],
        'phone': request.json['phone'],
        'address': request.json['address']    
    }})
    return jsonify({'msg': 'User updated.'})
    
if __name__ == "__main__":
    app.run(debug=True)
