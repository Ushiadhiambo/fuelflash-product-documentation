"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "./components/Header";
import TeamSection from "./components/TeamSection";
import Sidebar from "./components/Sidebar";
import CollapsibleSection from "./components/CollapsibleSection";
import ImageModal from "./components/ImageModal";
import Footer from "./components/Footer";
import { useScrollSpy } from "./hooks/useScrollSpy";
import Homepage from "./components/Homepage";

export default function Home() {
  const [showDocs, setShowDocs] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["introduction"])
  );
  const [modalImage, setModalImage] = useState<string | null>(null);
  const activeSectionId = useScrollSpy();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const toggleSection = (id: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(id)) newExpanded.delete(id);
    else newExpanded.add(id);
    setExpandedSections(newExpanded);
  };

  const handleViewDocs = () => {
    setShowDocs(true);
  };

  const handleBackToHomepage = () => {
    setShowDocs(false);
  };

  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content: (
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-r from-[#2a1e36]/10 to-[#d47f43]/10 rounded-lg border border-[#d47f43]/20">
            <h3 className="text-xl font-semibold text-[#d47f43] mb-3">Purpose</h3>
            <p className="text-foreground/80 leading-relaxed">
              FuelFlash delivers instant SMS alerts for fuel price changes across
              Rwanda, empowering consumers with real-time pricing information.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-r from-[#2a1e36]/10 to-[#d47f43]/10 rounded-lg border border-[#d47f43]/20">
            <h3 className="text-xl font-semibold text-[#d47f43] mb-3">Scope</h3>
            <ul className="space-y-2 text-foreground/80 ml-6">
              <li>• USSD registration (*384*33121#)</li>
              <li>• SMS price alerts</li>
              <li>• Admin price updates</li>
              <li>• English notifications</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-[#2a1e36]/10 to-[#d47f43]/10 rounded-lg border border-[#d47f43]/20">
            <h3 className="text-xl font-semibold text-[#d47f43] mb-3">Audience</h3>
            <p className="text-foreground/80 leading-relaxed">
              Transport operators, small businesses, households, and RURA
              administrators.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "users",
      title: "Who are our users?",
      content: (
        <div className="space-y-6">
          <p className="text-foreground/80 leading-relaxed text-lg">
            Our main users are{" "}
            <strong>Rwandan consumers and businesses affected by fuel prices</strong>.
          </p>
          <div className="p-6 bg-gradient-to-r from-[#2a1e36]/10 to-[#d47f43]/10 rounded-lg border border-[#d47f43]/20">
            <h4 className="text-lg font-semibold text-[#d47f43] mb-4">Consumers</h4>
            <ul className="space-y-2 text-foreground/80 ml-6">
              <li>• Real-time SMS price alerts</li>
              <li>• USSD subscription on basic phones</li>
              <li>• English messages</li>
            </ul>
          </div>
          <div className="p-6 bg-gradient-to-r from-[#2a1e36]/10 to-[#d47f43]/10 rounded-lg border border-[#d47f43]/20">
            <h4 className="text-lg font-semibold text-[#d47f43] mb-4">Businesses</h4>
            <ul className="space-y-2 text-foreground/80 ml-6">
              <li>• Transport operators (taxi, bus, logistics)</li>
              <li>• Small businesses (delivery, retail)</li>
              <li>• Fuel budgeting optimization</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "features",
      title: "Features",
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-[#d47f43]">FuelFlash Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "📝", title: "Clear SMS Alerts", desc: "Concise price updates in English." },
              { icon: "📱", title: "USSD Access", desc: "Subscribe via *384*33121# on any phone." },
              { icon: "👥", title: "User-Centered", desc: "Designed for rural & urban Rwandans." },
              { icon: "📊", title: "Admin Dashboard", desc: "Easy price updates via Django admin." },
              { icon: "⚡", title: "Instant Delivery", desc: "<30s SMS delivery guarantee." },
            ].map((feature, idx) => (
              <div key={idx} className="p-4 bg-gradient-to-r from-[#2a1e36]/10 to-[#d47f43]/10 rounded-lg border border-[#d47f43]/20">
                <div className="text-2xl mb-2">{feature.icon}</div>
                <h4 className="font-semibold text-[#f9c784] mb-2">{feature.title}</h4>
                <p className="text-foreground/70 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "product-requirements",
      title: "Product Requirements Summary",
      content: (
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-lg border border-red-500/20">
            <h4 className="text-lg font-semibold text-red-400 mb-4">Core Problem</h4>
            <p className="text-foreground/80 leading-relaxed">
              Rwandans lack timely fuel price information, causing poor budgeting,
              market confusion, and economic hardship.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-lg border border-green-500/20">
            <h4 className="text-lg font-semibold text-green-400 mb-4">Proposed Solution</h4>
            <p className="text-foreground/80 leading-relaxed">
              SMS alert system (*384*33121#) delivering instant fuel price updates
              to 75%+ of Rwandan mobile users.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-r from-[#2a1e36]/10 to-[#d47f43]/10 rounded-lg border border-[#d47f43]/20">
            <h4 className="text-lg font-semibold text-[#d47f43] mb-4">Key Success Metrics</h4>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { metric: "50K+", desc: "Subscribers in 6 months" },
                { metric: "95%", desc: "SMS delivery rate" },
                { metric: "<30s", desc: "Alert delivery time" },
              ].map((item, idx) => (
                <div key={idx} className="text-center p-4 bg-[#2a1e36]/10 rounded">
                  <div className="text-xl font-bold text-[#f9c784]">{item.metric}</div>
                  <div className="text-sm text-foreground/60 mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "user-flows",
      title: "User Flow Diagrams",
      content: (
        <div className="space-y-6">
          <div
            className="bg-gradient-to-br from-[#2a1e36]/5 to-[#d47f43]/5 rounded-lg p-4 border border-[#d47f43]/20 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setModalImage("/images/userflow.png")}
          >
            <div className="relative w-full h-[400px]">
              <Image
                src="/images/userflow.png"
                alt="FuelFlash userflow"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <p className="text-sm text-center text-foreground/60 mt-3">FuelFlash User Journey - Click to enlarge</p>
          </div>
        </div>
      ),
    },
    {
      id: "website",
      title: "Informational Website",
      content: (
        <div className="space-y-6">
          <p className="text-foreground/80 leading-relaxed">
            Primary digital gateway for users to learn about FuelFlash features and benefits.
          </p>
          <div className="bg-gradient-to-br from-[#2a1e36]/5 to-[#d47f43]/5 rounded-lg p-4 border border-[#d47f43]/20">
            <a href="https://fuelflash.vercel.app/" target="_blank" className="block text-[#f9c784] hover:text-[#d47f43] font-semibold">
              Visit FuelFlash Website →
            </a>
          </div>
        </div>
      ),
    },
    {
      id: "system-overview",
      title: "System Overview",
      content: (
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-r from-[#2a1e36]/10 to-[#d47f43]/10 rounded-lg border border-[#d47f43]/20">
            <h4 className="text-lg font-semibold text-[#d47f43] mb-3">Architecture</h4>
            <ul className="space-y-2 text-foreground/80 ml-6">
              <li>• Django backend + REST API</li>
              <li>• USSD interface</li>
              <li>• SMS notifications</li>
              <li>• Admin dashboard</li>
            </ul>
          </div>
          <div
            className="bg-gradient-to-br from-[#2a1e36]/5 to-[#d47f43]/5 rounded-lg p-4 border border-[#d47f43]/20 cursor-pointer hover:shadow-lg"
            onClick={() => setModalImage("/images/FuelFlash Architecture Diagram.png")}
          >
            <div className="relative w-full h-[400px]">
              <Image
                src="/images/FuelFlash Architecture Diagram.png"
                alt="System Architecture"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <p className="text-sm text-center text-foreground/60 mt-3">Architecture Diagram</p>
          </div>
        </div>
      ),
    },
    {
      id: "installation",
      title: "Installation Guide",
      content: (
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-r from-[#2a1e36]/10 to-[#d47f43]/10 rounded-lg border border-[#d47f43]/20">
            <h4 className="text-lg font-semibold text-[#d47f43] mb-4">Prerequisites</h4>
            <ul className="space-y-2 text-foreground/80 ml-6">
              <li>• Python 3.12</li>
              <li>• Virtual environment</li>
              <li>• Git</li>
            </ul>
          </div>
          <div className="bg-[#1a1423]/50 p-6 rounded-lg border border-[#d47f43]/20">
            <h4 className="text-lg font-semibold text-[#d47f43] mb-4">Installation Steps</h4>
            <ol className="space-y-3 text-foreground/80 ml-6">
              <li><code className="bg-[#2a1e36] px-2 py-1 rounded text-[#f9c784]">git clone fuelflash-repo</code></li>
              <li><code className="bg-[#2a1e36] px-2 py-1 rounded text-[#f9c784]">python -m venv fuelflashenv</code></li>
              <li><code className="bg-[#2a1e36] px-2 py-1 rounded text-[#f9c784]">source fuelflashenv/bin/activate</code></li>
              <li><code className="bg-[#2a1e36] px-2 py-1 rounded text-[#f9c784]">pip install -r requirements.txt</code></li>
              <li><code className="bg-[#2a1e36] px-2 py-1 rounded text-[#f9c784]">python manage.py migrate</code></li>
              <li><code className="bg-[#2a1e36] px-2 py-1 rounded text-[#f9c784]">python manage.py runserver</code></li>
            </ol>
          </div>
        </div>
      ),
    },
    {
      id: "configuration",
      title: "Configuration Guide",
      content: (
        <div className="space-y-6">
          <div className="bg-[#1a1423]/50 p-6 rounded-lg border border-[#d47f43]/20">
            <h4 className="text-lg font-semibold text-[#d47f43] mb-4">.env File</h4>
            <pre className="text-[#f9c784] text-sm overflow-x-auto bg-[#2a1e36] p-4 rounded">
{`SMS_API_KEY=your_key
SMS_API_SECRET=your_secret
USSD_CALLBACK_URL=https://yourdomain.com/ussd/
DEBUG=True`}
            </pre>
          </div>
        </div>
      ),
    },
    {
      id: "usage",
      title: "Usage Guide",
      content: (
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-r from-[#2a1e36]/10 to-[#d47f43]/10 rounded-lg border border-[#d47f43]/20">
            <h4 className="text-lg font-semibold text-[#d47f43] mb-4">Access Code</h4>
            <p className="text-2xl font-bold text-[#f9c784] text-center">*384*33121#</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-lg border border-orange-500/20">
            <h4 className="text-lg font-semibold text-orange-400 mb-4">Troubleshooting</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-orange-400">⚠️</span>
                <div>Invalid phone: Use Rwanda format (+250XXXXXXXXX)</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "api",
      title: "API Documentation",
      content: (
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-r from-[#2a1e36]/10 to-[#d47f43]/10 rounded-lg border border-[#d47f43]/20">
            <h4 className="text-lg font-semibold text-[#d47f43] mb-4">Endpoints</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                '/api/users/',
                '/api/fuelflash/ussd/callback/',
                '/api/fuelflash/prices/',
                '/api/fuelflash/subscribers/',
                '/api/fuelflash/alerts/',
              ].map((endpoint) => (
                <code key={endpoint} className="block bg-[#2a1e36] p-2 rounded text-[#f9c784] text-center">
                  {endpoint}
                </code>
              ))}
            </div>
          </div>
          <div className="bg-[#1a1423]/50 p-6 rounded-lg border border-[#d47f43]/20">
            <pre className="bg-[#2a1e36] p-4 rounded text-[#f9c784] text-sm">
{`[{"fuel_type": "Petrol", "price": 1803, "unit": "RWF/L"}]`}
            </pre>
          </div>
        </div>
      ),
    },
    {
      id: "backend",
      title: "Backend",
      content: (
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-r from-[#2a1e36]/10 to-[#d47f43]/10 rounded-lg border border-[#d47f43]/20">
            <h4 className="text-lg font-semibold text-[#d47f43] mb-4">Technology Stack</h4>
            <ul className="space-y-2 text-foreground/80 ml-6">
              <li>• Python 3.12 + Django</li>
              <li>• Django REST Framework</li>
              <li>• PostgreSQL</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "database",
      title: "Database Schema",
      content: (
        <div className="space-y-6">
          <div
            className="bg-gradient-to-br from-[#2a1e36]/5 to-[#d47f43]/5 rounded-lg p-4 border border-[#d47f43]/20 cursor-pointer"
            onClick={() => setModalImage("/images/erd.png")}
          >
            <div className="relative w-full h-[400px]">
              <Image
                src="/images/erd.png"
                alt="ER Diagram"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {['FuelPrice', 'Users'].map((table) => (
              <code key={table} className="block bg-[#2a1e36] p-2 rounded text-[#f9c784] text-center">
                {table}
              </code>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "hardware",
      title: "Hardware Requirements",
      content: (
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-lg border border-green-500/20">
            <h4 className="text-lg font-semibold text-green-400 mb-4">Feature Phone Compatible</h4>
            <ul className="space-y-2 text-foreground/80 ml-6">
              <li>• ✅ Any GSM phone</li>
              <li>• ✅ No smartphone needed</li>
              <li>• ✅ MTN & Airtel networks</li>
              <li>• ✅ No internet required</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "testing",
      title: "Testing",
      content: (
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-r from-[#2a1e36]/10 to-[#d47f43]/10 rounded-lg border border-[#d47f43]/20">
            <h4 className="text-lg font-semibold text-[#d47f43] mb-4">Test Coverage: 92%</h4>
            <p className="text-foreground/80">All critical paths pass: USSD flow, SMS delivery, API endpoints.</p>
          </div>
        </div>
      ),
    },
    {
      id: "support",
      title: "Support & Maintenance",
      content: (
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-lg border border-blue-500/20">
            <h4 className="text-lg font-semibold text-blue-400 mb-4">Contact</h4>
            <p className="text-2xl font-bold text-blue-300">support@fuelflash.rw</p>
          </div>
        </div>
      ),
    },
    {
      id: "changelog",
      title: "Change Log",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-[#2a1e36]/10 to-[#d47f43]/10 rounded-lg border border-[#d47f43]/20">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">1.1</span>
              <span>English SMS support</span>
            </div>
          </div>
          <div className="p-4 bg-gradient-to-r from-[#2a1e36]/10 to-[#d47f43]/10 rounded-lg border border-[#d47f43]/20">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1.0</span>
              <span>Initial release</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "glossary",
      title: "Glossary",
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { term: "USSD", def: "Interactive mobile menu system" },
            { term: "SMS", def: "Text message alerts" },
            { term: "RURA", def: "Rwanda fuel price regulator" },
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-gradient-to-r from-[#2a1e36]/10 to-[#d47f43]/10 rounded-lg border border-[#d47f43]/20">
              <h5 className="font-semibold text-[#f9c784] mb-2">{item.term}</h5>
              <p className="text-foreground/70 text-sm">{item.def}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "folder-structure",
      title: "Folder Structure",
      content: (
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-r from-[#2a1e36]/10 to-[#d47f43]/10 rounded-lg border border-[#d47f43]/20">
            <h4 className="text-lg font-semibold text-[#d47f43] mb-4">Overview</h4>
            <p className="text-foreground/80 leading-relaxed">
              The FuelFlash project is organized into Backend and Frontend directories for maintainability and scalability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="bg-gradient-to-br from-[#2a1e36]/5 to-[#d47f43]/5 rounded-lg p-4 border border-[#d47f43]/20 cursor-pointer hover:shadow-lg"
              onClick={() => {
                console.log("Clicking Backend image, setting modalImage to:", "/images/backend-structure.png");
                setModalImage("/images/backend.png");
              }}
            >
              <div className="relative w-full h-[400px]">
                <Image
                  src="/images/backend.png"
                  alt="Backend Folder Structure"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <p className="text-sm text-center text-foreground/60 mt-3">Backend Structure - Click to enlarge</p>
            </div>
            <div
              className="bg-gradient-to-br from-[#2a1e36]/5 to-[#d47f43]/5 rounded-lg p-4 border border-[#d47f43]/20 cursor-pointer hover:shadow-lg"
              onClick={() => {
                console.log("Clicking Frontend image, setting modalImage to:", "/images/frontend-structure.png");
                setModalImage("/images/frontend.png");
              }}
            >
              <div className="relative w-full h-[400px]">
                <Image
                  src="/images/frontend.png"
                  alt="Frontend Folder Structure"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <p className="text-sm text-center text-foreground/60 mt-3">Frontend Structure - Click to enlarge</p>
            </div>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-lg border border-green-500/20">
            <h4 className="text-lg font-semibold text-green-400 mb-4">Hardware</h4>
            <p className="text-foreground/80 leading-relaxed">
              FuelFlash is designed for maximum accessibility:
            </p>
            <ul className="space-y-2 text-foreground/80 ml-6">
              <li>• Works on any GSM-enabled feature phone (no smartphone needed)</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      {!showDocs ? (
        <Homepage onViewDocs={handleViewDocs} />
      ) : (
        <div className="min-h-screen bg-gradient-to-br from-[#2a1e36] to-[#1a1423] text-foreground">
          <div className="sticky top-0 z-20 bg-[#2a1e36]/90 backdrop-blur-sm">
            <Header />
            <div className="container mx-auto px-4 py-4">
              <button
                onClick={handleBackToHomepage}
                className="px-6 py-3 bg-gradient-to-r from-[#f9c784] to-[#d47f43] text-[#2a1e36] font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                ← Back to Homepage
              </button>
            </div>
          </div>
          <TeamSection />
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col lg:flex-row gap-8">
              <Sidebar sections={sections} activeSectionId={activeSectionId} />
              <main className="flex-1 space-y-4">
                {sections.map((section) => (
                  <CollapsibleSection
                    key={section.id}
                    id={section.id}
                    title={section.title}
                    isExpanded={expandedSections.has(section.id)}
                    onToggle={toggleSection}
                  >
                    {section.content}
                  </CollapsibleSection>
                ))}
              </main>
            </div>
          </div>
          <Footer />
          {modalImage && <ImageModal imageSrc={modalImage} onClose={() => setModalImage(null)} />}
        </div>
      )}
    </div>
  );
}