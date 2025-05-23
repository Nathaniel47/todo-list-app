from app.database import Base
from sqlalchemy import Column, Integer, String, DateTime, Boolean


class Todo(Base):
    __tablename__ = 'todos'
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    is_done = Column(Boolean, default=False)