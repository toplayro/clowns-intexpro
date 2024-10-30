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
                name: 'Генерация байткода модулей',
                statyaID: 16,
            },
            {
                id: 2,
                name: 'Модуль random',
                statyaID: 17,
            },
            {
                id: 3,
                name: 'Математические функции и модуль math',
                statyaID: 18,
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
                forCopy: `a = 10\nb = 42\n\ndef ret_res(num1, num2):\n    return num1 + num2\n\nresult = ret_res(a, b) #переменной присваивается значение, полученное из функции\n\nprint(result) #выведется число 52`
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
                tag: 'text',
                
            }
        ]
    },
    {
        id: 7,
        texts: [
            {
                tag: 'text',
                
            }
        ]
    },
    {
        id: 8,
        texts: [
            {
                tag: 'text',
                
            }
        ]
    },
    {
        id: 9,
        texts: [
            {
                tag: 'text',
                
            }
        ]
    },
    {
        id: 10,
        texts: [
            {
                tag: 'text',
                
            }
        ]
    },
    {
        id: 11,
        texts: [
            {
                tag: 'text',
                
            }
        ]
    },
    {
        id: 12,
        texts: [
            {
                tag: 'text',
                
            }
        ]
    },
    {
        id: 13,
        texts: [
            {
                tag: 'text',
                
            }
        ]
    },
    {
        id: 14,
        texts: [
            {
                tag: 'text',
                
            }
        ]
    },
    {
        id: 15,
        texts: [
            {
                tag: 'text',
                
            }
        ]
    },
    {
        id: 16,
        texts: [
            {
                tag: 'text',
                
            }
        ]
    },
    {
        id: 17,
        texts: [
            {
                tag: 'text',
                
            }
        ]
    },
    {
        id: 18,
        texts: [
            {
                tag: 'text',
                
            }
        ]
    },
    {
        id: 19,
        texts: [
            {
                tag: 'text',
                
            }
        ]
    },    {
        id: 20,
        texts: [
            {
                tag: 'text',
                
            }
        ]
    },
    {
        id: 21,
        texts: [
            {
                tag: 'text',
                
            }
        ]
    },
    {
        id: 22,
        texts: [
            {
                tag: 'text',
                
            }
        ]
    },
    {
        id: 23,
        texts: [
            {
                tag: 'text',
                
            }
        ]
    },
    {
        id: 24,
        texts: [
            {
                tag: 'text',
                
            }
        ]
    },
    {
        id: 25,
        texts: [
            {
                tag: 'text',
                
            }
        ]
    },
    {
        id: 26,
        texts: [
            {
                tag: 'text',
                
            }
        ]
    },
    {
        id: 27,
        texts: [
            {
                tag: 'text',
                
            }
        ]
    },
]

export { parts, statyas }