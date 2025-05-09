# 🚀 GRPC App with PHP Backend and React Frontend

A Dockerized full-stack application using a **PHP gRPC backend** and a **React frontend**.

---

## 📁 Project Structure

```

grpc-app/
├── backend/               # PHP gRPC backend
│   ├── Dockerfile
│   ├── server.php
│   └── ... (PHP code)
├── frontend/              # React frontend
│   ├── Dockerfile
│   └── ... (React code)
├── docker-compose.yml     # Docker orchestration
└── README.md

````

---

## ⚙️ Prerequisites

- Docker
- Docker Compose
- Node.js (if using React outside Docker)

---

## 🐳 Docker Setup

### 1. Build and Run Containers

```bash
docker compose up --build
````

* 📡 Backend (gRPC Server): [http://localhost:9001](http://localhost:9001)
* 🌐 Frontend (React App): [http://localhost:3000](http://localhost:3000)

---

## 🧠 Usage

* PHP gRPC server runs using [Spiral RoadRunner](https://roadrunner.dev).
* React frontend connects via REST or through a gRPC-Web bridge (optional).

---

## 🔌 gRPC Service Example (PHP)

```php
$server = new \Spiral\GRPC\Server();
$server->registerService(
    \Ping\PingServiceInterface::class,
    new \App\Grpc\PingService()
);
$server->serve(new \Spiral\RoadRunner\Worker(new \Spiral\Goridge\StreamRelay(STDIN, STDOUT)));
```

---

## 📦 React Setup (if running outside Docker)

```bash
cd frontend
npm install
npm start
```

---

## 🛠 Technologies

* **Backend**: PHP 7.3+, RoadRunner, gRPC
* **Frontend**: React (CRA)
* **Containerization**: Docker, Docker Compose

---

## ✅ Todos

* [ ] Setup gRPC-Web or REST proxy to allow frontend communication.
* [ ] Add unit/integration tests.
* [ ] Dockerize production builds.

---

## 📄 License

