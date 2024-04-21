---
layout: "@/layouts/LayoutRepo.astro"
title: "Eco Arquitectura"
description: "Una nueva forma de crear tu blog"
img: "https://survey.stackoverflow.co/legacy-assets/insights/Img/svg-icons/Survey2019/headere7f2.svg?v=055a335639c2"
descriptionLay: "Una nueva forma de crear plantillas o blogs que nos permitan la integracion rapida de nuevo contenido pero al mismo tiempo mantengan la simplesa de una pagina estatica, con el fin de que todos puedan ocuparla y desplegarla"
autores: ["Eco_Jrsg"]
lastUp: "14 / 04 / 2024"

menu: ["Visión General", "Introducción", "Marco Teórico"]
subMenu: [[], ["Problema", "Propuesta de Solución"], ["Astro", "Metodologías"]]
---

# Visión General

En el transcurso de nuestra carrera como ingenieros de software, hemos explorado diversas metodologías para el desarrollo de sistemas, abarcando todo el ciclo de vida del software. Esta exploración nos ha brindado un conjunto diverso de habilidades que nos capacitan para implementar estrategias, procesos y mejoras en el desarrollo de una amplia gama de proyectos, otorgando valor a nuestro trabajo.

Sin embargo, hemos observado que la aplicación fragmentada de estas metodologías limita nuestro potencial para alcanzar resultados óptimos. Es por ello que hemos llegado a la conclusión de que un hito crucial en nuestra carrera como ingenieros de software es la integración de todos estos conocimientos y experiencias en una sola metodología. Esta metodología integrada busca sintetizar lo mejor de cada enfoque utilizado en nuestros proyectos pasados, con el objetivo de abordar de manera efectiva los desafíos comunes en el desarrollo de software.

---

# Introducción

## Problema

Durante la clase de "Arquitectura de Aplicaciones", se nos solicitó documentar nuestra experiencia en una página web. Sin embargo, surgió un problema cuando intentamos hacerlo utilizando una plantilla de Wix. La falta de un servidor, junto con varios inconvenientes adicionales, dificultaron enormemente la tarea. No existía una solución estándar, sencilla y oficial para publicar nuestra documentación en una página web sin depender de esa plataforma.

Además, enfrentamos otro gran obstáculo que es común en la universidad y en la educación en general: la escasa documentación que realizan la mayoría de los estudiantes sobre sus proyectos. Este problema se origina, en parte, por una cultura deficiente en este aspecto. Además, muchos estudiantes carecen del conocimiento necesario sobre herramientas que faciliten la creación de documentación accesible y duradera a lo largo del tiempo.

## Propuesta de Solución

Se propone desarrollar una plantilla de página web estática basada en la metodología **Eco Arquitectura**, diseñada específicamente para satisfacer las necesidades de la mayoría de los estudiantes de Ingeniería de Software. Esta plantilla ofrecerá una solución versátil que permitirá a los alumnos crear fácilmente sus propias páginas web estáticas, las cuales podrán ser publicadas en una variedad de servicios de alojamiento gratuito. Además de servir como un blog personalizado, esta plataforma también funcionará como un repositorio centralizado donde los estudiantes podrán documentar y compartir sus proyectos más relevantes con tan solo conocimientos básicos en la materia.

---

# Marco Teórico

## Astro

Toda esta idea nace del desarrollo de una página web con una tecnología relativamente nueva con la cual pude trabajar para generar páginas estáticas, sin embargo, al leer la documentación me di cuenta de que esta tecnología nos provee de herramientas sólidas para poder generar blogs y repositorios de manera bastante fácil. Esta tecnología se llama [Astro](https://astro.build). Este framework nos permite crear páginas estáticas de manera fácil y nos otorga muchas herramientas para que nosotros podamos implementar sistemas de archivos y de renderizado de archivos Markdown o JSON, los cuales son archivos con una estructura basada en lenguajes de etiquetado fáciles de leer y, sobre todo, fáciles de aprender. Esto nos permite crear una plantilla que sea capaz de personalizarse y de agregar nuevas publicaciones de manera fácil.

Además de esto, [Astro](https://astro.build) es extremadamente fácil de comprender y ocupar, por lo que también damos la oportunidad a los alumnos de que puedan hacer cambios para personalizar su página, o hacer cambios que mejoren la plantilla a través de un PR (Pull Request), sumado a eso su escalabilidad también es increíble, pudiendo integrar componentes de otras librerías o frameworks como [React](https://es.react.dev), [Svelt](https://svelte.dev), [Vue](https://vuejs.org), entre otros, junto con la posibilidad de volver la página una aplicación web.

Esto y muchas herramientas más son facilitadas por este framework como la optimización, [despliegue](#cicd) del cual hablaremos en el siguiente punto y más.

## Metodologías

Cuando se estudia programación, el enfoque suele estar en la práctica, ya sea resolviendo algoritmos, creando réplicas de páginas web o servicios, e incluso llevando a cabo proyectos personales. Todo este trabajo tiene un valor significativo para los programadores, especialmente cuando son autónomos.

Sin embargo, ¿cuál es la diferencia con la ingeniería de software? La distinción principal radica en la combinación de teoría y práctica inherente a las principales metodologías de desarrollo de software. Estas metodologías están diseñadas principalmente para proyectos grandes y complejos, que son altamente demandados por empresas internacionales o con cadenas de producción extensas. Estas empresas buscan implementar nuevos sistemas, ya sean propietarios o no, y aquí es donde la comprensión profunda de la ingeniería de software marca la diferencia.

Ahora dado que el problema que nosotros abarcaremos implica un desarrollo pequeño y en muchos casos tambien puede ser personal no es necesario que ocupemos metodologias tan pesadas que podrian atrasar y aumentar el costo a la hora del desarrollo de nuestro proyecto. Por lo que y bajo mi experiencia ocuparemos varias metodologias aguiles las cuales convinadas con metodologias robustas y nuevas formas de trabajar el contenido de nuestra pagina podremos hacer que el desarrollo y la implementacion de nuevos post sea mucho mas amigable y facil, al mismo tiempo que mantenemos la simplesa de los archivos finales con el fin de poderla levantar en hostings gratuitos. Para ello he elegido las siguientes metodologias como la base de esta arquitectura:

1. [CI/CD](#cicd)
2. [Scrum](#scrum)
3. [4+1-Vistas](#41-vistas)
4. [RUP](#rup)
5. [CMMI](#cmmi)

Hablaremos de cada una de forma mas detallada, aun que cabe aclarar que no haremos uso de todo lo que implica cada una de las metodologias solo haremos uso de aquellos puntos que podrian ser beneficiosos y ayudarnos.

### CI/CD

Cuando se desarrolla un software existen dos partes cruciales, las cuales son la programación o el desarrollo del mismo software y la arquitectura de TI, ¿sabes en qué servidor se subirá el sistema? Estas dos partes por lo general son gestionadas por partes diferentes en una empresa, lo que provoca que muchas veces la comunicación sea pobre en un punto crucial del ciclo de vida del proyecto, lo que hace que muchas veces el sistema falle. Pero cuando esto pasa, ¿de quién es la culpa? ¿De los desarrolladores que programaron un bug que tumbaría el sistema o de los ingenieros de TI que no pudieron levantar un servidor que no se cayera ante los posibles errores del sistema?

Este tipo de problemas son los que intenta resolver **CI/CD** o también conocida por (Continuous Integration / Continuous Delivery), es un conjunto de prácticas en la ingeniería de software diseñadas para mejorar la calidad y la velocidad del desarrollo de software.

- CI: La continua integración busca hacer que los desarrolladores integren su trabajo en un repositorio compartido varias veces al día. Cada integración se verifica automáticamente por medio de pruebas automatizadas que garantizan que el código nuevo no rompa el código existente y ayuda a identificar errores de manera rápida.

- CD: Automatiza el proceso de implementación del software en un entorno de producción o de pruebas. Con la entrega continua, cada cambio que pasa las pruebas de integración se considera candidato para ser liberado a producción.

Hoy en día estas prácticas son llevadas conjuntamente con otra metodología o más bien una cultura llamada [DEVOPS](https://azure.microsoft.com/es-mx/resources/cloud-computing-dictionary/what-is-devops#:~:text=Definición%20de%20DevOps,los%20clientes%20de%20forma%20constante.), la cual promueve la colaboración de los equipos de desarrollo (DEV) y los de operaciones (OPS), haciendo que la comunicación entre estas dos áreas sea más efectiva y los dos adopten las prácticas de CI/CD.

![Imagen_Devops](https://wac-cdn.atlassian.com/dam/jcr:ef9fe684-c6dc-4ba0-a636-4ef7bcfa11f1/New%20DevOps%20Loop%20image.png?cdnVersion=1567)

Pero esta metodología está enfocada en el desarrollo de páginas estáticas y que por lo general serán llevadas por una sola persona y no existe los equipos ni esa brecha de comunicación entre las personas. ¿Por qué sería importante implementar esta metodología? Para resolver esta pregunta primero es necesario entender bien el propósito de esta arquitectura, la cual tiene como objetivo principal poder desarrollar un repositorio/blog al cual se facilite implementar nuevas publicaciones al mismo tiempo que sea fácil de implementar. Por lo que nuestra mejor opción es generar archivos estáticos, esto hace que nuestro blog no sea en tiempo real y que necesite compilarse y desplegarse cada vez que exista un cambio. Eso significa que nuestra página se tendrá que desplegar cada vez que nosotros hagamos un cambio o una nueva publicación, esto es una excelente oportunidad para poder empezar a desarrollar la cultura de DEVOPS al mismo tiempo que desarrollamos e implementamos herramientas que nos ayuden en CI/CD. Pues hoy en día estas son de las habilidades más requeridas a nivel laboral y lo podemos comprobar viendo los datos que nos arroja las diferentes encuestas que se hacen a nivel internacional a los desarrolladores, una de ellas es [Survey2023](google.com) de [StackOverflow](google.com) las cuales son encuestas que se hacen a miles de desarrolladores para conocer un poco cuál es el estado del mundo del desarrollo. En ella podemos ver que la mayoría de desarrolladores cuentan con herramientas o procesos de CI/CD en sus proyectos o empresas, siendo la experiencia con mayor impacto con más del 71% de impacto. que nos ayuden en CI/CD. Pues hoy en dia estas son de las habilidades mas requeridas a nivel laboral y lo podemos comprobar viendo los datos que nos arroja las diferentes encuestas que se hace a invel internacional a los desarrolladores, una de ellas es [Survey2023](google.com) de [StackOverflow](google.com) las cuales son encuestas que se hacen a miles de desarrolladores para coner un poco cual es el estado del mundo del desarrollo. En ella podemos ver que la mayoria de desarrolladores cuentan con herramientas o procesos de CI/CD en sus proyectos o empresas siendo la experiencia con mayor impacto con mas del 71% de impacto.

### Scrum

Scrum es un marco de trabajo ágil utilizado comúnmente en el desarrollo de software y otros proyectos complejos. Se basa en principios de transparencia, inspección y adaptación para gestionar el trabajo de manera colaborativa y flexible. Scrum se centra en la entrega iterativa e incremental de productos de alta calidad, priorizando el valor para el cliente y fomentando la mejora continua.

Los elementos clave de Scrum incluyen:

1. **Roles**: Scrum define tres roles principales: el Product Owner, responsable de definir los requisitos y prioridades del producto; el Scrum Master, encargado de facilitar el proceso Scrum y eliminar los obstáculos del equipo; y el Equipo de Desarrollo, responsable de entregar incrementos de producto funcionales al final de cada iteración.

2. **Eventos**: Scrum establece varios eventos para gestionar el trabajo de manera efectiva. Estos incluyen la Sprint Planning (planificación de la iteración), la Daily Scrum (reunión diaria), la Sprint Review (revisión de la iteración) y la Sprint Retrospective (retrospectiva de la iteración).

3. **Artefactos**: Scrum utiliza tres artefactos principales para gestionar el trabajo: el Product Backlog, una lista priorizada de todas las funcionalidades y requisitos del producto; el Sprint Backlog, una lista de elementos seleccionados del Product Backlog para trabajar durante una iteración; y el Incremento, la versión funcional y potencialmente entregable del producto al final de cada iteración.

Scrum promueve la colaboración, la autogestión y la mejora continua del equipo. Al proporcionar una estructura clara y un enfoque iterativo e incremental, Scrum ayuda a los equipos a adaptarse rápidamente a los cambios y a entregar valor de manera más rápida y predecible.

Para este proyecto es importante adoptar ciertas partes de esta metodología para poder llevar el desarrollo de las diferentes partes de la página, pues el trabajo se dividirá en varias partes las cuales no son independientes pero que se trabajarán por separado pero que al final al integrarse sean capaces de entregar el resultado esperado. Por ello es importante asignar los diferentes roles, eventos y artefactos para cada una de estas partes aunque de manera diferente a como lo trabaja Scrum, pero nos basaremos en su ideología.

### 4+1 Vistas

4+1 Vistas en un arquitectura completa para el desarrillo de software la cual proporciona una idea general desde donde se tiene que abarcar un software, lo que le llama una vista, como dice su titulo existen 5 vistas, las cuales simulan los puntos de vista desde los cuales se tiene que ver un software para poder desarrollarlo de forma correcta y con calidad.

Fue propuesta por Philippe Kruchten en la década de 1990 como una forma de abordar las complejidades de la arquitectura de software de manera integral. Las "4+1 vistas" consisten en cuatro vistas arquitectónicas principales, complementadas por un conjunto de casos de uso que actúan como la quinta vista. Estas vistas son:

1. **Vista lógica o de diseño conceptual**: Describe la estructura interna del sistema desde una perspectiva lógica, mostrando la organización de los componentes y su interacción.
2. **Vista de procesos o de diseño de desarrollo**: Se centra en los aspectos dinámicos del sistema, mostrando cómo los procesos y las tareas se llevan a cabo dentro del sistema y cómo interactúan entre sí.
3. **Vista física o de diseño de implementación**: Describe cómo se distribuyen los componentes del sistema en hardware y software, mostrando la asignación de componentes a nodos físicos y cómo se comunican entre sí.
4. **Vista de desarrollo o de diseño de módulos**: Se enfoca en los aspectos relacionados con el desarrollo del software, como la estructura del código fuente, los módulos y su interdependencia, y las tecnologías utilizadas.
5. **Casos de uso**: Este complemento describe los requisitos funcionales del sistema desde la perspectiva del usuario, mostrando cómo interactúan los actores externos con el sistema a través de diferentes escenarios.

Al emplear estas "4+1 vistas", los arquitectos de software pueden tener una comprensión holística del sistema, abordando tanto sus aspectos estáticos como dinámicos, y garantizando que se cubran todas las necesidades de los interesados en el desarrollo y uso del software.

Para el desarrollo de esta arquitectura es necesario tomar los distintos enfoques que da la arquitectura de "4+1 vistas" las cuales nos ayudaran a comprender cuales son las distintas partes que abarcaran que deberan cubrir los entregables de nuestro proyecto, los cuales seran principalmente 3 en vez de 5, ya que tomaremos en cuenta de que sera un sistema mas pequeo.

### RUP

RUP significa Rational Unified Process (Proceso Unificado de Rational, en español). Es un marco de trabajo de desarrollo de software que proporciona una estructura detallada para asignar tareas y responsabilidades dentro de un desarrollo de software en equipo. RUP se basa en una serie de principios fundamentales para guiar el proceso de desarrollo, como la colaboración entre equipos, la iteración continua y el enfoque en la calidad del producto final. Fue creado por Rational Software Corporation, que fue adquirida por IBM en 2003.

Dentro del Rational Unified Process (RUP), el reuso del código y la estandarización son principios importantes. RUP promueve la reutilización del código y la estandarización como parte de sus prácticas para mejorar la eficiencia y la calidad en el desarrollo de software. Algunas de las maneras en que RUP aborda estos principios incluyen:

1. **Componentes Reusables**: RUP fomenta la identificación y creación de componentes de software que puedan ser reutilizados en diferentes partes del sistema o en proyectos futuros. Esto ayuda a reducir el tiempo de desarrollo y a mejorar la consistencia y calidad del software.
2. **Patrones de Diseño y Mejores Prácticas**: RUP promueve el uso de patrones de diseño y mejores prácticas de programación como una forma de estandarizar la forma en que se desarrolla el software. Esto ayuda a mantener un alto nivel de calidad y coherencia en todo el proyecto.
3. **Lineamientos de Codificación**: RUP proporciona lineamientos y estándares para la codificación que ayudan a mantener la consistencia en el estilo y la estructura del código. Esto facilita la comprensión del código por parte de otros desarrolladores y contribuye a la mantenibilidad a largo plazo del sistema.
4. **Bibliotecas y Frameworks**: RUP fomenta el uso de bibliotecas y frameworks de código abierto o internas que pueden proporcionar funcionalidades comunes y soluciones predefinidas para problemas recurrentes. Esto ayuda a acelerar el desarrollo y reduce la necesidad de escribir código desde cero.
