from fastapi import FastAPI

from app.database.router import router as database_router

app = FastAPI()

app.include_router(database_router)

@app.get("/")
async def root():
    return {"message": "Hello World"}
