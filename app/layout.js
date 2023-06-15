import './globals.css';
import Navbar from './Components/Navbar/Navbar';

export const metadata = {
  title: 'Effekt.trainer',
  description:
    'Effekt.trainer is a fitness app that helps you track your workouts, calories, and gym sets. With Effekt.trainer, you can stay motivated and on track to reach your fitness goals.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
