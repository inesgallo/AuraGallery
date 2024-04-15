from src.database.db_phpMySql import get_connection

from src.models.user_model import User

from werkzeug.security import check_password_hash
class AuthService():
    
    @classmethod
    def verify_identity(cls, user:User):
        try:
            connection  = get_connection()
            authenticated_user = None
            with connection.cursor() as cursor:
                cursor.execute("CALL sp_verify_identity(%s)", user.name_user)
                row = cursor.fetchone()
                
            if(row != None and check_password_hash(row[2], user.password_user)):
                    authenticated_user = row
            else:
                    authenticated_user = None
            connection.close()
            return authenticated_user
        except Exception as ex:
            print(ex)