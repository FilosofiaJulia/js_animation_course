# js_animation_course

## Lesson 21: GSAP ##  

> Подключите библиотеку GSAP и выполните несколько задач:
1. Создайте HTML-элемент. Используя GSAP, переместите фигуру из левого верхнего угла в правый нижний за 3 секунды. После этого он должен увеличился в 2 раза.
2. Добавьте анимацию цвета: измените цвет круга с красного на синий во время его перемещения. Для этого можете использовать `gsap.to("#circle", { x: 300, backgroundColor: "blue", duration: 2 });
3. Добавьте анимации для нескольких элементов. Один элемент перемещается. Второй вращается. Третий увеличивается в размерах и меняет цвет. Всё это должно происходить одновременно.

## Lesson 26: Simple game ##

> Повторите создание игры по видео
1. Растяните поле `<canvas>` на всю ширину и высоту экрана браузера
2. Установите текст "Поздравляем!" по центру поля `<canvas>`
3. Измените управление: вместо стрелок используйте клавиши WASD для управления игроком
4. Увеличьте сложность игры: Добавьте таймер: игрок должен собрать все звезды за определенное время. Если время истекает, игра заканчивается с сообщением "Время вышло!".

## Lesson 27: WebGL and three.js ##

1. Инициализируйте сцену, камеру и рендерер.
2. Добавьте источники освещения (можно те же, что были на практике)
3. Добавьте минимум два различных 3D-объекта (например, куб и сферу, но рекомендую ознакомиться с вариантами в документации из раздела Geometries)
4. Примените к ним разные материалы и стили к каждому объекту (цвет, текстура, размеры)
5. Добавьте простую анимацию (например, вращение объектов);

## Lesson 28: Objects in the scene and camera movements ##

1. Создайте сцену c несколькими объектами. Например, SphereGeometry, CylinderGeometry, BoxGeometry
2. Добавьте эти фигуры в сцену.
3. Разместите их на разных позициях в трехмерном пространстве, используя `.position.set(x, y, z)`
4. Задайте каждому объекту уникальный цвет
5. Убедитесь, что камера видит все три объекта

## Lesson 30: Materials and Textures ##

1. Создайте 9 кругов синего цвета, чтобы они стояли в ряд 3х3 и для каждого выполните следующие настройки
* 1 круг, материал - Basic
* 2 круг, материал - Lambert
* 3 круг, материал - Phong,
* 4 круг, материал - Phong, уровень бликов shininess = 0
* 5 круг, материал - Phong, уровень бликов shininess = 30
* 6 круг, материал - Phong, уровень бликов shininess = 150
* 7 круг, материал - Standard, roughness = 0, metalness = 0
* 8 круг, материал - Standard, roughness = 0.5, metalness = 0.5
* 9 круг, материал - Standard, roughness = 1, metalness = 1

2. Подключение текстуры
* Скачайте [исходный код](https://disk.yandex.ru/d/FoUbSjEsnE0m9g) для начала работы
* Подключите [эту текстуру](https://raw.githubusercontent.com/timoxley/threejs/master/examples/textures/land_ocean_ice_cloud_2048.jpg) - именно ссылку, не сохраняя изображение локально в проект
* Замените `color:0xff0000` на текстуру в сфере
* У вас должен получиться [такой итог](https://disk.yandex.ru/d/xoM48IzwJBdGIQ) после подключения текстуры на сферу