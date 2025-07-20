import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';


function App() {
   return (
    <>
      <WelcomeMessage />
      <Header /> 
      <MainContent />
      <div className="App">
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
    </div>
      <Footer />
    </>
  )
}

export default App
