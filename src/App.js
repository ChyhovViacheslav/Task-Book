import './styles/global.scss';
import Sidebar from './components/sidebar/sidebar';
import Content from './components/content/content';

export default function App() {
  return (
    <main className='page'>
      <Sidebar/>
      <Content/>
    </main>
  );
}
