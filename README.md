<div align="center">

<img src="./web/src/assets/spacetime-logo.svg" alt="Logo do Spacetime" width="220" />

# 🚀 Spacetime

**Sua cápsula do tempo de memórias.**<br/>
Guarde momentos marcantes com texto, foto ou vídeo, numa linha do tempo que é só sua.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js_13-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)<br/>
![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

![Full stack](https://img.shields.io/badge/full--stack-API_%2B_web_%2B_mobile-8A2BE2?style=flat-square)
![Login](https://img.shields.io/badge/login-GitHub_OAuth-181717?style=flat-square&logo=github)

</div>

---

## 📑 Sumário

- [Sobre](#-sobre)
- [Funcionalidades](#-funcionalidades)
- [Arquitetura](#%EF%B8%8F-arquitetura)
- [Tecnologias](#-tecnologias)
- [API](#-api)
- [Rodando o projeto](#-rodando-o-projeto)

## 💡 Sobre

No **Spacetime** você entra com sua conta do GitHub e registra momentos marcantes: um texto, uma foto ou um vídeo de capa. As memórias aparecem numa **linha do tempo** organizada por data, e cada uma pode ser **pública ou privada**.

É um projeto **full stack** completo, todo em TypeScript: uma **API**, uma **versão web** e um **app mobile** que conversam com ela.

## ✨ Funcionalidades

| | Funcionalidade | Detalhes |
| :---: | --- | --- |
| 🔐 | **Login com GitHub** | OAuth; o usuário é criado no primeiro acesso e recebe um JWT válido por 30 dias |
| 🕰️ | **Linha do tempo** | memórias ordenadas por data, com capa e um trecho do texto |
| 📝 | **Nova memória** | texto, capa (imagem ou vídeo) e opção de deixar pública |
| ✏️ | **Editar e excluir** | só o dono da memória pode alterar ou apagar |
| 🔒 | **Privacidade** | memórias privadas só abrem para quem as criou |
| 📤 | **Upload de mídia** | imagens e vídeos de até 5 MB |

## 🏗️ Arquitetura

```mermaid
flowchart LR
    W["🌐 Web<br/>Next.js"] -->|HTTP + JWT| A["⚙️ API<br/>Fastify"]
    M["📱 Mobile<br/>Expo"] -->|HTTP + JWT| A
    A -->|Prisma| D[("🗄️ SQLite")]
    A -->|OAuth| G["🐙 GitHub"]
    A -->|arquivos| U["📁 /uploads"]
```

```
server/   # API (Fastify + Prisma)
web/      # versão web (Next.js)
mobile/   # app mobile (React Native + Expo)
```

## 🛠 Tecnologias

| Parte | Tecnologias |
| --- | --- |
| ⚙️ **API** | Node.js · Fastify · Prisma (SQLite) · Zod · @fastify/jwt · @fastify/multipart · @fastify/static · @fastify/cors · Axios |
| 🌐 **Web** | Next.js 13 (App Router) · React 18 · Tailwind CSS · Day.js · js-cookie · jwt-decode · Lucide |
| 📱 **Mobile** | React Native · Expo · Expo Router · NativeWind |

## 📡 API

| Método | Rota | Autenticação | O que faz |
| :---: | --- | :---: | --- |
| ![POST](https://img.shields.io/badge/POST-49CC90?style=flat-square) | `/register` | — | recebe o código do GitHub e devolve o JWT |
| ![GET](https://img.shields.io/badge/GET-61AFFE?style=flat-square) | `/memories` | 🔒 | lista as memórias do usuário |
| ![GET](https://img.shields.io/badge/GET-61AFFE?style=flat-square) | `/memories/:id` | 🔒 | detalhes de uma memória |
| ![POST](https://img.shields.io/badge/POST-49CC90?style=flat-square) | `/memories` | 🔒 | cria uma memória |
| ![PUT](https://img.shields.io/badge/PUT-FCA130?style=flat-square) | `/memories/:id` | 🔒 | edita uma memória |
| ![DELETE](https://img.shields.io/badge/DELETE-F93E3E?style=flat-square) | `/memories/:id` | 🔒 | exclui uma memória |
| ![POST](https://img.shields.io/badge/POST-49CC90?style=flat-square) | `/uploads` | — | envia a capa (imagem ou vídeo, até 5 MB) |

Os arquivos enviados ficam em `server/uploads` e são servidos em `/uploads`.

### 🗄️ Banco de dados

```mermaid
erDiagram
    USER ||--o{ MEMORY : cria
    USER {
        string id PK
        int githubId
        string name
        string login
        string avatarUrl
    }
    MEMORY {
        string id PK
        string userId FK
        string coverUrl
        string content
        boolean isPublic
        datetime createdAt
    }
```

## 🚀 Rodando o projeto

> [!IMPORTANT]
> Antes de tudo, crie um **OAuth App** no GitHub (*Settings → Developer settings → OAuth Apps*), com a URL de callback apontando para a versão web.

### 1️⃣ API

```bash
cd server
npm install
```

Crie o arquivo `server/.env`:

```env
DATABASE_URL="file:./dev.db"
GITHUB_CLIENT_ID=seu_client_id
GITHUB_CLIENT_SECRET=seu_client_secret
```

```bash
npx prisma migrate dev
npm run dev        # 🚀 http://localhost:3333
```

### 2️⃣ Web

```bash
cd web
npm install
npm run dev        # 🌐 http://localhost:3000
```

### 3️⃣ Mobile

```bash
cd mobile
npm install
npx expo start     # 📱 abra no Expo Go ou no emulador
```

---

<div align="center">

Feito por **Ricardo Baldrez** 👋

[![Portfólio](https://img.shields.io/badge/portfólio-ricardobaldrez.vercel.app-0A0B14?style=flat-square&logo=vercel&logoColor=white)](https://ricardobaldrez.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ricardo-barbosa-baldrez-38b760145)

</div>
