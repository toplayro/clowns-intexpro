let parts = [
    {
        id: 0,
        name: '1. Основы PYTHON',
        items: [
            {
                id: 0,
                name: 'Типы данных',
                statyaID: 0,
            },
            {
                id: 1,
                name: 'Переменные',
                statyaID: 1,
            },
            {
                id: 2,
                name: 'Арифметические операции с числами',
                statyaID: 2,
            },
            {
                id: 3,
                name: 'Условные выражения',
                statyaID: 3,
            },
            {
                id: 4,
                name: 'Циклы',
                statyaID: 4,
            },
            {
                id: 5,
                name: 'Функции',
                statyaID: 5,
            },
            {
                id: 6,
                name: 'Область видимости переменных',
                statyaID: 6,
            },
        ]
    },
    {
        id: 1,
        name: '2. Объектно-ориентированное программирование',
        items: [
            {
                id: 0,
                name: 'Классы и объекты',
                statyaID: 7,
            },
            {
                id: 1,
                name: 'Инкапсуляция',
                statyaID: 8,
            },
            {
                id: 2,
                name: 'Наследование',
                statyaID: 9,
            },
            {
                id: 3,
                name: 'Класс object',
                statyaID: 10,
            },
            {
                id: 4,
                name: 'Перегрузка операторов',
                statyaID: 11,
            },
            {
                id: 5,
                name: 'Абстрактные классы и методы',
                statyaID: 12,
            },
        ]
    },
    {
        id: 2,
        name: '3. Обработка ошибок и исключений',
        items: [
            {
                id: 0,
                name: 'Конструкция try...except...finally',
                statyaID: 13,
            },
            {
                id: 1,
                name: 'Генерация исключений',
                statyaID: 14,
            },
        ]
    },
    {
        id: 3,
        name: '4. Модули',
        items: [
            {
                id: 0,
                name: 'Определение и подключение модулей',
                statyaID: 15,
            },
            {
                id: 1,
                name: 'Модуль random',
                statyaID: 16,
            },
            {
                id: 2,
                name: 'Математические функции и модуль math',
                statyaID: 17,
            },
        ]
    },
]

let statyas = [
    {
        id: 0,
        texts: [
            {
                tag: 'title',
                text: 'Типы данных'
            },
            {tag: 'empty'},



            {
                tag: 'title',
                text: 'INT'
            },
            {
                tag: 'text',
                text: 'int/integer (целые числа) представляют собой целые числа, как положительные, так и отрицательные'
            },
            {
                tag: 'code',
                code: [
                    's = 12',
                    'c = -40',
                ],
                forCopy: 's = 12\nc = -40'
            },
            {tag: 'empty'},



            {
                tag: 'title',
                text: 'FLOAT'
            },
            {
                tag: 'text',
                text: 'Float (числа с плавающей запятой) представляют собой числа, содержащие десятичную точку'
            },
            {
                tag: 'code',
                code: [
                    'a = 0.12',
                    'b = 9.322',
                ],
                forCopy: 'a = 0.12\nb = 9.322'
            },
            {tag: 'empty'},



            {
                tag: 'title',
                text: 'STRING'
            },
            {
                tag: 'text',
                text: 'String (строчки) представляют собой последовательности символов, заключенные в одинарные или двойные кавычки'
            },
            {
                tag: 'code',
                code: [
                    'text = "Привет, мир!"',
                ],
                forCopy: 'text = "Привет, мир!"'
            },
            {tag: 'empty'},
            


            {
                tag: 'title',
                text: 'LIST'
            },
            {
                tag: 'text',
                text: 'List (списки) — это упорядоченные, изменяемые коллекции объектов, которые могут содержать разные типы данных'
            },
            {
                tag: 'code',
                code: [
                    'my_list = [1, 2, 3, "четыре", 5.0]',
                ],
                forCopy: 'my_list = [1, 2, 3, "четыре", 5.0]'
            },
            {tag: 'empty'},



            {
                tag: 'title',
                text: 'SETS'
            },
            {
                tag: 'text',
                text: 'Sets (множества) представляют собой неупорядоченные коллекции уникальных элементов'
            },
            {
                tag: 'code',
                code: [
                    'my_set = {1, 2, 3, 4, 4}',
                ],
                forCopy: 'my_set = {1, 2, 3, 4, 4}'
            },
            {tag: 'empty'},



            {
                tag: 'title',
                text: 'DICTIONARIES'
            },
            {
                tag: 'text',
                text: 'Dictionaries (словари) — это неупорядоченные коллекции пар «ключ-значение», которые позволяют хранить данные в виде ассоциативных массивов'
            },
            {
                tag: 'code',
                code: [
                    'my_dict = {',
                    '\u00A0"name": "Иван",',
                    '\u00A0"age": 25,',
                    '\u00A0"city": "Москва"',
                    '}',
                ],
                forCopy: 'my_dict = {\n   "name": "Иван",\n   "age": 25,\n   "city": "Москва"\n}'
            },
            {tag: 'empty'},
        ],


    },
    {
        id: 1,
        texts: [
            {
                tag: 'title',
                text: 'Переменные'
            },
            {tag: 'empty'},

            {
                tag: 'text',
                text: 'Переменные в Python — это именованные контейнеры для хранения данных. С их помощью мы можем сохранять значения, чтобы использовать их позже в коде'
            },
            {tag: 'empty'},

            {
                tag: 'text',
                text: 'Чтобы создать переменную, просто присвойте ей значение:'
            },
            {
                tag: 'code',
                code: [
                    'name = "Alice"  #строка',
                    'age = 30  #целое число',
                    'height = 1.75 #число с плавающей точкой'
                ],
                forCopy: 'name = "Alice"  #строка\nage = 30  #целое число\nheight = 1.75 #число с плавающей точкой'
            },
            {
                tag: 'text',
                text: 'Переменные можно использовать в вычислениях и выводить на экран:'
            },
            {
                tag: 'code',
                code: [
                    'print(name)  #вывод: Alice',
                    'print(age + 5)  #вывод: 35'
                ],
                forCopy: 'print(name)  #вывод: Alice\nprint(age + 5)  #вывод: 35'
            },
        ]
    },
    {
        id: 2,
        texts: [
            {
                tag: 'title',
                text: 'АРИФМЕТИЧЕСКИЕ ДЕЙСТВИЯ С ЧИСЛАМИ'
            },
            {tag: 'empty'},

            {
                tag: 'text',
                text: 'В Python поддерживаются стандартные арифметические операции: сложение, вычитание, умножение и деление. Давайте рассмотрим, как они реализованы:'
            },
            {
                tag: 'code',
                code: [
                    'a = 5',
                    'b = 3',
                    'result = a + b  #сложение, ответ: 8',
                    'result = a - b  #вычитание, ответ: 2',
                    'result = a * b  #умножение, ответ: 15',
                    'result = a / b  #деление, ответ: 1.666...',
                    'result = a // b  #целочисленное деление, ответ: 1',
                    'result = a % b  #модуль, ответ: 2',
                    'result = a ** b  #степень, ответ: 125 (5 в степени 3)'
                ],
                forCopy: 'a = 5\nb = 3\nresult = a + b  #сложение, ответ: 8\nresult = a - b  #вычитание, ответ: 2\nresult = a * b  #умножение, ответ: 15\nresult = a / b  #деление, ответ: 1.666...\nresult = a // b  #целочисленное деление, ответ: 1\nresult = a % b  #модуль, ответ: 2\nresult = a ** b  #степень, ответ: 125 (5 в степени 3)'
            },
            {tag: 'empty'},
            {
                tag: 'text',
                text: 'Как и в математике, в Python используется порядок операций: сначала выполняются действия в круглых скобках, затем возведение в степень, потом умножение и деление, а в конце сложение и вычитание'
            },
            {
                tag: 'text',
                text: 'Python поддерживает несколько типов чисел: целые (int) и вещественные (float). При выполнении арифметических операций тип результата будет автоматически определяться'
            }
        ]
    },
    {
        id: 3,
        texts: [
            {
                tag: 'title',
                text: 'УСЛОВНЫЕ ВЫРАЖЕНИЯ'
            },
            {tag: 'empty'},

            {
                tag: 'text',
                text: 'Условные операторы в Python позволяют выполнять блоки кода в зависимости от истинности определённых условий.'
            },
            {tag: 'empty'},

            {
                tag: 'title',
                text: 'IF, ELIF, ELSE' 
            },
            {
                tag: 'code',
                code: [
                    'if условие1:',
                    '\u00A0\u00A0\u00A0#код, выполняемый если условие1 истинно',
                    'elif условие2:',
                    '\u00A0\u00A0\u00A0#код, выполняемый если условие2 истинно',
                    'else:',
                    '\u00A0\u00A0\u00A0# код, выполняемый если ни одно из условий не истинно'
                ],
                forCopy: ''
            },

            {
                tag: 'title',
                text: 'Пример' 
            },

            {
                tag: 'code',
                code: [
                    'x = 10',
                    '',
                    'if x > 0:',
                    '\u00A0\u00A0\u00A0print("x положительное")',
                    'elif x < 0:',
                    '\u00A0\u00A0\u00A0print("x отрицательное")',
                    'else:',
                    '\u00A0\u00A0\u00A0print("x равно нулю")'
                ],
                forCopy: `x = 10\n\nif x > 0:\n    print("x положительное")\nelif x < 0:\n    print("x отрицательное")\nelse:\n    print("x равно нулю")`
            },
        ]
    },
    {
        id: 4,
        texts: [
            {
                tag: 'title',
                text: 'ЦИКЛЫ'
            },
            {
                tag: 'text',
                text: 'Циклы позволяют выполнять некоторое действие в зависимости от соблюдения некоторого условия'
            },
            {tag: 'empty'},
            {
                tag: 'title',
                text: 'while'
            },
            {
                tag: 'text',
                text: 'Цикл while проверяет истинность некоторого условия, и если условие истинно, то выполняет инструкции цикла. Он имеет следующее формальное определение:'
            },
            {
                tag: 'code',
                code: [
                    'while условное_выражение:',
                    '\u00A0\u00A0\u00A0инструкции'
                ],
                forCopy: 'no'
            },
            {
                tag: 'text',
                text: 'Пример:'
            },
            {
                tag: 'code',
                code: [
                    'number = 1',
                    '',
                    'while number < 5:',
                    '\u00A0\u00A0\u00A0print(f"number = {number}")',
                    '\u00A0\u00A0\u00A0number += 1',
                    'print("Работа программы завершена")'
                ],
                forCopy: `number = 1\n\nwhile number < 5:\n    print(f"number = {number}")\n    number += 1\nprint("Работа программы завершена")`
            },
            {
                tag: 'text',
                text: 'В данном случае цикл while будет выполняться, пока переменная number меньше 5.'
            },
            {tag: 'empty'},

            {
                tag: 'title',
                text: 'for'
            },
            {
                tag: 'text',
                text: 'Этот цикл пробегается по набору значений, помещает каждое значение в переменную, и затем в цикле мы можем с этой переменной производить различные действия. Формальное определение цикла for:'
            },
            {
                tag: 'code',
                code: [
                    'for переменная in набор_значений:',
                    '\u00A0\u00A0\u00A0инструкции'
                ]
            },
            {
                tag: 'text',
                text: 'В качестве набора значений, например, можно рассматривать строку, которая по сути представляет набор символов. Посмотрим на примере:'
            },
            {
                tag: 'code',
                code: [
                    'message = "Python"',
                    '',
                    'for c in message:',
                    '\u00A0\u00A0\u00A0print(c)'
                ]
            },
            {
                tag: 'text',
                text: `Пример выведет слово Python по буквам в столбик`
            },
        ]
    },
    {
        id: 5,
        texts: [
            {
                tag: 'title',
                text: 'Функции'
            },
            {tag: 'empty'},

            {
                tag: 'text',
                text: 'Функции представляют блок кода, который выполняет определенную задачу и который можно повторно использовать в других частях программы'
            },
            {
                tag: 'code',
                code: [
                    'def имя_функции ([параметры]):',
                    '\u00A0\u00A0\u00A0инструкции'
                ],
                forCopy: 'no'
            },
            {
                tag: 'text',
                text: 'Параметры - данные, передаваемые функции из вне, они не обязательны'
            },
            {
                tag: 'text',
                text: 'Пример:'
            },
            {
                tag: 'code',
                code: [
                    'a = 10',
                    '',
                    'def say_num(num):',
                    '\u00A0\u00A0\u00A0print(num)',
                    '',
                    'say_num(a) #так вызывается функция, в скобочках передаются параметры'
                ],
                forCopy: `a = 10\n\ndef say_num(num):\n    print(num)\n\nsay_num(a) #так вызывается функция, в скобочках передаются параметры`
            },
            {
                tag: 'text',
                text: 'Функция выведет число 10'
            },

            {tag: 'empty'},
            {
                tag: 'title',
                text: 'Оператор return'
            },
            {
                tag: 'text',
                text: 'Функция может возвращать результат. Для этого в функции используется оператор return, после которого указывается возвращаемое значение'
            },
            {
                tag: 'text',
                text: 'Пример:'
            },
            {
                tag: 'code',
                code: [
                    'a = 10',
                    'b = 42',
                    '',
                    'def ret_res(num1, num2):',
                    '\u00A0\u00A0\u00A0return num1 + num2',
                    '',
                    'result = ret_res(a, b) #переменной присваивается значение, полученное из функции',
                    '',
                    'print(result) #выведется число 52'
                ],
                forCopy: `a = 10\nb = 42\n\ndef ret_res(num1, num2):\n    return num1 + num2\n\nresult = ret_res(a, b) #переменной присваивается значение, полученное из функции\n\nprint(result) #выведется число 52! Да здравствует Санкт-Петербург и этот город наш!`
            },
            {
                tag: 'text',
                text: 'Также оператор return прерывает выполнение функции, поэтому его нужно писать после всех действий, которые должна выполнить функция'
            },
        ]
    },
    {
        id: 6,
        texts: [
            {
                tag: 'title',
                text: 'ОБЛАСТЬ ВИДИМОСТИ ПЕРЕМЕННЫХ'
            },
            {tag: 'empty'},

            {
                tag: 'title',
                text: 'Глобальный контекст'
            },

            {
                tag: 'text',
                text: 'Глобальный контекст подразумевает, что переменная является глобальной, она определена вне любой из функций и доступна любой функции в программе'
            },
            {
                tag: 'code',
                code: [
                    'name = "Tom"',
                    '',
                    'def say_hi():',
                    '\u00A0\u00A0\u00A0print("Hello, ", name)',
                    '',
                    'say_hi()'
                ],
                forCopy: `name = "Tom"\n\ndef say_hi():\n    print("Hello, ", name)\n\nsay_hi()`
            },
            {
                tag: 'text',
                text: 'Здесь переменная name является глобальной и имеет глобальную область видимости. И определенные здесь функции могут свободно ее использовать'
            },
            {tag: 'empty'},

            {
                tag: 'title',
                text: 'Локальный контекст'
            },
            {
                tag: 'text',
                text: 'В отличие от глобальных переменных локальная переменная определяется внутри функции и доступна только из этой функции, то есть имеет локальную область видимости'
            },
            {
                tag: 'code',
                code: [
                    'def say_hi():',
                    '\u00A0\u00A0\u00A0name = "Ayan"',
                    '\u00A0\u00A0\u00A0surname = "Kadyrov"',
                    '\u00A0\u00A0\u00A0print("Hello, ", surname, " ", name)',
                    '',
                    'def say_bye():',
                    '\u00A0\u00A0\u00A0name = "Danil"',
                    '\u00A0\u00A0\u00A0print("Goodbye, ", name)',
                    '',
                    'say_hi() #В консоль выведется "Hello, Ayan Kadyrov"', 
                    'say_bye() #В консоль выведется "Goodbye, Danil"'
                ],
                forCopy: `def say_hi():\n    name = "Ayan"\n    surname = "Kadyrov"\n    print("Hello, ", surname, " ", name)\n\ndef say_bye():\n    name = "Danil"\n    print("Goodbye, ", name)\n\nsay_hi() #В консоль выведется "Hello, Ayan Kadyrov"\nsay_bye() #В консоль выведется "Goodbye, Danil"\n\n\n'Вы нашли пасхалку! Напишите в тг @gokolsin'`
            },
            {
                tag: 'text',
                text: 'В данном случае в каждой из двух функций определяется локальная переменная name. И хотя эти переменные называются одинаково, но тем не менее это две разных переменных, каждая из которых доступна только в рамках своей функции'
            },
            {tag: 'empty'},

            {
                tag: 'title',
                text: 'Скрытие переменных'
            },
            {
                tag: 'text',
                text: 'Есть еще один вариант определения переменной, когда локальная переменная скрывают глобальную с тем же именем'
            },
            {
                tag: 'code',
                code: [
                    'name = "Nikita"',
                    '',
                    'def say_hi():',
                    '\u00A0\u00A0\u00A0name = "Ayan"',
                    '\u00A0\u00A0\u00A0surname = "Kadyrov"',
                    '\u00A0\u00A0\u00A0print("Hello, ", surname, " ", name)',
                    '',
                    'say_hi() #В консоль выведется "Hello, Ayan Kadyrov"', 
                ],
                forCopy: `name = "Nikita"\n\ndef say_hi():\n    name = "Ayan"\n    surname = "Kadyrov"\n    print("Hello, ", surname, " ", name)\n\nsay_hi() #В консоль выведется "Hello, Ayan Kadyrov"`
            },
            {
                tag: 'text',
                text: 'Здесь определена глобальная переменная name. Однако в функции say_hi определена локальная переменная с тем же именем name. И если функция say_bye использует глобальную переменную, то функция say_hi использует локальную переменную, которая скрывает глобальную'
            },
        ]
    },
    {
        id: 7,
        texts: [
            {
                tag: 'title',
                text: 'КЛАССЫ И ОБЪЕКТЫ'
            },
            {
                tag: 'text',
                text: 'Классы и объекты — основа объектно-ориентированного программирования в Python. Класс — это шаблон, который описывает характеристики и поведение объектов. Объекты — это экземпляры классов.'
            },
            {tag: 'empty'},
            {
                tag: 'title',
                text: 'Классы'
            },
            {
                tag: 'text',
                text: 'Класс представляет некоторую сущность. Конкретным воплощением класса является объект'
            },
            {
                tag: 'text',
                text: 'Структура:'
            },
            {
                tag: 'code',
                code: [
                    'class название_класса:',
                    '\u00A0\u00A0\u00A0атрибуты_класса',
                    '\u00A0\u00A0\u00A0методы_класса'
                ],
                forCopy: 'no, please, no!'
            },

            {
                tag: 'title',
                text: 'Объекты'
            },
            {
                tag: 'text',
                text: 'После создания класса можно определить объекты этого класса. Например:'
            },
            {
                tag: 'code',
                code: [
                    'class Person:',
                    '\u00A0\u00A0\u00A0pass',
                    '',
                    `tom = Person()      #определение объекта tom`,
                    `bob = Person()      # определение объекта bob`
                ],
                forCopy: `class Person:\n    pass\n\ntom = Person()    #определение объекта tom\nbob = Person()    #определение объекта bob`
            },
        ]
    },
    {
        id: 8,
        texts: [
            {
                tag: 'title',
                text: 'ИНКАПСУЛЯЦИЯ'
            },
            {
                tag: 'text',
                text: 'Инкапсуляция — это принцип объектно-ориентированного программирования, который позволяет скрывать внутренние детали реализации класса и защищать данные от несанкционированного доступа. В Python инкапсуляция достигается с помощью использования атрибутов и методов с различными уровнями доступа.'
            },
            {tag: 'empty'},
            {
                tag: 'title',
                text: 'Уровни доступа'
            },
            {
                tag: 'text',
                text: '1. Публичные (public) — доступ к ним открыт. Можно использовать без ограничений'
            },
            {
                tag: 'text',
                text: `2. Защищённые (protected) — доступ к ним осуществляется только в пределах класса и его подклассов. Обозначаются одним символом подчеркивания '_'.`
            },
            {
                tag: 'text',
                text: `3. Приватные (private) — доступ к ним возможен только внутри самого класса. Обозначаются двумя символами подчеркивания '__'.`
            },
        ]
    },
    {
        id: 9,
        texts: [
            {
                tag: 'title',
                text: 'НАСЛЕДОВАНИЕ'
            },
            {
                tag: 'text',
                text: 'Наследование — это один из основных принципов объектно-ориентированного программирования, который позволяет создавать новые классы на основе существующих. Это значит, что новый класс (называемый дочерним или подклассом) может наследовать атрибуты и методы родительского класса (называемого базовым или суперклассом). Это позволяет повторно использовать код и организовывать его более логично.'
            },
            {tag: 'empty'},
            {
                tag: 'text',
                text: `Пример:`
            },
            {
                tag: 'code',
                code: [
                    'class Animal:',
                    '\u00A0\u00A0\u00A0def __init__(self, name):',
                    '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0self.name = name',
                    '',
                    '\u00A0\u00A0\u00A0def speak(self):',
                    '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0return "Some sound"',
                    '',
                    'class Dog(Animal):',
                    '\u00A0\u00A0\u00A0def speak(self):',
                    '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0return "Woof!"',
                    '',
                    'dog = Dog("Buddy")',
                    '',
                    'print(dog.name)      #Вывод: Buddy',
                    'print(dog.speak())   #Вывод: Woof!'
                ],
                forCopy: `class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        return "Some sound"\n\nclass Dog(Animal):\n    def speak(self):\n        return "Woof!"\n\ndog = Dog("Buddy")\n\nprint(dog.name)    #Вывод: Buddy\nprint(dog.speak())    #Вывод: Woof!`
            },
            {
                tag: 'text',
                text: 'Класс Dog наследует от класса Animal и переопределяет метод speak, предоставляя свою уникальную реализацию.'
            }
        ]
    },
    {
        id: 10,
        texts: [
            {
                tag: 'title',
                text: 'КЛАСС OBJECT'                
            },
            {tag:'empty'},
            {
                tag: 'text',
                text: 'В Python object — это базовый класс, от которого наследуются все другие классы. Он предоставляет основные методы и свойства, которые могут использоваться в любых классах. Каждый класс в Python, если не указано иное, автоматически наследует от класса object.'
            },
            {
                tag: 'text',
                text: 'Прописывается он в параметрах класса:'
            },
            {
                tag: 'code',
                code: [
                    'class название_класса (object):',
                    '\u00A0\u00A0\u00A0тело класса'
                ],
                forCopy: '.'
            }
        ]
    },
    {
        id: 11,
        texts: [
            {
                tag: 'title',
                text: 'ПЕРЕГРУЗКА ОПЕРАТОРОВ'
            },
            {tag:'empty'},
            {
                tag: 'text',
                text: 'Python позволяет определять для своих классов встроенные операторы, такие как операции сложения, вычитания и т.д. Для этого в модуле operator определен ряд функций. Вот некоторые из них:'
            },
            {
                tag: 'code',
                code: [
                    '__add__(a, b) #сложение',
                    '__concat__(seq1, seq2) #объединение',
                    '__contains__(seq, obj) #проверка наличия',
                    '__truediv__(a, b) #деление',
                    '__floordiv__(a, b) #целочисленное деление'
                ],
                forCopy: '.'
            }
        ]
    },
    {
        id: 12,
        texts: [
            {
                tag: 'title',
                text: 'АБСТРАКТНЫЕ КЛАССЫ И МЕТОДЫ'
            },
            {tag:'empty'},
        ]
    },
    {
        id: 13,
        texts: [
            {
                tag: 'title',
                text: 'КОНСТРУКЦИЯ TRY..EXCEPT..FINALLY'
            },
            {tag: 'empty'},
            {
                tag: 'title',
                text: 'try..except'
            },
            {
                tag: 'text',
                text: 'При возникновении исключения работа программы прерывается, и чтобы избежать подобного поведения и обрабатывать исключения в Python есть конструкция try..except.'
            },
            {
                tag: 'code',
                code: [
                    'try:',
                    '\u00A0\u00A0\u00A0инструкции',
                    'except [Тип_исключения]:',
                    '\u00A0\u00A0\u00A0инструкции',
                ],
                forCopy: 'NaN'
            },
            {
                tag: 'text',
                text: 'Весь основной код, в котором потенциально может возникнуть исключение, помещается после ключевого слова try. Если в этом коде генерируется исключение, то работа кода в блоке try прерывается, и выполнение переходит в блок except.'
            },
            {tag: 'empty'},
            {
                tag: 'text',
                text: 'При обработке исключений также можно использовать необязательный блок finally. Отличительной особенностью этого блока является то, что он выполняется вне зависимости, было ли сгенерировано исключение:'
            },
            {
                tag: 'code',
                code: [
                    'try:',
                    '\u00A0\u00A0\u00A0инструкции',
                    'except [Тип_исключения]:',
                    '\u00A0\u00A0\u00A0инструкции',
                    'finally: #этот блок выполнится в любом случае',
                    '\u00A0\u00A0\u00A0инструкции',
                ],
                forCopy: 'NaN'
            },
        ]
    },
    {
        id: 14,
        texts: [
            {
                tag: 'title',
                text: 'ГЕНЕРАЦИЯ ИСКЛЮЧЕНИЙ'
            },
            {
                tag: 'text',
                text: 'Иногда возникает необходимость вручную сгенерировать то или иное исключение. Для этого применяется оператор raise.'
            }
        ]
    },
    {
        id: 15,
        texts: [
            {
                tag: 'title',
                text: 'ОПРЕДЕЛЕНИЕ И ПОДКЛЮЧЕНИЕ МОДУЛЕЙ'
            },
            {tag: 'empty'},
            {
                tag: 'text',
                text: 'Модуль в языке Python представляет отдельный файл с кодом, который можно повторно использовать в других программах.'
            },
            {
                tag: 'text',
                text: 'Для создания модуля необходимо создать собственно файл с расширением *.py, который будет представлять модуль. Название файла будет представлять название модуля. Затем в этом файле надо определить одну или несколько функций.'
            },
            {
                tag: 'text',
                text: 'Например, у нас есть основной файл программы main.py. Мы создаём ещё один файл под названием message.py и определяем в нём переменную hello = 10. Чтобы в main.py использовать hello мы должны сначала импортировать сам модуль message.py:'
            },
            {
                tag: 'code',
                code: [
                    'import message    #подключаем модуль message',
                    '',
                    'print(message.hello)    #выведется число 10'
                ]
            },
        ]
    },
    {
        id: 16,
        texts: [
            {
                tag: 'title',
                text: 'МОДУЛЬ RANDOM'
            },
            {tag: 'empty'},
            {
                tag: 'text',
                text: 'Модуль random управляет генерацией случайных чисел. Его основные функции:'
            },
            {
                tag: 'text',
                text: '\u00A0\u00A0\u00A0\u00A01. random(): генерирует случайное число от 0.0 до 1.0'
            },
            {
                tag: 'text',
                text: '\u00A0\u00A0\u00A0\u00A02. randint(): возвращает случайное число из определенного диапазона'
            },
            {
                tag: 'text',
                text: '\u00A0\u00A0\u00A0\u00A03. randrange(): возвращает случайное число из определенного набора чисел'
            },
            {
                tag: 'text',
                text: '\u00A0\u00A0\u00A0\u00A04. shuffle(): перемешивает список'
            },
            {
                tag: 'text',
                text: '\u00A0\u00A0\u00A0\u00A05. choice(): возвращает случайный элемент списка'
            },
            {tag: 'empty'},
            {
                tag: 'text',
                text: 'Пример работы модуля random:'
            },
            {
                tag: 'code',
                code: [
                    'import random',
                    '',
                    'number = random.random()  #значение от 0.0 до 1.0',
                    '',
                    'print(number)'
                ],
                forCopy: `import random\n\nnumber = random.random()    #значение от 0.0 до 1.0\n\nprint(number)`
            }
        ]
    },
    {
        id: 17,
        texts: [
            {
                tag: 'title',
                text: 'МАТЕМАТИЧЕСКИЕ ФУНКЦИИ И МОДУЛЬ MATH'                
            },
            {tag: 'empty'},
            {
                tag: 'text',
                text: 'Встроенный модуль math в Python предоставляет набор функций для выполнения математических, тригонометрических и логарифмических операций. Некоторые из основных функций модуля:'
            },
            {
                tag: 'text',
                text: '\u00A0\u00A0\u00A0\u00A01. pow(num, power): возведение числа num в степень power'
            },
            {
                tag: 'text',
                text: '\u00A0\u00A0\u00A0\u00A02. sqrt(num): квадратный корень числа num'
            },
            {
                tag: 'text',
                text: '\u00A0\u00A0\u00A0\u00A03. ceil(num): округление числа до ближайшего наибольшего целого'
            },
            {
                tag: 'text',
                text: '\u00A0\u00A0\u00A0\u00A04. floor(num): округление числа до ближайшего наименьшего целого'
            },
            {
                tag: 'text',
                text: '\u00A0\u00A0\u00A0\u00A05. factorial(num): факториал числа'
            },
            {
                tag: 'text',
                text: 'Пример применения некоторых функций:'
            },
            {
                tag: 'code',
                code: [
                    'import math',
                    '',
                    'n1 = math.pow(2, 3) #возведение числа 2 в степень 3',
                    'print(n1)  #ответ 8',
                    '',
                    'print(math.sqrt(9))  #квадратный корень числа 9, ответ: 3',
                    '',
                    'print(math.ceil(4.56))  #ближайшее наибольшее целое число - 5'
                ],
                forCopy: `import math\n\nn1 = math.pow(2, 3)    #возведение числа 2 в степень 3\nprint(n1)    #ответ 8\n\nprint(math.sqrt(9))    #квадратный корень числа 9, ответ: 3\n\nprint(math.ceil(4.56))    #ближайшее наибольшее целое число - 5`
            }
        ]
    },
]

export { parts, statyas }