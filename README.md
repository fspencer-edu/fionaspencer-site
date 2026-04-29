# fionaspencer-site

frontend `npm run dev`

backend `nodemon server.js`

# Deploy to Home Server

```python
ssh linux-server

git pull

sudo docker-compose down

sudo docker-compose up -d --build
```

- Docker containers

```python
fs-tunnel                                                                                                                                                                   
fs-frontend                                                                                                                                                                   
fs-backend                                                                                                                                                                    
Network fionaspencer-site_default
```

- Rebuild frontend or backend

```python
docker compose up -d --build frontend
docker compose up -d --build backend
docker compose up -d --build fs-tunnel
```