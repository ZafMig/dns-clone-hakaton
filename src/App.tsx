import { StrictMode } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Для маршрутов
import { Header } from './Components/Header/Header';
import './App.css';
import { Search } from './Components/Search/Seacrh';
import { Footer } from './Components/Footer/Footer';

import { StartPage } from './Components/Survey/StartSurvey/StartSurvey';
import QuestionPage from './Components/Survey/QuestionPage/QuestionPage';
import ResultsPage from './Components/Survey/ResultsPage/ResultsPage';

import { HomePage } from './page/homePage';
function App() {
  return (
    <StrictMode>
      <Router>
        <Header />
        <Search />
        
        {/* Основной контент */}
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>

        {/* Для опроса */}
        <Routes>
          {/* Эти маршруты будут рендерить только страницы опроса */}
          <Route path="/survey" element={<StartPage />} />
          <Route path="/survey/question/:questionId" element={<QuestionPage />} />
          <Route path="/survey/results" element={<ResultsPage />} />
        </Routes>

        <Footer />
      </Router>
    </StrictMode>
  );
}

export default App;
