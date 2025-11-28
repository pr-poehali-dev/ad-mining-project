import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import HomeTab from '@/components/HomeTab';
import MiningTab from '@/components/MiningTab';
import AdsTab from '@/components/AdsTab';
import { BalanceTab, StatsTab, WithdrawTab, ProfileTab, FaqTab } from '@/components/OtherTabs';

const Index = () => {
  const [balance, setBalance] = useState(0.00524);
  const [mining, setMining] = useState(false);
  const [miningProgress, setMiningProgress] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [adsWatched, setAdsWatched] = useState(7);
  const [watchingAd, setWatchingAd] = useState(false);
  const [adProgress, setAdProgress] = useState(0);

  const startMining = () => {
    setMining(true);
    const miningDuration = 15 * 60 * 1000;
    const startTime = Date.now();
    const updateInterval = miningDuration / 100;
    let progress = 0;
    
    const interval = setInterval(() => {
      progress += 1;
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, miningDuration - elapsed);
      setTimeRemaining(remaining);
      setMiningProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        setBalance(prev => prev + 0.00001);
        setMiningProgress(0);
        setTimeRemaining(0);
        setMining(false);
      }
    }, updateInterval);
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

          <TabsContent value="home">
            <HomeTab 
              adsWatched={adsWatched}
              mining={mining}
              watchingAd={watchingAd}
              startMining={startMining}
              watchAd={watchAd}
            />
          </TabsContent>

          <TabsContent value="mining">
            <MiningTab 
              mining={mining}
              miningProgress={miningProgress}
              timeRemaining={timeRemaining}
              startMining={startMining}
            />
          </TabsContent>

          <TabsContent value="ads">
            <AdsTab 
              watchingAd={watchingAd}
              adProgress={adProgress}
              adsWatched={adsWatched}
              watchAd={watchAd}
            />
          </TabsContent>

          <TabsContent value="balance">
            <BalanceTab balance={balance} />
          </TabsContent>

          <TabsContent value="stats">
            <StatsTab balance={balance} />
          </TabsContent>

          <TabsContent value="withdraw">
            <WithdrawTab balance={balance} />
          </TabsContent>

          <TabsContent value="profile">
            <ProfileTab />
          </TabsContent>

          <TabsContent value="faq">
            <FaqTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;