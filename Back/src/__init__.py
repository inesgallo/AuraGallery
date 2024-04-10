from flask import Flask
from .routes import user_route

app = Flask( __name__ )
def init_app(config):
    app.config.from_object(config)
    app.register_blueprint(user_route.main, url_prefix='/user')
    #app.register_blueprint(user_typeRouter.main, url_prefix='/user_type')
    #app.register_blueprint(personRouter.main, url_prefix='/person')
    return app