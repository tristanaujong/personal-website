import { Link } from 'react-router-dom';
import '../../App.css';
import '../../pages/gym-page';

function Header() {
    return (
      <div class="bg-white flex justify-center p-3.5 fixed top-0 w-full text-2xl font-sfprodisplaythin">
        <nav class="space-x-10">
            <Link to="/" class="hover:underline">
                Home
            </Link>
            <Link to="/gym" class="hover:underline">
                Gym
            </Link>
            <Link to="/cars" class="hover:underline">
                Cars
            </Link>
            <Link to="/" class="hover:underline">
                More
            </Link>
        </nav>
      </div>
    );
};

export default Header;