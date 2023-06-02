import { FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <>
    <br></br><br></br><br></br><br></br>
    <footer>
      <small>
        &copy; {new Date().getFullYear()} made with{' '}
        <FaHeart style={{ color: 'red' }} /> by -{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://granada.com.gt/es/"
        >
          Gunjan kumar
        </a>
      </small>
    </footer>
    </>
  );
}

export default Footer;
