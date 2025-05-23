from pydantic import BaseModel


class Todocreate(BaseModel):
    title: str
    is_done: bool =False

class TodoResponse(Todocreate):
    id: int


    class Config:
        from_attributes = True