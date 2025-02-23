
import { faBars, faCar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "@inertiajs/inertia-react"
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons"
const Topbar = ({ handleShowMenuTitle, handleShowLogout, logMenuStatus, username }) => {
    return (
        <div className="flex w-full items-center h-full">
            <div className="flex-grow mr-2 ">
                <div className="flex gap-4">
                    <div>
                        <FontAwesomeIcon icon={faBars} className="text-xl bold cursor-pointer" onClick={handleShowMenuTitle} />
                    </div>
                </div>
            </div>
            <div className="mr-6 ml-20 text-large">
                <div >
                    <span className="cursor-pointer text-lg" onClick={handleShowLogout}>
                        <FontAwesomeIcon icon={logMenuStatus ? faCaretUp : faCaretDown} /> {username}
                    </span>
                </div>
                {logMenuStatus ?
                    <div className="relative">
                        <div className="absolute w-full bg-green-100 rounded z-10">
                            <Link
                                as="div"
                                href="/get-profile"
                                className="p-2 flex justify-center items-center cursor-pointer hover:bg-teal-500 hover:text-white rounded">
                                <div className="text-lg cursor-pointer">
                                    Profile
                                </div>
                            </Link>
                            <Link
                                as="div"
                                href="/logout"
                                method="post"
                                className="p-2 flex justify-center items-center cursor-pointer hover:bg-teal-500 hover:text-white rounded">
                                <div className="text-lg cursor-pointer">
                                    Log Out
                                </div>
                            </Link>
                        </div>
                    </div>
                    : ''
                }
            </div>
        </div >
    )
}

export default Topbar
