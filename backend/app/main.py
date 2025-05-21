from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

from app.database.router import router as database_router

app = FastAPI()

app.include_router(database_router)

origins = [
    "http://localhost",
    os.environ.get("FRONTEND_URL", "http://localhost:5143")
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Hello World"}
