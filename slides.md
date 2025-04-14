---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: Accelerating Product Development
mdc: true
author: Matt Wagner <matt@redleg.dev>
keywords: vibe coding, cursor, AI tools
download: true
---

# Accelerating Product Development
## Leveraging Low-Code, No-Code, and Generative AI

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://redleg.dev" target="_blank" alt="Red Leg Dev" title="Red Leg Dev"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-globe />
  </a>
</div>

---
layout: image-right
image: https://images.unsplash.com/photo-1568716353609-12ddc5c67f04?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---

# Today's Agenda

<div class="text-xl">
<v-clicks>

- The Rise of AI Development Tools
- Use Cases for Large Language Models (LLMs)
- Leveraging LLMs for Product Management
- Hands-on Demos and Workflows
- Applying Lessons to the Business

</v-clicks>
</div>

<div class="mt-8 text-xl">
  <v-click>
    <p class="font-medium">Let's explore how AI is transforming development workflows!</p>
  </v-click>
</div>

---
transition: fade-out
---

# The Rise of AI Development Tools

<div grid="~ cols-2 gap-4">
<div>

## A. Current Landscape
- Explosion of AI-powered development tools
- Shift from traditional coding to AI-assisted
- Major players: OpenAI, GitHub, Microsoft, Google
- Focus on productivity and augmentation

</div>
<div>

## B. Key Trends & Drivers
- Advancements in large language models
- Increasing development costs
- Talent shortages in tech
- Need for faster time-to-market
- Digital transformation acceleration

</div>
</div>

<div class="mt-8">
  <v-click>
    <div class="bg-blue-100 dark:bg-blue-800 p-4 rounded-lg">
      <h3 class="text-blue-700 dark:text-blue-200 font-bold">C. Benefits & Challenges</h3>
      <p class="text-sm">Benefits: Faster development, reduced costs, democratized coding. Challenges: Learning curve, quality control, overreliance, security concerns.</p>
    </div>
  </v-click>
</div>

---
layout: two-cols
class: px-2
---

# Use Cases for Large Language Models

<div class="text-sm">
<v-clicks>

- **A. Code Generation & Automation**
  - Writing boilerplate code
  - Completing functions from comments
  - Refactoring and optimization
  - Test generation

- **B. Natural Language Processing**
  - Converting requirements to code
  - Documentation generation
  - Bug fixes from descriptions
  - API exploration via conversation

</v-clicks>
</div>

::right::

<div class="ml-4">

<div class="text-sm">
<v-clicks>

- **C. Ideation & Problem-Solving**
  - Architecture suggestions
  - Design pattern recommendations
  - Algorithm selection
  - Technical debt identification

</v-clicks>
</div>

<v-click>
<div class="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 mt-4">
  <div class="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4">
    <h3 class="font-bold">Real-World Impact</h3>
  </div>
  <div class="p-4 bg-white dark:bg-gray-800">
    <ul class="space-y-2 text-sm">
      <li>🚀 40-80% faster code completion</li>
      <li>👥 Junior devs perform at senior levels</li>
      <li>💡 More innovative solutions</li>
      <li>📝 Reduced documentation time</li>
      <li>🔄 Quicker iteration cycles</li>
    </ul>
  </div>
</div>
</v-click>

</div>

---
transition: slide-up
---

# Leveraging LLMs for Product Management

<div class="grid grid-cols-3 gap-4 mt-6">

<v-click>
<div class="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
  <h3 class="font-bold text-blue-700 dark:text-blue-300">A. Requirement Gathering</h3>
  <ul class="text-sm mt-2">
    <li>Generating detailed requirements docs</li>
    <li>Converting stakeholder interviews to specs</li>
    <li>Surfacing edge cases and considerations</li>
    <li>Creating acceptance criteria</li>
  </ul>
</div>
</v-click>

<v-click>
<div class="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
  <h3 class="font-bold text-green-700 dark:text-green-300">B. User Story Creation</h3>
  <ul class="text-sm mt-2">
    <li>Crafting user stories from objectives</li>
    <li>Generating acceptance criteria</li>
    <li>Refining and prioritizing the backlog</li>
    <li>Estimating complexity and effort</li>
  </ul>
</div>
</v-click>

<v-click>
<div class="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
  <h3 class="font-bold text-purple-700 dark:text-purple-300">C. Product Roadmapping</h3>
  <ul class="text-sm mt-2">
    <li>Suggesting roadmap milestones</li>
    <li>Identifying dependencies</li>
    <li>Visualizing the product timeline</li>
    <li>Aligning features with strategic goals</li>
  </ul>
</div>
</v-click>

</div>

<div class="mt-8">
<v-click>
<div class="bg-amber-50 dark:bg-amber-900 p-4 rounded-lg flex items-center">
  <div class="text-4xl mr-4">💡</div>
  <div>
    <p class="font-medium">LLMs enable product teams to focus on strategic decisions while automating the creation and management of product artifacts.</p>
  </div>
</div>
</v-click>
</div>

---
layout: section
---

# Hands-on Demos and Workflows

Let's explore specific tools that can accelerate our development

---
layout: default
---

# A. GitHub Copilot

<div class="grid grid-cols-2 gap-4">
  <div class="text-sm">
  <v-clicks>

  - **For Coding & Refactoring**
    - Real-time code suggestions
    - Works in your existing IDE

  - **Language & Framework Support**
    - Multi-language compatibility
    - Framework-aware completions

  - **Context-Aware Intelligence**
    - Understands your codebase
    - Adapts to your coding style

  </v-clicks>
  <div class="mt-2">
    <a href="https://github.com/features/copilot" target="_blank" class="text-blue-500 hover:underline">github.com/features/copilot</a>
  </div>
  </div>
  
  <div class="flex items-center justify-center">
    <video 
      src="https://github.githubassets.com/assets/hero-animation-lg-315ab307b8a1.mp4"
      autoplay
      loop
      muted
      class="rounded-lg shadow-xl w-full max-w-md"
    ></video>
  </div>
</div>

---
layout: default
---

# B. Cursor

<div class="grid grid-cols-2 gap-4">
  <div class="text-sm">
  <v-clicks>

  - **AI-Enhanced Editor**
    - Built on VS Code platform
    - Optimized for AI assistance

  - **Powerful Agent Mode**
    - Makes changes to multiple files
    - Runs terminal commands
    - Reads & responds to error outputs

  - **Intelligent Context**
    - Understands your full project
    - Accesses documentation & GitHub
    - Autonomously solves complex tasks

  </v-clicks>
  <div class="mt-2">
    <a href="https://www.cursor.com/" target="_blank" class="text-blue-500 hover:underline">cursor.com</a>
  </div>
  </div>
  
  <div class="flex items-center justify-center">
    <img 
      src="/images/cursor-screenshot.png"
      alt="Cursor IDE screenshot showing AI-assisted coding"
      class="rounded-lg shadow-xl w-full"
    />
  </div>
</div>

---
layout: default
---

# C. Lovable.dev

<div class="grid grid-cols-2 gap-4">
  <div class="text-sm">
  <v-clicks>

  - **Idea to App in Seconds**
    - Complete app generation
    - React & Next.js focused

  - **Superhuman Full Stack Engineer**
    - Natural language to functioning code
    - Handles complex requirements

  - **End-to-End Solutions**
    - Rapid prototyping
    - Automatic deployment
    - Ongoing maintenance

  </v-clicks>
  <div class="mt-2">
    <a href="https://lovable.dev/" target="_blank" class="text-blue-500 hover:underline">lovable.dev</a>
  </div>
  </div>
  
  <div class="flex items-center justify-center">
    <img 
      src="/images/lovable-screenshot.png"
      alt="Lovable.dev interface showing AI app generation"
      class="rounded-lg shadow-xl w-full"
    />
  </div>
</div>

---

# Additional Tools Worth Exploring

<div class="grid grid-cols-3 gap-4 mt-4">

<v-click>
<div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
  <div class="bg-blue-600 text-white p-2 text-center">
    <h3 class="font-bold text-sm">Retool</h3>
  </div>
  <div class="p-3 bg-white dark:bg-gray-800">
    <p class="text-xs">Internal tool builder with drag-and-drop interface, custom JavaScript capability, and database connections.</p>
  </div>
</div>
</v-click>

<v-click>
<div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
  <div class="bg-purple-600 text-white p-2 text-center">
    <h3 class="font-bold text-sm">Microsoft Power Apps</h3>
  </div>
  <div class="p-3 bg-white dark:bg-gray-800">
    <p class="text-xs">Low-code platform from Microsoft for building business apps with pre-built templates, AI capabilities, and seamless Microsoft 365 integration.</p>
  </div>
</div>
</v-click>

<v-click>
<div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
  <div class="bg-green-600 text-white p-2 text-center">
    <h3 class="font-bold text-sm">Airtable</h3>
  </div>
  <div class="p-3 bg-white dark:bg-gray-800">
    <p class="text-xs">Spreadsheet-database hybrid that combines the simplicity of a spreadsheet with the power of a database for creating custom solutions.</p>
  </div>
</div>
</v-click>

</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<v-click>
<div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
  <div class="bg-red-600 text-white p-2 text-center">
    <h3 class="font-bold text-sm">Power Automate</h3>
  </div>
  <div class="p-3 bg-white dark:bg-gray-800">
    <p class="text-xs">Microsoft's workflow automation tool that connects to hundreds of data sources with AI-powered assistance and templates.</p>
  </div>
</div>
</v-click>

<v-click>
<div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
  <div class="bg-yellow-600 text-white p-2 text-center">
    <h3 class="font-bold text-sm">Zapier</h3>
  </div>
  <div class="p-3 bg-white dark:bg-gray-800">
    <p class="text-xs">Cloud-based integration platform that connects apps and automates workflows without requiring any code.</p>
  </div>
</div>
</v-click>

<v-click>
<div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
  <div class="bg-indigo-600 text-white p-2 text-center">
    <h3 class="font-bold text-sm">n8n</h3>
  </div>
  <div class="p-3 bg-white dark:bg-gray-800">
    <p class="text-xs">Open-source workflow automation tool with a focus on extensibility and fair-code distribution.</p>
  </div>
</div>
</v-click>

</div>

---
transition: fade
---

# Key Advantage: Real, Readable, Ownable Code

<div class="grid grid-cols-2 gap-4 mt-4">
  <div class="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
    <h3 class="font-bold text-lg text-green-700 dark:text-green-300">Generative AI Code Tools</h3>
    <ul class="mt-2 space-y-2">
      <li class="flex items-start">
        <span class="text-green-500 mr-2">✓</span>
        <div class="text-sm"><strong>Full Code Ownership</strong> — Generated code belongs to you, not locked to any platform</div>
      </li>
      <li class="flex items-start">
        <span class="text-green-500 mr-2">✓</span>
        <div class="text-sm"><strong>Standard Languages & Frameworks</strong> — Uses industry standard technologies</div>
      </li>
      <li class="flex items-start">
        <span class="text-green-500 mr-2">✓</span>
        <div class="text-sm"><strong>Unlimited Customization</strong> — Modify any part of the code without restrictions</div>
      </li>
      <li class="flex items-start">
        <span class="text-green-500 mr-2">✓</span>
        <div class="text-sm"><strong>Future-Proof</strong> — No vendor lock-in means easy migration and maintenance</div>
      </li>
    </ul>
  </div>
  
  <div class="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
    <h3 class="font-bold text-lg text-red-700 dark:text-red-300">Traditional Low/No-Code Tools</h3>
    <ul class="mt-2 space-y-2">
      <li class="flex items-start">
        <span class="text-red-500 mr-2">✗</span>
        <div class="text-sm"><strong>Platform Lock-In</strong> — Solutions tied to specific vendor platforms</div>
      </li>
      <li class="flex items-start">
        <span class="text-red-500 mr-2">✗</span>
        <div class="text-sm"><strong>Limited Customization</strong> — Restricted to what the platform allows</div>
      </li>
      <li class="flex items-start">
        <span class="text-red-500 mr-2">✗</span>
        <div class="text-sm"><strong>Proprietary Systems</strong> — Often use custom visual languages</div>
      </li>
      <li class="flex items-start">
        <span class="text-red-500 mr-2">✗</span>
        <div class="text-sm"><strong>Scaling Challenges</strong> — Hit walls when requirements grow</div>
      </li>
    </ul>
  </div>
</div>

<div class="mt-4 bg-blue-50 dark:bg-blue-900 p-3 rounded-lg">
  <p class="font-medium text-center text-sm">
    <span class="text-blue-700 dark:text-blue-300">The Bottom Line:</span> Generative AI tools give you the speed of no-code with the power and flexibility of custom development
  </p>
</div>

---
transition: fade
---

# Pricing & Investment Comparison

<div class="grid grid-cols-3 gap-4">
  <div class="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
    <div class="bg-blue-600 text-white p-2 text-center">
      <h3 class="font-bold">GitHub Copilot</h3>
    </div>
    <div class="p-3">
      <ul class="space-y-1 text-sm">
        <li><strong>Individual:</strong> $10/month</li>
        <li><strong>Business:</strong> $19/user/month</li>
        <li><strong>Enterprise:</strong> $39/user/month</li>
        <li class="text-xs text-gray-600 dark:text-gray-400 mt-2">Free for students & OSS</li>
      </ul>
    </div>
  </div>

  <div class="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
    <div class="bg-purple-600 text-white p-2 text-center">
      <h3 class="font-bold">Cursor</h3>
    </div>
    <div class="p-3">
      <ul class="space-y-1 text-sm">
        <li><strong>Free Tier:</strong> Core features</li>
        <li><strong>Pro:</strong> $20/user/month</li>
        <li><strong>Business:</strong> $40/user/month</li>
        <li class="text-xs text-gray-600 dark:text-gray-400 mt-2">Pro: advanced models</li>
      </ul>
    </div>
  </div>

  <div class="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
    <div class="bg-green-600 text-white p-2 text-center">
      <h3 class="font-bold">Lovable.dev</h3>
    </div>
    <div class="p-3">
      <ul class="space-y-1 text-sm">
        <li><strong>Starter:</strong> $20/month</li>
        <li><strong>Pro:</strong> $50/month</li>
        <li><strong>Coming Soon:</strong> Team tier</li>
        <li class="text-xs text-gray-600 dark:text-gray-400 mt-2">Includes hosting of apps</li>
      </ul>
    </div>
  </div>
</div>

<div class="mt-4 bg-green-50 dark:bg-green-900 p-4 rounded-lg">
  <h3 class="font-bold text-green-700 dark:text-green-300">Return on Investment Considerations</h3>
  <div class="grid grid-cols-2 gap-4 mt-2">
    <div>
      <ul class="text-sm space-y-2">
        <li class="flex items-start">
          <span class="text-green-500 mr-2">✓</span>
          <span><strong>Developer Productivity</strong> — 20-30% increase in output and velocity</span>
        </li>
        <li class="flex items-start">
          <span class="text-green-500 mr-2">✓</span>
          <span><strong>Code Quality</strong> — Improved consistency and fewer bugs</span>
        </li>
      </ul>
    </div>
    <div>
      <ul class="text-sm space-y-2">
        <li class="flex items-start">
          <span class="text-green-500 mr-2">✓</span>
          <span><strong>Onboarding</strong> — Faster ramp-up for new team members</span>
        </li>
        <li class="flex items-start">
          <span class="text-green-500 mr-2">✓</span>
          <span><strong>Innovation</strong> — More time for solving complex business problems</span>
        </li>
      </ul>
    </div>
  </div>
</div>

---
transition: slide-up
---

# The Power of MCP: Expanding AI Integration

<div class="grid grid-cols-2 gap-6 mt-4">
  <div>
    <h3 class="font-bold text-lg mb-2">What is Model Context Protocol (MCP)?</h3>
    <div class="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
      <p class="text-sm">A standardized protocol that allows AI models to interact with external tools, services, and environments through defined interfaces.</p>
      <p class="text-sm mt-2">Think of it as an "API for AI" that enables LLMs to connect with virtually any service or system.</p>
    </div>
    
    <h3 class="font-bold text-lg mt-4 mb-2">Key Capabilities</h3>
    <ul class="text-sm space-y-2">
      <li class="flex items-start">
        <span class="text-blue-500 mr-2">→</span>
        <span><strong>Tool Usage</strong> — Models can call functions, APIs, and services</span>
      </li>
      <li class="flex items-start">
        <span class="text-blue-500 mr-2">→</span>
        <span><strong>File System Access</strong> — Read, write, and manage files</span>
      </li>
      <li class="flex items-start">
        <span class="text-blue-500 mr-2">→</span>
        <span><strong>Web Interaction</strong> — Browse websites, take screenshots</span>
      </li>
    </ul>
  </div>
  
  <div>
    <h3 class="font-bold text-lg mb-2">Real-World Applications</h3>
    <div class="grid grid-cols-2 gap-4">
      <div class="bg-purple-50 dark:bg-purple-900 p-3 rounded-lg">
        <h4 class="font-bold text-purple-700 dark:text-purple-300 text-sm">Development</h4>
        <ul class="text-xs mt-1 space-y-1">
          <li>• Terminal command execution</li>
          <li>• Repository management</li>
          <li>• Debugging assistance</li>
        </ul>
      </div>
      
      <div class="bg-green-50 dark:bg-green-900 p-3 rounded-lg">
        <h4 class="font-bold text-green-700 dark:text-green-300 text-sm">Integration</h4>
        <ul class="text-xs mt-1 space-y-1">
          <li>• Connect to databases</li>
          <li>• Pull from data warehouses</li>
          <li>• Access cloud services</li>
        </ul>
      </div>
      
      <div class="bg-amber-50 dark:bg-amber-900 p-3 rounded-lg">
        <h4 class="font-bold text-amber-700 dark:text-amber-300 text-sm">Automation</h4>
        <ul class="text-xs mt-1 space-y-1">
          <li>• Workflow orchestration</li>
          <li>• CI/CD pipeline integration</li>
          <li>• Multi-step task handling</li>
        </ul>
      </div>
      
      <div class="bg-red-50 dark:bg-red-900 p-3 rounded-lg">
        <h4 class="font-bold text-red-700 dark:text-red-300 text-sm">Analysis</h4>
        <ul class="text-xs mt-1 space-y-1">
          <li>• Performance auditing</li>
          <li>• Accessibility checking</li>
          <li>• Security scanning</li>
        </ul>
      </div>
    </div>
    
    <div class="mt-4 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
      <h4 class="font-bold mb-1">Why It Matters</h4>
      <p class="text-xs">MCP transforms AI tools from isolated assistants to powerful agents that can interact with your entire tech ecosystem, dramatically expanding their utility and impact.</p>
    </div>
  </div>
</div>

---

# Apply These Lessons to the Business

<div class="grid grid-cols-2 gap-4 mt-4">

<v-click>
<div class="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
  <h3 class="font-bold text-lg text-blue-700 dark:text-blue-300">A. Streamlining Our Processes</h3>
  <p class="mt-2 text-sm">Identifying specific processes in your workflow that could benefit from AI tools: requirements documentation, code reviews, testing, and deployment.</p>
  <div class="mt-2 text-xs font-medium text-blue-700 dark:text-blue-300">Example: Using AI to generate test cases based on user stories</div>
</div>
</v-click>

<v-click>
<div class="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
  <h3 class="font-bold text-lg text-green-700 dark:text-green-300">B. Evaluating & Integrating Tools</h3>
  <p class="mt-2 text-sm">Creating a framework for evaluating AI tools based on your specific needs, security requirements, and integration capabilities.</p>
  <div class="mt-2 text-xs font-medium text-green-700 dark:text-green-300">Example: Pilot of GitHub Copilot for a sprint cycle</div>
</div>
</v-click>

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<v-click>
<div class="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
  <h3 class="font-bold text-lg text-purple-700 dark:text-purple-300">C. Upskilling Our Teams</h3>
  <p class="mt-2 text-sm">Developing a training program for product and development teams to effectively leverage AI tools and prompt engineering.</p>
  <div class="mt-2 text-xs font-medium text-purple-700 dark:text-purple-300">Example: Lunch & learn sessions on prompt crafting</div>
</div>
</v-click>

<v-click>
<div class="bg-amber-50 dark:bg-amber-900 p-4 rounded-lg">
  <h3 class="font-bold text-lg text-amber-700 dark:text-amber-300">D. Measuring Impact</h3>
  <p class="mt-2 text-sm">Establishing KPIs to measure the effectiveness of AI tools on development velocity, quality, and team satisfaction.</p>
  <div class="mt-2 text-xs font-medium text-amber-700 dark:text-amber-300">Example: Compare sprint velocity before and after implementation</div>
</div>
</v-click>

</div>

---
layout: center
class: text-center
---

# Next Steps

<div class="grid grid-cols-3 gap-8 mt-8">

<v-click>
<div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg flex flex-col items-center">
  <div class="text-3xl mb-4">🧪</div>
  <h3 class="font-bold mb-2">Pilot Project</h3>
  <p class="text-sm">Select a feature or sprint to implement AI tools</p>
</div>
</v-click>

<v-click>
<div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg flex flex-col items-center">
  <div class="text-3xl mb-4">🎓</div>
  <h3 class="font-bold mb-2">Training</h3>
  <p class="text-sm">Schedule hands-on workshops for the team</p>
</div>
</v-click>

<v-click>
<div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg flex flex-col items-center">
  <div class="text-3xl mb-4">📊</div>
  <h3 class="font-bold mb-2">Measure Impact</h3>
  <p class="text-sm">Track key metrics to evaluate effectiveness</p>
</div>
</v-click>

</div>

<div class="mt-12">
<v-click>
  <a href="mailto:youremail@company.com" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
    Questions? Let's discuss further after the session
  </a>
</v-click>
</div>

---
layout: center
class: text-center
---

# Brought to you by Red Leg Dev

<div class="mt-8">
  <a href="https://redleg.dev" target="_blank" class="text-xl font-bold text-blue-500 hover:text-blue-600 transition-colors">
    redleg.dev
  </a>
</div>

<div class="mt-4 text-sm opacity-75">
  Empowering developers with innovative solutions
</div>

---
layout: end
---

# Thank You

Questions?
Questions?