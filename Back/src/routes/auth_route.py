from flask import Blueprint, request, jsonify
from src.services.auth_service import  AuthService
from src.models.user_model import User
from src.utils.security import Security

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
        encode_token= Security.generate_token(auth_user)
        return jsonify({'success':True, 'token':encode_token})
    else:
        return jsonify({'success':False})
    