from src.database.db_phpMySql import get_connection

class UserService():
    
    @classmethod
    def get_user():
        try:
            connection = get_connection()
            print(connection)
        except Exception  as ex:
            print(ex)