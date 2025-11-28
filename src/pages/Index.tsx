import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const [balance, setBalance] = useState(0.00524);
  const [mining, setMining] = useState(false);
  const [miningProgress, setMiningProgress] = useState(0);
  const [adsWatched, setAdsWatched] = useState(7);
  const [watchingAd, setWatchingAd] = useState(false);
  const [adProgress, setAdProgress] = useState(0);

  const startMining = () => {
    setMining(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 1;
      setMiningProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setBalance(prev => prev + 0.00001);
        setMiningProgress(0);
        setMining(false);
      }
    }, 50);
  };

  const watchAd = () => {
    setWatchingAd(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 2;
      setAdProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setBalance(prev => prev + 0.0001);
        setAdsWatched(prev => prev + 1);
        setAdProgress(0);
        setWatchingAd(false);
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <header className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-xl">
                <Icon name="Cpu" size={32} className="text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">CryptoMiner</h1>
                <p className="text-muted-foreground">Майнинг через просмотр рекламы</p>
              </div>
            </div>
            <Card className="px-6 py-3">
              <div className="flex items-center gap-2">
                <Icon name="Wallet" size={24} className="text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">Баланс</p>
                  <p className="text-2xl font-bold">{balance.toFixed(5)} BTC</p>
                </div>
              </div>
            </Card>
          </div>
        </header>

        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-8">
            <TabsTrigger value="home">
              <Icon name="Home" size={18} className="mr-2" />
              Главная
            </TabsTrigger>
            <TabsTrigger value="mining">
              <Icon name="Pickaxe" size={18} className="mr-2" />
              Майнинг
            </TabsTrigger>
            <TabsTrigger value="ads">
              <Icon name="Play" size={18} className="mr-2" />
              Реклама
            </TabsTrigger>
            <TabsTrigger value="balance">
              <Icon name="DollarSign" size={18} className="mr-2" />
              Баланс
            </TabsTrigger>
            <TabsTrigger value="stats">
              <Icon name="BarChart3" size={18} className="mr-2" />
              Статистика
            </TabsTrigger>
            <TabsTrigger value="withdraw">
              <Icon name="Send" size={18} className="mr-2" />
              Вывод
            </TabsTrigger>
            <TabsTrigger value="profile">
              <Icon name="User" size={18} className="mr-2" />
              Профиль
            </TabsTrigger>
            <TabsTrigger value="faq">
              <Icon name="HelpCircle" size={18} className="mr-2" />
              FAQ
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="space-y-6 animate-fade-in">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" size={24} className="text-accent" />
                    Заработано сегодня
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">0.00124 BTC</p>
                  <p className="text-muted-foreground text-sm mt-1">≈ $52.40</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Eye" size={24} className="text-primary" />
                    Просмотров рекламы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{adsWatched}</p>
                  <p className="text-muted-foreground text-sm mt-1">+3 за последний час</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Zap" size={24} className="text-yellow-500" />
                    Мощность майнинга
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">2.4 GH/s</p>
                  <p className="text-muted-foreground text-sm mt-1">Стабильная работа</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Быстрый старт</CardTitle>
                <CardDescription>Выбери способ заработка</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Button 
                    size="lg" 
                    className="h-24 flex-col gap-2"
                    onClick={startMining}
                    disabled={mining}
                  >
                    <Icon name="Cpu" size={32} />
                    <span>{mining ? 'Идёт майнинг...' : 'Начать майнинг'}</span>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="h-24 flex-col gap-2"
                    onClick={watchAd}
                    disabled={watchingAd}
                  >
                    <Icon name="Play" size={32} />
                    <span>{watchingAd ? 'Просмотр...' : 'Смотреть рекламу'}</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="mining" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Cpu" size={28} className="text-primary" />
                  Процесс майнинга
                </CardTitle>
                <CardDescription>Автоматическая добыча криптовалюты</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-center py-8">
                  <div className="relative">
                    <div className={`w-32 h-32 rounded-full border-8 border-primary ${mining ? 'animate-spin-slow' : ''} flex items-center justify-center`}>
                      <Icon name="Cpu" size={64} className="text-primary" />
                    </div>
                    {mining && (
                      <div className="absolute inset-0 rounded-full border-4 border-accent animate-pulse-soft"></div>
                    )}
                  </div>
                </div>

                {mining && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Прогресс</span>
                      <span>{miningProgress}%</span>
                    </div>
                    <Progress value={miningProgress} className="h-3" />
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <p className="text-sm text-muted-foreground">Скорость</p>
                    <p className="text-xl font-bold">2.4 GH/s</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <p className="text-sm text-muted-foreground">За блок</p>
                    <p className="text-xl font-bold">0.00001 BTC</p>
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={startMining}
                  disabled={mining}
                >
                  {mining ? 'Майнинг в процессе...' : 'Начать майнинг'}
                </Button>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">История майнинга</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {[
                    { time: '14:32', amount: '0.00001', status: 'Завершён' },
                    { time: '14:15', amount: '0.00001', status: 'Завершён' },
                    { time: '13:58', amount: '0.00001', status: 'Завершён' }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-2 border rounded">
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-accent" />
                        <span className="text-sm">{item.time}</span>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-sm">{item.amount} BTC</p>
                        <p className="text-xs text-muted-foreground">{item.status}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Достижения</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-accent/10 rounded">
                      <Icon name="Award" size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold">Первый блок</p>
                      <p className="text-xs text-muted-foreground">Добыт первый блок</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded">
                      <Icon name="Trophy" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">10 блоков</p>
                      <p className="text-xs text-muted-foreground">Добыто 10 блоков</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ads" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Play" size={28} className="text-primary" />
                  Просмотр рекламы
                </CardTitle>
                <CardDescription>Смотри рекламу и получай бонусы</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {watchingAd ? (
                  <div className="space-y-4">
                    <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Icon name="Play" size={64} className="text-primary mx-auto mb-4 animate-pulse-soft" />
                        <p className="text-lg font-semibold">Идёт показ рекламы</p>
                        <p className="text-sm text-muted-foreground">Не закрывайте окно</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Прогресс просмотра</span>
                        <span>{adProgress}%</span>
                      </div>
                      <Progress value={adProgress} className="h-3" />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-secondary rounded-lg">
                        <p className="text-sm text-muted-foreground">Просмотрено сегодня</p>
                        <p className="text-2xl font-bold">{adsWatched}</p>
                      </div>
                      <div className="p-4 bg-secondary rounded-lg">
                        <p className="text-sm text-muted-foreground">За просмотр</p>
                        <p className="text-2xl font-bold">0.0001 BTC</p>
                      </div>
                    </div>

                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={watchAd}
                    >
                      <Icon name="Play" size={20} className="mr-2" />
                      Посмотреть рекламу
                    </Button>

                    <div className="space-y-3 pt-4">
                      <h3 className="font-semibold">Доступные рекламные блоки</h3>
                      {[
                        { title: 'Премиум объявление', reward: '0.0002', duration: '30 сек' },
                        { title: 'Стандартное объявление', reward: '0.0001', duration: '15 сек' },
                        { title: 'Короткое объявление', reward: '0.00005', duration: '10 сек' }
                      ].map((ad, i) => (
                        <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer">
                          <CardContent className="p-4 flex justify-between items-center">
                            <div>
                              <p className="font-semibold">{ad.title}</p>
                              <p className="text-sm text-muted-foreground">{ad.duration}</p>
                            </div>
                            <div className="text-right">
                              <Badge variant="secondary" className="text-accent">
                                +{ad.reward} BTC
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="balance" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Wallet" size={28} className="text-accent" />
                  Мой баланс
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center py-8">
                  <p className="text-4xl font-bold mb-2">{balance.toFixed(5)} BTC</p>
                  <p className="text-xl text-muted-foreground">≈ ${(balance * 42000).toFixed(2)}</p>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-semibold">История транзакций</h3>
                  {[
                    { type: 'Реклама', amount: '+0.0001', time: '2 мин назад', icon: 'Play' },
                    { type: 'Майнинг', amount: '+0.00001', time: '15 мин назад', icon: 'Cpu' },
                    { type: 'Реклама', amount: '+0.0001', time: '1 час назад', icon: 'Play' },
                    { type: 'Майнинг', amount: '+0.00001', time: '2 часа назад', icon: 'Cpu' }
                  ].map((tx, i) => (
                    <div key={i} className="flex justify-between items-center p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded">
                          <Icon name={tx.icon as any} size={20} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{tx.type}</p>
                          <p className="text-xs text-muted-foreground">{tx.time}</p>
                        </div>
                      </div>
                      <p className="font-bold text-accent">{tx.amount} BTC</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats" className="space-y-6 animate-fade-in">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Всего заработано</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">{balance.toFixed(5)} BTC</p>
                  <p className="text-sm text-muted-foreground mt-1">≈ ${(balance * 42000).toFixed(2)}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Время работы</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">24 часа</p>
                  <p className="text-sm text-muted-foreground mt-1">За последние 7 дней</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Средний доход</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">0.00018 BTC</p>
                  <p className="text-sm text-muted-foreground mt-1">В день</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Статистика по источникам</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Майнинг</span>
                      <span className="text-sm text-muted-foreground">35%</span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Реклама</span>
                      <span className="text-sm text-muted-foreground">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="withdraw" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Send" size={28} className="text-primary" />
                  Вывод средств
                </CardTitle>
                <CardDescription>Минимальная сумма вывода: 0.001 BTC</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 bg-secondary rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Доступно для вывода</p>
                  <p className="text-2xl font-bold">{balance.toFixed(5)} BTC</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Адрес кошелька BTC</Label>
                    <Input 
                      id="address" 
                      placeholder="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount">Сумма</Label>
                    <Input 
                      id="amount" 
                      type="number"
                      placeholder="0.001"
                      step="0.00001"
                    />
                  </div>

                  <Button className="w-full" size="lg" disabled={balance < 0.001}>
                    <Icon name="Send" size={20} className="mr-2" />
                    Вывести средства
                  </Button>

                  {balance < 0.001 && (
                    <p className="text-sm text-destructive text-center">
                      Недостаточно средств для вывода. Минимум: 0.001 BTC
                    </p>
                  )}
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-semibold">История выводов</h3>
                  <div className="text-center py-8 text-muted-foreground">
                    <Icon name="Inbox" size={48} className="mx-auto mb-2 opacity-50" />
                    <p>Пока нет выводов</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="User" size={28} className="text-primary" />
                  Мой профиль
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={40} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">User #12847</p>
                    <p className="text-sm text-muted-foreground">Участник с 15.11.2024</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Icon name="Award" size={24} className="text-accent" />
                      <span className="font-semibold">Уровень</span>
                    </div>
                    <Badge variant="secondary">Новичок</Badge>
                  </div>

                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Icon name="Calendar" size={24} className="text-primary" />
                      <span className="font-semibold">Дней активности</span>
                    </div>
                    <span className="font-bold">13</span>
                  </div>

                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Icon name="Target" size={24} className="text-yellow-500" />
                      <span className="font-semibold">Достижений</span>
                    </div>
                    <span className="font-bold">2 / 15</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-semibold">Настройки уведомлений</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Уведомления о майнинге</span>
                    <Button variant="outline" size="sm">Вкл</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Новые рекламные блоки</span>
                    <Button variant="outline" size="sm">Вкл</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="HelpCircle" size={28} className="text-primary" />
                  Часто задаваемые вопросы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Как работает майнинг?</AccordionTrigger>
                    <AccordionContent>
                      Наша платформа использует облачные мощности для майнинга криптовалюты. 
                      Вы получаете долю от добытых монет пропорционально вашему вкладу времени и просмотренной рекламы.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Сколько можно заработать?</AccordionTrigger>
                    <AccordionContent>
                      Средний доход составляет 0.00015-0.0002 BTC в день при активном участии. 
                      Чем больше времени вы уделяете просмотру рекламы и майнингу, тем выше заработок.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Как вывести средства?</AccordionTrigger>
                    <AccordionContent>
                      Минимальная сумма для вывода - 0.001 BTC. Укажите адрес вашего BTC кошелька 
                      во вкладке "Вывод" и средства поступят в течение 24 часов.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Есть ли комиссия?</AccordionTrigger>
                    <AccordionContent>
                      Мы берём комиссию 5% при выводе средств для покрытия транзакционных расходов блокчейна.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>Безопасно ли это?</AccordionTrigger>
                    <AccordionContent>
                      Да, мы используем современные протоколы шифрования для защиты ваших данных. 
                      Все транзакции проходят через защищенные каналы связи.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6">
                    <AccordionTrigger>Как увеличить доход?</AccordionTrigger>
                    <AccordionContent>
                      1. Регулярно запускайте майнинг
                      2. Смотрите все доступные рекламные блоки
                      3. Приглашайте друзей по реферальной программе
                      4. Повышайте свой уровень для получения бонусов
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Нужна помощь?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в поддержку
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Mail" size={20} className="mr-2" />
                  support@cryptominer.com
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
