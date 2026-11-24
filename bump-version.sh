#!/bin/sh
# Marca uma versão nova do app (o celular dos usuários vê o aviso "Nova versão do app" ou atualiza sozinho ao abrir).
# Uso: ./bump-version.sh   (rodar antes de cada publicação)
# Marca o PassosFit e o Primeiro Passo; se der para comparar com o site no ar, só marca o app que mudou.
v=$(TZ=America/Sao_Paulo date +%d/%m-%H:%M)
live=origin/claude/sharp-gauss-tw16z1
pf=1; pp=1
if git rev-parse -q --verify "$live" >/dev/null 2>&1; then
  git diff --quiet "$live" -- . ':!primeiro-passo' ':!portal' ':!version.json' && pf=0
  git diff --quiet "$live" -- primeiro-passo ':!primeiro-passo/version.json' && pp=0
  [ $pf = 0 ] && [ $pp = 0 ] && pf=1 && pp=1
fi
if [ $pf = 1 ]; then
  sed -i "s|^const APP_VERSION = '.*';|const APP_VERSION = '$v';|" index.html
  printf '{ "v": "%s" }\n' "$v" > version.json
  echo "PassosFit: versão $v"
fi
if [ $pp = 1 ]; then
  sed -i "s|^const PP_VERSION=\".*\";|const PP_VERSION=\"$v\";|" primeiro-passo/index.html
  printf '{ "v": "%s" }\n' "$v" > primeiro-passo/version.json
  echo "Primeiro Passo: versão $v"
fi
