import { Accordion } from '../shared/ui/accordion';
import { Button } from '../shared/ui/button';
import { Chip } from '../shared/ui/chip';
import { MainCard } from '../widgets/main-card';
import { SummaryPaymentHistory } from '../widgets/summary-payment-history';
import './App.css';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <SummaryPaymentHistory />
      <Accordion />
      <MainCard />
      <Chip label="Кешбэк до 30%" />
      <Button variant="contained">кнопка</Button>
      <Button variant="outlined">кнопка</Button>
    </div>
  );
}

export default App;
