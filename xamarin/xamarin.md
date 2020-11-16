# peraConfiguración del ambiente de desarrollo para Xamarin (V6)
 ![](RackMultipart20201112-4-pao6rv_html_4a623075f119ab5d.png)

**Table of Contents**

1. [Introducción](#_30j0zll) 1
2. [Recomendaciones](#_1fob9te) 1
3. [Instalación](#_3znysh7) 1
4. [Verificación](#_2et92p0) 4
5. [Depurar en dispositivo físico](#_tyjcwt) 8
6. [Instalación de Postman](#_3dy6vkm) 12
7. [Instalación de Vysor (Opcional)](#_1t3h5sf) 13
8. [Activar cuenta de Azure para Estudiantes](#_4d34og8) 14

1.
# Introducción

Este documento explica cómo configurar el ambiente de desarrollo con todas las herramientas necesarias. Todos los elementos de software mencionados en este documento, se pueden descargar de forma gratuita y legal.

1.
# Recomendaciones

Funciona prácticamente en cualquier PC que soporte Windows 10, pero para que trabaje cómodamente, recomiendo este hardware o superior:

- **Procesador** : Core i5 o superior o su equivalente en AMD.
- **Memoria** : 8 GB en RAM para trabajar con emuladores o 4 GB si va a trabajar con un dispositivo físico Android conectado al PC.
- **Disco** : 100 GB para instalar las herramientas de desarrollo requeridas.

1.
# Instalación de Visual Studio en Windows

Instale el Visual Studio 2019 Preview. Se puede descargar gratis de forma legal desde: [https://visualstudio.microsoft.com/es/vs/preview/#](https://visualstudio.microsoft.com/es/vs/preview/#). Descargue el archivo, ejecútalo y espere un momento a que termine la precarga, luego seleccione estas opciones:

![](RackMultipart20201112-4-pao6rv_html_7c8d9dee77be90ff.png)

![](RackMultipart20201112-4-pao6rv_html_c2ef11d21bd619a1.png)

![](RackMultipart20201112-4-pao6rv_html_e701861868967cb8.png)

En componentes individuales colocar el .net core 2.1 (buque &quot;.net core&quot;)

![](RackMultipart20201112-4-pao6rv_html_abecbb3bcabc8f4b.png)

En componentes individuales colocar el emulador de android y el acelerador de hardware (buque &quot;android&quot;):

![](RackMultipart20201112-4-pao6rv_html_f0ac5950e587230d.png)

E instalar el producto en Inglés (cuando requieran ayuda del docente, si el producto no está instalado en Ingles

no recibirá soporte):

![](RackMultipart20201112-4-pao6rv_html_aa553d821e71aae7.png)

Esperar a que la instalación termine, puede durar varias horas.

1.
# Instalación de Visual Studio en Mac

Instale el Visual Studio 2019. Se puede descargar gratis de forma legal desde: [https://visualstudio.microsoft.com/vs/mac/](https://visualstudio.microsoft.com/vs/mac/):

![](RackMultipart20201112-4-pao6rv_html_54cee3721e49fbc1.png)

Seleccione todas las opciones y presione el botón &quot;Install and update&quot;.

![](RackMultipart20201112-4-pao6rv_html_e6821b1960ae1692.png)

1.
# Verificación en Windows

Probemos que todo esté bien, ejecuta el Visual Studio y luego &quot;Create new Project…&quot;

![](RackMultipart20201112-4-pao6rv_html_5474dcd17605865c.png)

Busca &quot;Xamarin&quot; y luego selecciona &quot;Mobile App (Xamarin.Forms).

![](RackMultipart20201112-4-pao6rv_html_95d9dc5c4a12eaa3.png)

Coloca un nombre a la App y un directorio, te recomiendo uno que sea lo más cercano al directorio raíz:

![](RackMultipart20201112-4-pao6rv_html_fbe13a6d49a72ac.png)

Luego selecciona &quot;Blank&quot;:

![](RackMultipart20201112-4-pao6rv_html_ab3ab34c7047d94f.png)

Presione &quot;Android Emulator&quot;:

![](RackMultipart20201112-4-pao6rv_html_e0e5bad88dfb1e27.png)

Crea uno nuevo:

![](RackMultipart20201112-4-pao6rv_html_ee194080287a7daf.png)

Y luego lo corres con &quot;Start&quot;

![](RackMultipart20201112-4-pao6rv_html_b7198e44bf61f651.png)

Luego que te cargue te debe aparecer algo como esto, corre el proyecto desde ahí:

![](RackMultipart20201112-4-pao6rv_html_4bbf4e92d021928c.png)

Esperas un momento y te debe aparecer esto:

![](RackMultipart20201112-4-pao6rv_html_1aef44ab08279fce.png)

¡Felicitaciones! ya hiciste tu primer aplicación mobile.

1.
# Verificación en Mac

**Nota:** para poder probar en Mac el emulador de iPhone, debes instalar la última versión de XCODE.

Probemos que todo esté bien, ejecuta el Visual Studio y luego &quot;New&quot;:

![](RackMultipart20201112-4-pao6rv_html_8c1a06d613fbbd32.png)

Seleccione Mutiplatform - Blank Forms App:

![](RackMultipart20201112-4-pao6rv_html_9e9822b2e72d55fb.png)

Luego coloca un nombre al proyecto:

![](RackMultipart20201112-4-pao6rv_html_222695ffe24dd492.png)

Y una ubicación:

![](RackMultipart20201112-4-pao6rv_html_41eea6a5a809078d.png)

Configure un emulador por Tools - Device Manager:

![](RackMultipart20201112-4-pao6rv_html_9b2de9372c7986e.png)

Luego de creado darle Play y ejecutar el proyecto Android en el emulador creado

![](RackMultipart20201112-4-pao6rv_html_30f0211bd64beeca.png)

Debe aparecer una pantalla similar a esta:

![](RackMultipart20201112-4-pao6rv_html_8449d201521a14b1.png)

Ahora probar en el emulador de iOS:

![](RackMultipart20201112-4-pao6rv_html_46f354144e5ebbfb.png)

Debe aparecer una pantalla similar a esto:

![](RackMultipart20201112-4-pao6rv_html_1859df17d35a3ce7.png)

1.
# Depurar en dispositivo físico

Es altamente recomendado que trabajes directamente con un dispositivo físico como Tablet o celular, debes primero activar las opciones de desarrollador, para esto entrar al menú: Acerca del teléfono:

![](RackMultipart20201112-4-pao6rv_html_30b76fec7b8375ac.png)

Luego presionar 7 veces en número de compilación, hasta que salga el mensaje que ya eres un programador:

![](RackMultipart20201112-4-pao6rv_html_90094b329f33dc8b.gif) ![](RackMultipart20201112-4-pao6rv_html_428a18235295b5f6.png)

Luego se devuelve al menú anterior y ya debe ver el menú de &quot;Programador&quot;

![](RackMultipart20201112-4-pao6rv_html_90094b329f33dc8b.gif) ![](RackMultipart20201112-4-pao6rv_html_25bdd3798b2b45ee.png)

En este menú activar &quot;Depuración por USB&quot; y si aparece la opción &quot;Ubicaciones de prueba&quot; (ubicaciones de prueba no aparece en todos los dispositivos):

![](RackMultipart20201112-4-pao6rv_html_59e167ad428cebd.gif) ![](RackMultipart20201112-4-pao6rv_html_59e167ad428cebd.gif) ![](RackMultipart20201112-4-pao6rv_html_bdf553c50381d042.png)

Cuando conectes el cable USB al PC debe salir un mensaje como estos:

![](RackMultipart20201112-4-pao6rv_html_94f5c7ff85ba5c9d.png)

Presione aceptar y en su defecto puede marcar la casilla de &quot;Permitir siempre desde esta computadora&quot; para que no vuelva a preguntar. Al hacer esto el dispositivo debe ser reconocido desde Visual Studio, por ejemplo:

![](RackMultipart20201112-4-pao6rv_html_c45b6c3f33fbaac9.png)

Luego de esto ya puedes correr el programa en el dispositivo:

![](RackMultipart20201112-4-pao6rv_html_f8e03982f39844e7.png)

Si te sale esta pantalla, estás listo para empezar a desarrollar desde tu dispositivo, ¡felicitaciones!

1.
# Instalación de Postman

Vamos a utilizar esta herramienta para probar los servicios que construyamos. Está disponible en: [https://www.getpostman.com/](https://www.getpostman.com/)

![](RackMultipart20201112-4-pao6rv_html_92978b8e2f269a1e.png)

Descargue el archivo según su sistema operativo e instale el producto.

Recomiendo que se den de alta en el producto, con si cuenta de Google:

![](RackMultipart20201112-4-pao6rv_html_e523bb9027905fd2.png)

1.
# Instalación de Vysor (Opcional)

Para poder ver y manipular los dispositivos físicos desde el PC, vamos a instalar esta útil herramienta, disponibe en [http://www.vysor.io/download/](http://www.vysor.io/download/):

![](RackMultipart20201112-4-pao6rv_html_1f7cd3fc0d72b5eb.png)

Descargue el archivo según su sistema operativo e instale el producto.

1.
# Activar cuenta de Azure para Estudiantes

Active su cuenta de Azure para estudiantes, lo haces utilizando tu correo institucional y siguiendo las instrucciones en: [https://azure.microsoft.com/en-us/free/students/starter/?v=18.45](https://azure.microsoft.com/en-us/free/students/starter/?v=18.45):