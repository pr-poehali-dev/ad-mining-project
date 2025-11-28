import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface OtherTabsProps {
  balance: number;
}

export const BalanceTab = ({ balance }: OtherTabsProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
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
    </div>
  );
};

export const StatsTab = ({ balance }: OtherTabsProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
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
    </div>
  );
};

export const WithdrawTab = ({ balance }: OtherTabsProps) => {
  return (
    <div className="space-y-6 animate-fade-in">
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

            <Button className="w-full" size="lg">
              <Icon name="Send" size={20} className="mr-2" />
              Вывести средства
            </Button>
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
    </div>
  );
};

export const ProfileTab = () => {
  return (
    <div className="space-y-6 animate-fade-in">
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
    </div>
  );
};

export const FaqTab = () => {
  return (
    <div className="space-y-6 animate-fade-in">
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
    </div>
  );
};