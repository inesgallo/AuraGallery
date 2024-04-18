class User():
    def __init__(self, id_user, name_user, password_user, user_typeFK) -> None:
        self.id_user = id_user
        self.name_user = name_user
        self.password_user = password_user
        self.user_typeFK = user_typeFK
        
    # @classmethod
    # def convert_desde_BD(cls, fila):
    #     return cls(fila[0], fila[1], fila[2], fila[3])