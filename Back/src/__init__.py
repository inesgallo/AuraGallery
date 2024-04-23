from flask import Flask
from .routes import user_route
from .routes import auth_route
from .routes import product_route
from .routes import customer_order_route
from flask_cors import  CORS

app = Flask( __name__ )
CORS(app,resources={"*":{"origins": "http://localhost:5173"}})
#CORS(app, resources={r"/ask": {"origins": "http://localhost:9090"}})
def init_app(config):
    app.config.from_object(config)
    app.register_blueprint(user_route.main, url_prefix='/user_admin')
    app.register_blueprint(auth_route.main, url_prefix='/login')
    app.register_blueprint(product_route.main, url_prefix='/product')
    app.register_blueprint(customer_order_route.main, url_prefix='/costumer_order')
    return app