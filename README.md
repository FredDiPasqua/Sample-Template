# 🚀 **AI Content Editor with CopilotKit – Daytona Submission Guide**

---

## 📚 **Overview**
This project is an AI-powered content editor built using **React**, **Next.js**, **Cohere API** for AI-powered suggestions, and **CopilotKit**. It provides users with advanced writing assistance in multiple styles (e.g., formal, casual, creative, sci-fi, and more). The app leverages a sleek floating glass UI with dynamic prompts and real-time AI suggestions.

---

## ✨ **Features**
- **AI-Powered Content Suggestions:** Leverages the Cohere API for intelligent text completions.  
- **Dynamic Writing Styles:** Switch between formal, casual, creative, sci-fi, action movie styles, and more.  
- **Real-time Feedback:** Optimized with debounce logic to reduce unnecessary API calls.  
- **Floating Glass UI:** A clean and modern interface with an interactive glass effect.  
- **Customizable Prompts:** Users can customize prompts dynamically based on their style and input.  

---

## 📁 **Project Structure**
- **`src/app/`:** Main app layout, page structure, and API routes.
   - `page.tsx`: Main page component.
   - `api/`: API routes to handle Cohere interactions.
- **`src/components/`:** Reusable components.
   - `AIEditor.tsx`: Core text editor component.
- **`src/styles/globals.css`:** Global CSS for styling with TailwindCSS.
- **`public/`:** Static assets (e.g., images, icons).
- **`utils/`:** Utility functions such as debounce logic.

---

## 🛠️ **Setup and Installation**

### **Prerequisites**
- **Node.js:** Ensure Node.js is installed.  
- **Cohere API Key:** Obtain from [Cohere](https://cohere.ai/).  

### **Steps**

1. **Clone the Repository:**  
   ```bash
   git clone https://github.com/your-username/ai-content-editor.git
   cd ai-content-editor

2. **Install Dependencies:**
    ```bash
    npm install

3. **Set Environment Variables:**

    Create a .env.local file in the root:
    ```bash
   NEXT_PUBLIC_COHERE_API_KEY=<your-cohere-api-key>

4. **Run the Development Server:**
    ```bash
    npm run dev
  Open http://localhost:3000 in your browser.

5. 🏗️ Build for Production.

    To build the production version:
    ```bash
    npm run build

    
## 🐳 **Docker Setup**

### 🛠️ Build and Run with Docker Compose
1.	Ensure Docker and Docker Compose are installed.
2.	Navigate to the project root directory.
3.	Run:
    ```bash
      docker-compose up --build

4.	Access the app at http://localhost:3000


## 🌐 **Open Using Daytona**

### 🛠️ Steps with Daytona CLI
1.	Install Daytona

    Follow the installation guide at [Daytona Docs](https://daytona.io/docs).

2.	Create a Daytona Workspace
    ```bash
        daytona create <REPO_URL>
3.	Start the Application
    ```bash
        npm run dev 

## 📚 **Technologies Used**
-	React & Next.js: Frontend development and server-side rendering.
-	Cohere API: AI-powered content generation.
-	CopilotKit: AI copilots for enhanced user experience.
-	Docker: Containerized deployment.
-	DevContainer: Environment setup for Daytona compatibility.

## 🛠️ **Troubleshooting**

### 🚨 Common Issues
1.	API Key Misconfiguration:
-	Ensure NEXT_PUBLIC_COHERE_API_KEY is set in .env.local.
2.	Docker Build Issues:
-	Verify Dockerfile exists in the root directory.
3.	Environment Variables Not Loaded:
-	Restart your development server after modifying .env.local.