import { UserData } from '@/interfaces/Iauth';
import Image  from 'next/image';

interface IheaderProps{
    user:UserData
}
const Header = ({user}:IheaderProps) => {
    return ( 
        <header className="p-4">
            <Image src="/logo.png" alt="logo do PizzApp" />
            <nav>
                <ul>
                    <li>Cadastrar usuario</li>
                    <li>Cadastrar categoria</li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;