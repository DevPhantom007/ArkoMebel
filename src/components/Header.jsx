import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white">
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-12 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">
                ул. Московская, 144 корп. - 1
              </span>
              <a href="#" className="text-blue-600 hover:underline">
                Схема проезда
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="tel:+79615259191"
                className="font-semibold text-gray-900"
              >
                8 (961) 525 91 91
              </a>
              <button className="text-blue-600 hover:text-blue-700 text-sm">
                Заказать звонок
              </button>

              <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>Войти</span>
              </button>

              <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span>Избранное</span>
              </button>

              <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span>Корзина</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">А</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">
                АркоМебель
              </span>
            </Link>

            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Поиск товаров..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="text-right">
              <div className="text-sm text-gray-500">Ежедневно 10:00-19:00</div>
              <a
                href="tel:+79615259191"
                className="text-lg font-bold text-gray-900"
              >
                8 (961) 525-91-91
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-center h-14">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                to="/category/kuhni"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                КУХНИ
              </Link>
            </li>
            <li>
              <Link
                to="/category/gostinnye"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                ГОСТИННЫЕ
              </Link>
            </li>
            <li>
              <Link
                to="/category/spalni"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                СПАЛЬНИ
              </Link>
            </li>
            <li>
              <Link
                to="/category/prihozhie"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                ПРИХОЖИЕ
              </Link>
            </li>
            <li>
              <Link
                to="/category/shkafy-kupe"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                ШКАФЫ-КУПЕ
              </Link>
            </li>
            <li>
              <Link
                to="/category/detskie"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                ДЕТСКИЕ
              </Link>
            </li>
            <li>
              <Link
                to="/category/divany"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                ДИВАНЫ
              </Link>
            </li>
            <li>
              <Link
                to="/category/stoly-i-stulya"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                СТОЛЫ И СТУЛЬЯ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;