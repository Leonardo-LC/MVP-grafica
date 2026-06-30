from pydantic import BaseModel, EmailStr
from typing import Optional, Any, Dict, List

# User Schemas
class UserBase(BaseModel):
    email: EmailStr
    nome: str

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int

    class Config:
        from_attributes = True

# Product Schemas
class ProductBase(BaseModel):
    nome: str
    descricao: str
    preco_base: float
    categoria: str

class ProductCreate(ProductBase):
    pass

class Product(ProductBase):
    id: int

    class Config:
        from_attributes = True

# Cart Item Schemas
class CartItemBase(BaseModel):
    product_id: int
    quantidade: int
    personalizacao: Optional[Dict[str, Any]] = {}

class CartItemCreate(CartItemBase):
    pass

class CartItem(CartItemBase):
    id: int
    user_id: int

    class Config:
        from_attributes = True

# Auth Schema
class Token(BaseModel):
    access_token: str
    token_type: str
