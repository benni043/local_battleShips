# 1. Basis-Image
FROM node:18

  # 2. Arbeitsverzeichnis im Container
WORKDIR /app

  # 3. Kopiere package.json und installiere Abhängigkeiten
COPY package*.json ./
RUN npm install

  # 4. Kopiere restlichen Code
COPY . .

  # 5. Exponiere Port 3006
#EXPOSE 3006

  # 6. Startbefehl
CMD ["node", "server.js"]
