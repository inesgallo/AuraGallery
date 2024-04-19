from flask import Blueprint, request, jsonify
from src.services.product_service import ProductService
from src.models.product_model import Product

main = Blueprint('product_blueprint', __name__)

@main.route('/', methods = ['GET','POST','PATCH','DELETE'])
def manage_user():
    if request.method == "GET":
        products = ProductService.get_product()
        if products is not None:
            return  jsonify(products), 200
        else: 
            return jsonify({"message":"No product found"}),404
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
    elif request.method == "PATCH":
        id_product = request.json['id_product']
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
    elif request.method == "DELETE":
        id_product = request.json['id_product']
        delete_product = ProductService.delete_product(id_product)
        print(delete_product)
    print('Esto se imprime en consola')
    return 'Esto se ve en la pagina'