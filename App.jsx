import { useState, useEffect } from 'react'
import { Heart, Briefcase, Coffee, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import './App.css'
import bg1 from './assets/bg1.webp'
import bg2 from './assets/bg2.webp'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [bubbles, setBubbles] = useState([])

  useEffect(() => {
    // Gerar bolhas animadas
    const newBubbles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5,
      size: 20 + Math.random() * 60
    }))
    setBubbles(newBubbles)
  }, [])

  const experiences = [
    {
      title: "Garçom",
      icon: Coffee,
      description: "Experiência em atendimento ao cliente e trabalho em equipe",
      color: "from-purple-400 to-blue-400"
    },
    {
      title: "Operador de Caixa",
      icon: Briefcase,
      description: "Habilidades em gestão financeira e atendimento",
      color: "from-blue-400 to-cyan-400"
    }
  ]

  const favorites = [
    { name: "Schweppes", emoji: "🥤", color: "from-yellow-300 to-green-400" },
    { name: "Parmegiana de Frango", emoji: "🍗", color: "from-orange-300 to-red-400" },
    { name: "Cor Roxa", emoji: "💜", color: "from-purple-400 to-pink-400" },
    { name: "Estética Frutiger Aero", emoji: "✨", color: "from-cyan-300 to-blue-400" }
  ]

  return (
    <div className="app-container">
      {/* Fundo com efeito Frutiger Aero */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-300 via-blue-200 to-cyan-200 opacity-80"></div>
        <div className="absolute inset-0 backdrop-blur-3xl"></div>
        
        {/* Bolhas animadas */}
        {bubbles.map(bubble => (
          <div
            key={bubble.id}
            className="bubble"
            style={{
              left: `${bubble.left}%`,
              animationDelay: `${bubble.delay}s`,
              animationDuration: `${bubble.duration}s`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`
            }}
          />
        ))}

        {/* Efeitos de luz */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="min-h-screen relative z-10">
        {/* Header */}
        <header className="glass-effect sticky top-0 z-50 backdrop-blur-md border-b border-white/20">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex justify-between items-center">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Wilkner
              </h1>
              <div className="flex gap-4">
                <Button 
                  variant={activeSection === 'home' ? 'default' : 'ghost'}
                  onClick={() => setActiveSection('home')}
                  className="glass-button"
                >
                  Início
                </Button>
                <Button 
                  variant={activeSection === 'about' ? 'default' : 'ghost'}
                  onClick={() => setActiveSection('about')}
                  className="glass-button"
                >
                  Sobre
                </Button>
                <Button 
                  variant={activeSection === 'favorites' ? 'default' : 'ghost'}
                  onClick={() => setActiveSection('favorites')}
                  className="glass-button"
                >
                  Favoritos
                </Button>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        {activeSection === 'home' && (
          <section className="container mx-auto px-4 py-20 animate-fade-in">
            <div className="text-center space-y-8">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <h2 className="relative text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Olá, eu sou Wilkner!
                </h2>
              </div>
              
              <p className="text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Bem-vindo ao meu espaço pessoal na web, onde compartilho um pouco sobre mim, 
                minhas experiências e as coisas que amo.
              </p>

              <div className="flex justify-center gap-4 pt-8">
                <Button 
                  size="lg" 
                  className="glass-button-primary text-lg px-8 py-6"
                  onClick={() => setActiveSection('about')}
                >
                  <Sparkles className="mr-2" />
                  Conheça mais
                </Button>
              </div>

              {/* Decorative elements */}
              <div className="flex justify-center gap-8 pt-12">
                <div className="glass-card p-6 rounded-full animate-float">
                  <Heart className="w-12 h-12 text-purple-600" />
                </div>
                <div className="glass-card p-6 rounded-full animate-float animation-delay-1000">
                  <Coffee className="w-12 h-12 text-blue-600" />
                </div>
                <div className="glass-card p-6 rounded-full animate-float animation-delay-2000">
                  <Briefcase className="w-12 h-12 text-cyan-600" />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <section className="container mx-auto px-4 py-20 animate-fade-in">
            <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Minhas Experiências
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {experiences.map((exp, index) => (
                <Card 
                  key={index} 
                  className="glass-card hover-lift border-white/30"
                >
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <exp.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{exp.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg text-gray-700">
                      {exp.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Card className="glass-card max-w-2xl mx-auto border-white/30">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center shadow-lg animate-pulse">
                      <Heart className="w-10 h-10 text-white fill-white" />
                    </div>
                  </div>
                  <CardTitle className="text-3xl">Minha Namorada</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl text-gray-700">
                    A pessoa mais especial da minha vida, que me inspira e me faz feliz todos os dias! 💕
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Favorites Section */}
        {activeSection === 'favorites' && (
          <section className="container mx-auto px-4 py-20 animate-fade-in">
            <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Coisas que Eu Amo
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {favorites.map((fav, index) => (
                <Card 
                  key={index} 
                  className="glass-card hover-lift border-white/30 text-center"
                >
                  <CardHeader>
                    <div className={`w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br ${fav.color} flex items-center justify-center mb-4 shadow-lg text-5xl`}>
                      {fav.emoji}
                    </div>
                    <CardTitle className="text-xl">{fav.name}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="mt-16 max-w-4xl mx-auto">
              <Card className="glass-card border-white/30">
                <CardHeader>
                  <CardTitle className="text-3xl text-center">
                    Sobre a Estética Frutiger Aero
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg text-gray-700">
                  <p>
                    A estética <strong>Frutiger Aero</strong> é um estilo visual que marcou os anos 2000 e início dos 2010, 
                    caracterizado por elementos brilhantes, efeitos de vidro, cores vibrantes e uma harmonia entre 
                    tecnologia e natureza.
                  </p>
                  <p>
                    Adoro essa estética por sua sensação otimista e futurista, que combina perfeitamente com minha 
                    personalidade e minha visão de mundo! ✨
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="glass-effect border-t border-white/20 mt-20">
          <div className="container mx-auto px-4 py-8 text-center">
            <p className="text-gray-700 text-lg">
              Feito com <Heart className="inline w-5 h-5 text-purple-600 fill-purple-600" /> por Wilkner
            </p>
            <p className="text-gray-600 mt-2">
              Inspirado na estética Frutiger Aero ✨
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
