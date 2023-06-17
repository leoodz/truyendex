import Image from "next/image"
import NetTromLogo from "../../assets/nettrom-logo.png"
import Link from "next/link"
import Iconify from "../iconify"

export default function TopNav() {
    return (
        <nav
            id="topnav"
            className="defaultscroll is-sticky bg-white dark:bg-slate-900"
        >
            <div className="container">
                {/* Logo container*/}
                <Link className="logo pl-0" href={"/"}>
                    <Image
                        src={NetTromLogo}
                        className="hidden dark:inline-block"
                        alt=""
                    />
                </Link>
                {/* End Logo container*/}
                <div className="menu-extras">
                    <div className="menu-item">
                        {/* Mobile menu toggle*/}
                        <a className="navbar-toggle" id="isToggle">
                            <div className="lines">
                                <span />
                                <span />
                                <span />
                            </div>
                        </a>
                        {/* End mobile menu toggle*/}
                    </div>
                </div>
                {/*Login button Start*/}
                <ul className="buy-button list-none mb-0">
                    <li className="inline mb-0">
                        <a
                            href="https://www.facebook.com/Zennomi"
                            target="_blank"
                            className="btn btn-icon rounded-full bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white"
                        >
                            <Iconify icon="eva:facebook-fill" className="h-4 w-4" />
                        </a>
                    </li>
                    <li className="inline pl-1 mb-0">
                        <a
                            href="https://github.com/zennomi/truyendex"
                            target="_blank"
                            className="btn btn-icon rounded-full bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white"
                        >
                            <Iconify icon="eva:github-fill" className="h-4 w-4" />
                        </a>
                    </li>
                </ul>
                {/*Login button End*/}
                <div id="navigation">
                    {/* Navigation Menu*/}
                    <ul className="navigation-menu">
                        <li>
                            <Link href="/" className="sub-menu-item">
                                Trang chủ
                            </Link>
                        </li>
                    </ul>
                    {/*end navigation menu*/}
                </div>
                {/*end navigation*/}
            </div>
            {/*end container*/}
        </nav>
    )
}
