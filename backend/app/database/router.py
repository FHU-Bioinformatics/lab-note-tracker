from fastapi import APIRouter

from .engine import engine
from .models import Base

# from send_me.modules.opportunities import models

router = APIRouter(
    tags=["database"],
    prefix="/database",
    responses={404: {"description": "Not found"}},
)

# TODO : Add neccessary admin rights to run these endpoints

@router.post("/init")
async def database_init():
    Base.metadata.create_all(bind=engine)


@router.post("/delete")
async def database_data():
    Base.metadata.drop_all(bind=engine)
