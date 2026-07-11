@echo off
setlocal
set "NPM_EXE=C:\Program Files\nodejs\npm.cmd"
set "APP_DIR=%~dp0..\cedarville-church-site"
set "PATH=C:\Program Files\nodejs;%PATH%"

if exist "%NPM_EXE%" (
  "%NPM_EXE%" --prefix "%APP_DIR%" run dev
) else (
  npm --prefix "%APP_DIR%" run dev
)
