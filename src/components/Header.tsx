import Image  from 'next/image';
const Header = () => {
    return ( 
        <header className="p-4">
            <Image src="/logo.png" alt="logo do PizzApp" />
            <nav>
                
            </nav>
        </header>
     );
}
 
export default Header;