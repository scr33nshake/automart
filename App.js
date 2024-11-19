import { Container } from 'react-bootstrap'

import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      
      <main>
        <Container>
          <Header />
        </Container>
      </main>
     
      <Footer />
    </div>
  );
}

export default App;
