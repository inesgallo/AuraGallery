from flask import Blueprint, request, jsonify
from src.services.user_service import UserService
from src.models.user_model import User

main = Blueprint('aura_gallery_blueprint', __name__)


@main.route('/get_user', methods = ['GET'])
def get_user():
    print("Hola get, user_router")
    get_user = UserService.get_user()
    print('Estoy dentro de metodo get')
    return jsonify(get_user)

@main.route('/post_user', methods = ['POST'])
def post_user():
    print("Hola post, user_router")
    name_person_user = request.json['name_person_user'] 
    surname_person_user = request.json['surname_person_user']
    name_user = request.json['name_user']
    password_user = request.json['password_user']
    user_typeFK = request.json['user_typeFK']
    
    print(name_person_user)
    print(surname_person_user)
    print(name_user)
    print(password_user)
    print(user_typeFK)
    
    user_table = User(0,name_user,
                        name_person_user,
                        surname_person_user,
                        password_user,
                        user_typeFK)
    post_user = UserService.post_user(user_table)
    print(post_user)
    return 'Resgistro exitoso'

@main.route('/update_user', methods = ['PATCH'])
def updade_user():
    print("Hola patch, user_router")
    id_user = request.json['id_user']
    name_person_user = request.json['name_person_user'] 
    surname_person_user = request.json['surname_person_user']
    name_user = request.json['name_user']
    password_user = request.json['password_user']
    user_typeFK = request.json['user_typeFK']
    user_table = User(id_user,
                    name_person_user,
                    surname_person_user,
                    name_user,
                    password_user,
                    user_typeFK)
    patch_user = UserService.patch_user(user_table)
    print(patch_user)
    return 'Update exitoso'

@main.route('/delete_user', methods = ['DELETE'])
def delete_user():
    print("Hola delete, user_router")
    id_user = request.json['id_user']
    delete_user = UserService.delete_user(id_user)
    print(delete_user)
    print('Esto se imprime en consola')
    return 'Esto se ve en la pagina'