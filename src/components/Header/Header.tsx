import ToggleTheme from '../ToggleTheme/ToggleTheme';

interface HeaderProps {
  user?: { name: string };
}

const Header = ({ user }: HeaderProps) => {
  return (
    <div className="flex h-20 items-center justify-between bg-alura-200 px-5 dark:bg-dark-200 sm:m-5 sm:rounded-xl">
      <span className="text-gray-100">Hello {user?.name || 'user'} </span>
      <h1 className="text-xl text-gray-100 sm:hover:text-2xl">
        Luis Oliveira Articles
      </h1>
      <ToggleTheme />
    </div>
  );
};

export default Header;
