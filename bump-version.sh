#!/bin/sh
# Marca uma versão nova do app (o celular dos usuários atualiza sozinho ao abrir).
# Uso: ./bump-version.sh   (rodar antes de cada publicação)
v=$(TZ=America/Sao_Paulo date +%d/%m-%H:%M)
sed -i "s|^const APP_VERSION = '.*';|const APP_VERSION = '$v';|" index.html
printf '{ "v": "%s" }\n' "$v" > version.json
echo "versão $v"
