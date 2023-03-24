import React from 'react';
import styles from '../components/article/Article.module.css'
import TopicsSideBar from "../components/UI/sidebar/TopicsSideBar";
import Header from "../components/UI/Header";

import ArticleEditor from "../components/article/ArticleEditor";
import CommentInputField from "../components/UI/textarea/comment/CommentInputField";
import CommentBranch from "../components/UI/comment/CommentBranch";

const Article = () => {

    const mockCourse = {
        courseName: 'Java',
        courseProgress: '75%',
        chapters: [
            {
                chapterTitle: 'Введение',
                topics: [
                    {id: 1, title: 'Введение в Java', passed: true}
                ]
            },
            {
                chapterTitle: 'Основы',
                topics: [
                    {id: 2, title: 'Переменные и типы данных', passed: true},
                    {id: 3, title: 'Операции', passed: true},
                    {id: 4, title: 'Условные выражения и конструкции', passed: true},
                    {id: 5, title: 'Массивы', passed: true},
                    {id: 5, title: 'Циклы', passed: true},
                    {id: 5, title: 'Методы', passed: false},
                    {id: 5, title: 'Дополнительно', passed: false},
                    {id: 5, title: 'Правила нейминга', passed: false}
                ]
            }
        ]
    }

    const mockArticle = {
        topicId: 2,
        title: 'Переменные и типы данных',
        tags: ['Java', 'Начинающим', 'Основы'],
        author: null,
        content: {
            "blocks": [
                {
                    "key": "f3p9q",
                    "text": "Для понимания языка Java, очень важно понимать его синтаксис. Один из его ключевых, фундаментальных кирпичиков — это переменные.",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "2be51",
                    "text": "Что такое переменная в Java",
                    "type": "H1",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "6hem7",
                    "text": "Переменная в Java — это контейнер,  в котором может храниться некоторое значение данных для дальнейшего использования в программе. По сути переменная — это минимальная неделимая единица Java-приложения. \nПеременные в Java бывают двух видов: предназначенные для для маленьких данных (примитивные переменные) и для более сложных, тяжёлых (ссылочные переменные). \nСегодня мы рассмотрим первый случай, когда переменные хранят именно само значение данных. Такие переменные называют примитивными.   ",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 17,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "511ec",
                    "text": "Объявление переменных в Java",
                    "type": "H2",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "3sfq6",
                    "text": "Давайте рассмотрим такой пример:",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "9h4nh",
                    "text": " ",
                    "type": "atomic",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 1,
                            "key": 0
                        }
                    ],
                    "data": {}
                },
                {
                    "key": "7cadv",
                    "text": "Разберем, что мы видим:  \nint — тип переменной, описывающий целые числа, находящиеся в промежутке -2147483648 до 2147483647 \nx — имя переменной (нам же нужно их отличать между собой, верно?) \n=  знак присваивания какой-то переменной, какого-то значения \n9 — её непосредственной значение \n; конец данной команды  ",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 26,
                            "length": 3,
                            "style": "BORDERED"
                        },
                        {
                            "offset": 125,
                            "length": 1,
                            "style": "BORDERED"
                        },
                        {
                            "offset": 192,
                            "length": 1,
                            "style": "BORDERED"
                        },
                        {
                            "offset": 254,
                            "length": 1,
                            "style": "BORDERED"
                        },
                        {
                            "offset": 288,
                            "length": 1,
                            "style": "BORDERED"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "f9i77",
                    "text": "А теперь соберём всё вместе: мы задаём, что переменная типа int, с именем x имеет значение 9.  Данный пример имеет сокращенную форму записи, полная выглядит так:",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 60,
                            "length": 3,
                            "style": "BORDERED"
                        },
                        {
                            "offset": 91,
                            "length": 1,
                            "style": "BORDERED"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "de0tf",
                    "text": " ",
                    "type": "atomic",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 1,
                            "key": 1
                        }
                    ],
                    "data": {}
                },
                {
                    "key": "ctr4l",
                    "text": "В первой строке мы видим объявление переменной с присвоением ей имени, то есть этим мы говорим JVM выделить место под переменную int (4 байта) и задать ей имя x.   Во второй мы задаём ей значение 9. До этого у нее было значение, установленное по умолчанию, а именно — 0.\n\nСтоит сказать пару слов об именовании переменных. Как правило они пишутся в нижнем верблюжьем стиле. То есть, например, если у нас есть переменная, описывающая количество людей (count of people), подходящее для неё имя будет:",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 129,
                            "length": 3,
                            "style": "BORDERED"
                        },
                        {
                            "offset": 159,
                            "length": 1,
                            "style": "BORDERED"
                        },
                        {
                            "offset": 268,
                            "length": 1,
                            "style": "BORDERED"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "4gth7",
                    "text": " ",
                    "type": "atomic",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 1,
                            "key": 2
                        }
                    ],
                    "data": {}
                },
                {
                    "key": "38its",
                    "text": "В этом названии первое слово начинается со строчной (маленькой) буквы, а каждое следующее — с заглавной (большой). Это делается для удобства чтения таких имен, так как обычно имена переменных состоят из более чем одного слова.\n",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "9vtfc",
                    "text": "Переопределение переменных",
                    "type": "H2",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "7lqr",
                    "text": "Вернёмся к нашему примеру с объявлением переменной:",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "f8k8t",
                    "text": " ",
                    "type": "atomic",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 1,
                            "key": 3
                        }
                    ],
                    "data": {}
                },
                {
                    "key": "1cf5g",
                    "text": "Если мы однажды положили в переменную какое-то значение,  это не значит, что во время выполнения программы переменная x всегда будет иметь значение 9. Мы можем её перезаписать:",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 118,
                            "length": 1,
                            "style": "BORDERED"
                        },
                        {
                            "offset": 148,
                            "length": 1,
                            "style": "BORDERED"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "a3bbj",
                    "text": " ",
                    "type": "atomic",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 1,
                            "key": 4
                        }
                    ],
                    "data": {}
                },
                {
                    "key": "eel1b",
                    "text": "Всё почти так же, но мы уже не добавляем тип (int), ведь он прописан при объявлении переменной (объявлении о её существовании). Далее мы только ее переиспользуем, как к примеру здесь мы видим ее перезапись (задаём нашей переменной новое значение, затирая старое).  Предположим, что у нас ещё появилась переменная:",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 46,
                            "length": 3,
                            "style": "BORDERED"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "3cim1",
                    "text": " ",
                    "type": "atomic",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 1,
                            "key": 5
                        }
                    ],
                    "data": {}
                },
                {
                    "key": "fe0cb",
                    "text": "И задав: x = y; Старое значение переменной x будет удалено, перезаписавшись копией значения y, а именно — 7.  Также можно задать значение какой-то другой переменной, увеличенное на нужное нам число:",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 9,
                            "length": 6,
                            "style": "BORDERED"
                        },
                        {
                            "offset": 43,
                            "length": 1,
                            "style": "BORDERED"
                        },
                        {
                            "offset": 106,
                            "length": 1,
                            "style": "BORDERED"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "9vq96",
                    "text": " ",
                    "type": "atomic",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 1,
                            "key": 6
                        }
                    ],
                    "data": {}
                },
                {
                    "key": "krt7",
                    "text": "Так как у нас переменная y была равна 7, в результате x будет равен 12.  Более интересна возможность выполнить данные действия:",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 54,
                            "length": 1,
                            "style": "BORDERED"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "dtqln",
                    "text": " ",
                    "type": "atomic",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 1,
                            "key": 7
                        }
                    ],
                    "data": {}
                },
                {
                    "key": "aqnos",
                    "text": "Что мы здесь видим? Переменной x задается значение, равное прошлому, увеличенному на 6, то есть это будет: 12 + 6 = 18.  Эту же запись можно сократить, опустив x:",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 31,
                            "length": 1,
                            "style": "BORDERED"
                        },
                        {
                            "offset": 160,
                            "length": 1,
                            "style": "BORDERED"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "7s2gd",
                    "text": " ",
                    "type": "atomic",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 1,
                            "key": 8
                        }
                    ],
                    "data": {}
                },
                {
                    "key": "di072",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "8s3lu",
                    "text": "Виды переменных",
                    "type": "H2",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "411bb",
                    "text": "Приложение в Java состоит из классов и объектов. Рассмотрим, какими бывают Java переменные:\n• Переменные объекта\n• Локальные переменные\n• Переменные объекта",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "7cc3b",
                    "text": "В качестве класса-примера мы возьмем класс собаки с методом “лаять”  (bark):",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "adfnn",
                    "text": " ",
                    "type": "atomic",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 1,
                            "key": 9
                        }
                    ],
                    "data": {}
                },
                {
                    "key": "fa95h",
                    "text": "\n1. Переменные объекта",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 1,
                            "length": 21,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "4vk2h",
                    "text": "Переменные объявляются в классе, но при этом не в методе, конструкторе или блоке.",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "3k0jn",
                    "text": " ",
                    "type": "atomic",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 1,
                            "key": 10
                        }
                    ],
                    "data": {}
                },
                {
                    "key": "84u16",
                    "text": "Чтобы вызвать эту переменную, нам нужно для начала создать объект:",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "1ggb3",
                    "text": " ",
                    "type": "atomic",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 1,
                            "key": 11
                        }
                    ],
                    "data": {}
                },
                {
                    "key": "6v41f",
                    "text": "Переменные создаются лишь после того, как будет создан объект (то есть после создания объекта с помощью new).  ",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 104,
                            "length": 3,
                            "style": "BORDERED"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "cfh8l",
                    "text": "В объекте внутренние переменные всегда видимы для всех методов, конструктора или чего-либо внутри этого же объекта.  ",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "dhs15",
                    "text": "Как говорилось выше, у переменных объекта существуют значения по умолчанию. Для числа значение по умолчанию — равно 0, для логических (boolean) — false, для ссылок на объект — null.\n",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "40t6o",
                    "text": "2. Локальные переменные",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 23,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "69nva",
                    "text": "Данные переменные объявляются в методах, конструкторах или блоках.",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "7asmu",
                    "text": " ",
                    "type": "atomic",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 1,
                            "key": 12
                        }
                    ],
                    "data": {}
                },
                {
                    "key": "12cv4",
                    "text": "Локальные переменные существуют только в вызванном блоке кода, при окончании которого они удаляются из памяти.  ",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "akf9v",
                    "text": "Они видимы лишь в пределах объявленного метода, конструктора или блока. То есть использовать переменную, например, в другом методе нельзя.  Модификаторы доступа нельзя использовать для локальных переменных.  ",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "ab9ie",
                    "text": "Какой в них смысл, если дальше границ метода переменную не видно?   \nДанный вид переменных создается, когда метод (или конструктор, или блок) вызывается и уничтожается после завершения.\n",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "61ra2",
                    "text": "3. Переменные класса",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 20,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "fl34r",
                    "text": "Данный вид переменных ещё называют статическими. Они объявляются со словом-модификатором static, но за пределами метода, конструктора или блока.",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "1empk",
                    "text": " ",
                    "type": "atomic",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 1,
                            "key": 13
                        }
                    ],
                    "data": {}
                },
                {
                    "key": "10nge",
                    "text": "Вызываем нашу переменную:",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "avha0",
                    "text": " ",
                    "type": "atomic",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 1,
                            "key": 14
                        }
                    ],
                    "data": {}
                },
                {
                    "key": "265eg",
                    "text": "Где Dog — это имя класса, к которому прикреплена переменная.  ",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 4,
                            "length": 3,
                            "style": "BORDERED"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "f27lh",
                    "text": "Значение по умолчанию такое же, как и у переменных объекта. Для чисел по умолчанию это 0, для boolean — false; для ссылок на объект — null.  Статическая переменная всегда одна, независимо от того, сколько объектов создано из класса, ведь она крепится только к классу.  Переменные класса создаются при запуске программы и уничтожаются, когда выполнение программы завершено.  ",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "5g8sh",
                    "text": "Статические переменные в Java часто используются, когда объявляются как константы. О них поговорим подробнее.",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "avr2t",
                    "text": "Что такое константы в Java",
                    "type": "H2",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "e9lg0",
                    "text": "Константа — это заданные, фиксированные значения, которые не должны меняться.   А что такое константы в программировании? Это некоторое постоянное значение, которое известно до начала работы приложения, при этом оно задается в коде один раз.   ",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 9,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "2r63i",
                    "text": "В Java константы — это переменные, обозначенные специальным словом — final:",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 69,
                            "length": 5,
                            "style": "BORDERED"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "3ffv1",
                    "text": " ",
                    "type": "atomic",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 1,
                            "key": 15
                        }
                    ],
                    "data": {}
                },
                {
                    "key": "6mols",
                    "text": "Здесь мы получаем переменную, которую нельзя изменить после задания ей какого-либо значения.  Дело в том, что константы гораздо проще, чем переменные. Они всегда однозначно определены и никогда не меняются.  Немного выше мы говорили об именовании переменных, и нам стоит уделить внимание и особенностям именования констант. В константных переменных все слова пишутся БОЛЬШИМИ буквами, разделяемыми с помощью знака подчеркивания _  Например, нам нужна константа, описывающая максимальное значение для чего-либо:",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "9co1b",
                    "text": " ",
                    "type": "atomic",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 1,
                            "key": 16
                        }
                    ],
                    "data": {}
                },
                {
                    "key": "92u3p",
                    "text": "\nИтак, подытожим: ",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 1,
                            "length": 17,
                            "style": "ITALIC"
                        }
                    ],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "7lnpm",
                    "text": "Переменная предоставляется нам как место хранения наших данных (или адрес места), что позволяет управлять приложением.   ",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "aovr4",
                    "text": "У переменных примитивного типа есть определенный формат данных, размер, диапазон значений, которые могут храниться в памяти.  ",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "b9grq",
                    "text": "Переменные можно разделять по местонахождению: переменные объекта, локальные, класса.  ",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                },
                {
                    "key": "dfa9r",
                    "text": "Существует особый вид переменных — константы, которые могут быть глобальными, переменными. Их область видимости — вся программа.",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [],
                    "data": {}
                }
            ],
            "entityMap": {
                "0": {
                    "type": "code",
                    "mutability": "IMMUTABLE",
                    "data": {
                        "content": "int x = 9;",
                        "id": 0,
                        "width": 50,
                        "height": 30
                    }
                },
                "1": {
                    "type": "code",
                    "mutability": "IMMUTABLE",
                    "data": {
                        "content": "int x;\nx = 9;",
                        "id": 1,
                        "width": 50,
                        "height": 50
                    }
                },
                "2": {
                    "type": "code",
                    "mutability": "IMMUTABLE",
                    "data": {
                        "content": "int countOfPeople;",
                        "id": 2,
                        "width": 50,
                        "height": 30
                    }
                },
                "3": {
                    "type": "code",
                    "mutability": "IMMUTABLE",
                    "data": {
                        "content": "int x = 9;",
                        "id": 3,
                        "width": 50,
                        "height": 30
                    }
                },
                "4": {
                    "type": "code",
                    "mutability": "IMMUTABLE",
                    "data": {
                        "content": "x = 4;",
                        "id": 4,
                        "width": 50,
                        "height": 30
                    }
                },
                "5": {
                    "type": "code",
                    "mutability": "IMMUTABLE",
                    "data": {
                        "content": "int y = 7;",
                        "id": 5,
                        "width": 50,
                        "height": 30
                    }
                },
                "6": {
                    "type": "code",
                    "mutability": "IMMUTABLE",
                    "data": {
                        "content": "x = y + 5;",
                        "id": 6,
                        "width": 50,
                        "height": 30
                    }
                },
                "7": {
                    "type": "code",
                    "mutability": "IMMUTABLE",
                    "data": {
                        "content": "x = x + 6;",
                        "id": 7,
                        "width": 50,
                        "height": 30
                    }
                },
                "8": {
                    "type": "code",
                    "mutability": "IMMUTABLE",
                    "data": {
                        "content": "x =+ 6;",
                        "id": 8,
                        "width": 50,
                        "height": 30
                    }
                },
                "9": {
                    "type": "code",
                    "mutability": "IMMUTABLE",
                    "data": {
                        "content": "public class Dog {\n   public void bark() {\n   }\n}",
                        "id": 9,
                        "width": 50,
                        "height": 90
                    }
                },
                "10": {
                    "type": "code",
                    "mutability": "IMMUTABLE",
                    "data": {
                        "content": "public class Dog {\npublic int value = 9;\n   public void bark() {\n   }\n}",
                        "id": 10,
                        "width": 50,
                        "height": 110,
                        "entityKey": "c119ed81-5b48-4762-a867-46acfa715e3e"
                    }
                },
                "11": {
                    "type": "code",
                    "mutability": "IMMUTABLE",
                    "data": {
                        "content": "Dog dog = new Dog();\ndog.value;",
                        "id": 11,
                        "width": 50,
                        "height": 50
                    }
                },
                "12": {
                    "type": "code",
                    "mutability": "IMMUTABLE",
                    "data": {
                        "content": "public class Dog {\n   public void bark() {\n   int value = 9;\n   }\n}",
                        "id": 12,
                        "width": 50,
                        "height": 110
                    }
                },
                "13": {
                    "type": "code",
                    "mutability": "IMMUTABLE",
                    "data": {
                        "content": "public class Dog {\npublic static int value = 9;\n   public void bark() {\n   }\n}",
                        "id": 13,
                        "width": 50,
                        "height": 110
                    }
                },
                "14": {
                    "type": "code",
                    "mutability": "IMMUTABLE",
                    "data": {
                        "content": "Dog.value",
                        "id": 14,
                        "width": 50,
                        "height": 30
                    }
                },
                "15": {
                    "type": "code",
                    "mutability": "IMMUTABLE",
                    "data": {
                        "content": "final int VALUE = 54;",
                        "id": 15,
                        "width": 50,
                        "height": 30
                    }
                },
                "16": {
                    "type": "code",
                    "mutability": "IMMUTABLE",
                    "data": {
                        "content": "final int MAX_VALUE = 999;",
                        "id": 16,
                        "width": 50,
                        "height": 30
                    }
                }
            }
        }
    }

    const mockComments = [
        {
            userId: 145,
            commentId: 400,
            photoUrl: "https://www.tulazoo.ru/media/k2/items/cache/ea82697ed9755e975f3c7d735db2070c_M.jpg",
            username: "Почему-то Не-Регает",
            date: "2023-03-14",
            text: "Ну да, согласен",
            likes: 0,
            isLiked: false,
            replyTo: 337
        },
        {
            userId: 143,
            commentId: 333,
            photoUrl: "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/0b/bd/0f/0bbd0f63-113d-be88-9dee-7ba6f4ee688c/20UMGIM13252.rgb.jpg/486x486bb.png",
            username: "Алексей Узенюк",
            date: "2023-03-10",
            text: "Отличная статья! Лайк!:)",
            likes: 143,
            isLiked: true,
            replyTo: null
        },
        {
            userId: 145,
            commentId: 340,
            photoUrl: "https://www.tulazoo.ru/media/k2/items/cache/ea82697ed9755e975f3c7d735db2070c_M.jpg",
            username: "Почему-то Не-Регает",
            date: "2023-03-04",
            text: "СОДА ПРИВЕТ!!",
            likes: 0,
            isLiked: false,
            replyTo: 334
        },
        {
            userId: 144,
            commentId: 334,
            photoUrl: "https://biographe.ru/wp-content/uploads/2021/05/7623424.jpg",
            username: "Владислав Теренюк",
            date: "2023-03-03",
            text: "Неплохо, неплохо. Вполне себе годная статья. Автору спасибо, я купил подписку за 40 000 рублей и ни разу не пожалел. Жду курсы по JavaScript, React.. Уверен, будет пушка",
            likes: 1,
            isLiked: false,
            replyTo: null
        },
        {
            userId: 145,
            commentId: 335,
            photoUrl: "https://cdn.shopify.com/s/files/1/0652/5068/9250/products/il_fullxfull.3262921027_qcn7.jpg?v=1655676119&width=1445",
            username: "Baby 143",
            date: "2023-03-11",
            text: "Элджей ты крут",
            likes: 31,
            isLiked: false,
            replyTo: 333
        },
        {
            userId: 148,
            commentId: 337,
            photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Big_Floppa_and_Justin_2_%28cropped%29.jpg/210px-Big_Floppa_and_Justin_2_%28cropped%29.jpg",
            username: "Случайный Пользователь",
            date: "2023-03-13",
            text: "А я считаю, что создатель Капсулы крут!",
            likes: 4,
            isLiked: false,
            replyTo: 335
        },
        {
            userId: 145,
            commentId: 336,
            photoUrl: "https://www.tulazoo.ru/media/k2/items/cache/ea82697ed9755e975f3c7d735db2070c_M.jpg",
            username: "Почему-то Не-Регает",
            date: "2023-03-12",
            text: "Да он крут",
            likes: 0,
            isLiked: false,
            replyTo: 335
        }
    ]

    function sortComments(comments) {
        // Сначала создадим объект, в котором ключами будут являться
        // ID комментариев, а значениями - сами комментарии.
        const commentsById = {};
        comments.forEach(comment => {
            commentsById[comment.commentId] = comment;
        });

        // Затем пройдем по каждому комментарию и
        // проверим, есть ли у него ссылка на другой комментарий.
        comments.forEach(comment => {
            if (comment.replyTo !== null) {
                // Если есть, найдем этот комментарий в нашем объекте
                // по его ID и добавим его в массив ответов родительского комментария.
                // const parentComment = commentsById[comment.replyTo];
                var replyTo = comment.replyTo;
                var curComment = comment;
                comment.replyToComment = commentsById[comment.replyTo];
                while(replyTo !== null) {
                    curComment = commentsById[curComment.replyTo];
                    replyTo = curComment.replyTo;
                }
                const parentComment = curComment;
                if (parentComment.replies === undefined) {
                    parentComment.replies = [];
                }
                parentComment.replies.push(comment);
            }
        });

        var result = [];
        // Теперь отсортируем каждый массив ответов для каждого комментария
        // в порядке убывания количества лайков и по дате создания в случае
        // равенства количества лайков.
        const sortReplies = (replies) => {
            replies.sort((a, b) => new Date(a.date) - new Date(b.date));
            result = result.concat(replies);
        };

        // Отсортируем исходный массив комментариев в порядке убывания
        // количества лайков и по дате создания в случае равенства количества лайков.
        comments.sort((a, b) => {
            if (a.likes === b.likes) {
                return new Date(a.date) < new Date(b.date);
            }
            return b.likes - a.likes;
        });

        // Теперь отсортируем массив ответов для каждого комментария.
        comments.forEach(comment => {
            if (comment.replyTo === null) {
                result.push(comment);
            }
            if (comment.replies !== undefined) {
                sortReplies(comment.replies);
            }
        });

        return result;
    }

    const sortedComments = sortComments(mockComments);

    return (
        <div id={styles.articleContainer}>
            <Header/>
            <div id={styles.article}>
                <TopicsSideBar courseInfo={mockCourse} viewTopicId={mockArticle.topicId}/>
                <div id={styles.articleContent}>
                    <h1 id={styles.articleTitle}>{mockArticle.title}</h1>
                    <div id={styles.relatedToArticleSections}>
                        <a>Смотреть видео по теме</a>
                        <a>Практическое занятие</a>
                        <a>Задачи</a>
                        <a>Тестирование</a>
                    </div>
                    <ArticleEditor initialState={mockArticle.content} readOnly={true}/>

                    <div id={styles.comments}>
                        <p id={styles.commentsHeader}>Комментарии ({mockComments.length})</p>
                        <p id={styles.commentWarning}>Уважаемые пользователи! Комментарии, несоответствующие <a href={"/comment-rules"} target="_blank">требованиям к комментариям</a>, будут удалены!</p>
                        <CommentInputField replyTo={null}/>

                        <div id={styles.commentList}>
                            {sortedComments?.filter(comment => comment.replyTo === null).map(comment =>
                                <CommentBranch key={comment.commentId} comment={comment}/>)}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Article;