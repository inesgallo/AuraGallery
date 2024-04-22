from flask import Blueprint, request
from src.services.customer_order_service import CustomerOrderService
from src.models.customer_order_model import Customer_order

main = Blueprint('customer_order_blueprint', __name__)

@main.route('/', methods = ['POST'])
def post_customer_order():
  
    status_customer = request.json['status_customer'] 
    date_customer = request.json['date_customer']
    userFK = request.json['userFK']
    productFK = request.json['productFK']
    
        
    customer_order_table = Customer_order(0,status_customer, date_customer, userFK, productFK)
    post_customer_order = CustomerOrderService.post_customer_order(customer_order_table)
    print(post_customer_order)
  
    print('Esto se imprime en consola')
    return 'Esto se ve POST ORDER'