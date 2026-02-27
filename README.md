# AI Email Assistant

An intelligent email summarization tool built with Spring Boot and Spring AI that leverages the power of Ollama AI models to automatically analyze and summarize email content.

## 🚀 Features

- **Email Summarization**: Automatically generates concise summaries of email content using AI
- **Spring AI Integration**: Utilizes Spring AI framework with Ollama model for advanced natural language processing
- **RESTful API**: Clean and simple REST endpoints for easy integration
- **Reactive Support**: Built with Spring WebFlux for reactive programming capabilities
- **Modern Java**: Leverages Java 21 features for optimal performance

## 🛠️ Technology Stack

- **Java 21**: Latest LTS version of Java
- **Spring Boot 4.0.2**: Modern Spring Boot framework
- **Spring AI 2.0.0-M2**: AI integration framework
- **Ollama**: Local AI model integration
- **Maven**: Dependency management and build tool
- **Lombok**: Reduces boilerplate code
- **Spring WebFlux**: Reactive web framework

## 📋 Prerequisites

Before running this application, ensure you have:

- Java 21 or higher installed
- Maven 3.6+ installed
- Ollama installed and running locally
- An Ollama model downloaded (e.g., llama2, mistral)

### Installing Ollama

1. Visit [Ollama's official website](https://ollama.ai)
2. Download and install Ollama for your operating system
3. Pull a model: `ollama pull llama2`
4. Start Ollama service

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rahulsah33/Ai-Email-Assistant.git
   cd Ai-Email-Assistant
   ```

2. **Build the project**
   ```bash
   ./mvnw clean install
   ```

3. **Run the application**
   ```bash
   ./mvnw spring-boot:run
   ```

   Or on Windows:
   ```bash
   mvnw.cmd spring-boot:run
   ```

## 🎯 Usage

Once the application is running, you can interact with the API endpoints to summarize emails.

### API Endpoints

(Add your specific endpoints here based on your implementation)

Example:
```bash
POST /api/email/summarize
Content-Type: application/json

{
  "emailContent": "Your email content here..."
}
```

## 📁 Project Structure

```
Ai-Email-Assistant/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/aiEmailAssistant/
│   │   └── resources/
│   └── test/
├── pom.xml
└── README.md
```

## ⚙️ Configuration

Configure the application by editing `src/main/resources/application.properties` or `application.yml`:

```properties
# Ollama Configuration
spring.ai.ollama.base-url=http://localhost:11434
spring.ai.ollama.model=llama2

# Server Configuration
server.port=8080
```

## 🧪 Testing

Run the tests using:

```bash
./mvnw test
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Rahulsah33**
- GitHub: [@Rahulsah33](https://github.com/Rahulsah33)

## 🙏 Acknowledgments

- Spring AI team for the excellent AI integration framework
- Ollama for providing local AI model capabilities
- Spring Boot community for the robust framework

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub.

---

**Note**: This project is currently in development. Features and documentation may change.