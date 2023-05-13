DESARROLLO DE SOFTWARE WEB FRONT-END
  - Video de presentación Etapa de Contextualización
    * https://www.youtube.com/watch?v=WPVhGJ4K9R8

# Demo Criptografia
Criptografia simetrica y asimetrica

##### Aplicación en desarrollo / pruebas
```sh
$ npm install
$ ionic serve
```

## Cifrado Simétrico

* Implementar criptografía simétrica (particularmente con hardware) puede ser muy eficaz porque no experimenta ningún retraso de tiempo significativo como resultado del cifrado y descifrado. La criptografía simétrica, también, proporciona un grado de autenticación porque los datos cifrados con una clave simétrica no se pueden descifrar con ninguna otra. Por lo tanto, siempre que las dos partes que la utilicen para cifrar las comunicaciones mantengan en secreto la clave simétrica, cada una de las partes puede estar segura de que se está comunicando con la otra siempre que los mensajes descifrados sigan teniendo sentido.

* Normalmente, una clave simétrica se puede intercambiar con otro participante de confianza, pues, por lo general, produce una clave única para cada par de participantes. Puede estar seguro de que cualquier mensaje que intercambie, que esté encriptado en una clave específica, sólo podrá ser descifrado por el otro participante que tenga la misma clave; de esta forma, la clave debe mantenerse en secreto para cada participante. En consecuencia, estas claves también se denominan cifrados de clave secreta. Si alguien más encuentra la clave, afectará tanto a la confidencialidad como a la autenticación. Una persona con una clave simétrica no autorizada no solo puede descifrar los mensajes enviados con esa clave, sino que, también, puede cifrar los mensajes nuevos y enviarlos como si procedieran de una de las dos partes que originalmente usaban la clave.

## Cifrado Asimétrico

* La criptografía asimétrica, también conocida como criptografía de clave pública, es un proceso que utiliza un par de claves relacionadas, una clave pública y otra privada, para cifrar y descifrar un mensaje, y protegerlo de accesos o usos no autorizados.

* Una clave pública es una clave criptográfica que puede ser utilizada por cualquier persona para cifrar un mensaje de manera que sólo pueda ser descifrado por el destinatario con su clave privada. Una clave privada -también conocida como clave secreta- sólo se comparte con el iniciador de la clave.

* Cuando alguien quiere enviar un mensaje cifrado, puede obtener la clave pública del destinatario de un directorio público y utilizarla para cifrar el mensaje antes de enviarlo. El destinatario del mensaje puede entonces descifrarlo utilizando su clave privada correspondiente.

* Si el remitente encripta el mensaje con su clave privada, sólo podrá desencriptarlo con la clave pública del remitente, lo que permitirá autentificarlo. Estos procesos de cifrado y descifrado se producen automáticamente pues los usuarios no necesitan bloquear y desbloquear físicamente el mensaje.

* El principal beneficio de la criptografía asimétrica es el aumento de la seguridad de los datos. Es el proceso de cifrado más seguro porque los usuarios nunca tienen que revelar o compartir sus claves privadas, lo que disminuye las posibilidades de que un ciberdelincuente descubra la clave privada de un usuario durante la transmisión.
