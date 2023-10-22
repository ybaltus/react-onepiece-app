FROM node:18-alpine

# Spécifie le répertoire par défaut utilisé pour la suite
WORKDIR /app/react-onepiece-dev/

# Copier les fichiers du répertoire courant (./) dans le répertoire courant du container (/usr/app)
COPY ./package.json ./

# Installer les dépendances de l'application react
RUN npm install

# Exposer le port 3000
EXPOSE 3000

CMD ["npm", "start"]


