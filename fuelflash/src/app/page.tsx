"use client"
import { useState, useEffect } from 'react';
import Header from './components/Header';
import TeamSection from './components/TeamSection';
import Sidebar from './components/Sidebar';
import CollapsibleSection from './components/CollapsibleSection';
import ImageModal from './components/ImageModal';
import Footer from './components/Footer';
import { useScrollSpy } from './hooks/useScrollSpy';

export default function App() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['introduction']));
  const [modalImage, setModalImage] = useState<string | null>(null);
  const activeSectionId = useScrollSpy();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const toggleSection = (id: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedSections(newExpanded);
  };

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#d47f43]">Background</h3>
          <p className="text-foreground/80 leading-relaxed">
            Fuel consumption and pricing are vital components of Rwanda's economic landscape, directly influencing transportation, industrial operations, and household budgets. Rwanda's fuel market has experienced growing demand, with gasoline consumption reaching approximately 2.98 thousand barrels per day in 2023. The country relies on regular fuel price updates to help consumers and businesses manage their expenses amid fluctuating global oil prices and local economic conditions.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Despite the importance of accurate and timely fuel price information, current communication mechanisms have gaps that limit effective dissemination. Most price updates come through official notices from the Rwanda Utilities Regulatory Authority (RURA) via websites and traditional media, which do not reach all consumers promptly, particularly those in rural areas. Moreover, mobile-based alert systems like SMS are underutilized despite high mobile penetration, leaving many without direct notification of price changes.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            This communication deficiency risks reducing consumer preparedness, market transparency, and economic efficiency. Addressing these gaps through a direct and automated fuel price alert system is essential to improve information flow, enhance consumer trust, and support Rwanda's broader goals of digital inclusion and responsive governance.
          </p>
          
          <div className="mt-6 p-6 bg-gradient-to-r from-[#2a1e36]/10 to-[#d47f43]/10 rounded-lg border border-[#d47f43]/20">
            <h3 className="text-xl font-semibold text-[#d47f43] mb-3">Problem Statement</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Fuel pricing is a vital economic factor that significantly impacts households, businesses, and the broader market in Rwanda. Despite regular price reviews by the Rwanda Utilities Regulatory Authority (RURA), many consumers, especially low-income households, small business owners, and rural communities, lack timely and direct alerts about changes in fuel prices.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              This communication gap leads to economic inefficiencies, including poor financial planning, market confusion, and exacerbated economic hardships for vulnerable populations. The absence of an accessible and immediate alert system results in missed opportunities for consumers to adjust budgets and operations in response to price fluctuations, affecting overall economic stability and transparency.
            </p>
            <p className="text-lg font-semibold text-[#f9c784] italic">
              How might we help deliver instant, accessible fuel price alerts to all Rwandans to empower better budgeting and increase transparency?
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'research-report',
      title: 'Research Report',
      content: (
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-r from-[#2a1e36]/10 to-[#d47f43]/10 rounded-lg border border-[#d47f43]/20">
            <h4 className="text-lg font-semibold text-[#d47f43] mb-3">Executive Summary</h4>
            <p className="text-foreground/80 leading-relaxed">
              Rwanda's fuel pricing system is crucial for economic stability and household budgeting, particularly impacting low- and middle-income consumers. Despite regular fuel price revisions by RURA, a significant communication gap exists, whereby many consumers remain uninformed or receive late notifications of price changes, impeding effective financial planning and market transparency.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#d47f43]">Research Objectives</h4>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start">
                <span className="text-[#f9c784] mr-2">•</span>
                <span>To assess current communication channels and their effectiveness in disseminating fuel price updates in Rwanda</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f9c784] mr-2">•</span>
                <span>To evaluate consumer awareness, knowledge, and response behaviors regarding fuel price changes</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f9c784] mr-2">•</span>
                <span>To identify communication gaps and barriers that prevent timely and direct fuel price alerts</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f9c784] mr-2">•</span>
                <span>To explore technological and infrastructural options, including SMS and USSD, for instant fuel price alert delivery</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f9c784] mr-2">•</span>
                <span>To design and recommend an accessible and scalable fuel price alert system that serves low-income, rural, and urban populations</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f9c784] mr-2">•</span>
                <span>To evaluate the potential impact of a fuel price alert system on consumer budgeting, market transparency, and economic empowerment</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-r from-[#2a1e36]/10 to-[#d47f43]/10 rounded-lg border border-[#d47f43]/20">
            <h4 className="text-lg font-semibold text-[#d47f43] mb-4">Key Findings</h4>
            
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-[#f9c784] mb-2">Fuel Price Volatility</h5>
                <p className="text-foreground/70 text-sm">
                  Fuel prices in Rwanda are subject to fluctuations driven by volatile global oil markets, geopolitical tensions, and OPEC+ production controls. In July 2025, petrol prices increased from RWF 1,633 to RWF 1,803 per liter (11% hike) and diesel from RWF 1,647 to RWF 1,757 per liter (6.5% hike), reflecting reintroduced VAT and external market pressures.
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-[#f9c784] mb-2">Economic Impact on Consumers</h5>
                <p className="text-foreground/70 text-sm">
                  Price hikes disproportionately affect low-income households, small business owners, and rural communities who rely on fuel for transport and household activities. These cost-push inflation effects exacerbate income inequality and strain household budgets.
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-[#f9c784] mb-2">Communication Gaps and Awareness</h5>
                <p className="text-foreground/70 text-sm">
                  Many consumers, especially in rural and underserved areas, receive fuel price information mainly through official websites and mainstream media, which limits timely access. This gap leaves vulnerable groups unprepared for price adjustments, affecting their ability to budget and manage finances effectively.
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-[#f9c784] mb-2">Technological Opportunities</h5>
                <p className="text-foreground/70 text-sm">
                  Pilot projects involving SMS and USSD-based alert systems have demonstrated potential for improving real-time dissemination of fuel price changes. These technologies offer scalable solutions to bridge communication gaps and reach diverse demographics, including remote and low-income populations.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-[#2a1e36]/10 to-[#d47f43]/10 rounded-lg border border-[#d47f43]/20">
            <h4 className="text-lg font-semibold text-[#d47f43] mb-3">Impact Analysis</h4>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Based on Rwanda's mobile penetration rate, approximately <strong className="text-[#f9c784]">75-80%</strong> of consumers can be reached effectively via SMS alerts, making this an accessible channel for timely fuel price notifications. Instant alerts empower households and small businesses to adjust fuel budgeting strategies, potentially saving <strong className="text-[#f9c784]">5-10%</strong> on fuel-related expenses by avoiding sudden price shocks.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Currently, information lag from traditional channels results in delays of several days; the SMS system reduces this to near-instant updates, enhancing consumer preparedness and market transparency.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'stakeholders',
      title: 'Stakeholders',
      content: (
        <div className="space-y-4">
          <p className="text-foreground/80 leading-relaxed mb-6">
            FuelFlash serves multiple stakeholder groups, each with unique needs and expectations:
          </p>
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-br from-[#2a1e36]/5 to-[#d47f43]/5 rounded-lg border-l-4 border-[#d47f43]">
              <h4 className="text-lg font-semibold text-[#d47f43] mb-2">Transport Operators</h4>
              <p className="text-foreground/70">
                Motorbike taxi drivers, public transport drivers, and logistics companies are sensitive to changes in fuel costs, which impact their operational expenses and fare calculations.
              </p>
            </div>
            <div className="p-5 bg-gradient-to-br from-[#2a1e36]/5 to-[#d47f43]/5 rounded-lg border-l-4 border-[#d47f43]">
              <h4 className="text-lg font-semibold text-[#d47f43] mb-2">Small Businesses</h4>
              <p className="text-foreground/70">
                Businesses that depend on fuel for operations, such as delivery services, agro-processors, and retailers, benefit from knowing price changes to adjust their costs and pricing strategies.
              </p>
            </div>
            <div className="p-5 bg-gradient-to-br from-[#2a1e36]/5 to-[#d47f43]/5 rounded-lg border-l-4 border-[#d47f43]">
              <h4 className="text-lg font-semibold text-[#d47f43] mb-2">Low-Income Households</h4>
              <p className="text-foreground/70">
                Consumers in rural and underserved areas who are particularly vulnerable to fuel price changes and require timely information for effective household budgeting.
              </p>
            </div>
            <div className="p-5 bg-gradient-to-br from-[#2a1e36]/5 to-[#d47f43]/5 rounded-lg border-l-4 border-[#d47f43]">
              <h4 className="text-lg font-semibold text-[#d47f43] mb-2">Fuel Retailers and Distributors</h4>
              <p className="text-foreground/70">
                Although not direct recipients of alerts, they benefit indirectly as an informed customer base leads to more stable demand and market transparency.
              </p>
            </div>
            <div className="p-5 bg-gradient-to-br from-[#2a1e36]/5 to-[#d47f43]/5 rounded-lg border-l-4 border-[#d47f43]">
              <h4 className="text-lg font-semibold text-[#d47f43] mb-2">Rwanda Utilities Regulatory Authority (RURA)</h4>
              <p className="text-foreground/70">
                Government regulatory body responsible for setting and revising fuel prices every two months based on global market trends and domestic policies.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
  id: 'user-flows',
  title: 'User Flows & Journey',
  content: (
    <div className="space-y-4">
      <p className="text-foreground/80 leading-relaxed mb-6">
        The user flow diagram illustrates the complete journey from subscription to receiving fuel price alerts:
      </p>
      <div 
        className="bg-gradient-to-br from-[#2a1e36]/5 to-[#d47f43]/5 rounded-lg p-4 border border-[#d47f43]/20 cursor-pointer hover:shadow-lg transition-shadow"
        onClick={() => setModalImage('/User FLow.png')}
      >
        <img 
          src="images/User FLow.png" 
          alt="User Flow Diagram" 
          className="w-full h-auto rounded-lg"
        />
        <p className="text-sm text-center text-foreground/60 mt-3">Click to enlarge</p>
      </div>
    </div>
  ),
},
{
  id: 'architecture',
  title: 'System Architecture Diagram',
  content: (
    <div className="space-y-4">
      <p className="text-foreground/80 leading-relaxed mb-6">
        The system architecture demonstrates the technical infrastructure powering FuelFlash:
      </p>
      <div 
        className="bg-gradient-to-br from-[#2a1e36]/5 to-[#d47f43]/5 rounded-lg p-4 border border-[#d47f43]/20 cursor-pointer hover:shadow-lg transition-shadow"
        onClick={() => setModalImage('/FuelFlash Architecture Diagram.png')}
      >
        <img 
          src="images/FuelFlash Architecture Diagram.png" 
          alt="System Architecture Diagram" 
          className="w-full h-auto rounded-lg"
        />
        <p className="text-sm text-center text-foreground/60 mt-3">Click to enlarge</p>
      </div>
    </div>
  ),
},

    {
      id: 'Solution',
      title: 'Solution (FuelFlash)',
      content: (
        <div className="space-y-6">
          <p className="text-foreground/80 leading-relaxed">
            The solution is an SMS alert system where the admin updates the fuel price changes. The alert is sent automatically to the end user once the changes are made. The fuel updates according to RURA are changed every two months, which sometimes may change during the two months due to factors like inflation and market price. Overall, it offers a convenient and reliable way to stay updated on fuel prices in real time.
          </p>

          <div className="p-6 bg-gradient-to-r from-[#2a1e36]/10 to-[#d47f43]/10 rounded-lg border border-[#d47f43]/20">
            <h4 className="text-lg font-semibold text-[#d47f43] mb-4">Key Solution Components</h4>
            
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-[#f9c784] mb-2">SMS Alert System</h5>
                <p className="text-foreground/70 text-sm">
                  Sends daily fuel price updates to subscribers' mobile phones, including fuel types and prices by location. Messages are sent in both English and Kinyarwanda.
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-[#f9c784] mb-2">USSD Subscription</h5>
                <p className="text-foreground/70 text-sm mb-2">
                  A guided process to create a user profile linked to their phone number and name. Example: A vehicle owner dials *384*33121#. The system prompts: "Welcome to FuelFlash! Please enter your full name:"
                </p>
                <ul className="space-y-1 text-foreground/60 text-sm ml-4">
                  <li>• User registration via USSD menu</li>
                  <li>• Unsubscribe option</li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-[#f9c784] mb-2">Web Subscription Portal</h5>
                <p className="text-foreground/70 text-sm">
                  Allows users to register by entering their name and phone number through a web interface.
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-[#f9c784] mb-2">Django Admin Interface</h5>
                <p className="text-foreground/70 text-sm mb-2">
                  Use Django's built-in Admin site as the control panel for managing the fuel price alert system:
                </p>
                <ul className="space-y-1 text-foreground/60 text-sm ml-4">
                  <li>• Admin users log in and update current fuel prices</li>
                  <li>• Manage list of subscribers (phone numbers)</li>
                  <li>• Manual price update entry when official updates are received</li>
                  <li>• Automatic SMS notifications sent to all registered subscribers</li>
                  <li>• User tracking and subscription monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'key-components',
      title: 'Key Components',
      content: (
        <div className="space-y-4">
          <p className="text-foreground/80 leading-relaxed mb-6">
            FuelFlash is built on several core technical components:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-gradient-to-br from-[#2a1e36]/5 to-[#d47f43]/5 rounded-lg border border-[#d47f43]/20">
              <h4 className="text-lg font-semibold text-[#d47f43] mb-3">SMS Gateway Integration</h4>
              <p className="text-foreground/70 text-sm mb-3">
                Integration with SMS gateway provider for bulk SMS delivery with multi-language support.
              </p>
              <ul className="space-y-1 text-foreground/60 text-sm">
                <li>• Automatic SMS delivery</li>
                <li>• Bilingual messages (English/Kinyarwanda)</li>
                <li>• Delivery confirmation tracking</li>
              </ul>
            </div>
            <div className="p-5 bg-gradient-to-br from-[#2a1e36]/5 to-[#d47f43]/5 rounded-lg border border-[#d47f43]/20">
              <h4 className="text-lg font-semibold text-[#d47f43] mb-3">USSD Platform</h4>
              <p className="text-foreground/70 text-sm mb-3">
                Interactive USSD menus for subscription management and price viewing.
              </p>
              <ul className="space-y-1 text-foreground/60 text-sm">
                <li>• User registration</li>
                <li>• Subscription management</li>
              </ul>
            </div>
            <div className="p-5 bg-gradient-to-br from-[#2a1e36]/5 to-[#d47f43]/5 rounded-lg border border-[#d47f43]/20">
              <h4 className="text-lg font-semibold text-[#d47f43] mb-3">Django Backend</h4>
              <p className="text-foreground/70 text-sm mb-3">
                Robust backend system handling data management and admin operations.
              </p>
              <ul className="space-y-1 text-foreground/60 text-sm">
                <li>• Subscriber database management</li>
                <li>• Price update logging</li>
                <li>• Admin authentication</li>
              </ul>
            </div>
            <div className="p-5 bg-gradient-to-br from-[#2a1e36]/5 to-[#d47f43]/5 rounded-lg border border-[#d47f43]/20">
              <h4 className="text-lg font-semibold text-[#d47f43] mb-3">Web Portal</h4>
              <p className="text-foreground/70 text-sm mb-3">
                User-friendly web interface for subscription and information access.
              </p>
              <ul className="space-y-1 text-foreground/60 text-sm">
                <li>• Online registration</li>
                <li>• Current price display</li>
                <li>• Mobile-responsive design</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'success-metrics',
      title: 'Success Metrics',
      content: (
        <div className="space-y-4">
          <p className="text-foreground/80 leading-relaxed mb-6">
            We measure FuelFlash's success through key performance indicators:
          </p>
          <div className="space-y-4">
            <div className="p-6 bg-gradient-to-r from-[#2a1e36]/10 to-[#d47f43]/10 rounded-lg border border-[#d47f43]/20">
              <h4 className="text-lg font-semibold text-[#d47f43] mb-4">SMS Delivery Performance</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-[#2a1e36]/10 rounded">
                  <div className="text-3xl font-bold text-[#f9c784]">99.5%</div>
                  <div className="text-sm text-foreground/60 mt-1">SMS Delivery Uptime</div>
                </div>
                <div className="text-center p-4 bg-[#2a1e36]/10 rounded">
                  <div className="text-3xl font-bold text-[#f9c784]">99%</div>
                  <div className="text-sm text-foreground/60 mt-1">Alert Accuracy</div>
                </div>
                <div className="text-center p-4 bg-[#2a1e36]/10 rounded">
                  <div className="text-3xl font-bold text-[#f9c784]">&lt;30sec</div>
                  <div className="text-sm text-foreground/60 mt-1">Alert Delivery Speed</div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-r from-[#2a1e36]/10 to-[#d47f43]/10 rounded-lg border border-[#d47f43]/20">
              <h4 className="text-lg font-semibold text-[#d47f43] mb-4">System Performance</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-[#2a1e36]/10 rounded">
                  <div className="text-3xl font-bold text-[#f9c784]">99.9%</div>
                  <div className="text-sm text-foreground/60 mt-1">System Uptime</div>
                </div>
                <div className="text-center p-4 bg-[#2a1e36]/10 rounded">
                  <div className="text-3xl font-bold text-[#f9c784]">20%</div>
                  <div className="text-sm text-foreground/60 mt-1">Quarterly Growth Target</div>
                </div>
                <div className="text-center p-4 bg-[#2a1e36]/10 rounded">
                  <div className="text-3xl font-bold text-[#f9c784]">75-80%</div>
                  <div className="text-sm text-foreground/60 mt-1">Population Reach Potential</div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-r from-[#2a1e36]/10 to-[#d47f43]/10 rounded-lg border border-[#d47f43]/20">
              <h4 className="text-lg font-semibold text-[#d47f43] mb-4">Consumer Impact</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-[#2a1e36]/10 rounded">
                  <div className="text-3xl font-bold text-[#f9c784]">5-10%</div>
                  <div className="text-sm text-foreground/60 mt-1">Potential Fuel Budget Savings</div>
                </div>
                <div className="text-center p-4 bg-[#2a1e36]/10 rounded">
                  <div className="text-3xl font-bold text-[#f9c784]">Instant</div>
                  <div className="text-sm text-foreground/60 mt-1">Price Update Notification</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'assumptions',
      title: 'Assumptions & Out of Scope',
      content: (
        <div className="space-y-6">
          <div className="p-6 bg-gradient-to-r from-[#2a1e36]/10 to-[#d47f43]/10 rounded-lg border border-[#d47f43]/20">
            <h4 className="text-lg font-semibold text-[#d47f43] mb-4">Key Assumptions</h4>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start">
                <span className="text-[#f9c784] mr-2">•</span>
                <span>Official fuel price updates will be reliably provided on a regular schedule by regulatory authorities or trusted sources</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f9c784] mr-2">•</span>
                <span>Fuel prices communicated via SMS will be clear, concise, and easy for users to understand and take action on</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f9c784] mr-2">•</span>
                <span>The backend infrastructure will have sufficient capacity and uptime to handle subscriber data and send high volumes of SMS alerts</span>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-gradient-to-r from-[#2a1e36]/10 to-[#d47f43]/10 rounded-lg border border-[#d47f43]/20">
            <h4 className="text-lg font-semibold text-[#d47f43] mb-4">Out of Scope Features</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-[#f9c784] mb-2">Fuel Theft Detection and Monitoring System</h5>
                <p className="text-foreground/70 text-sm">
                  <strong>Description:</strong> A system using IoT sensors, GPS, and GSM modules to detect fuel theft from tanks or vehicles by monitoring fuel levels and sending alerts.
                </p>
                <p className="text-foreground/60 text-sm italic mt-1">
                  Reason: Requires specialized hardware, expensive sensors, and complex integration beyond the scope of this SMS alert project.
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-[#f9c784] mb-2">Dynamic Fuel Price Prediction Using AI</h5>
                <p className="text-foreground/70 text-sm">
                  <strong>Description:</strong> Advanced AI models that forecast future fuel price changes based on market data and global economic variables.
                </p>
                <p className="text-foreground/60 text-sm italic mt-1">
                  Reason: Requires extensive data, advanced machine learning expertise, and computational resources not available for this project.
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-[#f9c784] mb-2">Integration with Fuel Stations' Point-of-Sale Systems</h5>
                <p className="text-foreground/70 text-sm">
                  <strong>Description:</strong> Automatic update of price alerts directly from fuel station POS systems with real-time accuracy.
                </p>
                <p className="text-foreground/60 text-sm italic mt-1">
                  Reason: Establishing integration with multiple vendors' POS systems requires partnerships and technical infrastructure beyond the current solution's focus.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2a1e36] to-[#1a1423] text-foreground">
      <Header />
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
      
      {modalImage && (
        <ImageModal imageSrc={modalImage} onClose={() => setModalImage(null)} />
      )}
    </div>
  );
}
