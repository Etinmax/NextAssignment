

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Users', href: '/users' },
    { name: 'Sign Up', href: '/signup' },
];

const Header = () => (
    <header style={{ display: 'flex', alignItems: 'space-between', padding: '1rem', background: '#f5f5f5' }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem', marginRight: '48rem' }}>
            <a href="/" style={{ height: '40px', verticalAlign: 'middle', textDecoration: 'none', color: 'inherit' }}>
                <p>Next Assignment</p>
            </a>
        </div>
        <nav>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 ,marginRight: '0'}}>
                {navItems.map(item => (
                    <li key={item.name} style={{ margin: '0 1rem' ,marginRight: '0'}}>
                        <a href={item.href} style={{ textDecoration: 'none', color: '#333' }}>
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
);

export default Header;
