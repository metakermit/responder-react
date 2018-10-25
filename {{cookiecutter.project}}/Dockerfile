from kennethreitz/pipenv

# install node
RUN wget -qO- https://deb.nodesource.com/setup_8.x | bash -
RUN apt install nodejs -y

# add package.json
COPY package.json package.json
COPY package-lock.json package-lock.json

# install dependencies:
RUN npm install

# we mount the folders individually to not shadow node_modules
COPY ./app /app/app
COPY ./server /app/server
COPY ./templates /app/templates

RUN responder build
CMD python3 server/api.py
