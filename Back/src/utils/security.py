import datetime
import jwt
import pytz
import uuid
from src.models.user_model import User

class Security():
    jwt_key = "njas*!"
    tz=pytz.timezone("UTC")

    @classmethod 
    def generate_token(cls, user:User):
        try:
            current_time=datetime.datetime.now(tz=cls.tz)

            payload={
                'jti':str(uuid.uuid4()), # unique identifier for the token
                'iat':current_time,
                'nbf':current_time,
                'exp':current_time + datetime.timedelta(minutes=30),
                # 'id_user': user.id_user,
                # 'name_user': user.name_user,
                # 'password_user':  user.password_user,
                # 'role': user.user_typeFK.rol_user_type
            }
            return jwt.encode(payload, cls.jwt_key,'HS256')
        except  Exception as ex:
            print(ex)