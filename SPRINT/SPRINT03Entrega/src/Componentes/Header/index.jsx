import { Link } from 'react-router-dom';

function Header({menuItems }) {
  return (
    <header>
      
      <script async src="https://app2.weatherwidget.org/js/?id=ww_ae1c59f280a9d"></script>
      <div className="head">
        <img className='logoICR' src='https://play-lh.googleusercontent.com/CJrMt-pFfUWLSv3BHm0QRnBgTGT6XgBTeOT7JrWtgLmCMV8X2C9J6QJh3H1kFKPdhRY' />
        <nav>
          <ul>
            {menuItems.map((menuItem, index) => (
              <li key={index}>
                <Link to={menuItem.link}>{menuItem.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <img src="https://icr.usp.br/wp-content/uploads/2017/11/logos_icr_parceiros.png" />
      </div>
    </header >
  );
}

export default Header;
