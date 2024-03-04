import Hero from './Hero'
import DreamTeam from './DreamTeam'
import FarGalaxy from './FarGalaxy'
// import { withHeroId } from '../hoc/withHeroId';
// import { navItems } from '../utils/constants';
import { withErrorPage } from '../hoc/withErrorPage';

const Home = () => {
    

    return (
        <main className="clearfix">
            <Hero />
            <DreamTeam />
            <FarGalaxy />
        </main>
    )
}

export default withErrorPage(Home, '/'); 