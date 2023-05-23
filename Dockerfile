FROM node

WORKDIR /frontend

COPY . /frontend

RUN npm install


EXPOSE 8080
EXPOSE 5173

CMD ["npm", "run", "dev"]