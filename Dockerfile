# docker build --no-cache -t gt-global:v1 -f Dockerfile .

# Используем официальное Node.js изображение
FROM node:18-alpine

# Установить рабочую директорию
WORKDIR /app

# Копировать package.json и package-lock.json
COPY ./package*.json /app

# Очистить npm кэш перед установкой зависимостей
RUN npm cache clean --force

# Установить зависимости
RUN npm install --force

# Копировать остальной исходный код в контейнер
COPY ./ /app

# Очистить кэш сборки (React/Webpack)
RUN rm -rf node_modules/.cache

# Собрать React-приложение
RUN npm run build
RUN npm i sharp
RUN npm audit fix --force

# Открыть порт для приложения
EXPOSE 3000

# Запуск React-приложения
CMD ["npm", "run", "start"]