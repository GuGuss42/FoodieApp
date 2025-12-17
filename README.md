📱 Project Overview — FoodieApp

FoodieApp is a mobile recipe-sharing application that allows users to discover, upload, and manage food recipes through a modern and intuitive interface.
The application encourages community-driven content, where users can share their own recipes and explore recipes published by others.

The project is built as a full-stack application, combining a React Native mobile frontend with a Spring Boot REST backend, connected to a cloud-based PostgreSQL database.

🧱 Architecture Overview

Frontend (Mobile Application)
Developed using React Native with Expo, enabling cross-platform support (Android & iOS).

Backend (REST API)
Built with Spring Boot, exposing secure REST endpoints for authentication, user management, and recipe handling.

Database (Cloud)
Hosted on Neon (Serverless PostgreSQL), providing scalable and reliable cloud-based data storage.

Database Administration
Managed and monitored using pgAdmin, allowing visualization, querying, and maintenance of database tables and relations.

Communication Layer
Frontend and backend communicate via REST APIs (JSON) using Axios.

🛠️ Technologies Used
🔹 Frontend

React Native

Expo

JavaScript (ES6+)

React Navigation

Axios

AsyncStorage

StyleSheet (React Native)

🔹 Backend

Java

Spring Boot

Spring Web (REST)

Spring Data JPA

Hibernate

DTO Pattern

Maven

🔹 Database & Cloud

PostgreSQL

Neon (Serverless PostgreSQL)

pgAdmin

🔹 Development & Testing Tools

Postman (API testing)

Git & GitHub

VS Code

Android Emulator / Physical Device

⭐ Key Features
🔐 Authentication & User Management

User registration and login

Persistent login using AsyncStorage

User profile management

Password update functionality

🧑‍🍳 Recipe Management

Add new recipes with:

Name

Description

Image URL

Creator (linked to user)

Retrieve and display recipes in a feed

User-specific recipe ownership

🖼️ Profile & Avatar System

Profile screen displaying user info

Avatar selection from predefined images

Avatar persistence (locally stored)

Avatar reuse across the application (header, profile)

📱 UI & UX

Clean, modern design

Card-based layouts

Elevation & shadow effects

Smooth navigation and scrolling

🔄 Data Handling

Centralized API service files

Async/Await API calls

Error handling and validation

DTO-based backend responses

🎯 Project Value

This project demonstrates:

Full-stack mobile development

Cloud-based database usage (Neon)

Database administration with pgAdmin

REST API design

React Native best practices

Real-world authentication flows

🚀 Possible Future Enhancements

Image upload & storage

Avatar persistence in database

Recipe comments & likes

Search & filtering

JWT-based authentication

Notifications
