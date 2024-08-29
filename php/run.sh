#!/bin/bash

# Локальный путь к файлу
LOCAL_FILE="./index.php"

# Данные для подключения к серверу
REMOTE_USER="root"
REMOTE_HOST="193.169.188.127"
REMOTE_DIR="/root/test-domain/"

# Команда для копирования файла через SCP
scp $LOCAL_FILE ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_DIR}

if [ $? -eq 0 ]; then
    echo "Файл успешно загружен на сервер!"
else
    echo "Ошибка при загрузке файла."
fi
