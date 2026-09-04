export type CertItem = {
  title: string;
  image: string;
  issuer: string;
  date: string;
  desc: string;
};

export type CertGroup = {
  group: string;
  items: CertItem[];
};

export type Project = {
  id: string;
  title: string;
  titleEn: string;
  icon: string;
  badge: string;
  github: string | null;
  description: string;
  features: string[];
  tech: string[];
  initiative: string;
  code: string | null;
};

export const PROFILE = {
  name: "Abd Elrahman Esmat",
  nameLines: ["ABD ELRAHMAN", "ESMAT"] as const,
  role: "Networking · Cybersecurity · Python · Java · Data Analysis",
  eyebrow: "root@secure-network:~$ whoami",
  email: "bdalrhmnsmt156@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/abd-elrahman-osmat-b147ab317",
  linkedinLabel: "linkedin.com/in/abd-elrahman-osmat-b147ab317",
  githubUrl: "https://github.com/bdalrhmnsmt156-eng",
  githubLabel: "github.com/bdalrhmnsmt156-eng",
  location: "Sohag, Egypt",
  education: "Faculty of Computers and Information, EELU — 2nd Year",
  cvPath: "/Abd-Elrahman-Osmat-Resume.docx",
  cvFilename: "Abd-Elrahman-Osmat-Resume.docx",
  credentialCount: 17,
} as const;

export const ABOUT = `A steadily built foundation in computing, networking, cybersecurity, and programming — backed by a curated set of <strong>17 top-tier certified courses</strong> from Cisco Networking Academy, Huawei ICT Academy, ITI Mahara-Tech, Edraak, HP LIFE, Sololearn, and more. I am currently a <strong>second-year student</strong> at the <strong>Faculty of Computers and Information, Egyptian E-Learning University (EELU)</strong>, with a strong passion for deepening my expertise in <strong>cybersecurity</strong>. Below is a clear summary of these skills and the credentials behind them.`;

export const CV_SUMMARY = `<strong>Motivated and detail-oriented second-year student</strong> at the <strong>Faculty of Computers and Information, Egyptian E-Learning University (EELU)</strong>. Passionate about studying <strong>cybersecurity</strong>, with hands-on, certified training across networking, cybersecurity, Python, Java, and data analysis. Currently training in the <strong>Software Tester track</strong> of the <strong>Digital Egypt Pioneers Initiative</strong> (Aug – Dec 2026). Built a broad technical foundation through a curated set of <strong>17 top-tier courses</strong> from Cisco Networking Academy, Huawei ICT Academy, ITI Mahara-Tech, Edraak, HP LIFE, Sololearn, and more. Comfortable working across Linux systems, network device configuration, and multiple programming languages, with a strong interest in growing into a cybersecurity analyst, network engineering, or software QA role.`;

export const CV_FACTS = [
  { label: "Education", value: "Faculty of Computers and Information, EELU — 2nd Year" },
  { label: "Training", value: "Software Tester Track, Digital Egypt Pioneers Initiative — Aug–Dec 2026 (In Progress)" },
  { label: "Email", value: "bdalrhmnsmt156@gmail.com" },
  { label: "LinkedIn", value: "/in/abd-elrahman-osmat-b147ab317" },
  { label: "GitHub", value: "bdalrhmnsmt156-eng" },
  { label: "Focus", value: "Cybersecurity · Network Engineering · Python · Java · Software Testing" },
  { label: "Languages", value: "Arabic (native), English (professional)" },
] as const;

export const CV_HIGHLIGHTS = [
  { label: "Current", value: "2nd year student at EELU, Faculty of Computers and Information" },
  { label: "In Progress", value: "Software Tester Track — Digital Egypt Pioneers Initiative (Aug–Dec 2026)" },
  { label: "Passion", value: "Cybersecurity research and network defense" },
  { label: "17", value: "hand-picked certifications across 6 domains" },
  { label: "Cisco", value: "Junior Cybersecurity Analyst, Networking, Python" },
  { label: "Huawei", value: "Network Security, Python Programming" },
  { label: "Sololearn", value: "Introduction to Java, Java Intermediate" },
  { label: "ITI Mahara-Tech", value: "Cybersecurity, DB, Computational Thinking" },
  { label: "Edraak", value: "Cyber Security Specialization, ICDL" },
  { label: "HP LIFE", value: "Data Science & Analytics" },
  {
    label: "Hands-on",
    value:
      "Ubuntu Linux, network configuration, Python, and Java for security automation and application development",
  },
] as const;

export const SKILLS = [
  {
    id: "cyber",
    title: "Cybersecurity",
    count: 5,
    chips: [
      "Junior Cybersecurity Analyst Path",
      "Cyber Security Specialization",
      "Network Security",
      "Cyber Threat Management",
      "Endpoint Security",
    ],
  },
  {
    id: "net",
    title: "Networking",
    count: 2,
    chips: ["Networking Devices & Config", "Networking Basics"],
  },
  {
    id: "prog",
    title: "Programming",
    count: 4,
    chips: [
      "Python Essentials 1",
      "Python Essentials 2",
      "Introduction to Java",
      "Java Intermediate",
    ],
  },
  {
    id: "data",
    title: "Data & AI",
    count: 3,
    chips: [
      "Introduction to SQL",
      "Database Fundamentals",
      "Data Science & Analytics",
    ],
  },
  {
    id: "sys",
    title: "System Foundations",
    count: 2,
    chips: ["Ubuntu Linux Essentials", "International ICDL Base License"],
  },
  {
    id: "lang",
    title: "Languages",
    count: 1,
    chips: ["English for IT"],
  },
] as const;

export const certData: CertGroup[] = [
  {
    "group": "Cybersecurity",
    "items": [
      {
        "title": "Junior Cybersecurity Analyst Career Path",
        "image": "juniorcyber",
        "issuer": "Cisco Networking Academy",
        "date": "04.03.2026",
        "desc": "Comprehensive career path covering threat analysis, security operations, incident response, and network defense fundamentals. Hands-on labs with real-world scenarios."
      },
      {
        "title": "Cyber Security — Specialization",
        "image": "cyberedraak",
        "issuer": "Edraak",
        "date": "14.04.2026",
        "desc": "In-depth specialization covering cryptography, network security, application security, and risk management. Designed for aspiring security professionals."
      },
      {
        "title": "Network Security",
        "image": "networksecurity",
        "issuer": "Huawei ICT Academy",
        "date": "14.07.2026",
        "desc": "Enterprise-grade network security principles including firewall configuration, VPNs, intrusion detection, and secure network design."
      },
      {
        "title": "Cyber Threat Management",
        "image": "threatmgmt",
        "issuer": "Cisco Networking Academy",
        "date": "16.02.2026",
        "desc": "Covers threat intelligence, vulnerability management, and how to detect, analyze, and respond to cyber attacks using structured incident-response processes."
      },
      {
        "title": "Endpoint Security",
        "image": "endpoint",
        "issuer": "Cisco Networking Academy",
        "date": "04.03.2026",
        "desc": "Focuses on protecting devices from malware and attacks: antivirus/anti-malware defenses, host-based firewalls, and endpoint hardening techniques."
      }
    ]
  },
  {
    "group": "Networking",
    "items": [
      {
        "title": "Networking Devices and Initial Configuration",
        "image": "netdevices",
        "issuer": "Cisco Networking Academy",
        "date": "04.03.2026",
        "desc": "Hands-on course on configuring routers, switches, and basic network devices. Covers IOS, VLANs, and initial device setup."
      },
      {
        "title": "Networking Basics",
        "image": "netbasics",
        "issuer": "Cisco Networking Academy",
        "date": "04.03.2026",
        "desc": "Fundamental networking concepts including OSI model, IP addressing, subnetting, and basic network troubleshooting."
      }
    ]
  },
  {
    "group": "Programming",
    "items": [
      {
        "title": "Python Essentials 2",
        "image": "py2",
        "issuer": "Cisco Networking Academy · Python Institute",
        "date": "06.08.2026",
        "desc": "Intermediate Python programming covering modules, packages, exceptions, file handling, and object-oriented programming concepts."
      },
      {
        "title": "Python Essentials 1",
        "image": "py1",
        "issuer": "Cisco Networking Academy · Python Institute",
        "date": "27.02.2026",
        "desc": "Foundational Python course covering syntax, data types, control flow, functions, and basic data structures."
      },
      {
        "title": "Introduction to Java",
        "image": "javaintro",
        "issuer": "Sololearn",
        "date": "13.05.2026",
        "desc": "Foundational Java course covering core programming concepts: <strong>variables, data types, conditional statements (if/else), loops (for/while), and methods (functions)</strong>. Builds a solid base for object-oriented programming."
      },
      {
        "title": "Java Intermediate",
        "image": "javaintermediate",
        "issuer": "Sololearn",
        "date": "14.08.2026",
        "desc": "Intermediate Java programming focusing on <strong>Object-Oriented Programming (OOP)</strong> principles such as <strong>classes, objects, inheritance, and abstraction</strong>. Also covers advanced topics including <strong>exception handling (try/catch), collections (ArrayList), multithreading, and file I/O</strong> operations."
      }
    ]
  },
  {
    "group": "Data & AI",
    "items": [
      {
        "title": "Introduction to SQL",
        "image": "sql",
        "issuer": "Sololearn",
        "date": "22.07.2026",
        "desc": "Core SQL concepts including SELECT, INSERT, UPDATE, DELETE, JOINs, and database querying for data analysis."
      },
      {
        "title": "Database Fundamentals",
        "image": "dbfund",
        "issuer": "ITI Mahara-Tech",
        "date": "17.07.2026",
        "desc": "Relational database design, normalization, ER diagrams, and basic database administration concepts."
      },
      {
        "title": "Data Science & Analytics",
        "image": "datascience",
        "issuer": "HP LIFE · HP Foundation",
        "date": "13.04.2026",
        "desc": "Introduction to data science lifecycle, data visualization, statistical analysis, and using data for business decisions."
      }
    ]
  },
  {
    "group": "System Foundations",
    "items": [
      {
        "title": "Ubuntu Linux Essentials",
        "image": "ubuntu",
        "issuer": "Mahara-Tech",
        "date": "09.03.2026",
        "desc": "Linux fundamentals: command-line navigation, file permissions, process management, package installation, and basic system administration."
      },
      {
        "title": "International Computer Driving Licence — ICDL Base",
        "image": "icdlbase",
        "issuer": "Edraak",
        "date": "14.04.2026",
        "desc": "Full ICDL Base license covering four specialization courses: Computer Essentials, Word Processing, Excel Spreadsheets, and Internet & Email Essentials."
      }
    ]
  },
  {
    "group": "Languages",
    "items": [
      {
        "title": "English for IT: Describing and Comparing",
        "image": "englishit",
        "issuer": "Cisco Networking Academy · OpenEDG",
        "date": "31.07.2026",
        "desc": "Technical English course focused on describing systems, comparing technologies, and using precise IT vocabulary in professional contexts."
      }
    ]
  }
];

export const projects: Project[] = [
  {
    "id": "company-app",
    "title": "نظام إدارة الموظفين والمشاريع",
    "titleEn": "Company Management System",
    "icon": "🏢",
    "badge": "🚀 مبادرة رواد مصر الرقمية",
    "github": "https://github.com/bdalrhmnsmt156-eng/Company-Management-System-Java",
    "tech": [
      "Java",
      "OOP",
      "Encapsulation",
      "Composition"
    ],
    "description": "A comprehensive company management system built with Java OOP principles.",
    "features": [
      "Employee management — ID, name, and salary tracking",
      "Salary operations — percentage increases and annual salary calculation",
      "Department management — one manager plus up to two employees per department",
      "Project assignment and salary reporting",
      "<strong>Encapsulation</strong> using private fields with public getters",
      "<strong>Composition</strong> for managing relationships between classes",
      "Complete console-based application"
    ],
    "initiative": "🌐 مبادرة رواد مصر الرقمية - وزارة الاتصالات",
    "code": "class Employee {\n    private int id;\n    private String name;\n    private double salary;\n\n    public Employee(int id, String name, double salary) {\n        this.id = id;\n        this.name = name;\n        this.salary = salary;\n    }\n\n    public void displayInfo() {\n        System.out.println(\"ID:\" + id);\n        System.out.println(\"Name:\" + name);\n        System.out.println(\"Salary:\" + salary);\n    }\n\n    public void increaseSalary(double percentage) {\n        salary += salary * (percentage / 100.0);\n    }\n\n    public double getAnnualSalary() {\n        return salary * 12;\n    }\n\n    public int getId() { return id; }\n    public String getName() { return name; }\n    public double getSalary() { return salary; }\n}\n\nclass Department {\n    private String departmentName;\n    private Employee manager;\n    private Employee employee1;\n    private Employee employee2;\n\n    public Department(String departmentName, Employee manager) {\n        this.departmentName = departmentName;\n        this.manager = manager;\n        this.employee1 = null;\n        this.employee2 = null;\n    }\n\n    public void addEmployee(Employee employee) {\n        if (employee1 == null) {\n            employee1 = employee;\n        } else if (employee2 == null) {\n            employee2 = employee;\n        } else {\n            System.out.println(\"Department is full.\");\n        }\n    }\n\n    public void displayDepartmentInfo() {\n        System.out.println(\"Department:\" + departmentName);\n        System.out.println(\"Manager:\");\n        manager.displayInfo();\n        System.out.println(\"Employees:\");\n        if (employee1 != null) employee1.displayInfo();\n        if (employee2 != null) employee2.displayInfo();\n    }\n\n    public double getTotalSalary() {\n        double total = manager.getSalary();\n        if (employee1 != null) total += employee1.getSalary();\n        if (employee2 != null) total += employee2.getSalary();\n        return total;\n    }\n}\n\nclass Project {\n    private String projectName;\n    private Employee projectManager;\n    private Employee assignedEmployee1;\n    private Employee assignedEmployee2;\n\n    public Project(String projectName, Employee projectManager) {\n        this.projectName = projectName;\n        this.projectManager = projectManager;\n        this.assignedEmployee1 = null;\n        this.assignedEmployee2 = null;\n    }\n\n    public void assignEmployee(Employee employee) {\n        if (assignedEmployee1 == null) {\n            assignedEmployee1 = employee;\n        } else if (assignedEmployee2 == null) {\n            assignedEmployee2 = employee;\n        } else {\n            System.out.println(\"Project is full.\");\n        }\n    }\n\n    public void displayProjectInfo() {\n        System.out.println(\"Project:\" + projectName);\n        System.out.println(\"Project Manager:\" + projectManager.getName());\n        System.out.println(\"Employee1:\" + assignedEmployee1.getName());\n        System.out.println(\"Employee2:\" + assignedEmployee2.getName());\n    }\n}\n\npublic class CompanyApp {\n    public static void main(String[] args) {\n        Employee empMohamed = new Employee(100, \"Mohammed\", 15000);\n        Employee empAhmed = new Employee(101, \"Ahmed\", 10000);\n        Employee empAli = new Employee(102, \"Ali\", 9000);\n\n        Department dept = new Department(\"Software Engineering\", empMohamed);\n        dept.addEmployee(empAhmed);\n        dept.addEmployee(empAli);\n        dept.displayDepartmentInfo();\n\n        empAhmed.increaseSalary(10);\n        System.out.println(\"New Salary:\" + empAhmed.getSalary());\n        dept.displayDepartmentInfo();\n        System.out.println(\"Total Monthly Salary:\" + dept.getTotalSalary());\n\n        Project project = new Project(\"E-Commerce Automation\", empMohamed);\n        project.assignEmployee(empAhmed);\n        project.assignEmployee(empAli);\n        project.displayProjectInfo();\n    }\n}"
  },
  {
    "id": "bank-account",
    "title": "نظام إدارة الحسابات البنكية",
    "titleEn": "Bank Account System",
    "icon": "🏦",
    "badge": "🚀 مبادرة رواد مصر الرقمية",
    "github": null,
    "description": "A Java banking system for managing accounts with deposits, withdrawals, and transfers.",
    "features": [
      "Deposit and withdrawal operations with balance validation",
      "Transfers between accounts with built-in safety checks",
      "Transaction count tracking per account",
      "<strong>Encapsulation</strong> of account state (active / inactive)",
      "Console-based account management application"
    ],
    "tech": [
      "Java",
      "OOP",
      "Encapsulation",
      "Methods",
      "Transaction Handling"
    ],
    "initiative": "🌐 مبادرة رواد مصر الرقمية - وزارة الاتصالات",
    "code": "public class BankAccount {\n    private String accountNumber;\n    private String ownerName;\n    private double balance;\n    private int transactionCount;\n\n    public BankAccount(String accountNumber, String ownerName, double initialBalance) {\n        this.accountNumber = accountNumber;\n        this.ownerName = ownerName;\n        this.balance = initialBalance;\n        this.transactionCount = 0;\n    }\n\n    public void deposit(double amount) {\n        if (amount <= 0) {\n            System.out.println(\"Invalid deposit amount.\");\n            return;\n        }\n        balance += amount;\n        transactionCount++;\n        System.out.println(\"Deposit successful: \" + amount);\n    }\n\n    public void withdraw(double amount) {\n        if (amount <= 0) {\n            System.out.println(\"Invalid withdrawal amount.\");\n            return;\n        }\n        if (balance < amount) {\n            System.out.println(\"Insufficient balance.\");\n            return;\n        }\n        balance -= amount;\n        transactionCount++;\n        System.out.println(\"Withdrawal successful: \" + amount);\n    }\n\n    public void displayAccountInfo() {\n        System.out.println(\"Account Number: \" + accountNumber);\n        System.out.println(\"Owner: \" + ownerName);\n        System.out.println(\"Balance: \" + balance);\n        System.out.println(\"Transactions: \" + transactionCount);\n    }\n\n    public double getBalance() { return balance; }\n\n    public boolean isActive() { return balance > 0; }\n\n    public void transfer(BankAccount targetAccount, double amount) {\n        if (amount <= 0) {\n            System.out.println(\"Transfer amount must be positive.\");\n            return;\n        }\n        if (this == targetAccount) {\n            System.out.println(\"Cannot transfer to the same account.\");\n            return;\n        }\n        if (this.balance < amount) {\n            System.out.println(\"Insufficient balance for transfer.\");\n            return;\n        }\n        this.withdraw(amount);\n        targetAccount.deposit(amount);\n        System.out.println(\"Transfer successful.\");\n    }\n\n    public static void main(String[] args) {\n        BankAccount account = new BankAccount(\"10001\", \"Ahmed\", 1000);\n        account.displayAccountInfo();\n        account.deposit(500);\n        account.withdraw(200);\n        account.withdraw(2000);\n        account.displayAccountInfo();\n        System.out.println(\"Account Active: \" + account.isActive());\n\n        BankAccount account2 = new BankAccount(\"10002\", \"Mohamed\", 500);\n        account.transfer(account2, 300);\n        System.out.println(\"Balance Ahmed: \" + account.getBalance());\n        System.out.println(\"Balance Mohamed: \" + account2.getBalance());\n    }\n}"
  },
  {
    "id": "flight-booking",
    "title": "نظام حجز الرحلات الجوية",
    "titleEn": "Flight Booking System",
    "icon": "✈️",
    "badge": "⚡ Personal Project",
    "github": "https://github.com/bdalrhmnsmt156-eng/python-booking_system",
    "description": "A complete flight reservation system built with Object-Oriented Programming in Python.",
    "features": [
      "User role management — Customer and Admin with full permissions",
      "Automatic seat generation with VIP / Regular classes",
      "Real-time seat availability tracking",
      "Unique booking IDs generated via UUID, with booking timestamps",
      "Multiple payment method support",
      "Administrative controls for adding flights and updating prices",
      "Demonstrates <strong>inheritance</strong>, <strong>composition</strong>, and <strong>encapsulation</strong>"
    ],
    "tech": [
      "Python",
      "OOP",
      "Inheritance",
      "UUID",
      "Type Hints"
    ],
    "initiative": "💻 Personal Project — Open Source on GitHub",
    "code": "\n\nfrom datetime import datetime\nfrom typing import List, Optional\nimport uuid\n\n\n# ==================== Seat ====================\nclass Seat:\n    \"\"\"يمثل مقعد في الرحلة\"\"\"\n    \n    def __init__(self, seat_number: str, seat_class: str = \"عادية\"):\n        self.seat_number = seat_number          \n        self.seat_class = seat_class           \n        self.is_booked = False                  \n        \n    def book(self) -> bool:\n        \"\"\"حجز المقعد\"\"\"\n        if not self.is_booked:\n            self.is_booked = True\n            return True\n        return False\n    \n    def unbook(self) -> bool:\n        \"\"\"إلغاء حجز المقعد\"\"\"\n        if self.is_booked:\n            self.is_booked = False\n            return True\n        return False\n    \n    def __str__(self):\n        status = \"محجوز\" if self.is_booked else \"متاح\"\n        return f\"مقعد {self.seat_number} ({self.seat_class}) - {status}\"\n\n\n# ==================== Flight ====================\nclass Flight:\n    \"\"\"يمثل رحلة جوية\"\"\"\n    \n    def __init__(self, flight_number: str, destination: str, \n                 capacity: int, price_regular: float = 500.0, \n                 price_vip: float = 1200.0):\n        self.flight_number = flight_number\n        self.destination = destination\n        self.capacity = capacity\n        self.price_regular = price_regular\n        self.price_vip = price_vip\n        self.seats: List[Seat] = []\n        self._generate_seats()\n    \n    def _generate_seats(self):\n        \"\"\"إنشاء المقاعد تلقائياً\"\"\"\n        \n        vip_count = max(1, int(self.capacity * 0.2))\n        \n        for i in range(1, self.capacity + 1):\n            seat_class = \"VIP\" if i <= vip_count else \"عادية\"\n            seat_number = f\"{chr(65 + (i-1)//10)}{(i-1)%10 + 1:02d}\"  # A01, A02...\n            self.seats.append(Seat(seat_number, seat_class))\n    \n    def get_available_seats(self, seat_class: Optional[str] = None) -> List[Seat]:\n        \"\"\"إرجاع المقاعد المتاحة\"\"\"\n        available = [s for s in self.seats if not s.is_booked]\n        if seat_class:\n            available = [s for s in available if s.seat_class == seat_class]\n        return available\n    \n    def get_seat(self, seat_number: str) -> Optional[Seat]:\n        \"\"\"البحث عن مقعد برقم معين\"\"\"\n        for seat in self.seats:\n            if seat.seat_number == seat_number:\n                return seat\n        return None\n    \n    def get_price(self, seat_class: str) -> float:\n        \"\"\"إرجاع سعر المقعد حسب الفئة\"\"\"\n        return self.price_vip if seat_class == \"VIP\" else self.price_regular\n    \n    def update_prices(self, price_regular: float = None, price_vip: float = None):\n        \"\"\"تحديث أسعار الرحلة (للأدمن)\"\"\"\n        if price_regular is not None:\n            self.price_regular = price_regular\n        if price_vip is not None:\n            self.price_vip = price_vip\n    \n    def available_count(self) -> int:\n        return len(self.get_available_seats())\n    \n    def __str__(self):\n        return (f\"رحلة {self.flight_number} → {self.destination} | \"\n                f\"المقاعد المتاحة: {self.available_count()}/{self.capacity} | \"\n                f\"سعر عادي: {self.price_regular} | VIP: {self.price_vip}\")\n\n\n# ==================== Booking ====================\nclass Booking:\n    \"\"\"يمثل عملية حجز\"\"\"\n    \n    def __init__(self, customer, flight: Flight, seat: Seat):\n        self.booking_id = str(uuid.uuid4())[:8].upper()\n        self.customer = customer\n        self.flight = flight\n        self.seat = seat\n        self.booking_date = datetime.now()\n        self.is_active = True\n        self.amount_paid = flight.get_price(seat.seat_class)\n    \n    def cancel(self) -> bool:\n        \"\"\"إلغاء الحجز\"\"\"\n        if self.is_active:\n            self.seat.unbook()\n            self.is_active = False\n            return True\n        return False\n    \n    def __str__(self):\n        status = \"نشط\" if self.is_active else \"ملغي\"\n        return (f\"حجز [{self.booking_id}] | {self.customer.name} | \"\n                f\"{self.flight.flight_number} → {self.flight.destination} | \"\n                f\"مقعد {self.seat.seat_number} ({self.seat.seat_class}) | \"\n                f\"{self.amount_paid} ريال | {status} | \"\n                f\"{self.booking_date.strftime('%Y-%m-%d %H:%M')}\")\n\n\n# ==================== User (Base Class) ====================\nclass User:\n    \"\"\"الفئة الأم للمستخدمين\"\"\"\n    \n    def __init__(self, name: str, email: str, user_id: str = None):\n        self.name = name\n        self.email = email\n        self.user_id = user_id or str(uuid.uuid4())[:8].upper()\n    \n    def __str__(self):\n        return f\"{self.name} ({self.email}) - ID: {self.user_id}\"\n\n\n# ==================== Customer ====================\nclass Customer(User):\n    \"\"\"العميل - يمكنه حجز وإدارة حجوزاته\"\"\"\n    \n    def __init__(self, name: str, email: str, user_id: str = None):\n        super().__init__(name, email, user_id)\n        self.bookings: List[Booking] = []\n        self.payment_methods: List[str] = []   \n    \n    def add_payment_method(self, method: str):\n        \"\"\"إضافة طريقة دفع\"\"\"\n        if method not in self.payment_methods:\n            self.payment_methods.append(method)\n            print(f\"✓ تم إضافة طريقة الدفع: {method}\")\n    \n    def book_seat(self, flight: Flight, seat_number: str, \n                  payment_method: str = None) -> Optional[Booking]:\n        \"\"\"حجز مقعد في رحلة\"\"\"\n        seat = flight.get_seat(seat_number)\n        \n        if not seat:\n            print(f\"✗ المقعد {seat_number} غير موجود\")\n            return None\n        \n        if seat.is_booked:\n            print(f\"✗ المقعد {seat_number} محجوز مسبقاً\")\n            return None\n        \n        if payment_method and payment_method not in self.payment_methods:\n            print(f\"✗ طريقة الدفع '{payment_method}' غير مسجلة\")\n            return None\n        \n       \n        seat.book()\n        booking = Booking(self, flight, seat)\n        self.bookings.append(booking)\n        \n        print(f\"✓ تم الحجز بنجاح!\")\n        print(f\"  رقم الحجز: {booking.booking_id}\")\n        print(f\"  المبلغ: {booking.amount_paid} ريال\")\n        return booking\n    \n    def view_bookings(self):\n        \"\"\"عرض حجوزات العميل\"\"\"\n        active = [b for b in self.bookings if b.is_active]\n        if not active:\n            print(\"لا توجد حجوزات نشطة.\")\n            return\n        \n        print(f\"\\n--- حجوزات {self.name} ---\")\n        for b in active:\n            print(f\"  {b}\")\n    \n    def cancel_my_booking(self, booking_id: str) -> bool:\n        \"\"\"إلغاء حجز خاص بالعميل\"\"\"\n        for booking in self.bookings:\n            if booking.booking_id == booking_id and booking.is_active:\n                booking.cancel()\n                print(f\"✓ تم إلغاء الحجز {booking_id}\")\n                return True\n        print(f\"✗ لم يتم العثور على حجز نشط برقم {booking_id}\")\n        return False\n\n\n# ==================== Admin ====================\nclass Admin(User):\n    \"\"\"المسؤول - صلاحيات كاملة على النظام\"\"\"\n    \n    def __init__(self, name: str, email: str, user_id: str = None):\n        super().__init__(name, email, user_id)\n    \n    def add_flight(self, flights_list: list, flight_number: str, \n                   destination: str, capacity: int,\n                   price_regular: float = 500.0, \n                   price_vip: float = 1200.0) -> Flight:\n        \"\"\"إضافة رحلة جديدة\"\"\"\n        # التحقق من عدم تكرار رقم الرحلة\n        for f in flights_list:\n            if f.flight_number == flight_number:\n                print(f\"✗ الرحلة {flight_number} موجودة مسبقاً\")\n                return None\n        \n        flight = Flight(flight_number, destination, capacity, \n                        price_regular, price_vip)\n        flights_list.append(flight)\n        print(f\"✓ تمت إضافة الرحلة: {flight}\")\n        return flight\n    \n    def update_flight_prices(self, flight: Flight, \n                             price_regular: float = None, \n                             price_vip: float = None):\n        \"\"\"تعديل أسعار رحلة\"\"\"\n        flight.update_prices(price_regular, price_vip)\n        print(f\"✓ تم تحديث أسعار الرحلة {flight.flight_number}\")\n        print(f\"  عادي: {flight.price_regular} | VIP: {flight.price_vip}\")\n    \n    def cancel_any_booking(self, booking: Booking) -> bool:\n        \"\"\"إلغاء أي حجز (حتى لو لم يكن خاصاً به)\"\"\"\n        if booking.is_active:\n            booking.cancel()\n            print(f\"✓ [أدمن] تم إلغاء الحجز {booking.booking_id} للعميل {booking.customer.name}\")\n            return True\n        print(f\"✗ الحجز {booking.booking_id} ملغي مسبقاً\")\n        return False\n    \n    def view_all_flights(self, flights_list: list):\n        \"\"\"عرض جميع الرحلات\"\"\"\n        print(\"\\n========== جميع الرحلات ==========\")\n        for f in flights_list:\n            print(f\"  {f}\")\n\n\n# ==================== Demo / Main ====================\ndef main():\n    print(\"=\" * 60)\n    print(\"          نظام حجز الرحلات الجوية\")\n    print(\"=\" * 60)\n    \n   \n    flights = []\n    \n   \n    admin = Admin(\"أحمد الإداري\", \"admin@airline.com\")\n    customer1 = Customer(\"سارة محمد\", \"sara@email.com\")\n    customer2 = Customer(\"خالد علي\", \"khaled@email.com\")\n    \n    \n    customer1.add_payment_method(\"بطاقة ائتمان\")\n    customer1.add_payment_method(\"مدى\")\n    customer2.add_payment_method(\"Apple Pay\")\n    \n    print(\"\\n--- إضافة رحلات بواسطة الأدمن ---\")\n    admin.add_flight(flights, \"SV123\", \"جدة\", capacity=20, \n                     price_regular=450, price_vip=1100)\n    admin.add_flight(flights, \"SV456\", \"الدمام\", capacity=15,\n                     price_regular=380, price_vip=950)\n    admin.add_flight(flights, \"SV789\", \"أبها\", capacity=12)\n    \n    admin.view_all_flights(flights)\n    \n   \n    print(\"\\n--- المقاعد المتاحة في SV123 ---\")\n    for seat in flights[0].get_available_seats()[:8]:  \n        print(f\"  {seat}\")\n    \n    print(\"\\n--- حجز مقاعد ---\")\n    \n    booking1 = customer1.book_seat(flights[0], \"A01\", \"بطاقة ائتمان\")\n    \n    \n    booking2 = customer2.book_seat(flights[0], \"A05\", \"Apple Pay\")\n    \n   \n    customer1.book_seat(flights[0], \"A01\", \"مدى\")\n    \n    \n    customer1.view_bookings()\n    \n    print(\"\\n--- تعديل الأسعار بواسطة الأدمن ---\")\n    admin.update_flight_prices(flights[0], price_regular=500, price_vip=1300)\n    \n    print(\"\\n--- إلغاء حجز بواسطة العميل ---\")\n    if booking2:\n        customer2.cancel_my_booking(booking2.booking_id)\n    \n    print(\"\\n--- إلغاء حجز بواسطة الأدمن ---\")\n    if booking1:\n        admin.cancel_any_booking(booking1)\n    \n    print(\"\\n--- حالة الرحلة النهائية ---\")\n    print(flights[0])\n    print(f\"المقاعد المتاحة الآن: {flights[0].available_count()}\")\n    \n    print(\"\\n\" + \"=\" * 60)\n    print(\"انتهى العرض التجريبي\")\n    print(\"=\" * 60)\n\n\nif __name__ == \"__main__\":\n    main()\n"
  },
  {
    "id": "ecommerce-polymorphism",
    "title": "نظام تجارة إلكترونية (تعدد الأشكال)",
    "titleEn": "E-Commerce System (Polymorphism)",
    "icon": "🛒",
    "badge": "⚡ Personal Project",
    "github": "https://github.com/bdalrhmnsmt156-eng/Polymorphism",
    "description": "An educational e-commerce system showcasing polymorphism in Object-Oriented Programming.",
    "features": [
      "Product management with inheritance — Electronics (warranty, voltage) and Clothing (size, color, material)",
      "Shopping cart with dynamic total calculation",
      "Product discounts",
      "Multiple payment methods — Credit Card and PayPal — via abstract base classes",
      "Demonstrates method overriding and interface-based design",
      "Real-world polymorphic behavior in a practical application"
    ],
    "tech": [
      "Python",
      "OOP",
      "Abstract Classes",
      "Polymorphism",
      "Inheritance"
    ],
    "initiative": "💻 Personal Project — Open Source on GitHub",
    "code": null
  }
];
