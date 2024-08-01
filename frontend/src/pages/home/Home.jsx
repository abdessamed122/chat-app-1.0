import Sidebar from "../../components/sidebar/Sidebar"
import MessageContainer from "../../components/messages/MessageContainer"
import Footer from "../../components/Footer"

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40'>
        <Sidebar />
        <MessageContainer />
      </div>
      <Footer />
    </div>
  )
}

export default Home
