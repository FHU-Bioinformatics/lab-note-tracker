# Lab Note Tracker

A simple web application for tracking data generated
by the FHU Genome Sequencing Project.

## Developers

### Frontend

Uses:

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Material UI](https://mui.com/)
- [Axios](https://axios-http.com/)

### Backend

Uses:

- [FastAPI](https://fastapi.tiangolo.com/)
- [SQLAlchemy](https://www.sqlalchemy.org/)
- [Pydantic](https://pydantic-docs.helpmanual.io/)

### Database

- [PostgreSQL](https://www.postgresql.org/)

### Environment Variables

#### Backend
- `DB_URL`: The URL of the database to use.

#### Frontend
Environment Variables that are exposed to the client require NEXT_PUBLIC at the beginning.
- `NEXT_PUBLIC_API_URL`: The URL of the backend API.
