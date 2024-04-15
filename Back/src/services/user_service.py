from src.database.db_phpMySql import get_connection
from werkzeug.security import generate_password_hash
from src.models.user_model import User

from werkzeug.security import generate_password_hash

class UserService():
    @classmethod
    def get_user(cls):
        try:
            connection  = get_connection()
            print(connection)
            with connection.cursor() as cursor:
                # cursor.execute('SELECT * FROM user')
                cursor.callproc('select_user')
                result = cursor.fetchall()
                print(result)
            connection.close()
            return result
        except Exception as ex:
            print(ex)
    @classmethod
    def post_user(cls, user_table:User):
        try:
            connection  = get_connection()
            #print(connection)
            # id_user = user_table.id_user
            name_user = user_table.name_user
            password_user = user_table.password_user
            user_typeFK = user_table.user_typeFK
            
            encriped_password = generate_password_hash(password_user, 'pbkdf2', 30)
            
            with connection.cursor() as cursor:
                
                # cursor.execute("INSERT INTO user(id_user, name_user, password_user, id_user_typeFK) VALUES ({0}, '{1}', '{2}', {3})"
                            #    .format(id_user,name_user,password_user,user_typeFK))
                cursor.callproc('post_user', (name_user,password_user,user_typeFK))
                connection.commit()
                print('User added successfully')
            connection.close()
            return "Data base is close"
        except Exception as ex:
            print(ex)
    @classmethod
    def patch_user(cls, user_table:User):
        try:
            connection  = get_connection()
            id_user = user_table.id_user
            name_user = user_table.name_user
            password_user = user_table.password_user
            user_typeFK = user_table.user_typeFK
            
            encriped_password = generate_password_hash(password_user, 'pbkdf2', 30)
            
            with connection.cursor() as cursor:
                # cursor.execute("UPDATE user SET  name_user = '{0}', password_user = '{1}', id_user_typeFK = {2}  WHERE user.id_user = {3}".format(name_user,password_user,user_typeFK,id_user))
                cursor.callproc('update_user', (id_user,name_user,encriped_password,user_typeFK))
                connection.commit()
                print('User updated successfully')
            connection.close()
            return "Data base is close"
        except Exception as ex:
            print(ex)
    @classmethod
    def delete_user(cls, id_user):
        try:
            connection  = get_connection()
            print(connection)
            with connection.cursor() as cursor:
                # cursor.execute('DELETE FROM user WHERE user.id_user = %s', (id_user)) 
                cursor.callproc('delete_user', (id_user,)) # Aqui uso otro metodo callproc para trabajar con procedimientos
                connection.commit()
            connection.close()
            return "Data base is close"
        except Exception as ex:
            print(ex)





