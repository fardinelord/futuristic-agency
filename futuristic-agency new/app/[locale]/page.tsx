import Home from '../components/Home';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return {
    title: params.locale === 'fa' ? 'آژانس آینده‌نگر' : 'Futuristic Agency',
    description:
      params.locale === 'fa' ? 'به آینده خلاقیت دیجیتال خوش آمدید' : 'Welcome to the future of digital creativity',
  };
}

export default function Page({ params }: { params: { locale: string } }) {
  const isFa = params.locale === 'fa';
  return (
    <Home
      welcomeText={isFa ? 'به آینده خوش آمدید' : 'Welcome to the Future'}
      mainTitle={isFa ? 'ما برندهایی برای عصر جدید می‌سازیم' : 'We Build Brands for the New Era'}
      subtitle={isFa ? 'وبسایت، سئو، طراحی برند و بیشتر' : 'Websites, SEO, Branding, Design & More'}
      gradient={isFa ? 'from-green-400 via-teal-500 to-cyan-600' : 'from-blue-400 via-purple-500 to-indigo-600'}
      isRtl={isFa}
    />
  );
}