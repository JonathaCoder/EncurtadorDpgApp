<h1>Encurtador de URL</h1>

<h3>Sobre o projeto <h3/>
O Encurtador de URL é uma aplicação simples desenvolvida para facilitar a tarefa de encurtar URLs longas, gerando links mais curtos e fáceis de compartilhar. Utilizando tecnologias como React para o frontend e TypeScript/Express para o backend, o projeto visa oferecer uma solução eficiente e fácil de usar.

<h3>Funcionalidades Principais<h3/>

<ul>
  <li>Encurtamento de URLs: Os usuários podem inserir URLs longas e receberão links mais curtos correspondentes.</li>
   <li>Feedback Visual: Interface moderna e responsiva usando Material-UI para uma experiência agradável.</li>
    <li>Tratamento de Erros: Feedback amigável ao usuário em caso de falhas durante o processo de encurtamento.</li>
</ul>

<h3>Tecnologias Utilizadas<h3/>
<ul>
  <li>Frontend: React, Material-UI, Axios, React Toastify.</li>
   <li>TypeScript, Node.js, Express, Docker.</li>
    <li>Persistência de Dados: O projeto utiliza um banco de dados para armazenar as URLs encurtadas.</li>
</ul>

<h3> Como Executar o Projeto</h3>
<ul>
  <li> 1 - Clone este repositório.</li>
  <li> 2 - Instale as dependências do frontend e backend usando npm install em ambos os diretórios.</li>
  <li>  3- Inicie o servidor backend com npm start no diretório backend.</li>
   <li> 4- Inicie o aplicativo React com npm start no diretório frontend.</li>
   <li> 5- Acesse o aplicativo no navegador usando o endereço http://localhost:3000.<li/>
</ul>


<h1>Para começar o Back-end</h1>

```sh
# Mude para o diretório Raiz
cd BackEnd
````
```sh
# Instale as dependências
npm install
````
```sh
#Faça um push no prisma
npx prisma db push
```
```sh
#Faça um pull no prisma
npx prisma db pull
```
```sh
##configure o Prisma

model LinkUrl {
  id          Int      @id @default(autoincrement())
  link        String   @db.VarChar(255)
  originalUrl String   @db.Text
  createdAt   DateTime @default(now())
}


```
```sh
#Configurar o Docker para o MySql
docker run --name mysql-database -e MYSQL_ROOT_PASSWORD=secret -d -p 3306:3306 mysql:8.0
```
```sh
#Configurar o Docker para subir os containers Linux
##entrar na pasta backend
cd BackEnd
docker compose up -d
```
```sh
# Execute o servidor local
npx ts-node src/index.ts
```

<h1>Para começar o Front-end</h1>

```sh
# Mude para o diretório frontend
cd Front-encurtador
```
```sh
# Instale as dependências
npm install
```
```sh
# Execute o servidor local
npm start
```

# DpgAppEncurtador
