import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Container from '../Container/Container';
import LogoWhite from '../common/LogoWhite';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="relative mt-14 bg-primary text-white rounded-tr-4xl rounded-tl-4xl">
      <div className="border-t border-white/10" />
      <Container>
        {/* Main footer */}
        <div className="footer p-10 md:footer-horizontal items-start gap-10">
          {/* About */}
          <aside className="max-w-xs space-y-3">
            <LogoWhite />
            <p className="text-sm text-neutral">
              EduBridge is a trusted tuition platform connecting students with qualified tutors — where trust shapes learning.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/20 hover:shadow-[0_10px_30px_rgba(36,76,152,0.35)] transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/20 hover:shadow-[0_10px_30px_rgba(36,76,152,0.35)] transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/20 hover:shadow-[0_10px_30px_rgba(36,76,152,0.35)] transition"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white/20 hover:shadow-[0_10px_30px_rgba(36,76,152,0.35)] transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </aside>

          {/* Links */}
          <nav>
            <h6 className="footer-title text-white/90 tracking-wide">Services</h6>
            <Link to="/tutors" className="link link-hover text-white/65 hover:text-white transition">
              Tutors
            </Link>
            <Link to="/tuitions" className="link link-hover text-white/65 hover:text-white transition">
              Tuition
            </Link>
            <Link to="/dashboard" className="link link-hover text-white/65 hover:text-white transition">
              Dashboard
            </Link>
          </nav>

          <nav>
            <h6 className="footer-title text-white/90 tracking-wide">Company</h6>
            <Link to="/about-edubridge" className="link link-hover text-white/65 hover:text-white transition">
              About Us
            </Link>
            <Link to="/contact" className="link link-hover text-white/65 hover:text-white transition">
              Contact
            </Link>
            <Link to="/faq" className="link link-hover text-white/65 hover:text-white transition">
              FAQ
            </Link>
          </nav>

          <nav>
            <h6 className="footer-title text-white/90 tracking-wide">Legal</h6>
            <a className="link link-hover text-white/65 hover:text-white transition">Terms of use</a>
            <a className="link link-hover text-white/65 hover:text-white transition">Privacy policy</a>
            <a className="link link-hover text-white/65 hover:text-white transition">Cookie policy</a>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Copyright */}
        <div className="py-5 text-center text-xs text-white/55">© {new Date().getFullYear()} EduBridge. All rights reserved.</div>
      </Container>
    </footer>
  );
};

export default Footer;
