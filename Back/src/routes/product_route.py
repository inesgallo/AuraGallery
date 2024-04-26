from flask import Blueprint, request, jsonify
from src.services.product_service import ProductService
from src.models.product_model import Product



main = Blueprint('product_blueprint', __name__)
@main.route('/get_product', methods = ['GET'])
def get_product():
    print("Hola get, product_router")
    products = ProductService.get_product()
    return jsonify(products)

@main.route('/get_product_by_id/', methods=['GET'])
def get_product_by_id_user():
    user_artistFK = request.args.get('user_artistFK')
    print(user_artistFK)
    products = ProductService.get_product_filtr(user_artistFK)
    return jsonify(products)

@main.route('/post_product', methods = ['POST'])
def post_product():
    print("Hola post, product_router")
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
    return 'Esto se ve en la pagina post'

@main.route('/update_product/<id>', methods = ['PATCH'])
def update_product(id):
    print("Hola update, product_router")
    id_product = id
    title_product = request.json['title_product']
    image_product = request.json['image_product']
    category_product = request.json['category_product']
    description_product = request.json['description_product']
    stock_product = request.json['stock_product']
    price_product = request.json['price_product']
    user_artistFK = request.json['id_user_artistFK']
    product_table = Product(id_product,title_product,image_product,category_product, description_product, stock_product, price_product, user_artistFK)
    patch_product = ProductService.patch_product(product_table)
    print(patch_product)
    return 'Esto se ve en la pagina update'

@main.route('/delete_product/<id>', methods = ['DELETE'])
def manage_product(id):
    print("Hola post, product_router")
    id_product = id
    delete_product = ProductService.delete_product(id_product)
    print(delete_product)
    return 'Esto se ve en la pagina delete'