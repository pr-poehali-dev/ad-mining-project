import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HomeTabProps {
  adsWatched: number;
  mining: boolean;
  watchingAd: boolean;
  startMining: () => void;
  watchAd: () => void;
}

const HomeTab = ({ adsWatched, mining, watchingAd, startMining, watchAd }: HomeTabProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
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
    </div>
  );
};

export default HomeTab;
