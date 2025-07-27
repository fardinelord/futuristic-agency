
"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap, Globe, Rocket } from "lucide-react"

export default function LocalePage({ params }: { params: { locale: string } }) {
  const isRtl = params.locale === 'fa'
  
  return (
    <div className="min-h-screen bg-black text-white" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              FUTURA
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-purple-400 transition-colors">
                {params.locale === 'fa' ? 'خدمات' : 'Services'}
              </a>
              <a href="#about" className="hover:text-purple-400 transition-colors">
                {params.locale === 'fa' ? 'درباره ما' : 'About'}
              </a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">
                {params.locale === 'fa' ? 'تماس' : 'Contact'}
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              {params.locale === 'fa' ? 'راه‌حل‌های دیجیتال' : 'Future-Ready'}
            </span>
            <br />
            {params.locale === 'fa' ? 'آینده‌نگر' : 'Digital Solutions'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            {params.locale === 'fa' 
              ? 'ما تجربیات دیجیتال پیشرفته‌ای می‌سازیم که مرزهای ممکن را جابه‌جا می‌کند'
              : "We craft cutting-edge digital experiences that push the boundaries of what's possible"
            }
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 mx-auto hover:shadow-lg hover:shadow-purple-500/25 transition-all"
          >
            {params.locale === 'fa' ? 'شروع سفر شما' : 'Start Your Journey'}
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {params.locale === 'fa' ? 'خدمات ما' : 'Our Services'}
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {params.locale === 'fa' ? 'راه‌حل‌های پیشرفته برای عصر دیجیتال' : 'Cutting-edge solutions for the digital age'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: params.locale === 'fa' ? 'ادغام هوش مصنوعی' : 'AI Integration',
                description: params.locale === 'fa' 
                  ? 'از قدرت هوش مصنوعی برای تحول فرآیندهای کسب‌وکار خود استفاده کنید'
                  : 'Harness the power of artificial intelligence to transform your business processes',
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: params.locale === 'fa' ? 'توسعه وب۳' : 'Web3 Development',
                description: params.locale === 'fa'
                  ? 'اپلیکیشن‌های غیرمتمرکز بسازید و آینده اینترنت را پذیرا باشید'
                  : 'Build decentralized applications and embrace the future of the internet',
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: params.locale === 'fa' ? 'بهینه‌سازی عملکرد' : 'Performance Optimization',
                description: params.locale === 'fa'
                  ? 'اپلیکیشن‌های فوق‌العاده سریع که تجربه کاربری استثنایی ارائه می‌دهند'
                  : 'Lightning-fast applications that deliver exceptional user experiences',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm"
              >
                <div className="text-purple-400 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {params.locale === 'fa' ? 'آماده ساخت آینده؟' : 'Ready to Build the Future?'}
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {params.locale === 'fa' 
              ? 'بیایید در پروژه انقلابی بعدی شما همکاری کنیم'
              : "Let's collaborate on your next groundbreaking project"
            }
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
            {params.locale === 'fa' ? 'تماس بگیرید' : 'Get In Touch'}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            {params.locale === 'fa' 
              ? '© ۲۰۲۴ آژانس آینده‌نگر. امروز تجربیات دیجیتال فردا را می‌سازیم.'
              : '© 2024 Futuristic Agency. Crafting tomorrow\'s digital experiences today.'
            }
          </p>
        </div>
      </footer>
    </div>
  )
}
