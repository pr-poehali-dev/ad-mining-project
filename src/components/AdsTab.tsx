import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface AdsTabProps {
  watchingAd: boolean;
  adProgress: number;
  adsWatched: number;
  watchAd: () => void;
}

const AdsTab = ({ watchingAd, adProgress, adsWatched, watchAd }: AdsTabProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
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
    </div>
  );
};

export default AdsTab;
