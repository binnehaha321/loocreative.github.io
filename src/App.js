import GlobalStyle from './globalStyles';
import React, {Component} from 'react';
import Navbar from './Components/Navbar/Navbar';
import MainBanner from './Components/MainBanner/MainBanner';
import IntroductionBg from './Components/IntroductionBg/IntroductionBg';
import BestProduct from './Components/BestProduct/BestProduct';
import Main from './Components/Main/Main';
import BrandStory from './Components/BrandStory/BrandStory';
import HappendIssue from './Components/HappendIssue/HappendIssue';


function App() {
  return (
    <>
        <GlobalStyle/>
        <Navbar />
        <MainBanner />
        <IntroductionBg />
        <BestProduct />
        <Main />
        <BrandStory />
        <HappendIssue />
   </>
  );
}

export default App;

// class App extends Component {
//   render () {
//     return (
//       <>
//         <GlobalStyle/>
//             <NavStyle>
//                 <Navbar />
//             </NavStyle>
//       </>
//     );
//   }
// }

// export default App;