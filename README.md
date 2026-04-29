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