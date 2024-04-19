from src.database.db_phpMySql import get_connection
from src.models.customer_order_model import Customer_order

from werkzeug.security import generate_password_hash

class CustomerOrderService():

    @classmethod
    def post_customer_order(cls, customer_order_table:Customer_order):
        try:
            connection  = get_connection()
            
            status_customer = customer_order_table.status_customer
            date_customer = customer_order_table.date_customer
            userFK = customer_order_table.userFK
            productFK = customer_order_table.productFK
            
            with connection.cursor() as cursor:
                cursor.callproc('sp_post_customer_order', (status_customer, date_customer, userFK, productFK))
                connection.commit()
                print('User added successfully')
            connection.close()
            return "Data base is close"
        except Exception as ex:
            print(ex)





