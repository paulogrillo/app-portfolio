import HardSkils from './HardSkils'
import SoftSkils from './SoftSkils'
import FaixaHardSkil from '../partials/FaixaHardSkills'


export default function Skills(){
    return(
        <div>
              <FaixaHardSkil />
        <div className="w-full h-60 rounded-md my-6 flex justify-center ">
          <img className="animate-pulse  w-96 rounded-lg opacity-60 hover:opacity-80 transition duration-500 " src="/skills.jpg" alt=""/>
        </div>
        <HardSkils />
        <SoftSkils />
        </div>
    )
}