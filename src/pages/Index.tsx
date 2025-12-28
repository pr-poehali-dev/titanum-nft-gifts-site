import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-primary/30 neon-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="w-12 h-12 rounded-xl bg-gradient-gaming glow flex items-center justify-center">
              <span className="text-2xl font-bold">T</span>
            </div>
            <span className="text-2xl font-bold text-gradient">TITANUM</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-primary transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('catalog')}
              className="hover:text-primary transition-colors"
            >
              NFT-каталог
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="hover:text-primary transition-colors"
            >
              Команда
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="hover:text-primary transition-colors"
            >
              Контакты
            </button>
          </div>

          <Button className="bg-primary hover:bg-primary/90 glow">
            <Icon name="Send" size={18} className="mr-2" />
            Telegram
          </Button>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 animate-glow-pulse" />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-scale-in">
            <Badge className="mb-6 text-lg px-6 py-2 bg-primary/20 border-primary/50 glow">
              🎁 Уникальные NFT из Telegram
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient animate-float">
              TITANUM
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Создавай, дари и коллекционируй уникальные цифровые подарки прямо в Telegram
            </p>
            <div className="flex gap-4 justify-center animate-slide-up">
              <Button
                size="lg"
                className="bg-gradient-gaming glow text-lg px-8 py-6 hover:scale-105 transition-transform"
                onClick={() => scrollToSection('catalog')}
              >
                <Icon name="Gift" size={24} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-lg px-8 py-6 hover:bg-primary/10 hover:scale-105 transition-transform"
                onClick={() => scrollToSection('contacts')}
              >
                <Icon name="MessageCircle" size={24} className="mr-2" />
                Связаться
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 animate-fade-in">
            <Card className="bg-card/50 backdrop-blur border-primary/30 hover:border-primary/60 transition-all hover:scale-105 glow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 glow">
                  <Icon name="Sparkles" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Уникальность</h3>
                <p className="text-muted-foreground">Каждый NFT-подарок единственный в своём роде</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-secondary/30 hover:border-secondary/60 transition-all hover:scale-105 glow-pink">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4 glow-pink">
                  <Icon name="Zap" size={32} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Быстро</h3>
                <p className="text-muted-foreground">Мгновенная отправка через Telegram</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-accent/30 hover:border-accent/60 transition-all hover:scale-105 glow-blue">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 glow-blue">
                  <Icon name="Shield" size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Безопасно</h3>
                <p className="text-muted-foreground">Надёжное хранение в блокчейне</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="catalog" className="min-h-screen py-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">NFT-каталог</h2>
            <p className="text-xl text-muted-foreground">Выбери идеальный подарок для своих друзей</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Космический Кристалл',
                price: '0.5 TON',
                rarity: 'Легендарный',
                color: 'primary',
                image: 'https://cdn.poehali.dev/projects/db52ec6e-2c01-410d-bac9-f3c3a40b1e6a/files/14ddc6a9-a425-434a-8a44-fc6bc3260bc7.jpg',
              },
              {
                name: 'Неоновый Единорог',
                price: '0.3 TON',
                rarity: 'Эпический',
                color: 'secondary',
                image: 'https://cdn.poehali.dev/projects/db52ec6e-2c01-410d-bac9-f3c3a40b1e6a/files/4e91f5b4-e1c6-40a1-9431-2949e14bfd85.jpg',
              },
              {
                name: 'Цифровая Звезда',
                price: '0.2 TON',
                rarity: 'Редкий',
                color: 'accent',
                image: 'https://cdn.poehali.dev/projects/db52ec6e-2c01-410d-bac9-f3c3a40b1e6a/files/2ad6baa9-6ef4-4749-a4f3-8f2057d1d36c.jpg',
              },
            ].map((nft, index) => (
              <Card
                key={index}
                className="bg-card border-2 border-primary/30 hover:border-primary overflow-hidden group transition-all hover:scale-105 animate-slide-up glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={nft.image} 
                    alt={nft.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-primary/20 border-primary/50">
                    {nft.rarity}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2">{nft.name}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-primary">{nft.price}</span>
                    <Button className="bg-gradient-gaming glow hover:scale-105 transition-transform">
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="min-h-screen py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">Наша команда</h2>
            <p className="text-xl text-muted-foreground">Профессионалы цифрового искусства</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Алексей Кодеров',
                role: 'CEO & Founder',
                icon: 'Crown',
                color: 'primary',
              },
              {
                name: 'Мария Дизайнова',
                role: 'Lead Artist',
                icon: 'Palette',
                color: 'secondary',
              },
              {
                name: 'Иван Блокчейнов',
                role: 'Blockchain Developer',
                icon: 'Code',
                color: 'accent',
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="bg-card border-2 border-primary/30 hover:border-primary transition-all hover:scale-105 animate-slide-up glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center mx-auto mb-4 glow">
                    <Icon name={member.icon as any} size={64} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-lg text-muted-foreground mb-4">{member.role}</p>
                  <div className="flex gap-2 justify-center">
                    <Button size="icon" variant="outline" className="rounded-full hover:bg-primary/10">
                      <Icon name="Send" size={18} />
                    </Button>
                    <Button size="icon" variant="outline" className="rounded-full hover:bg-primary/10">
                      <Icon name="Github" size={18} />
                    </Button>
                    <Button size="icon" variant="outline" className="rounded-full hover:bg-primary/10">
                      <Icon name="Linkedin" size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="min-h-screen py-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами любым удобным способом</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card border-2 border-primary/30 hover:border-primary transition-all animate-slide-up glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Форма обратной связи</h3>
                <form className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      className="bg-background/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-background/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Ваше сообщение"
                      rows={4}
                      className="bg-background/50 border-primary/30 focus:border-primary"
                    />
                  </div>
                  <Button className="w-full bg-gradient-gaming glow hover:scale-105 transition-transform">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <Card className="bg-card border-2 border-primary/30 hover:border-primary transition-all glow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center glow">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-muted-foreground">info@titanum.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-2 border-secondary/30 hover:border-secondary transition-all glow-pink">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center glow-pink">
                    <Icon name="Send" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold">Telegram</h4>
                    <p className="text-muted-foreground">@titanum_official</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-2 border-accent/30 hover:border-accent transition-all glow-blue">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center glow-blue">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold">Адрес</h4>
                    <p className="text-muted-foreground">Москва, ул. Цифровая, 42</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-2 border-primary/30 hover:border-primary transition-all h-64 overflow-hidden glow">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 flex items-center justify-center">
                  <Icon name="Map" size={64} className="text-primary/50 animate-float" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-primary/30 py-8 bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-gaming glow flex items-center justify-center">
              <span className="text-xl font-bold">T</span>
            </div>
            <span className="text-xl font-bold text-gradient">TITANUM</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Уникальные NFT-подарки из Telegram
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="icon" variant="outline" className="rounded-full hover:bg-primary/10">
              <Icon name="Send" size={18} />
            </Button>
            <Button size="icon" variant="outline" className="rounded-full hover:bg-primary/10">
              <Icon name="Twitter" size={18} />
            </Button>
            <Button size="icon" variant="outline" className="rounded-full hover:bg-primary/10">
              <Icon name="Instagram" size={18} />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            © 2024 Titanum. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;