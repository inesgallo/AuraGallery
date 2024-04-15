from src.database.db_phpMySql import get_connection

from src.models.user_model import User

from werkzeug.security import check_password_hash
class AuthService():
    
    @classmethod
    def verify_identity(cls, user_table:User):
        try:
            connection  = get_connection()
            auth_user = None
            with connection.cursor() as cursor:
                cursor.execute('SELECT * FROM user')
                # cursor.callproc('select_user')
                row = cursor.fetchone()
                print(row)
                if (row != None and check_password_hash(row[2], user_table.password_user)) :
                    auth_user = row
                else: 
                    auth_user = None
            connection.close()
            return auth_user
        except Exception as ex:
            print(ex)