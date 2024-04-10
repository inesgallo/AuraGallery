from flask import Blueprint, request
from src.services.user_service import UserService
from src.models.user_model import User

main = Blueprint('aura_gallery_blueprint', __name__)

@main.route('/', methods = ['GET','POST','PATCH','DELETE'])
def manage_user():
    if request.method == "GET":
        get_user = UserService.get_user()
        print(get_user)
    elif request.method == "POST":
        name_user = request.json['name_user']
        password_user = request.json['password_user']
        user_typeFK = request.json['user_typeFK']
        
        user_table = User(0,name_user,
                                password_user,
                                user_typeFK)
        post_user = UserService.post_user(user_table)
        print(post_user)
    elif request.method == "PATCH":
        id_user = request.json['id_user']
        name_user = request.json['name_user']
        password_user = request.json['password_user']
        user_typeFK = request.json['user_typeFK']
        user_table = User(id_user,
                        name_user,
                        password_user,
                        user_typeFK)
        patch_user = UserService.patch_user(user_table)
        print(patch_user)
    # elif request.method == "DELETE":
    #     id_user = request.json['id_user']
    #     delete_user = UserService.delete_user(id_user)
    #     print(delete_user)
    print('Esto se imprime en consola')
    return 'Esto se ve en la pagina'