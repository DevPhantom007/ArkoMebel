import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Страница не найдена</h2>
          <p className="text-gray-600 mb-8">К сожалению, запрашиваемая страница не существует</p>
          <Link 
            to="/" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Вернуться на главную
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFoundPage;