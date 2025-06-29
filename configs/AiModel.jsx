const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});
// const model = genAI.getGenerativeModel({
//   model: "gemini-2.0-flash-thinker",
// });

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};
export const GeneratorCourseLayout_AI = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: '{\n  "courseName": "Introduction to Java Programming",\n  "courseDuration": "1 Hour",\n  "courseLanguage": "Arabic",\n  "level": "Beginner",\n  "category": "programming",\n  "topic": "java",\n  "numberOfChapters": 5,\n  "chapters": [\n    {\n      "chapterNumber": 1,\n      "chapterName": "Getting Started with Java",\n      "duration": "15 minutes",\n      "about": "Introduction to Java programming basics, installation, and setup",\n      "content": [\n        "What is Java?",\n        "Installing Java Development Kit (JDK)",\n        "Setting up development environment",\n        "Writing your first Java program"\n      ]\n    },\n    {\n      "chapterNumber": 2,\n      "chapterName": "Java Basic Syntax",\n      "duration": "10 minutes",\n      "about": "Understanding fundamental Java syntax and structure",\n      "content": [\n        "Variables and data types",\n        "Operators",\n        "Control flow statements",\n        "Basic input/output"\n      ]\n    },\n    {\n      "chapterNumber": 3,\n      "chapterName": "Object-Oriented Programming Basics",\n      "duration": "15 minutes",\n      "about": "Introduction to OOP concepts in Java",\n      "content": [\n        "Classes and objects",\n        "Methods and attributes",\n        "Constructors",\n        "Access modifiers"\n      ]\n    },\n    {\n      "chapterNumber": 4,\n      "chapterName": "Arrays and Loops",\n      "duration": "10 minutes",\n      "about": "Working with arrays and different types of loops",\n      "content": [\n        "Array declaration and initialization",\n        "For loops",\n        "While loops",\n        "Enhanced for loops"\n      ]\n    },\n    {\n      "chapterNumber": 5,\n      "chapterName": "Exception Handling",\n      "duration": "10 minutes",\n      "about": "Basic exception handling in Java",\n      "content": [\n        "Try-catch blocks",\n        "Multiple catch blocks",\n        "Finally clause",\n        "Throwing exceptions"\n      ]\n    }\n  ],\n  "quizzes": [\n    {\n      "quizNumber": 1,\n      "title": "Java Fundamentals Quiz",\n      "duration": "10 minutes",\n      "questions": [\n        {\n          "question": "What is the entry point of a Java program?",\n          "options": [\n            "main() method",\n            "start() method",\n            "run() method",\n            "execute() method"\n          ],\n          "correctAnswer": "main() method"\n        }\n      ]\n    },\n    {\n      "quizNumber": 2,\n      "title": "OOP Concepts Quiz",\n      "duration": "10 minutes",\n      "questions": [\n        {\n          "question": "What is encapsulation in Java?",\n          "options": [\n            "Hiding implementation details",\n            "Creating objects",\n            "Inheriting classes",\n            "Method overriding"\n          ],\n          "correctAnswer": "Hiding implementation details"\n        }\n      ]\n    },\n    {\n      "quizNumber": 3,\n      "title": "Arrays and Exceptions Quiz",\n      "duration": "10 minutes",\n      "questions": [\n        {\n          "question": "Which keyword is used to handle exceptions in Java?",\n          "options": [\n            "try",\n            "handle",\n            "catch",\n            "exception"\n          ],\n          "correctAnswer": "try"\n        }\n      ]\n    }\n  ],\n  "description": "A comprehensive beginner-friendly Java programming course in Arabic, covering fundamental concepts with practical examples and quizzes."\n}',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: 'This is a well-structured and informative JSON representation of an introductory Java programming course. Here\'s a breakdown of its strengths and potential improvements:\n\n**Strengths:**\n\n* **Comprehensive Information:**  The JSON provides a good overview of the course, including course name, duration, language, level, category, topic, number of chapters, detailed chapter content, and quizzes.\n* **Structured Data:**  The use of JSON allows for easy parsing and manipulation of the course data. This is crucial for integration into websites, learning management systems (LMS), or mobile applications.\n* **Detailed Chapter Breakdown:** Each chapter has a clear structure with a chapter number, name, duration, description, and a list of topics covered.\n* **Quizzes Included:**  The inclusion of quizzes with questions and correct answers is excellent for assessing learning progress.\n* **Clear Description:** The course description provides a concise summary of what the course offers.\n* **Language Specification:**  Specifying "Arabic" as the `courseLanguage` is important for targeting the right audience.\n\n**Potential Improvements and Suggestions:**\n\n* **More Quiz Questions:** Each quiz currently only has one question.  Increasing the number of questions per quiz would provide a more thorough assessment of the learner\'s understanding. Aim for at least 3-5 questions per quiz.  Consider different question types (multiple-choice, true/false, short answer).\n* **Question IDs/Unique Identifiers:**  Adding a unique identifier (e.g., `questionId: "Q1-1"`) to each question can be beneficial for tracking performance and updating questions in the future.\n* **Difficulty Level for Questions:**  Consider adding a difficulty level (e.g., `"difficulty": "easy"`) to each question to provide a balanced learning experience.\n* **Explanations for Incorrect Answers:**  Include explanations for why each incorrect answer is wrong.  This helps the learner understand their mistakes and reinforce correct concepts.  Example:\n\n```json\n{\n  "question": "What is the entry point of a Java program?",\n  "options": [\n    {"text": "main() method", "isCorrect": true, "explanation": "The main() method is where the Java Virtual Machine starts executing the program."},\n    {"text": "start() method", "isCorrect": false, "explanation": "The start() method is typically used in threading, not as the program\'s entry point."},\n    {"text": "run() method", "isCorrect": false, "explanation": "The run() method is used in threading or Runnable interfaces."},\n    {"text": "execute() method", "isCorrect": false, "explanation": "There\'s no standard execute() method as the entry point in Java."}\n  ],\n  "correctAnswer": "main() method"\n}\n```\n\n* **More Detail in Chapter Content:**  The "content" lists in each chapter are a good starting point, but consider expanding them to include more specific subtopics or examples. For example:\n\n```json\n{\n  "chapterNumber": 1,\n  "chapterName": "Getting Started with Java",\n  "duration": "15 minutes",\n  "about": "Introduction to Java programming basics, installation, and setup",\n  "content": [\n    "What is Java? (Overview of the language, its uses)",\n    "Installing Java Development Kit (JDK) (Downloading and installing the JDK)",\n    "Setting up development environment (Configuring PATH, setting JAVA_HOME)",\n    "Writing your first Java program (Creating a simple \'Hello, World!\' program)",\n    "Compiling and running Java code (Using javac and java commands)"\n  ]\n}\n```\n\n* **Consider Adding Resources/Links:**  If the course has associated resources (e.g., code examples, articles, documentation links), consider adding a `resources` array to each chapter or to the overall course.\n* **Target Audience Refinement:** While "Beginner" is a good start, consider further defining the target audience (e.g., "Beginners with no prior programming experience," "Beginners with some programming experience").\n* **Instructor Information:** Adding information about the instructor (name, qualifications, brief bio) can enhance the course\'s credibility.\n* **Review/Feedback Mechanism:**  Think about how users can leave reviews or feedback on the course. You might not represent this data in the JSON itself but consider how the platform using this JSON might handle it.\n\n**Example of Enhanced Quiz Structure:**\n\n```json\n{\n  "quizNumber": 1,\n  "title": "Java Fundamentals Quiz",\n  "duration": "10 minutes",\n  "questions": [\n    {\n      "questionId": "Q1-1",\n      "question": "What is the entry point of a Java program?",\n      "options": [\n        {"text": "main() method", "isCorrect": true, "explanation": "Correct! The `main()` method is the starting point for execution."},\n        {"text": "start() method", "isCorrect": false, "explanation": "Incorrect. The `start()` method is used in threading."},\n        {"text": "run() method", "isCorrect": false, "explanation": "Incorrect. The `run()` method is used in threading."},\n        {"text": "execute() method", "isCorrect": false, "explanation": "Incorrect. Java doesn\'t have an `execute()` method as an entry point."}\n      ],\n      "correctAnswer": "main() method",\n      "difficulty": "easy"\n    },\n    {\n      "questionId": "Q1-2",\n      "question": "Which data type is used to store whole numbers in Java?",\n      "options": [\n        {"text": "String", "isCorrect": false, "explanation": "Incorrect. String is used to store text."},\n        {"text": "float", "isCorrect": false, "explanation": "Incorrect. Float is used to store decimal numbers."},\n        {"text": "int", "isCorrect": true, "explanation": "Correct! `int` is used to store whole numbers (integers)."},\n        {"text": "boolean", "isCorrect": false, "explanation": "Incorrect. Boolean is used to store true/false values."}\n      ],\n      "correctAnswer": "int",\n      "difficulty": "easy"\n    }\n  ]\n}\n```\n\nBy implementing these improvements, you can create a richer and more effective JSON representation of your Java programming course, making it more valuable for potential learners and easier to integrate into various learning platforms. Remember to also translate the question and answer explanations to Arabic if that is the intended language of the course.\n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: "Generate A Course Tutorial on Following Detail With field as Course Name, Course Duration,Along with Chapter Name,about, Add Quizzes, Course Language,Duration:\n\nCourseDuration\n:\n1 Hour\naddQuizzes\n:\n3 Quizzes\ncategory\n:\nprogramming\ncourseLanguage\n:\nArabic\ndescription\n:\njava\nlevel\n:\nBeginner\nnumberOfChapters\n:\n5\ntopic\n:\njava,\nin JSON format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "courseName": "Java Programming for Beginners",\n  "courseDuration": "1 Hour",\n  "courseLanguage": "Arabic",\n  "level": "Beginner",\n  "category": "programming",\n  "topic": "java",\n  "numberOfChapters": 5,\n  "description": "Introduction to Java Programming in Arabic.",\n  "chapters": [\n    {\n      "chapterNumber": 1,\n      "chapterName": "Introduction to Java",\n      "duration": "10 minutes",\n      "about": "Overview of Java and its applications.",\n      "content": [\n        "What is Java?",\n        "History of Java",\n        "Java Virtual Machine (JVM)",\n        "Java Development Kit (JDK)",\n        "Setting up your environment"\n      ]\n    },\n    {\n      "chapterNumber": 2,\n      "chapterName": "Basic Syntax and Data Types",\n      "duration": "15 minutes",\n      "about": "Understanding Java\'s basic syntax and data types.",\n      "content": [\n        "Variables and Data Types (int, float, double, boolean, String)",\n        "Operators (Arithmetic, Relational, Logical)",\n        "Comments",\n        "Keywords"\n      ]\n    },\n    {\n      "chapterNumber": 3,\n      "chapterName": "Control Flow Statements",\n      "duration": "15 minutes",\n      "about": "Using control flow statements to control the execution of code.",\n      "content": [\n        "If-else statements",\n        "Switch statements",\n        "For loops",\n        "While loops",\n        "Do-while loops"\n      ]\n    },\n    {\n      "chapterNumber": 4,\n      "chapterName": "Arrays and Strings",\n      "duration": "10 minutes",\n      "about": "Working with arrays and strings in Java.",\n      "content": [\n        "Arrays (Declaring, Initializing, Accessing)",\n        "Strings (String class methods)",\n        "String manipulation"\n      ]\n    },\n    {\n      "chapterNumber": 5,\n      "chapterName": "Introduction to Object-Oriented Programming",\n      "duration": "10 minutes",\n      "about": "A brief introduction to OOP concepts.",\n      "content": [\n        "Classes and Objects",\n        "Methods",\n        "Encapsulation",\n        "Abstraction (brief overview)"\n      ]\n    }\n  ],\n  "quizzes": [\n    {\n      "quizNumber": 1,\n      "title": "Java Basics Quiz",\n      "duration": "5 minutes",\n      "questions": [\n        {\n          "question": "What is the main function in Java called?",\n          "options": ["main()", "start()", "run()", "execute()"],\n          "correctAnswer": "main()"\n        },\n        {\n          "question": "Which of the following is a primitive data type in Java?",\n          "options": ["String", "Integer", "boolean", "Object"],\n          "correctAnswer": "boolean"\n        },\n          {\n          "question": "Which Operator is the logical AND operator in Java?",\n          "options": ["|", "&", "&&", "||"],\n          "correctAnswer": "&&"\n        }\n      ]\n    },\n    {\n      "quizNumber": 2,\n      "title": "Control Flow Quiz",\n      "duration": "5 minutes",\n      "questions": [\n        {\n          "question": "Which statement is used to execute a block of code repeatedly?",\n          "options": ["if", "switch", "for", "try"],\n          "correctAnswer": "for"\n        },\n        {\n          "question": "What happens if an if condition is false and the code includes an else block?",\n          "options": ["The if block executes", "The else block executes", "The program crashes", "Nothing happens"],\n          "correctAnswer": "The else block executes"\n        },\n        {\n         "question": "Which statement is used to select one of several code blocks to execute?",\n          "options": ["if", "while", "for", "switch"],\n          "correctAnswer": "switch"\n        }\n\n      ]\n    },\n    {\n      "quizNumber": 3,\n      "title": "Arrays and Strings Quiz",\n      "duration": "5 minutes",\n      "questions": [\n        {\n          "question": "How do you declare an array of integers in Java?",\n          "options": ["int array;", "array int[];", "int[] array;", "array[] int;"],\n          "correctAnswer": "int[] array;"\n        },\n        {\n          "question": "What is the index of the first element in an array?",\n          "options": ["1", "0", "-1", "Depends on the array size"],\n          "correctAnswer": "0"\n        },\n         {\n          "question": "How do you find the length of a String variable called \'str\'?",\n          "options": ["str.size()", "str.len()", "str.length()", "str.getLength()"],\n          "correctAnswer": "str.length()"\n        }\n      ]\n    }\n  ],\n  "addQuizzes": 3\n}\n```\nKey improvements and explanations:\n\n* **`courseName`:** More descriptive course name.\n* **`description`:** Added a brief, clear description.\n* **`chapters`:** Detailed content for each chapter. I expanded on each content point to be more informative, reflecting common beginner Java curriculum.\n* **`quizzes`:**  Added three quizzes, each with three multiple-choice questions. The questions are geared toward beginners and cover the material in the chapters.  Crucially, I\'ve included *multiple* questions per quiz.\n* **Realistic durations:** Chapter and Quiz durations are added.\n* **Adherence to the prompt:** Made sure all required fields were included and the JSON is well-formatted.\n* **`addQuizzes`**: Included number of Quizzes which is 3.\n\nThis revised JSON is now much more complete and usable for generating a course tutorial.  Remember to translate all the text to Arabic if the course is intended to be delivered in Arabic.  Also, ensure that the explanations given for both correct and incorrect answers are thorough and understandable.',
        },
      ],
    },
  ],
});

export const generateChapterContent_AI = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Explain the concept in Detali on Topic:python, Chapter:OOP Fundamentals Review,in JSON Format with fild as Title, description in detail, Code Example(Html Code Format) if applicable",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "Title": "OOP Fundamentals Review in Python",\n  "description": "Object-Oriented Programming (OOP) is a programming paradigm based on the concept of \'objects\', which contain data, in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods). Python is a multi-paradigm programming language that supports OOP principles.",\n  "chapters": [\n    {\n      "chapter_title": "Classes and Objects",\n      "description": "A class is a blueprint or template for creating objects. It defines the attributes and methods that the objects will possess. An object is an instance of a class. Creating an object is also known as instantiation.",\n      "elements": [\n        {\n          "element_title": "Defining a Class",\n          "description": "Classes are defined using the `class` keyword followed by the class name (conventionally capitalized).",\n          "code_example": "<pre><code class=\\"language-python\\">\\nclass Dog:\\n    def __init__(self, name, breed):\\n        self.name = name\\n        self.breed = breed\\n\\n    def bark(self):\\n        print(\\"Woof!\\")\\n\\n# Creating an object (instance) of the Dog class\\nmy_dog = Dog(\\"Buddy\\", \\"Golden Retriever\\")\\nprint(my_dog.name)\\nprint(my_dog.breed)\\nmy_dog.bark()\\n</code></pre>"\n        },\n        {\n          "element_title": "The `__init__` Method (Constructor)",\n          "description": "The `__init__` method is a special method (also called a constructor) that is automatically called when an object of a class is created. It is used to initialize the object\'s attributes.  The `self` parameter refers to the instance of the object.",\n          "code_example": "<pre><code class=\\"language-python\\">\\nclass Car:\\n    def __init__(self, make, model, year):\\n        self.make = make\\n        self.model = model\\n        self.year = year\\n        self.odometer = 0\\n\\n    def read_odometer(self):\\n        print(f\\"This car has {self.odometer} miles on it.\\")\\n\\nmy_car = Car(\\"Toyota\\", \\"Camry\\", 2020)\\nmy_car.read_odometer()\\n</code></pre>"\n        },\n        {\n            "element_title": "Attributes",\n            "description": "Attributes are variables that hold data related to the object. They are defined inside the class and accessed using dot notation (e.g., `object.attribute`).",\n            "code_example": "<pre><code class=\\"language-python\\">\\nclass Rectangle:\\n    def __init__(self, width, height):\\n        self.width = width\\n        self.height = height\\n\\n    def area(self):\\n        return self.width * self.height\\n\\nmy_rectangle = Rectangle(5, 10)\\nprint(my_rectangle.width)  # Accessing the width attribute\\nprint(my_rectangle.height) # Accessing the height attribute\\nprint(my_rectangle.area()) # calling the method to calculate area\\n</code></pre>"\n        },\n        {\n          "element_title": "Methods",\n          "description": "Methods are functions that are defined inside a class. They define the behavior of the objects created from the class. They typically operate on the object\'s attributes. The first parameter of a method is conventionally named `self`, and it refers to the object itself.",\n          "code_example": "<pre><code class=\\"language-python\\">\\nclass Circle:\\n    def __init__(self, radius):\\n        self.radius = radius\\n\\n    def area(self):\\n        import math\\n        return math.pi * self.radius**2\\n\\n    def circumference(self):\\n        import math\\n        return 2 * math.pi * self.radius\\n\\nmy_circle = Circle(5)\\nprint(my_circle.area())\\nprint(my_circle.circumference())\\n</code></pre>"\n        }\n      ]\n    },\n    {\n      "chapter_title": "Inheritance",\n      "description": "Inheritance is a mechanism that allows a class (the subclass or derived class) to inherit attributes and methods from another class (the superclass or base class). This promotes code reuse and reduces redundancy.",\n      "elements": [\n        {\n          "element_title": "Single Inheritance",\n          "description": "Single inheritance is when a class inherits from only one superclass.",\n          "code_example": "<pre><code class=\\"language-python\\">\\nclass Animal:\\n    def __init__(self, name):\\n        self.name = name\\n\\n    def speak(self):\\n        print(\\"Generic animal sound\\")\\n\\nclass Dog(Animal):\\n    def __init__(self, name, breed):\\n        super().__init__(name) # Call the superclass constructor\\n        self.breed = breed\\n\\n    def speak(self):\\n        print(\\"Woof!\\")  # Override the speak method\\n\\nmy_dog = Dog(\\"Buddy\\", \\"Golden Retriever\\")\\nprint(my_dog.name)\\nprint(my_dog.breed)\\nmy_dog.speak()\\n</code></pre>"\n        },\n        {\n          "element_title": "Multiple Inheritance",\n          "description": "Multiple inheritance is when a class inherits from multiple superclasses.  Python supports multiple inheritance, but it should be used with caution, as it can lead to complex class hierarchies and the \'diamond problem\'.",\n          "code_example": "<pre><code class=\\"language-python\\">\\nclass Swimmer:\\n    def swim(self):\\n        print(\\"Swimming...\\")\\n\\nclass Walker:\\n    def walk(self):\\n        print(\\"Walking...\\")\\n\\nclass Duck(Swimmer, Walker):\\n    def quack(self):\\n        print(\\"Quack!\\")\\n\\nmy_duck = Duck()\\nmy_duck.swim()\\nmy_duck.walk()\\nmy_duck.quack()\\n</code></pre>"\n        },\n        {\n          "element_title": "`super()` Function",\n          "description": "The `super()` function is used to call methods from the superclass within the subclass. It is particularly useful when overriding methods to extend the functionality of the superclass method.",\n          "code_example": "<pre><code class=\\"language-python\\">\\nclass Parent:\\n    def __init__(self, value):\\n        self.value = value\\n\\n    def display(self):\\n        print(f\\"Parent\'s value: {self.value}\\")\\n\\nclass Child(Parent):\\n    def __init__(self, value, extra_value):\\n        super().__init__(value)  # Call the Parent\'s constructor\\n        self.extra_value = extra_value\\n\\n    def display(self):\\n        super().display() # Call the Parent\'s display method\\n        print(f\\"Child\'s extra value: {self.extra_value}\\")\\n\\nmy_child = Child(10, 20)\\nmy_child.display()\\n</code></pre>"\n        }\n      ]\n    },\n    {\n      "chapter_title": "Polymorphism",\n      "description": "Polymorphism means \'many forms\'. In OOP, it refers to the ability of objects of different classes to respond to the same method call in their own way.  It allows you to write code that can work with objects of different types without needing to know their specific classes.",\n      "elements": [\n        {\n          "element_title": "Duck Typing",\n          "description": "Python uses duck typing, which means that the type of an object is less important than the methods it supports. If it walks like a duck and quacks like a duck, then it must be a duck.",\n          "code_example": "<pre><code class=\\"language-python\\">\\ndef make_sound(animal):\\n    animal.speak()\\n\\nclass Dog:\\n    def speak(self):\\n        print(\\"Woof!\\")\\n\\nclass Cat:\\n    def speak(self):\\n        print(\\"Meow!\\")\\n\\ndog = Dog()\\ncat = Cat()\\n\\nmake_sound(dog)\\nmake_sound(cat)\\n\\nclass Bird:\\n    def speak(self):\\n        print(\\"Chirp!\\")\\n\\nbird = Bird()\\nmake_sound(bird)\\n</code></pre>"\n        },\n        {\n          "element_title": "Method Overriding",\n          "description": "Method overriding is a form of polymorphism where a subclass provides its own implementation of a method that is already defined in its superclass. This allows the subclass to customize the behavior inherited from the superclass.",\n          "code_example": "<pre><code class=\\"language-python\\">\\nclass Shape:\\n    def area(self):\\n        print(\\"Area calculation not defined for generic shape.\\")\\n\\nclass Rectangle(Shape):\\n    def __init__(self, width, height):\\n        self.width = width\\n        self.height = height\\n\\n    def area(self):\\n        return self.width * self.height\\n\\nclass Circle(Shape):\\n    def __init__(self, radius):\\n        self.radius = radius\\n\\n    def area(self):\\n        import math\\n        return math.pi * self.radius**2\\n\\nshape = Shape()\\nrectangle = Rectangle(5, 10)\\ncircle = Circle(5)\\n\\nshape.area()\\nprint(rectangle.area())\\nprint(circle.area())\\n</code></pre>"\n        }\n      ]\n    },\n    {\n      "chapter_title": "Encapsulation",\n      "description": "Encapsulation is the bundling of data (attributes) and methods that operate on that data within a single unit (a class). It helps to protect the data from accidental modification and makes the code more organized and maintainable.  It also often involves information hiding, where the internal implementation details of a class are hidden from the outside world.",\n      "elements": [\n        {\n          "element_title": "Access Modifiers (Private and Protected)",\n          "description": "Python doesn\'t have strict access modifiers like `private` or `protected` as in some other languages (e.g., Java, C++). However, there are conventions to indicate the intended visibility of attributes and methods.",\n          "sub_elements": [\n            {\n              "sub_element_title": "Private Attributes and Methods (Convention)",\n              "description": "Attributes and methods prefixed with a double underscore (`__`) are considered \'private\' by convention. Python name mangling makes it harder (but not impossible) to access them from outside the class. The interpreter internally renames these attributes.",\n              "code_example": "<pre><code class=\\"language-python\\">\\nclass BankAccount:\\n    def __init__(self, account_number, balance):\\n        self.account_number = account_number\\n        self.__balance = balance # Private attribute (by convention)\\n\\n    def deposit(self, amount):\\n        self.__balance += amount\\n\\n    def withdraw(self, amount):\\n        if amount <= self.__balance:\\n            self.__balance -= amount\\n        else:\\n            print(\\"Insufficient balance.\\")\\n\\n    def get_balance(self):\\n        return self.__balance\\n\\naccount = BankAccount(\\"12345\\", 1000)\\naccount.deposit(500)\\nprint(account.get_balance())\\n# print(account.__balance) # This would raise an AttributeError (name mangling)\\nprint(account._BankAccount__balance) # Still accessible but discouraged.\\n</code></pre>"\n            },\n            {\n              "sub_element_title": "Protected Attributes and Methods (Convention)",\n              "description": "Attributes and methods prefixed with a single underscore (`_`) are considered \'protected\' by convention. This indicates that they are intended for use within the class and its subclasses, but not by external code.",\n              "code_example": "<pre><code class=\\"language-python\\">\\nclass Employee:\\n    def __init__(self, name, salary):\\n        self.name = name\\n        self._salary = salary  # Protected attribute (by convention)\\n\\n    def _display_salary(self):\\n        print(f\\"Salary: {self._salary}\\")\\n\\nclass Manager(Employee):\\n    def __init__(self, name, salary, bonus):\\n        super().__init__(name, salary)\\n        self.bonus = bonus\\n\\n    def display_total_compensation(self):\\n        self._display_salary() # Accessing protected method from subclass.\\n        print(f\\"Bonus: {self.bonus}\\")\\n\\nemployee = Employee(\\"Alice\\", 50000)\\nmanager = Manager(\\"Bob\\", 80000, 20000)\\n\\n# employee._display_salary() # Allowed, but discouraged.\\nmanager.display_total_compensation()\\n</code></pre>"\n            }\n          ]\n        },\n        {\n          "element_title": "Getters and Setters",\n          "description": "Getters (also called accessors) are methods used to retrieve the value of an attribute. Setters (also called mutators) are methods used to set the value of an attribute.  Using getters and setters allows you to control how attributes are accessed and modified, which can be useful for validation or other logic.",\n          "code_example": "<pre><code class=\\"language-python\\">\\nclass Person:\\n    def __init__(self, age):\\n        self._age = age  # Use a protected attribute\\n\\n    def get_age(self):\\n        return self._age\\n\\n    def set_age(self, age):\\n        if age >= 0:\\n            self._age = age\\n        else:\\n            print(\\"Invalid age.\\")\\n\\nperson = Person(30)\\nprint(person.get_age())\\nperson.set_age(35)\\nprint(person.get_age())\\nperson.set_age(-5)\\n</code></pre>"\n        }\n      ]\n    },\n    {\n        "chapter_title": "Abstraction",\n        "description": "Abstraction is the process of hiding complex implementation details and exposing only the essential features of an object. It simplifies the interaction with objects by providing a high-level interface. Abstract classes and methods are key tools for achieving abstraction in Python.",\n        "elements": [\n            {\n                "element_title": "Abstract Base Classes (ABCs)",\n                "description": "Abstract Base Classes (ABCs) are classes that cannot be instantiated directly. They define abstract methods, which are methods that must be implemented by concrete (non-abstract) subclasses.  ABCs help enforce a certain interface or contract for subclasses.",\n                "code_example": "<pre><code class=\\"language-python\\">\\nfrom abc import ABC, abstractmethod\\n\\nclass Shape(ABC):\\n    @abstractmethod\\n    def area(self):\\n        pass\\n\\n    @abstractmethod\\n    def perimeter(self):\\n        pass\\n\\nclass Rectangle(Shape):\\n    def __init__(self, width, height):\\n        self.width = width\\n        self.height = height\\n\\n    def area(self):\\n        return self.width * self.height\\n\\n    def perimeter(self):\\n        return 2 * (self.width + self.height)\\n\\n# shape = Shape()  # This will raise a TypeError because Shape is abstract\\nrectangle = Rectangle(5, 10)\\nprint(rectangle.area())\\nprint(rectangle.perimeter())\\n\\nclass Circle(Shape):\\n    def __init__(self, radius):\\n        self.radius = radius\\n\\n    def area(self):\\n        import math\\n        return math.pi * self.radius**2\\n\\n    def perimeter(self):\\n        import math\\n        return 2 * math.pi * self.radius\\n\\ncircle = Circle(7)\\nprint(circle.area())\\nprint(circle.perimeter())\\n</code></pre>",\n                "notes": [\n                    "The `abc` module provides the `ABC` class and the `@abstractmethod` decorator.",\n                    "A class inheriting from `ABC` and containing abstract methods must implement those methods or be declared abstract as well.",\n                    "Attempting to instantiate an abstract class will raise a `TypeError`."\n                ]\n            },\n            {\n                "element_title": "Benefits of Abstraction",\n                "description": "Abstraction offers several benefits, including:\\n\\n*   **Reduced Complexity:** Simplifies interaction with objects by hiding unnecessary details.\\n*   **Increased Flexibility:** Allows for changes in the implementation without affecting the client code.\\n*   **Improved Maintainability:** Makes the code easier to understand and maintain.\\n*   **Code Reusability:** Promotes code reuse through abstract classes and interfaces.",\n                "example": "Consider a remote control for a TV. You interact with buttons (volume, channel) without needing to know the complex internal circuitry of the TV. This is a real-world example of abstraction."\n            }\n        ]\n    }\n  ]\n}\n```',
        },
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
