# HiddenOpenings

**Status:** In Development
**Tech Stack:** Spring Boot | React | PostgreSQL

HiddenOpenings is a full-stack job aggregator platform designed to solve a common problem for job seekers: discovering job postings that are only available on company career pages. This application automatically scrapes and centralizes these "hidden" opportunities into a single, searchable, and user-friendly interface.

The core mission is to provide a clean, fast, and comprehensive source of job listings that are often missed by larger job boards, giving users a competitive edge in their job search.

---

## ✨ Features

* **Automated Job Scraping**: A robust Python-based scraping layer automatically pulls job data from target company websites.
* **Centralized Job Board**: All aggregated jobs are displayed in a clean, modern, and responsive user interface built with React.
* **Scalable Scraper Framework**: Easily add new companies to the scraping list by creating a new scraper class, without modifying core logic.
* **Powerful Search**: Instantly search across thousands of job titles with a live keyword search.
* **Efficient Pagination**: A paginated API ensures the application remains fast and responsive, even with a large number of job listings.
* **Expired Job Handling**: Jobs no longer present on the source website are intelligently marked as "Expired," ensuring data freshness.

---

## 📚 Technology Stack

This is a monorepo full-stack application built with a modern, scalable architecture.

| Layer    | Technology                                   | Purpose                                                       |
| -------- | -------------------------------------------- | ------------------------------------------------------------- |
| Frontend | React (Vite) + Tailwind CSS                  | Fast, responsive, and modern user interface                   |
| Backend  | Java + Spring Boot                           | Robust, high-performance REST API to serve job data           |
| Database | PostgreSQL                                   | Reliable and powerful relational database                     |
| Scraper  | Python (BeautifulSoup, Selenium, SQLAlchemy) | Extract job data from static and dynamic (JS-heavy) websites  |
| Monorepo | Git                                          | Single repository managing all layers for unified development |

---

## 📝 Local Development Setup

Follow these steps to get HiddenOpenings running on your local machine.

### ✅ Prerequisites

* Java 17 or newer
* Maven 3.8 or newer
* Node.js 18 or newer
* Python 3.10 or newer
* PostgreSQL server installed and running

### 📚 Clone the Repository

```bash
git clone https://github.com/your-username/HiddenOpenings.git
cd HiddenOpenings
```

---

### 📂 Database Setup

1. Connect to your local PostgreSQL instance and create a new database and user:

```sql
CREATE DATABASE hiddenopenings_db;
CREATE USER hiddenopenings_user WITH ENCRYPTED PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE hiddenopenings_db TO hiddenopenings_user;
```

2. Remember the database name, username, and password you just created.

---

### 🚀 Backend Setup (Spring Boot)

1. Navigate to the backend directory.
2. Open `src/main/resources/application.properties`.
3. Update the following properties with your PostgreSQL credentials:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/hiddenopenings_db
spring.datasource.username=hiddenopenings_user
spring.datasource.password=your_password
```

4. Run the backend server:

```bash
./mvnw spring-boot:run
```

The server will start at [http://localhost:8080](http://localhost:8080). Hibernate will create the necessary tables on first run.

---

### 🧱 Scraper Setup (Python)

1. Navigate to the scraper directory.
2. Create and activate a virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # On Linux/macOS
venv\Scripts\activate     # On Windows
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Create a `.env` file for your database credentials (copy from `.env.example`).
5. Edit `.env` with the following:

```env
DB_USER="hiddenopenings_user"
DB_PASSWORD="your_password"
DB_HOST="localhost"
DB_PORT="5432"
DB_NAME="hiddenopenings_db"
```

6. Run the scraper:

```bash
python main.py
```

---

### 🎨 Frontend Setup (React)

1. Navigate to the frontend directory.
2. Install dependencies:

```bash
npm install
```

3. Run the frontend development server:

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

---

## 🔤 Future Roadmap

Planned features include:

* **User Authentication**: Sign up and log in functionality
* **Saved Jobs**: Users can bookmark jobs
* **Email Job Alerts**: Notification system for saved searches
* **Advanced Filtering**: Filter by location, job type, company, etc.
* **CI/CD Pipeline**: Automated testing and deployment
* **More Scrapers**: Continuously expanding supported companies

---

## 🙌 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [Issues](https://github.com/your-username/HiddenOpenings/issues) page.
