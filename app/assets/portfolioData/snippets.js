const snippets =[
    {
        language: "html",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind Page</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100">
  <header class="bg-blue-900 text-white py-4">
    <nav class="container mx-auto flex justify-between">
      <h1 class="text-xl font-bold">My Site</h1>
      <ul class="flex space-x-4">
        <li><a href="#" class="hover:text-blue-300">Home</a></li>
        <li><a href="#" class="hover:text-blue-300">About</a></li>
      </ul>
    </nav>
  </header>
  <main class="container mx-auto py-6">
    <section class="bg-white p-4 rounded-lg shadow">
      <h2 class="text-lg font-semibold">Welcome</h2>
      <p class="text-gray-600">Explore our services.</p>
    </section>
  </main>
</body>
</html>`
    },
    {
        language: "css",
        code: `:root {
  --primary: #2563eb;
}

body {
  font-family: 'Inter', sans-serif;
  background: #f3f4f6;
}

.card {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-3px);
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner {
  animation: spin 1s linear infinite;
}`
    },
    {
        language: "javascript",
        code: `async function fetchUser(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    if (!response.ok) throw new Error('Fetch failed');
    const data = await response.json();
    return {
      success: true,
      user: {
        id: data.id,
        name: data.name,
        email: data.email
      }
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

fetchUser(123).then(console.log);`
    },
    {
        language: "jsx",
        code: `import React, { useState, useEffect } from 'react';

const UserCard = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(\`https://api.example.com/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Error</div>;

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-bold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
    </div>
  );
};

export default UserCard;`
    },
    {
        language: "javascript",
        code: `import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

const client = new MongoClient(process.env.MONGODB_URI);
const clientPromise = client.connect();

export async function GET(request) {
  try {
    const db = (await clientPromise).db('myapp');
    const users = db.collection('users');
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    
    const user = await users.findOne({ id: parseInt(userId) });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}`
    },
    {
        language: "python",
        code: `from datetime import datetime
from typing import Optional

class Task:
    def __init__(self, id: int, title: str, description: str):
        self.id = id
        self.title = title
        self.description = description
        self.completed = False
        self.created_at = datetime.now()

    def complete(self):
        self.completed = True

class TaskManager:
    def __init__(self):
        self.tasks = []
        self.next_id = 1

    def add_task(self, title: str, description: str) -> Task:
        task = Task(self.next_id, title, description)
        self.tasks.append(task)
        self.next_id += 1
        return task

# Usage
manager = TaskManager()
task = manager.add_task("Meeting", "Team sync")
task.complete()`
    },
    {
        language: "typescript",
        code: `interface Response<T> {
  success: boolean;
  data?: T;
  error?: string;
}

function processItems<T>(items: T[], transformer: (item: T) => T): Response<T[]> {
  try {
    const processed = items.map(transformer);
    return { success: true, data: processed };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

// Example usage
interface User { id: number; name: string; }
const users: User[] = [{ id: 1, name: "John" }, { id: 2, name: "Jane" }];
const result = processItems(users, user => ({
  ...user,
  name: user.name.toUpperCase()
}));
console.log(result);
`
    },
    {
        language: "javascript",
        code: `const express = require('express');
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next();
});

app.get('/api/users', async (req, res) => {
  const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
  res.json({ success: true, data: users });
});

app.post('/api/users', async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name required' });
  res.status(201).json({ success: true, data: { id: Date.now(), name } });
});

app.use((error, req, res, next) => {
  res.status(500).json({ error: error.message });
});

app.listen(3000, () => console.log('Server running on port 3000'));`
    }
];
export default snippets