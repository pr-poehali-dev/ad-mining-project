import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface MiningTabProps {
  mining: boolean;
  miningProgress: number;
  timeRemaining: number;
  startMining: () => void;
}

const MiningTab = ({ mining, miningProgress, timeRemaining, startMining }: MiningTabProps) => {
  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };
  return (
    <div className="space-y-6 animate-fade-in">
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
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-1">{formatTime(timeRemaining)}</p>
                <p className="text-sm text-muted-foreground">Осталось времени</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Прогресс</span>
                  <span>{miningProgress}%</span>
                </div>
                <Progress value={miningProgress} className="h-3" />
              </div>
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
    </div>
  );
};

export default MiningTab;