from flask import Blueprint

main = Blueprint('aura_gallery_blueprint', __name__)

@main.route('/')
def get_user():
    print('getting user info...')
    return "Este es el GET de User"