import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai"

const Header = () => {
  return(

        <div className='my-4 z-20 md:hidden'>
          <ul className=" flex flex-row items-center gap-3">
        <li>
          <a href="https://github.com/glaukopacheco" target="_blank">
            <AiOutlineGithub
              className="cursor-pointer text-white transition-transform hover:-translate-y-1 hover:text-[#F7AB0A]"
              size={20}
            />
          </a>
          </li>
          <li>
          <a
            href="https://twitter.com/glaukopacheco"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineTwitter
              className="cursor-pointer text-white transition-transform hover:-translate-y-1 hover:text-[#F7AB0A]"
              size={20}
            />
          </a>
          </li>
          <li>
          <a
            href="https://www.linkedin.com/in/glaukopacheco/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin
              className="cursor-pointer text-white  transition-transform hover:-translate-y-1 hover:text-[#F7AB0A]"
              size={20}
            />
          </a>
          </li>
          <li>
          <a
            href="https://www.youtube.com/@glaukopacheco"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineYoutube
              className="cursor-pointer text-white  transition-transform hover:-translate-y-1 hover:text-[#F7AB0A]"
              size={20}
            />
          </a>
          </li>
          </ul>
        </div>

  )
};

export default Header;