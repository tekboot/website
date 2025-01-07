import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skill } from '../data/Skill';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-career-topic-details',
  standalone: true,
  templateUrl: './career-topic-details.component.html',
  styleUrls: ['./career-topic-details.component.scss'],
  imports:[CommonModule]
})
export class CareerTopicDetailsComponent {
  skillName: string | null = null;
  skillsList: Skill[] | any;

  skills:any = {
    Programming: [
      {
        src: "../assets/svg/help-topics/profile.svg",
        name: 'Java',
        description: [
          'Expert in object-oriented programming with Java.',
          'Strong knowledge of Java 17 features like records and sealed classes.',
          'Proficient in building enterprise-level applications using Spring Boot.',
          'Experience in handling concurrency and multithreading effectively.',
          'Integration of Java applications with RESTful APIs and databases.',
          'Writing clean, maintainable code following SOLID principles.'
        ]
      },
      {
        src: "../assets/svg/help-topics/post.svg",
        name: 'Python',
        description: [
          'Proficient in scripting and automation using Python.',
          'Experience in data analysis and visualization with libraries like Pandas and Matplotlib.',
          'Building RESTful APIs using Flask and FastAPI frameworks.',
          'Developing machine learning models using Scikit-learn and TensorFlow.',
          'Automating repetitive tasks and enhancing productivity with Python scripts.',
          'Creating unit tests to ensure software reliability and maintainability.'
        ]
      },
      {
        src: "../assets/svg/help-topics/message.svg",
        name: 'JavaScript',
        description: [
          'Skilled in writing modern ES6+ JavaScript code.',
          'Experience with front-end frameworks like Angular and React.',
          'Building interactive web applications with responsive UI.',
          'Implementing state management using Redux and NgRx.',
          'Proficient in asynchronous programming and handling promises.',
          'Using TypeScript to enhance code quality and maintainability.'
        ]
      },
      {
        src: "../assets/svg/help-topics/feed.svg",
        name: 'C#',
        description: [
          'Experience in developing .NET applications with C#.',
          'Building RESTful APIs using ASP.NET Core.',
          'Creating cross-platform applications using .NET MAUI.',
          'Proficient in using LINQ for querying collections.',
          'Experience in Entity Framework for database interactions.',
          'Building desktop applications with WPF.'
        ]
      },
      {
        src: "../assets/svg/help-topics/security.svg",
        name: 'PHP',
        description: [
          'Proficient in developing web applications using PHP.',
          'Experience with Laravel framework for rapid application development.',
          'Building secure and scalable RESTful APIs.',
          'Integrating with MySQL and PostgreSQL databases.',
          'Implementing authentication and authorization in PHP applications.',
          'Using Composer for dependency management.'
        ]
      },
      {
        src: "../assets/svg/help-topics/video.svg",
        name: 'Go',
        description: [
          'Experience in building efficient and scalable applications with Go.',
          'Developing RESTful APIs using Gin framework.',
          'Concurrency handling using Goroutines and Channels.',
          'Writing unit tests to ensure code quality.',
          'Building CLI tools and microservices with Go.',
          'Proficient in error handling and logging.'
        ]
      }
    ],
    Backend: [
      
      {
        src: "../assets/svg/help-topics/profile.svg",
        name: 'Spring Boot',
        description: [
          'Building enterprise-level backend applications with Spring Boot.',
          'Proficient in creating REST and GraphQL APIs.',
          'Implementing security features like OAuth2 and JWT authentication.',
          'Using Spring Data JPA for database interactions.',
          'Handling asynchronous operations with Spring WebFlux.',
          'Creating microservices architecture with Spring Cloud.'
        ]      },
      {
        src: "../assets/svg/help-topics/post.svg",
        name: 'Node.js',
        description: [
          'Developing scalable backend applications with Node.js.',
          'Experience in building APIs using Express.js.',
          'Handling real-time communication with WebSockets.',
          'Using MongoDB and PostgreSQL for data storage.',
          'Implementing authentication and authorization mechanisms.',
          'Building serverless applications using AWS Lambda.'
        ]
      },
      {
        src: "../assets/svg/help-topics/message.svg",
        name: 'Django',
        description: [
          'Building secure and scalable web applications with Django.',
          'Experience in creating RESTful APIs using Django REST Framework.',
          'Handling authentication with OAuth2 and JWT.',
          'Integrating with relational databases like PostgreSQL.',
          'Using Django admin for content management.',
          'Writing unit and integration tests to ensure reliability.'
        ]
      },
      {
        src: "../assets/svg/help-topics/feed.svg",
        name: 'ASP.NET Core',
        description: [
          'Developing modern web applications with ASP.NET Core.',
          'Building APIs with minimal and MVC controllers.',
          'Implementing dependency injection and middleware.',
          'Using SignalR for real-time communication.',
          'Working with Entity Framework Core for database operations.',
          'Securing applications with Identity and JWT.'
        ]
      },
      {
        src: "../assets/svg/help-topics/security.svg",
        name: 'Ruby on Rails',
        description: [
          'Building web applications using Ruby on Rails.',
          'Creating RESTful APIs and handling JSON responses.',
          'Proficient in Active Record for database interactions.',
          'Implementing background jobs with Sidekiq.',
          'Building reusable components with Rails engines.',
          'Using RSpec for testing Rails applications.'
        ]
      },
      {
        src: "../assets/svg/help-topics/video.svg",
        name: 'Express.js',
        description: [
          'Building backend services with Express.js.',
          'Creating APIs and handling middleware.',
          'Working with databases like MongoDB and Redis.',
          'Securing applications with Helmet.js and rate limiting.',
          'Handling file uploads and downloads.',
          'Using Passport.js for authentication.'
        ]
      }
    ],
    Frontend: [
      {
        src: "../assets/svg/help-topics/profile.svg",
        name: 'Angular',
        description: [
          'Building dynamic, single-page applications with Angular.',
          'Proficient in using RxJS for reactive programming.',
          'Implementing state management with NgRx.',
          'Building reusable UI components and modules.',
          'Handling form validations and routing.',
          'Integrating with backend services via HTTP.'
        ]
      },
      {
        src: "../assets/svg/help-topics/post.svg",
        name: 'React',
        description: [
          'Creating interactive user interfaces with React.',
          'Using React Hooks for state and side-effects management.',
          'Implementing routing with React Router.',
          'Managing application state with Redux.',
          'Building reusable components using functional and class components.',
          'Optimizing performance with lazy loading and memoization.'
        ]
      },
      {
        src: "../assets/svg/help-topics/message.svg",
        name: 'Vue.js',
        description: [
          'Developing progressive web apps with Vue.js.',
          'Using Vuex for state management.',
          'Creating reusable components with Vue CLI.',
          'Handling form validations and routing.',
          'Building responsive UIs with Vuetify and BootstrapVue.',
          'Integrating with RESTful APIs.'
        ]
      },
      {
        src: "../assets/svg/help-topics/feed.svg",
        name: 'HTML & CSS',
        description: [
          'Creating semantic and accessible web pages.',
          'Building responsive layouts using Flexbox and Grid.',
          'Using CSS preprocessors like Sass and Less.',
          'Implementing animations with CSS and JavaScript.',
          'Ensuring cross-browser compatibility.',
          'Optimizing web pages for performance.'
        ]
      },
      {
        src: "../assets/svg/help-topics/security.svg",
        name: 'TypeScript',
        description: [
          'Enhancing JavaScript applications with TypeScript.',
          'Defining custom types and interfaces.',
          'Using TypeScript in Angular and React projects.',
          'Improving code quality with static type checking.',
          'Implementing generics and advanced types.',
          'Building scalable and maintainable codebases.'
        ]
      },
      {
        src: "../assets/svg/help-topics/video.svg",
        name: 'Bootstrap',
        description: [
          'Building responsive and mobile-first web pages.',
          'Using Bootstrap components for faster development.',
          'Customizing themes with Sass variables.',
          'Implementing grids and flex utilities.',
          'Ensuring cross-browser compatibility.',
          'Optimizing web pages for accessibility.'
        ]
      }
    ]
,
      Databases: [
        {
          src: "../assets/svg/help-topics/profile.svg",
          name: 'SQL Databases',
          description: [
            'Proficient in designing relational database schemas.',
            'Experience with SQL queries, joins, and stored procedures.',
            'Working with MySQL, PostgreSQL, and SQL Server.',
            'Ensuring data integrity and optimizing queries.',
            'Implementing database migrations and version control.',
            'Performing backups, recovery, and replication.'
          ]
        },
        {
          src: "../assets/svg/help-topics/post.svg",
          name: 'NoSQL Databases',
          description: [
            'Experience with document-oriented databases like MongoDB.',
            'Understanding of key-value stores such as Redis.',
            'Designing scalable data models for NoSQL databases.',
            'Working with Cassandra and DynamoDB.',
            'Implementing caching strategies to enhance performance.',
            'Integrating NoSQL databases with backend services.'
          ]
        },
        {
          src: "../assets/svg/help-topics/message.svg",
          name: 'Database Optimization',
          description: [
            'Optimizing database performance through indexing.',
            'Identifying and resolving slow queries.',
            'Implementing partitioning and sharding techniques.',
            'Monitoring and maintaining database health.',
            'Using tools like pgAdmin and MySQL Workbench.',
            'Ensuring high availability and disaster recovery.'
          ]
        },
        {
          src: "../assets/svg/help-topics/feed.svg",
          name: 'Database Security',
          description: [
            'Implementing access control and user management.',
            'Encrypting sensitive data at rest and in transit.',
            'Preventing SQL injection attacks.',
            'Using role-based access control (RBAC).',
            'Auditing and logging database activities.',
            'Ensuring compliance with data protection regulations.'
          ]
        },
        {
          src: "../assets/svg/help-topics/security.svg",
          name: 'Database Migration',
          description: [
            'Planning and executing database migrations.',
            'Using tools like Liquibase and Flyway.',
            'Handling schema changes with minimal downtime.',
            'Migrating data between different database systems.',
            'Automating migration processes.',
            'Testing and validating migrations to ensure accuracy.'
          ]
        },
        {
          src: "../assets/svg/help-topics/video.svg",
          name: 'Cloud Databases',
          description: [
            'Working with cloud-based databases like AWS RDS and Azure SQL.',
            'Setting up and managing database instances in the cloud.',
            'Ensuring scalability and high availability.',
            'Implementing backup and recovery strategies in the cloud.',
            'Monitoring and optimizing cloud database performance.',
            'Securing cloud-based databases against threats.'
          ]
        }
      ],
      Cloud: [
        {
          src: "../assets/svg/help-topics/profile.svg",
          name: 'AWS',
          description: [
            'Deploying and managing cloud infrastructure using AWS.',
            'Working with services like EC2, S3, RDS, and Lambda.',
            'Implementing CI/CD pipelines with AWS CodePipeline.',
            'Ensuring security with IAM and encryption.',
            'Monitoring and optimizing cloud resources.',
            'Automating infrastructure with AWS CloudFormation.'
          ]
        },
        {
          src: "../assets/svg/help-topics/post.svg",
          name: 'Azure',
          description: [
            'Managing cloud resources using Microsoft Azure.',
            'Working with services like Azure App Service and Azure Functions.',
            'Implementing Azure DevOps for CI/CD.',
            'Ensuring security with Azure Active Directory.',
            'Setting up virtual networks and storage accounts.',
            'Monitoring and optimizing Azure resources.'
          ]
        },
        {
          src: "../assets/svg/help-topics/message.svg",
          name: 'Google Cloud Platform',
          description: [
            'Deploying applications on Google Cloud Platform (GCP).',
            'Using services like Compute Engine, Cloud Storage, and BigQuery.',
            'Implementing Kubernetes with Google Kubernetes Engine (GKE).',
            'Ensuring security and compliance with GCP tools.',
            'Monitoring and logging with Stackdriver.',
            'Building serverless applications with Cloud Functions.'
          ]
        },
        {
          src: "../assets/svg/help-topics/feed.svg",
          name: 'CI/CD',
          description: [
            'Setting up continuous integration and delivery pipelines.',
            'Using tools like Jenkins, GitLab CI/CD, and GitHub Actions.',
            'Automating testing, building, and deployment processes.',
            'Implementing rollback strategies for failed deployments.',
            'Ensuring zero-downtime deployments.',
            'Monitoring and improving CI/CD performance.'
          ]
        },
        {
          src: "../assets/svg/help-topics/security.svg",
          name: 'Docker',
          description: [
            'Building and managing containerized applications with Docker.',
            'Creating Docker images and managing containers.',
            'Working with Docker Compose for multi-container setups.',
            'Using Docker Hub for image distribution.',
            'Implementing security best practices for Docker containers.',
            'Optimizing Docker images for performance.'
          ]
        },
        {
          src: "../assets/svg/help-topics/video.svg",
          name: 'Kubernetes',
          description: [
            'Deploying and managing containerized applications with Kubernetes.',
            'Working with Kubernetes objects like Pods, Services, and Ingress.',
            'Ensuring high availability with Kubernetes clusters.',
            'Implementing autoscaling and load balancing.',
            'Monitoring and logging Kubernetes clusters.',
            'Securing Kubernetes deployments.'
          ]
        }
      ],
      Methodologies: [
        {
          src: "../assets/svg/help-topics/profile.svg",
          name: 'Agile',
          description: [
            'Practicing Agile methodologies for software development.',
            'Working with Scrum and Kanban frameworks.',
            'Implementing iterative and incremental development.',
            'Facilitating daily stand-ups, sprint planning, and retrospectives.',
            'Ensuring continuous improvement and adaptability.',
            'Using Agile tools like Jira and Azure DevOps.'
          ]
        },
        {
          src: "../assets/svg/help-topics/post.svg",
          name: 'Scrum',
          description: [
            'Practicing the Scrum framework for project management.',
            'Defining roles like Scrum Master, Product Owner, and Developers.',
            'Managing the product backlog and sprint backlog.',
            'Facilitating sprint planning, review, and retrospective.',
            'Using Scrum artifacts like Product Backlog and Burndown Chart.',
            'Ensuring transparency, inspection, and adaptation.'
          ]
        },
        {
          src: "../assets/svg/help-topics/message.svg",
          name: 'PMP',
          description: [
            'Applying Project Management Professional (PMP) principles.',
            'Understanding the five process groups and ten knowledge areas.',
            'Managing project scope, time, cost, quality, and risks.',
            'Using tools and techniques like Gantt charts and critical path method.',
            'Ensuring stakeholder engagement and communication.',
            'Delivering projects within scope, time, and budget.'
          ]
        },
        {
          src: "../assets/svg/help-topics/feed.svg",
          name: 'CI/CD Methodologies',
          description: [
            'Implementing CI/CD methodologies for continuous integration and delivery.',
            'Using DevOps practices to streamline software delivery.',
            'Automating build, test, and deployment processes.',
            'Ensuring fast feedback loops to catch bugs early.',
            'Improving collaboration between development and operations teams.',
            'Reducing time to market with CI/CD best practices.'
          ]
        },
        {
          src: "../assets/svg/help-topics/security.svg",
          name: 'DevOps',
          description: [
            'Practicing DevOps principles for efficient software delivery.',
            'Automating infrastructure provisioning and management.',
            'Using Infrastructure as Code (IaC) with tools like Terraform.',
            'Ensuring continuous monitoring and feedback.',
            'Improving collaboration between development and operations teams.',
            'Ensuring scalability, reliability, and security.'
          ]
        },
        {
          src: "../assets/svg/help-topics/video.svg",
          name: 'Test-Driven Development (TDD)',
          description: [
            'Practicing Test-Driven Development for quality code.',
            'Writing unit tests before code implementation.',
            'Ensuring high code coverage and reduced bugs.',
            'Using testing frameworks like JUnit and NUnit.',
            'Refactoring code with confidence using tests.',
            'Improving code maintainability and reliability.'
          ]
        }
      ]
    };
    

  getSkillsByCategory(skillCategory:any) {
    // Check if the category exists in the skills object
    if (this.skills[skillCategory]) {
      // Return the list of skills for the given category
      return this.skills[skillCategory];
    } else {
      console.error('Skill category not found.');
      return [];
    }
  }
  

  constructor(private route: ActivatedRoute) {
    this.skillName = this.route.snapshot.paramMap.get('skill');   
    this.skillsList = this.getSkillsByCategory(this.skillName);
  }
}
