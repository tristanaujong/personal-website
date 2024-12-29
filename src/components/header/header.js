import { Link } from 'react-router-dom';
import '../../App.css';
import '../../pages/gym-page';

function Header() {
    return (
      <div class="flex justify-center p-3.5 fixed top-0 w-full text-xl font-sfprodisplaythin">
        <nav class="space-x-10">
            <a href="/" class="hover:underline">
                Home
            </a>
            <a href="/gym" class="hover:underline">
                Gym
            </a>
            <a href="/cars" class="hover:underline">
                Cars
            </a>
            <a href="https://www.google.com/" class="hover:underline">
                More
            </a>
        </nav>
      </div>
    );
};

export default Header;