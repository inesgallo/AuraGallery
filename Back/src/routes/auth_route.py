from flask import Blueprint, request, jsonify
from src.services.auth_service import  AuthService
from src.models.user_model import User

main = Blueprint('login_blueprint', __name__)

@main.route('/', methods = ['POST'])
def login_user():
    name_user = request.json['name_user']
    password_user = request.json['password_user']
    print(name_user)
    print(password_user)
    user_table = (User(0,name_user,password_user,None))
    auth_user = AuthService.verify_identity(user_table)
    if (auth_user != None):
        return jsonify({'success':True})
    else:
        return jsonify({'success':False})