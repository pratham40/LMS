import {BsFacebook,BsInstagram,BsLinkedin,BsTwitterX} from "react-icons/bs"

function Footer() {
    const currentDate=new Date()
    const year=currentDate.getFullYear()
  return (
    <>
        <footer className="relative bottom-0 left-0 h-[10vh] flex flex-col sm:flex-row items-center justify-between text-white bg-gray-60000 py-5 sm:px-5">
            <section className="text-lg">
                Copyright {year} | All Rights Reserved
            </section>
            <section className="flex justify-center items-center gap-5 text-2xl text-white">
                <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
                    <BsFacebook/>
                </a>
                <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
                    <BsInstagram/>
                </a>
                <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
                    <BsLinkedin/>
                </a>
                <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
                    <BsTwitterX/>
                </a>
            </section>
        </footer>
    </>
  )
}

export default Footer
