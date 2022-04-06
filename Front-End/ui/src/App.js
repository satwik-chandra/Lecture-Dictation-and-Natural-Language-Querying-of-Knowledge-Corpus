import './App.css';
import Search from './Components/Search.js'
import LecturePage from './Components/LecturePage';
import Title from './Components/Title.js'
import LcaVid from './videos/Lecture_3_LCA.mp4'
import AgileVid from './videos/Lecture_7_Agile_Development.mp4'
import DagVid from './videos/Lecture_11_DAG_Challenge.mp4'

  const HomePage = () => {
    
    return (
          <div className="Container">
            <Search />
          </div>
        )
      };

  const Header = () => {
    return (
      <div className="header">
        <Title />
      </div>
    )
  }

  const LCA = () => {
    return (
      <div>
        <LecturePage suggestedQ ='' title ='LCA' video={LcaVid} videoName='Lecture 1 Introduction B' />
      </div>
    )
  };

  const Agile = () => {
    return (
      <div>
        <LecturePage suggestedQ ='' title ='Agile' video={AgileVid} videoName='Lecture 7 Agile Development' />
      </div>
    )
  };

  const DAG = () => {
    return (
      <div>
        <LecturePage suggestedQ ='' title ='DAG' video={DagVid} videoName='Lecture 1 Introduction A' />
      </div>
    )
  };

  export {DAG, Agile, LCA, HomePage, Header};

