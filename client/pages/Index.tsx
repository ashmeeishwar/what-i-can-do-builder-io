import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import {
  Smartphone,
  Globe,
  Layers,
  Database,
  Shield,
  Zap,
  Cloud,
  Code,
  Palette,
  Cpu,
  Lock,
  Wifi,
  Bot,
  Rocket,
  CheckCircle,
  XCircle,
  ArrowRight,
  ExternalLink,
  Copy,
  Check
} from "lucide-react";

export default function Index() {
  const [copied, setCopied] = useState(false);
  const appTypes = [
    { icon: Globe, name: "Web Apps", desc: "React, Vue, Angular SPAs" },
    { icon: Smartphone, name: "Mobile Apps", desc: "Progressive Web Apps (PWA)" },
    { icon: Layers, name: "Full-Stack", desc: "Frontend + Backend + API" },
    { icon: Code, name: "Static Sites", desc: "Landing pages, blogs, docs" }
  ];

  const techStack = [
    { category: "Frontend", items: ["React 18", "TypeScript", "Vite", "Tailwind CSS"] },
    { category: "Backend", items: ["Express.js", "Node.js", "TypeScript", "Zod validation"] },
    { category: "UI Library", items: ["Radix UI", "shadcn/ui", "Lucide Icons", "Framer Motion"] },
    { category: "Database", items: ["Supabase", "Neon", "Prisma", "MongoDB"] }
  ];

  const capabilities = [
    { icon: Bot, name: "AI Features", available: true, desc: "Integrate OpenAI, Claude, custom models" },
    { icon: Database, name: "API Integration", available: true, desc: "REST, GraphQL, webhooks, real-time" },
    { icon: Wifi, name: "Offline Mode", available: true, desc: "Service workers, caching, sync" },
    { icon: Lock, name: "Encryption", available: true, desc: "Auth, JWT, secure storage" },
    { icon: Cloud, name: "Real-time", available: true, desc: "WebSockets, live updates" },
    { icon: Rocket, name: "Performance", available: true, desc: "Code splitting, lazy loading" }
  ];

  const limitations = [
    "Cannot build native mobile apps (iOS/Android) - only PWAs",
    "No direct database hosting - requires external providers",
    "Limited to web technologies (no desktop frameworks)",
    "Cannot access device-specific APIs beyond web standards"
  ];

  const deploymentOptions = [
    { name: "Netlify", desc: "Static sites & serverless functions" },
    { name: "Vercel", desc: "Full-stack React applications" },
    { name: "Builder.io", desc: "Visual CMS & headless deployment" },
    { name: "Export Code", desc: "Download as ZIP for custom deployment" }
  ];

  const bestPromptStructure = `Build me a [APP TYPE] that [PRIMARY PURPOSE/GOAL].

Key Features:
• [Feature 1] - [brief description]
• [Feature 2] - [brief description]
• [Feature 3] - [brief description]

Target Users: [Who will use this app]
Use Cases: [How they'll use it]

Design Style: [modern/minimal/colorful/professional/etc.]
Brand: [company name or style preferences]

Technical Requirements:
• [Any specific APIs or integrations needed]
• [Authentication requirements]
• [Database needs]
• [Performance requirements]

Examples for Reference: [Similar apps or websites]

Additional Notes: [Any other important details]

---

EXAMPLE:
Build me a task management app that helps remote teams stay organized and productive.

Key Features:
• Task creation and assignment with due dates
• Real-time collaboration and comments
• Progress tracking with visual dashboards
• File attachments and integrations

Target Users: Remote teams of 5-50 people
Use Cases: Daily task management, project planning, team communication

Design Style: Clean and modern with a focus on productivity
Brand: Professional but friendly, using blue and green accent colors

Technical Requirements:
• Real-time updates (WebSocket)
• User authentication and team management
• Integration with Slack and Google Drive
• Mobile-responsive design

Examples for Reference: Notion, Asana, but simpler and faster

Additional Notes: Focus on speed and simplicity over advanced features`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(bestPromptStructure);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Bot className="w-4 h-4" />
            Builder.io AI App Builder
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            My Capabilities & Tech Stack
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm an AI assistant specialized in building modern web applications. 
            Here's everything you need to know to get the best results.
          </p>
        </div>

        {/* App Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">What I Can Build</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur">
                <CardHeader>
                  <type.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{type.name}</CardTitle>
                  <CardDescription>{type.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Default Tech Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, index) => (
              <Card key={index} className="border-0 bg-white/80 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-700">{stack.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item, itemIndex) => (
                      <Badge key={itemIndex} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Advanced Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <Card key={index} className="border-0 bg-white/80 backdrop-blur">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <capability.icon className="w-8 h-8 text-green-600" />
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        {capability.name}
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </CardTitle>
                      <CardDescription>{capability.desc}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Prompting Tips */}
        <section className="mb-16">
          <Card className="border-0 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
                <Palette className="w-6 h-6" />
                Best Prompting Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-blue-700">Include in Your Prompt:</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Specific app type and purpose</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Target audience and use cases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Required features and functionality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Design preferences and branding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>API integrations needed</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-purple-700">Development Approach:</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>You can refine in steps - start simple!</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>I build iteratively with your feedback</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>No need for one detailed prompt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Start with core features, expand later</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Limitations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Current Limitations</h2>
          <Card className="border-0 bg-orange-50">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {limitations.map((limitation, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{limitation}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Deployment */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Deployment & Export Options</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deploymentOptions.map((option, index) => (
              <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Cloud className="w-10 h-10 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">{option.name}</CardTitle>
                  <CardDescription>{option.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Build Your App?</h2>
              <p className="text-xl mb-8 opacity-90">
                Just describe what you want to build, and I'll create it step by step!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-blue-600">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Documentation
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Start Building
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
