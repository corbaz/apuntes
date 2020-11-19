# Bienvenidos a Xamarin

## Configuración del ambiente de desarrollo para Xamarin (V6)

<center>
![logo xamarin](media/0f000b3847027507d695092a166f9b3f.png)
</center>

>   **Table of Contents**

1.  [Introducción](#introducción)

2.  [Recomendaciones](#recomendaciones)

3.  [Instalación de Visual Studio en Windows](#instalacion-de-visual-studio-en-windows)

    3.1  [Instalación de Visual Studio en Mac](#instalacion-de-visual-studio-en-mac)

4.  [Verificación en Windows](#verificacion-en-windows) 

    4.1  [Verificación en Mac](#verificacion-en-mac) 

5.  [Depurar en dispositivo físico](#depurar-en-dispositivo-fisico)

6.  [Instalación de Postman](#instalacion-de-postman)

7.  [Instalación de Vysor (Opcional)](#instalacion-de-vysor-opcional)

8.  [Activar cuenta de Azure para Estudiantes](#activar-cuenta-de-azure-para-estudiantes)

## Introducción

Este documento explica cómo configurar el ambiente de desarrollo con todas las
herramientas necesarias. Todos los elementos de software mencionados en este
documento, se pueden descargar de forma gratuita y legal.

## Recomendaciones

Funciona prácticamente en cualquier PC que soporte Windows 10, pero para que
trabaje cómodamente, recomiendo este hardware o superior:

-   **Procesador**: Core i5 o superior o su equivalente en AMD.

-   **Memoria**: 8 GB en RAM para trabajar con emuladores o 4 GB si va a
    trabajar con un dispositivo físico Android conectado al PC.

-   **Disco**: 100 GB para instalar las herramientas de desarrollo requeridas.

## Instalación de Visual Studio en Windows

Instale el Visual Studio 2019 Preview. Se puede descargar gratis de forma legal
desde:
[https://visualstudio.microsoft.com/es/vs/preview/\#](https://visualstudio.microsoft.com/es/vs/preview/).
Descargue el archivo, ejecútalo y espere un momento a que termine la precarga,
luego seleccione estas opciones:

![](media/e58e682e70616f3a329d3449b411e3e5.png)

![](media/8cf3772412e2cab2e03d9562709ce715.png)

![](media/25534b78ba8b6ad2f195acd72358c091.png)

En componentes individuales colocar el .net core 2.1 (buque “.net core”)

![](media/78974ab18fdfa1beaeb6c5cba5fff5c5.png)

En componentes individuales colocar el emulador de android y el acelerador de
hardware (buque “android”):

![](media/bd5a5ff670525ab78c69416eaab6e30c.png)

E instalar el producto en Inglés (cuando requieran ayuda del docente, si el
producto no está instalado en Ingles

no recibirá soporte):

![](media/6cc8159b440338be25d06a8f66179f46.png)

Esperar a que la instalación termine, puede durar varias horas.

## Instalación de Visual Studio en Mac

Instale el Visual Studio 2019. Se puede descargar gratis de forma legal desde:
<https://visualstudio.microsoft.com/vs/mac/>:

![](media/521eb692e587ab80441448e8ba92da4c.png)

Seleccione todas las opciones y presione el botón “Install and update”.

![](media/64c892f29688f6dca95f4650c09f25a9.png)

## Verificación en Windows

Probemos que todo esté bien, ejecuta el Visual Studio y luego “Create new
Project…”

![](media/4e1ce520ad9cab5107e86dca2578a824.png)

Busca “Xamarin” y luego selecciona “Mobile App (Xamarin.Forms).

![](media/e3c80f1a7e3fa51329c3a69ba79f8b57.png)

Coloca un nombre a la App y un directorio, te recomiendo uno que sea lo más
cercano al directorio raíz:

![](media/b058217f6e524660a831d8e1422e2505.png)

Luego selecciona “Blank”:

![](media/c5468f9c1cc033e2f13a0a3a1b9254c7.png)

Presione “Android Emulator”:

![](media/75b727764559dc9b65217b1dfa63ebad.png)

Crea uno nuevo:

![](media/b7e3ca1ce34709328e1a5ac7f4807434.png)

Y luego lo corres con “Start”

![](media/d1fb64db600951fc685578ec637c796f.png)

Luego que te cargue te debe aparecer algo como esto, corre el proyecto desde
ahí:

![](media/60348ff8d2d10ff260b95a9adbee27a8.png)

Esperas un momento y te debe aparecer esto:

![](media/b32342871554186b90f9f732ee527efc.png)

¡Felicitaciones! ya hiciste tu primer aplicación mobile.  


## Verificación en Mac

**Nota:** para poder probar en Mac el emulador de iPhone, debes instalar la
última versión de XCODE.

Probemos que todo esté bien, ejecuta el Visual Studio y luego “New”:

![](media/69947dc4677370dd063aa31a71f995f1.png)

Seleccione Mutiplatform - Blank Forms App:

![](media/8a60fbca545e229c4d95276cb369da8f.png)

Luego coloca un nombre al proyecto:

![](media/54e4c021517cfdaf9ab6d96c8d8e6ae3.png)

Y una ubicación:

![](media/c28dcbccc3beb2a69183a6d323f74238.png)

Configure un emulador por Tools - Device Manager:

![](media/1cb5d0d692cc3e1a040a3588ff30c1b0.png)

Luego de creado darle Play y ejecutar el proyecto Android en el emulador creado

![](media/7b03f422b77c6569050cf58784ad3e46.png)

Debe aparecer una pantalla similar a esta:

![](media/58f6dc50e5460cf8f65fcdc60fadcb0e.png)

Ahora probar en el emulador de iOS:

![](media/49546541fb8044140c470611967d820b.png)

Debe aparecer una pantalla similar a esto:

![](media/34017b681112002ae7b78ea942989d43.png)

## Depurar en dispositivo físico

Es altamente recomendado que trabajes directamente con un dispositivo físico
como Tablet o celular, debes primero activar las opciones de desarrollador, para
esto entrar al menú: Acerca del teléfono:

![](media/19931e0beee8d449033beafd31eb2b9f.png)

Luego presionar 7 veces en número de compilación, hasta que salga el mensaje que
ya eres un programador:

![](media/dc00fa83c6d7da98844c6e48415a03eb.png)

Luego se devuelve al menú anterior y ya debe ver el menú de “Programador”

![](media/81b6ae207f71f86216167c114c717955.png)

En este menú activar “Depuración por USB” y si aparece la opción “Ubicaciones de
prueba” (ubicaciones de prueba no aparece en todos los dispositivos):

![](media/d03dee63e6aa469940bf22f6b4cc8e0b.png)

Cuando conectes el cable USB al PC debe salir un mensaje como estos:

![](media/6729730c08212b45c62405783e992ac5.png)

Presione aceptar y en su defecto puede marcar la casilla de “Permitir siempre
desde esta computadora” para que no vuelva a preguntar. Al hacer esto el
dispositivo debe ser reconocido desde Visual Studio, por ejemplo:

![](media/bb1b267e3b9d1e20898f8f45e09b6298.png)

Luego de esto ya puedes correr el programa en el dispositivo:

![](media/1966ee863208f9aa1a01e9c103714fea.png)

Si te sale esta pantalla, estás listo para empezar a desarrollar desde tu
dispositivo, ¡felicitaciones!

## Instalación de Postman

Vamos a utilizar esta herramienta para probar los servicios que construyamos.
Está disponible en: <https://www.getpostman.com/>

![](media/71d3853a5b8f17704a93a8a46e20a917.png)

Descargue el archivo según su sistema operativo e instale el producto.

Recomiendo que se den de alta en el producto, con si cuenta de Google:

![](media/5f2d3472c88b88d12c3018467100e5c5.png)

## Instalación de Vysor (Opcional)

Para poder ver y manipular los dispositivos físicos desde el PC, vamos a
instalar esta útil herramienta, disponibe en <http://www.vysor.io/download/>:

![](media/32d7dcc4d84ea2cd271a4f1a09941717.png)

Descargue el archivo según su sistema operativo e instale el producto.

## Activar cuenta de Azure para Estudiantes

Active su cuenta de Azure para estudiantes, lo haces utilizando tu correo
institucional y siguiendo las instrucciones en:
<https://azure.microsoft.com/en-us/free/students/starter/?v=18.45>:
