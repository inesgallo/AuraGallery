class Customer_order():
    def __init__(self, id_customer, status_customer, date_customer, userFK, productFK) -> None:
        self.id_customer = id_customer
        self.status_customer = status_customer
        self.date_customer = date_customer
        self.userFK = userFK
        self.productFK = productFK