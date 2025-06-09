import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Code, 
  Zap, 
  Users,
  ArrowRight,
  CheckCircle,
  Play,
  Pause
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentBreakpoint, setCurrentBreakpoint] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCurrentBreakpoint('mobile');
      } else if (width < 1024) {
        setCurrentBreakpoint('tablet');
      } else {
        setCurrentBreakpoint('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDemo = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                ResponsiveWeb
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                Features
              </a>
              <a href="#examples" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                Examples
              </a>
              <a href="#guide" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                Guide
              </a>
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            <div className="py-4 space-y-4">
              <a href="#features" className="block text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                Features
              </a>
              <a href="#examples" className="block text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                Examples
              </a>
              <a href="#guide" className="block text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                Guide
              </a>
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            {/* Current Breakpoint Indicator */}
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md mb-8">
              {currentBreakpoint === 'mobile' && <Smartphone className="w-4 h-4 text-indigo-600" />}
              {currentBreakpoint === 'tablet' && <Tablet className="w-4 h-4 text-indigo-600" />}
              {currentBreakpoint === 'desktop' && <Monitor className="w-4 h-4 text-indigo-600" />}
              <span className="text-sm font-medium text-gray-700 capitalize">
                {currentBreakpoint} View
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Master{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Responsive Design
              </span>
              <br className="hidden sm:block" />
              with CSS Media Queries
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Learn how to create beautiful, mobile-friendly websites that adapt seamlessly across all devices. 
              This interactive guide demonstrates responsive design principles in action.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span className="font-semibold">Start Learning</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={toggleDemo}
                className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-indigo-400 hover:text-indigo-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                {isAnimating ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                <span className="font-semibold">Live Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Responsive Design Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Create exceptional user experiences across all devices with these key benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Better User Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Ensure your content looks perfect and functions smoothly on every device, from smartphones to ultra-wide monitors.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Improved Performance</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimize loading times and resource usage by serving appropriate content for each device type and screen size.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">SEO Benefits</h3>
              <p className="text-gray-600 leading-relaxed">
                Google prioritizes mobile-friendly websites in search rankings, helping you reach more users organically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="examples" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See Responsive Design in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch how layouts adapt and transform across different screen sizes
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-6 bg-gray-900 text-white">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-sm text-gray-300">Responsive Layout Demo</span>
              </div>
              
              <div className={`transition-all duration-1000 ${isAnimating ? 'animate-pulse' : ''}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="bg-indigo-500 h-20 rounded-lg flex items-center justify-center text-white font-semibold">
                    Header
                  </div>
                  <div className="bg-purple-500 h-20 rounded-lg flex items-center justify-center text-white font-semibold sm:col-span-1 lg:col-span-3">
                    Navigation
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
                  <div className="lg:col-span-2 bg-emerald-500 h-32 rounded-lg flex items-center justify-center text-white font-semibold">
                    Main Content
                  </div>
                  <div className="bg-orange-500 h-32 rounded-lg flex items-center justify-center text-white font-semibold">
                    Sidebar
                  </div>
                </div>
                
                <div className="bg-gray-600 h-16 rounded-lg flex items-center justify-center text-white font-semibold">
                  Footer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section id="guide" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Essential Media Query Patterns
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Master these fundamental responsive design techniques
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-2">Mobile-First Approach</h3>
                <p className="text-gray-400 text-sm">Start with mobile styles, then enhance for larger screens</p>
              </div>
              <div className="p-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`/* Base styles (mobile) */
.container {
  width: 100%;
  padding: 1rem;
}

/* Tablet styles */
@media (min-width: 768px) {
  .container {
    max-width: 768px;
    margin: 0 auto;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    padding: 2rem;
  }
}`}
                </pre>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-2">Responsive Grid Layout</h3>
                <p className="text-gray-400 text-sm">Flexible grids that adapt to screen size</p>
              </div>
              <div className="p-6">
                <pre className="text-blue-400 text-sm overflow-x-auto">
{`.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: 
      repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: 
      repeat(3, 1fr);
    gap: 2rem;
  }
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Reference: Common Breakpoints</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Smartphone className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Mobile</div>
                <div className="text-sm text-gray-600">&lt; 640px</div>
              </div>
              <div className="text-center">
                <Tablet className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Tablet</div>
                <div className="text-sm text-gray-600">640px - 1024px</div>
              </div>
              <div className="text-center">
                <Monitor className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Desktop</div>
                <div className="text-sm text-gray-600">1024px+</div>
              </div>
              <div className="text-center">
                <Monitor className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Large</div>
                <div className="text-sm text-gray-600">1280px+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">ResponsiveWeb</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Master the art of responsive web design and create beautiful, mobile-friendly experiences 
              that work perfectly on every device.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#examples" className="text-gray-300 hover:text-white transition-colors">Examples</a>
              <a href="#guide" className="text-gray-300 hover:text-white transition-colors">Guide</a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-sm">
              © 2025 ResponsiveWeb. Crafted with React, TypeScript, and Tailwind CSS.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;