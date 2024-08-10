import { Facebook, Twitter } from 'lucide-react'
import '@/assets/css/Footer.css'

const Footer = () => {
  return (
    <div className='bg-background mt-10'>
      <form>
        <h3 className="foot text-foreground font-serif font-bold">FREE TRAINING FOR 2 DAYS*</h3>
      </form>
      <form className='ali'>
        <form className='foot1  text-background'>

        </form>

        <form className='foot1  text-background'>

        </form>
        <form className='foot1  text-background'>

        </form>

        <form className='foot1 text-background'>

        </form>

        <form className='foot1 text-background '>

        </form>
      </form>

      <form className='ali text-foreground font-bold font-serif'>
        <form className="foot2">
          <ul>
            <li>Privacy & <br />Cookies</li>
          </ul>
        </form>
        <form className="foot2 text-foreground">
          <ul>
            <li>Terms And<br /> Conditions</li>
          </ul>
        </form>
        <form className="foot2 text-foreground">
          <ul>
            <li>Sale Terms & <br />Conditions</li>
          </ul>
        </form>
        <form className="foot2 text-foreground">
          <ul>
            <li>Delivery <br />Policy</li>
          </ul>
        </form>
        <form className="foot2 text-foreground">
          <ul>
            <li>Return/Refunds<br /> Policy</li>
          </ul>
        </form>
        <form className="foot2 text-foreground">
          <ul>
            <li>Fees & Payment <br />  Policy</li>
          </ul>
        </form>
        <form className="foot3">
          <ul>
            {/* <li><a href='https://www.facebook.com/Hamleys.IN/'><Rock sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /></a></li>
                        <li><a href='https://www.instagram.com/hamleys_india/'><Insta sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /></a></li>
                        <li><a href='https://twitter.com/hamleys_india'><Twiter sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /></a></li>
                        <li><a href='https://www.youtube.com/channel/UCt7vrYvbxP-A2JztZrLaJ4Q'><Youtube sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /></a></li> */}
            <div className='flex flex-row ml-10 gap-5'>
              <a href='#' target='_blank' className='h-8 w-8 rounded-md text-primary hover:bg-primary/50 hover:text-background flex justify-center items-center'>
                <Facebook className='h-6 w-6' />
              </a>
              <a href='#' target='_blank' className='h-8 w-8 rounded-md text-primary hover:bg-primary/50 hover:text-background flex justify-center items-center'>
                <Twitter className='h-6 w-6' />
              </a>
              {/* <ModeToggle/> */}
            </div>
          </ul>
        </form>
      </form>
    </div>
  )
}

export default Footer