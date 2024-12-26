import '../../App.css';
import '../../pages/gym-page';

function Header() {
    return (
      <div class="flex justify-center p-3.5 fixed top-0 w-full text-xl font-sfprodisplaythin">
        <nav class="space-x-10">
            <Link to="/gym-page" class="hover:underline">
                Home
            </Link>
            <Link to="gym-page.js" class="hover:underline">
                Gym
            </Link>
            <Link to="https://www.google.com/" class="hover:underline">
                Cars
            </Link>
            <Link to="https://www.google.com/" class="hover:underline">
                Stuff
            </Link>
        </nav>
      </div>
    );
};

export default Header;