from flask import Blueprint, request, jsonify
from src.services.product_service import ProductService
from src.models.product_model import Product

main = Blueprint('product_blueprint', __name__)

@main.route('/', methods = ['GET','POST','PATCH','DELETE'])
def manage_user():
    if request.method == "GET":
        get_product = ProductService.get_product()
        return  jsonify(get_product)
    elif request.method == "POST":
        title_product = request.json['title_product']
        image_product = request.json['image_product']
        category_product = request.json['category_product']
        description_product = request.json['description_product']
        stock_product = request.json['stock_product']
        price_product = request.json['price_product']
        user_artistFK = request.json['id_user_artistFK']
        product_table = Product(0,title_product,image_product,category_product, description_product, stock_product, price_product, user_artistFK)
        post_product = ProductService.post_product(product_table)
        print(post_product)
    # elif request.method == "PATCH":
    #     id_user = request.json['id_user']
    #     name_user = request.json['name_user']
    #     password_user = request.json['password_user']
    #     user_typeFK = request.json['user_typeFK']
    #     user_table = User(id_user,
    #                     name_user,
    #                     password_user,
    #                     user_typeFK)
    #     patch_user = UserService.patch_user(user_table)
    #     print(patch_user)
    # elif request.method == "DELETE":
    #     id_user = request.json['id_user']
    #     delete_user = UserService.delete_user(id_user)
    #     print(delete_user)
    print('Esto se imprime en consola')
    return 'Esto se ve en la pagina'