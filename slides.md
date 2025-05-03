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

<div class="text-lg mb-4">
<v-clicks>

- The Rapidly Evolving Landscape
- Leveraging LLMs for Product Management
- Use Cases for Large Language Models
- AI Development Tools & Demos
- Applying Lessons to the Business

</v-clicks>
</div>

<div class="mt-4 text-xl">
  <v-click>
    <p class="font-medium">Let's explore how AI is transforming development workflows!</p>
  </v-click>
</div>

---
transition: fade-out
layout: default
---

# A Rapidly Evolving Landscape

<div class="text-center mb-4">
Building a presentation about AI development tools is like trying to hit a moving target.
</div>

<div class="grid grid-cols-3 gap-4">
  <div>
    <h3 class="font-bold text-base mb-2">Recent Developments</h3>
    <ul class="text-sm space-y-1">
      <li>VSCode & Visual Studio adding agent features</li>
      <li>New AI models with improved coding abilities</li>
      <li>Tool integration evolving daily via MCP</li>
    </ul>
  </div>
  
  <div>
    <h3 class="font-bold text-base mb-2">Why It Matters</h3>
    <p class="text-sm">Today's cutting-edge will be tomorrow's baseline.</p>
    <p class="text-sm italic mt-1">Companies that adapt quickly to these evolving tools will gain significant competitive advantages.</p>
  </div>

  <div>
    <h3 class="font-bold text-base mb-2">Staying Current</h3>
    <ul class="text-sm space-y-1">
      <li>Regular tool evaluation and testing</li>
      <li>Continuous learning and adaptation</li>
      <li>Monitoring industry developments</li>
      <li>Experimenting with emerging solutions</li>
    </ul>
  </div>
</div>

<div class="mt-6 bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
  <p class="text-sm font-medium text-center">
    The key is not just adopting these tools, but building a culture of continuous innovation and adaptation.
  </p>
</div>

---
transition: fade-out
---

# Industry Perspective: Shopify's CEO on AI Adoption

<div class="bg-green-50 dark:bg-green-800 p-4 rounded-lg mb-4">
  <p class="italic text-sm">"Using AI effectively is now a fundamental expectation of everyone at Shopify... Frankly, I don't think it's feasible to opt out of learning the skill of applying AI in your craft."</p>
  <p class="text-right text-xs">— Tobi Lütke, CEO of Shopify</p>
</div>

<div class="grid grid-cols-1 gap-4">  
  <div>
    <h3 class="font-bold text-base mb-2">Implementation Strategy</h3>
    <ul class="text-sm space-y-2">
      <li>AI exploration dominates the prototype phase</li>
      <li>Self-directed learning with knowledge sharing</li>
      <li>Provide access to cutting-edge AI tools</li>
      <li>Teams must demonstrate why AI can't solve before requesting more resources</li>
    </ul>
  </div>
</div>

---
transition: fade
---

# Industry Perspective: The Rise of AI-First Development

<div class="flex flex-col items-center mb-6">
  <div class="bg-purple-50 dark:bg-purple-800 p-4 rounded-lg w-3/4 text-center">
    <p class="italic text-sm">"It's not AI's job to prove it's better than you. It's your job to get better using AI."</p>
    <p class="text-right text-xs mt-2">— Steve Yegge, <a href="https://sourcegraph.com/blog/revenge-of-the-junior-developer" target="_blank" class="text-blue-500 hover:underline">Sourcegraph</a></p>
  </div>
</div>

<div class="grid grid-cols-2 gap-8 px-8">
  <div class="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
    <h3 class="font-bold text-base mb-2 text-center text-blue-700 dark:text-blue-300">Key Observations</h3>
    <ul class="text-sm space-y-2">
      <li>Junior developers leading AI adoption</li>
      <li>Rapid shift from completions to agents</li>
      <li>Traditional coding becoming obsolete</li>
      <li>AI competency becoming mandatory</li>
    </ul>
  </div>
  
  <div class="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
    <h3 class="font-bold text-base mb-2 text-center text-green-700 dark:text-green-300">Future Implications</h3>
    <ul class="text-sm space-y-2">
      <li>Engineers will focus on agent management</li>
      <li>Vast productivity gains expected</li>
      <li>More ambitious software projects</li>
      <li>Resistance to AI = career risk</li>
    </ul>
  </div>
</div>

<div class="absolute bottom-4 right-4 text-xs text-gray-500">
  <a href="https://sourcegraph.com/blog/revenge-of-the-junior-developer" target="_blank" class="hover:underline">Read the full article →</a>
</div>

---
transition: fade-out
---

<div class="flex justify-center mb-2">
  <img src="/images/ai-coding-evolution.avif" alt="Evolution of AI Coding Strategies graph showing progression from 2022 to 2027" class="w-3/5" />
</div>

<div class="grid grid-cols-3 gap-2 px-4">
  <div class="bg-green-50 dark:bg-green-900 p-2 rounded-lg">
    <h3 class="font-bold text-xs text-center text-green-700 dark:text-green-300">2022-2023</h3>
    <p class="text-xs mt-0.5">Code completions dominate, offering real-time suggestions while coding. Traditional programming begins decline.</p>
  </div>

  <div class="bg-purple-50 dark:bg-purple-900 p-2 rounded-lg">
    <h3 class="font-bold text-xs text-center text-purple-700 dark:text-purple-300">2024-2025</h3>
    <p class="text-xs mt-0.5">Chat-based programming rises, enabling natural language interactions. Coding agents emerge as powerful alternatives.</p>
  </div>

  <div class="bg-blue-50 dark:bg-blue-900 p-2 rounded-lg">
    <h3 class="font-bold text-xs text-center text-blue-700 dark:text-blue-300">2026-2027</h3>
    <p class="text-xs mt-0.5">Agent clusters and fleets become dominant, managing multiple AI agents for complex development tasks.</p>
  </div>
</div>

---
layout: two-cols
---

# Use Cases for Large Language Models

<div class="text-sm">

- **Code Generation & Automation**
  - Writing boilerplate code
  - Completing functions from comments
  - Refactoring and optimization
  - Test generation

- **Natural Language Processing**
  - Converting requirements to code
  - Documentation generation
  - Bug fixes from descriptions
  - API exploration via conversation

</div>

::right::

<div class="text-sm ml-4">

- **Ideation & Problem-Solving**
  - Architecture suggestions
  - Design pattern recommendations
  - Algorithm selection
  - Technical debt identification

<div class="mt-4 bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
<h3 class="font-bold mb-2">Real-World Impact</h3>

- 🚀 40-80% faster code completion
- 👥 Junior devs perform at senior levels
- 💡 More innovative solutions
- 📝 Reduced documentation time
- 🔄 Quicker iteration cycles

</div>

</div>

---
transition: fade-out
---

# The Rise of AI Development Tools

<div grid="~ cols-2 gap-4">
<div>

## Current Landscape
- Explosion of AI-powered development tools
- Shift from traditional coding to AI-assisted
- Major players: OpenAI, GitHub, Microsoft, Google
- Focus on productivity and augmentation

</div>
<div>

## Key Trends & Drivers
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
      <h3 class="text-blue-700 dark:text-blue-200 font-bold">Benefits & Challenges</h3>
      <p class="text-sm"><strong>Benefits:</strong> Faster development, reduced costs, democratized coding</p>
      <p class="text-sm mt-2"><strong>Challenges:</strong> Learning curve, quality control, overreliance, security concerns</p>
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

# A. TypingMind

<div class="grid grid-cols-2 gap-4">
  <div class="text-sm">
    <ul class="space-y-4">
      <li>
        <strong>Enhanced LLM Interface</strong>
        <ul class="mt-1 space-y-1">
          <li>Improved UX for professional use</li>
          <li>Multiple AI model support</li>
        </ul>
      </li>
      <li>
        <strong>Productivity Features</strong>
        <ul class="mt-1 space-y-1">
          <li>Folders and chat organization</li>
          <li>Customizable prompts and workflows</li>
          <li>Document and PDF uploading</li>
        </ul>
      </li>
      <li>
        <strong>Enterprise Capabilities</strong>
        <ul class="mt-1 space-y-1">
          <li>Security assessment visualization</li>
          <li>Data flow diagramming</li>
          <li>Project backlog breakdown</li>
          <li>Knowledge Base for contextual information</li>
        </ul>
      </li>
    </ul>
    <div class="mt-2">
      <a href="https://www.typingmind.com/" target="_blank" class="text-blue-500 hover:underline">typingmind.com</a>
    </div>
  </div>
  
  <div class="flex items-center justify-center">
    <img 
      src="/images/typingmind-screenshot.png"
      alt="TypingMind interface showing advanced chat capabilities"
      class="rounded-lg shadow-xl w-full"
    />
  </div>
</div>

---
layout: center
class: text-center
---

# Live Demo: TypingMind

<div class="text-xl mb-10">Supercharging your workflows with enhanced AI interfaces</div>

<div class="flex justify-center">
  <div class="bg-indigo-50 dark:bg-indigo-900 p-4 rounded-lg max-w-lg text-left">
    <h3 class="font-bold mb-2">Demo Focus Areas:</h3>
    <ul class="space-y-2">
      <li>Information security request processing</li>
      <li>Data flow visualization and analysis</li>
      <li>Breaking down projects into backlog items</li>
      <li>Using templates for consistent outputs</li>
      <li>Leveraging Knowledge Base for context-aware responses</li>
    </ul>
  </div>
</div>

---
layout: default
---

# B. GitHub Copilot

<div class="grid grid-cols-2 gap-4">
  <div class="text-xs">
  <v-clicks>

  - **Coding & Refactoring**
    - Real-time code suggestions
    - Works in existing IDEs

  - **Broad Support**
    - Multi-language compatibility
    - Framework-aware completions

  - **Intelligence**
    - Understands your codebase
    - Adapts to coding style
    
  - **PR Reviews**
    - Summarizes changes
    - Flags code issues
    - Not in Azure DevOps

  </v-clicks>
  <div class="mt-1">
    <a href="https://github.com/features/copilot" target="_blank" class="text-blue-500 hover:underline text-xs">github.com/features/copilot</a>
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
layout: center
class: text-center
---

# Live Demo: GitHub Copilot

<div class="text-xl mb-10">Let's see GitHub Copilot in action</div>

<div class="grid grid-cols-2 gap-8 items-center">
  <div class="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg max-w-lg text-left">
    <h3 class="font-bold mb-2">Demo Focus Areas:</h3>
    <ul class="space-y-2">
      <li>Real-time code suggestions</li>
      <li>Function completion from comments</li>
      <li>Context-aware completions</li>
      <li>@azure integration example</li>
    </ul>
  </div>
  
  <div class="flex items-center justify-center">
    <img 
      src="/images/copilot-azure.png"
      alt="GitHub Copilot interacting with Azure extension"
      class="rounded-lg shadow-xl w-full max-w-sm"
    />
  </div>
</div>

---
layout: default
---

# C. Cursor

<div class="grid grid-cols-2 gap-4">
  <div class="text-sm">
    <ul class="space-y-4">
      <li>
        <strong>AI-Enhanced Editor</strong>
        <ul class="mt-1 space-y-1">
          <li>Built on VS Code platform</li>
          <li>Optimized for AI assistance</li>
        </ul>
      </li>
      <li>
        <strong>Powerful Agent Mode</strong>
        <ul class="mt-1 space-y-1">
          <li>Makes changes to multiple files</li>
          <li>Runs terminal commands</li>
          <li>Reads & responds to error outputs</li>
        </ul>
      </li>
      <li>
        <strong>Intelligent Context</strong>
        <ul class="mt-1 space-y-1">
          <li>Understands your full project</li>
          <li>Accesses documentation & GitHub</li>
          <li>Autonomously solves complex tasks</li>
        </ul>
      </li>
    </ul>
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
layout: center
class: text-center
---

# Live Demo: Cursor

<div class="text-xl mb-10">Watch Cursor's powerful Agent Mode solve complex tasks</div>

<div class="flex justify-center">
  <div class="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg max-w-lg text-left">
    <h3 class="font-bold mb-2">Demo Focus Areas:</h3>
    <ul class="space-y-2">
      <li>Agent Mode making multi-file changes</li>
      <li>Terminal command execution</li>
      <li>Complex problem solving with context</li>
    </ul>
  </div>
</div>

---
layout: default
---

# D. Lovable.dev

<div class="grid grid-cols-2 gap-4">
  <div class="text-sm">
    <ul class="space-y-4">
      <li>
        <strong>Idea to App in Seconds</strong>
        <ul class="mt-1 space-y-1">
          <li>Complete app generation</li>
          <li>React & Next.js focused</li>
        </ul>
      </li>
      <li>
        <strong>Superhuman Full Stack Engineer</strong>
        <ul class="mt-1 space-y-1">
          <li>Natural language to functioning code</li>
          <li>Handles complex requirements</li>
        </ul>
      </li>
      <li>
        <strong>End-to-End Solutions</strong>
        <ul class="mt-1 space-y-1">
          <li>Rapid prototyping</li>
          <li>Automatic deployment</li>
          <li>Ongoing maintenance</li>
        </ul>
      </li>
    </ul>
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
layout: center
class: text-center
---

# Live Demo: Lovable.dev

<div class="text-xl mb-10">From idea to deployed app in minutes</div>

<div class="flex justify-center">
  <div class="bg-green-50 dark:bg-green-900 p-4 rounded-lg max-w-lg text-left">
    <h3 class="font-bold mb-2">Demo Focus Areas:</h3>
    <ul class="space-y-2">
      <li>Creating a complete app from a text prompt</li>
      <li>Exploring the generated codebase</li>
      <li>Deployment and hosting</li>
    </ul>
  </div>
</div>

---
transition: slide-up
layout: default
---

# The Power of MCP: Expanding AI Integration

<div class="mt-2">
  <div class="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mb-4">
    <h3 class="font-bold text-base mb-2">What is Model Context Protocol (MCP)?</h3>
    <p class="text-sm">A protocol allowing AI models to interact with external tools, services, and environments through defined interfaces.</p>
  </div>
</div>

<div class="grid grid-cols-2 gap-6">
  <div>
    <h3 class="font-bold text-base mb-2">Key Capabilities</h3>
    <ul class="text-sm space-y-2">
      <li>Tool Usage — Functions, APIs, services</li>
      <li>File System — Read, write, manage files</li>
      <li>Web Interaction — Browse, screenshots</li>
    </ul>
  </div>
  
  <div>
    <h3 class="font-bold text-base mb-2">Real-World Applications</h3>
    <ul class="text-sm space-y-2">
      <li>Development — Terminal, repo management</li>
      <li>Integration — Databases, APIs, services</li>
      <li>Automation — Workflows, CI/CD pipelines</li>
      <li>Analysis — Performance, accessibility</li>
    </ul>
  </div>
</div>

<div class="mt-4 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
  <p class="text-sm">
    <span class="font-bold">Why It Matters:</span> MCP transforms AI tools from isolated assistants to powerful agents that can interact with your entire tech ecosystem, dramatically expanding their utility and impact.
  </p>
</div>

---

# Additional Tools Worth Exploring

<div class="grid grid-cols-3 gap-4 mt-4">

<v-click>
<div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden h-full">
  <div class="bg-purple-600 text-white p-2 text-center">
    <h3 class="font-bold text-sm">Microsoft Power Apps</h3>
  </div>
  <div class="p-3 bg-white dark:bg-gray-800 h-full">
    <p class="text-xs">Low-code platform from Microsoft for building business apps with pre-built templates, AI capabilities, and seamless Microsoft 365 integration.</p>
  </div>
</div>
</v-click>

<v-click>
<div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden h-full">
  <div class="bg-red-600 text-white p-2 text-center">
    <h3 class="font-bold text-sm">Power Automate</h3>
  </div>
  <div class="p-3 bg-white dark:bg-gray-800 h-full">
    <p class="text-xs">Microsoft's workflow automation tool that connects to hundreds of data sources with AI-powered assistance and templates.</p>
  </div>
</div>
</v-click>

<v-click>
<div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden h-full">
  <div class="bg-blue-600 text-white p-2 text-center">
    <h3 class="font-bold text-sm">Retool</h3>
  </div>
  <div class="p-3 bg-white dark:bg-gray-800 h-full">
    <p class="text-xs">Internal tool builder with drag-and-drop interface, custom JavaScript capability, and database connections.</p>
  </div>
</div>
</v-click>

</div>

<div class="grid grid-cols-3 gap-4 mt-4">

<v-click>
<div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden h-full">
  <div class="bg-green-600 text-white p-2 text-center">
    <h3 class="font-bold text-sm">Airtable</h3>
  </div>
  <div class="p-3 bg-white dark:bg-gray-800 h-full">
    <p class="text-xs">Spreadsheet-database hybrid that combines the simplicity of a spreadsheet with the power of a database for creating custom solutions.</p>
  </div>
</div>
</v-click>

<v-click>
<div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden h-full">
  <div class="bg-yellow-600 text-white p-2 text-center">
    <h3 class="font-bold text-sm">Zapier</h3>
  </div>
  <div class="p-3 bg-white dark:bg-gray-800 h-full">
    <p class="text-xs">Cloud-based integration platform that connects apps and automates workflows without requiring any code.</p>
  </div>
</div>
</v-click>

<v-click>
<div class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden h-full">
  <div class="bg-indigo-600 text-white p-2 text-center">
    <h3 class="font-bold text-sm">n8n</h3>
  </div>
  <div class="p-3 bg-white dark:bg-gray-800 h-full">
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
      <li>Full Code Ownership — Generated code belongs to you, not locked to any platform</li>
      <li>Standard Languages & Frameworks — Uses industry standard technologies</li>
      <li>Unlimited Customization — Modify any part of the code without restrictions</li>
      <li>Future-Proof — No vendor lock-in means easy migration and maintenance</li>
    </ul>
  </div>
  
  <div class="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
    <h3 class="font-bold text-lg text-red-700 dark:text-red-300">Traditional Low/No-Code Tools</h3>
    <ul class="mt-2 space-y-2">
      <li>Platform Lock-In — Solutions tied to specific vendor platforms</li>
      <li>Limited Customization — Restricted to what the platform allows</li>
      <li>Proprietary Systems — Often use custom visual languages</li>
      <li>Scaling Challenges — Hit walls when requirements grow</li>
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
        <li>Developer Productivity — 20-30% increase in output and velocity</li>
        <li>Code Quality — Improved consistency and fewer bugs</li>
      </ul>
    </div>
    <div>
      <ul class="text-sm space-y-2">
        <li>Onboarding — Faster ramp-up for new team members</li>
        <li>Innovation — More time for solving complex business problems</li>
      </ul>
    </div>
  </div>
</div>

---

# Risks & Concerns with AI Code Generation

<div class="grid grid-cols-2 gap-4 mt-4">
  <div class="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
    <h3 class="font-bold text-xl text-red-700 dark:text-red-300">Security Risks</h3>
    <ul class="mt-2 text-base">
      <li>Insecure code patterns</li>
      <li>Outdated security practices</li>
      <li>Dependency vulnerabilities</li>
    </ul>
  </div>
  
  <div class="bg-amber-50 dark:bg-amber-900 p-4 rounded-lg">
    <h3 class="font-bold text-xl text-amber-700 dark:text-amber-300">Code Quality Issues</h3>
    <ul class="mt-2 text-base">
      <li>Inefficient algorithms</li>
      <li>Hidden technical debt</li>
      <li>Inconsistent patterns</li>
    </ul>
  </div>
</div>

<div class="grid grid-cols-2 gap-4 mt-4">
  <div class="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
    <h3 class="font-bold text-xl text-blue-700 dark:text-blue-300">Control & Responsibility</h3>
    <ul class="mt-2 text-base">
      <li>Unintended system modifications</li>
      <li>Database/service alterations</li>
      <li>Developers accountable for unfamiliar code</li>
    </ul>
  </div>
  
  <div class="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
    <h3 class="font-bold text-xl text-green-700 dark:text-green-300">Best Practices</h3>
    <ul class="mt-2 text-base">
      <li>Require thorough code reviews</li>
      <li>Test all generated code</li>
      <li>Understand before implementing</li>
    </ul>
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

# Brought to you by Red Leg Dev

<div class="mt-6">
  <a href="https://redleg.dev/contact" target="_blank" class="text-blue-500 text-lg font-bold hover:underline">
    Looking for help upskilling your development team? →
  </a>
</div>

<div class="mt-8 flex flex-col items-center">

  <img src="/images/redlegdev.png" alt="Red Leg Dev Logo" class="mt-6 w-32 h-32 object-contain" />
  <a href="https://redleg.dev" target="_blank" class="text-xl font-bold text-blue-500 hover:text-blue-600 transition-colors">
    redleg.dev
  </a>
</div>

<div class="mt-2 text-sm opacity-75 text-center">
  Empowering developers with innovative solutions
</div>