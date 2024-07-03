import React from 'react'
import '../Assets/Styles/Nav.css'
import dot from '../Assets/Images/dot.svg'

export const Navbar = () => {
    return (
        <div className='header'>
            <ul className="horiz">
                <li><a href='https://mail.google.com/mail/u/0/'>Gmail</a></li>
                <li><a href='https://www.google.com/imghp?hl=en&ogbl'>Images</a></li>
                <div className='svg'>
                    <div className='dot'>
                        <img src={dot} width="28px" height="28px" alt="ping" />
                        <span className="tooltiptext">Google apps</span>
                    </div>

                    <div className="gb_Vd">
                        <div className="gb_f">
                            <a
                                className="gb_d gb_Ja gb_K"
                                aria-label="Google Account: Rishi (rishiprasanth575@gmail.com)"
                                href="https://accounts.google.com/SignOutOptions?hl=en&amp;continue=https://www.google.com/&amp;ec=GBRAmgQ"
                                tabIndex="0"
                                role="button"
                                aria-expanded="false"
                            >
                                <img
                                    className="gb_p gbii"
                                    src="https://lh3.googleusercontent.com/ogw/AF2bZygkDwWA_m9C90doYcAt-YYPIjhz_o6OnB2hu6TYf5ypHFg=s32-c-mo"
                                    srcSet="https://lh3.googleusercontent.com/ogw/AF2bZygkDwWA_m9C90doYcAt-YYPIjhz_o6OnB2hu6TYf5ypHFg=s32-c-mo 1x, https://lh3.googleusercontent.com/ogw/AF2bZygkDwWA_m9C90doYcAt-YYPIjhz_o6OnB2hu6TYf5ypHFg=s64-c-mo 2x"
                                    alt=""
                                    aria-hidden="true"
                                    data-noaft=""
                                    data-csiid="TWB6Zty6Lejf2roPv4mykAE_2"
                                    data-atf="1"
                                />
                            </a>
                        </div>
                    </div>
                </div>

            </ul>
        </div>
    )
}
export default Navbar;
