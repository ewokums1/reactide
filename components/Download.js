import macLogo from '../assets/images/apple-logo.png';
import windowsLogo from '../assets/images/windows-logo.png';
import linuxLogo from '../assets/images/linux-logo.png'

export default function Download() {
  return (
    <div className='dlContainer'>

        <h3>Download</h3>
      <div className='download'>
        <section className='mac'>
          <a href='https://github.com/reactide/reactide/releases/download/v3.0-alpha/Reactide-3.0.0.dmg'>
            <img src={macLogo} className='dlLogo' />
            <p className='dlp'>macOS 10.10+</p>
          </a>
        </section>

        <section className='windows'>
          <a href='https://github.com/reactide/reactide'>
            <img src={windowsLogo} className='dlLogo' />
            <p className='dlp'>Windows 7, 8, 10</p>
          </a>
        </section>
        
        <section className='linux'>
          <a href='https://github.com/reactide/reactide'>
            <img src={linuxLogo} className='dlLogo' />
            <p className='dlp'>Debian, Ubuntu</p>
          </a>
        </section>
        
      </div>
    </div>
  )
}