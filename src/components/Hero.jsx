import logo from '../assets/logo.png';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
          <img src={logo} alt='summarizer_logo' className='w-20 object-contain'/>

          <button
              type='button'
              onClick={() => window.open("https://github.com/")}
              className='black_btn'
          >
            GitHub
          </button>
        </nav>

        <h1 className='head_text'>AI Summarizer</h1>
        <h1 className='blue_gradient'>Powered by OpenAI GPT-4</h1>

        <h2 className='desc'>
          Transform the way you gather information with this article summarization tool powered by AI. Condense lengthy articles into clear and concise summaries.
        </h2>
    </header>
  )
}

export default Hero